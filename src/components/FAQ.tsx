import React, { useState, useMemo } from "react"
import { Search, ChevronDown } from "lucide-react"
import { FAQ_ITEMS, FAQ_CATEGORIES, type FAQItem } from "../data/faq"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 })

  const filteredFAQ = useMemo(() => {
    let filtered = FAQ_ITEMS

    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        item =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [searchQuery, selectedCategory])

  return (
    <section id="faq" className="py-10 md:py-16 bg-primary-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-dark/5 rounded-full blur-3xl animate-bounce-slow" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 animate-slide-down text-glow">
            Preguntas Frecuentes
          </h2>
          <p className="text-neutral-300 text-sm md:text-base">
            Resuelve tus dudas sobre nuestros servicios y proceso de trabajo
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent" size={20} />
            <input
              type="text"
              placeholder="Busca una pregunta..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-primary-800 border-2 border-accent-light/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-neutral-400 transition-all focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent-light/70 hover:border-accent-light/40"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {FAQ_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-accent to-accent-softer text-white shadow-lg shadow-accent-light/50"
                  : "bg-primary-800 text-neutral-300 border-2 border-accent-light/20 hover:border-accent-light/70 hover:text-white hover:shadow-lg hover:shadow-accent-light/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div
          ref={contentRef}
          className={`space-y-4 transition-all duration-700 ${
            contentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredFAQ.length > 0 ? (
            filteredFAQ.map((item, index) => (
              <div
                key={item.id}
                className="group bg-primary-800 border-2 border-accent-light/20 rounded-2xl overflow-hidden hover:border-accent-light/80 transition-all duration-300 hover:shadow-xl hover:shadow-accent-light/40 animate-scale-in hover:bg-accent/5"
                style={{
                  animationDelay: contentVisible ? `${index * 0.05}s` : "0s",
                }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-accent/10 transition-colors"
                >
                  <div className="text-left flex-1">
                    <h3 className="font-display text-base md:text-lg font-bold text-white">
                      {item.question}
                    </h3>
                    <p className="text-xs md:text-sm text-accent-light mt-1">
                      {item.category}
                    </p>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`ml-4 text-accent flex-shrink-0 transition-transform duration-300 ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === item.id && (
                  <div className="border-t border-accent-light/20 px-5 md:px-6 py-4 md:py-5 bg-primary-800/50">
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">
                No encontramos preguntas que coincidan con tu búsqueda
              </p>
              <p className="text-neutral-500 text-sm mt-2">
                Intenta con otras palabras clave
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
