import React, { useState, useMemo } from 'react'
import { ExternalLink, Zap } from 'lucide-react'
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Web')
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 })

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => project.category === selectedCategory)
  }, [selectedCategory])

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'medium':
        return 'md:col-span-2 md:row-span-1'
      case 'small':
      default:
        return 'md:col-span-1 md:row-span-1'
    }
  }

  return (
    <section
      id="projects"
      className="py-10 md:py-16 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-dark/5 rounded-full blur-3xl animate-float-up" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 md:mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 animate-slide-down text-glow">
            Nuestros Proyectos
          </h2>
          <p className="text-neutral-300 text-sm md:text-base max-w-3xl mx-auto">
            Soluciones reales que transforman negocios. Apps, webs y automatizaciones que generan impacto.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap gap-2 sm:gap-3 justify-center">
          {PROJECT_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-accent to-accent-softer text-white shadow-xl shadow-accent/30 border-t-2 border-l-2 border-white/40 border-b-2 border-r-2 border-accent-light/20'
                  : 'bg-transparent border-2 border-accent-light text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bento Box Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 transition-all duration-700 ${
            gridVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-primary-800 border-2 border-accent-light/20 rounded-2xl overflow-hidden hover:border-accent-light/70 hover:shadow-2xl hover:shadow-accent-light/40 transition-[border-color,box-shadow] duration-300 animate-scale-in ${getGridClass(
                  project.size
                )}`}
                style={{
                  animationDelay: gridVisible ? `${index * 0.1}s` : '0s',
                  minHeight: project.size === 'large' ? '500px' : project.size === 'medium' ? '280px' : '320px',
                }}
              >
                {/* Project Image/Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800">
                  {/* Placeholder gradient - Replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-dark/10" />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/90 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
                  {/* Project Info */}
                  <div>
                    <h3 className={`font-display font-bold text-white mb-2 ${
                      project.size === 'large' ? 'text-xl md:text-2xl pr-20' :
                      project.size === 'medium' ? 'text-lg md:text-xl pr-20' :
                      'text-base md:text-lg pr-16'
                    }`}>
                      {project.title}
                    </h3>

                    <p className="text-neutral-100 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary-950 text-white px-2 py-1 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-primary-950 text-white px-2 py-1 rounded-lg">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Impact */}
                    {project.impact && (
                      <div className="flex items-center gap-2 text-neutral-300 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        <Zap size={16} />
                        <span>{project.impact}</span>
                      </div>
                    )}
                  </div>

                  {/* View More Link (appears on hover) */}
                  {project.link && (
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-white bg-accent/80 hover:bg-accent px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Ver más <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-neutral-400 text-lg">
                No hay proyectos en esta categoría
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
