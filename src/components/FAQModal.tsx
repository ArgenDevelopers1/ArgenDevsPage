import React, { useState, useMemo, useEffect } from "react"
import { Search, ChevronDown, X } from "lucide-react"
import { FAQ_ITEMS, FAQ_CATEGORIES, type FAQItem } from "../data/faq"

interface FAQModalProps {
  isOpen: boolean
  onClose: () => void
}

export const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
  const [expandedId, setExpandedId] = useState<string | null>(null)

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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
    }
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-primary-900 border-2 border-accent-light/20 rounded-3xl shadow-2xl shadow-accent-light/20 overflow-hidden"
        style={{ animation: 'scaleIn 0.3s ease-out' }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-dark/10 rounded-full blur-3xl animate-float-up" />
        </div>

        {/* Header */}
        <div className="relative z-10 bg-primary-800/50 backdrop-blur-sm border-b border-accent-light/20 px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white text-glow">
              Preguntas Frecuentes
            </h2>
            <p className="text-neutral-300 text-sm mt-1">
              Resuelve tus dudas sobre nuestros servicios
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-accent/10 transition-colors text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10 overflow-y-auto max-h-[calc(90vh-120px)] px-6 py-6">
          {/* Search Bar */}
          <div className="mb-6">
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
          <div className="mb-6 flex flex-wrap gap-2 justify-center">
            {FAQ_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-accent to-accent-dark text-white shadow-lg shadow-accent-light/40"
                    : "bg-primary-800 text-neutral-300 border-2 border-accent-light/20 hover:border-accent-light/70 hover:text-white hover:shadow-lg hover:shadow-accent-light/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQ.length > 0 ? (
              filteredFAQ.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-primary-800 border-2 border-accent-light/20 rounded-2xl overflow-hidden hover:border-accent-light/70 transition-all duration-300 hover:shadow-xl hover:shadow-accent-light/40 hover:bg-accent/5"
                >
                  <button
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between p-5 hover:bg-accent/10 transition-colors"
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
                    <div className="border-t border-accent-light/20 px-5 py-4 bg-primary-800/50">
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
      </div>
    </div>
  )
}
