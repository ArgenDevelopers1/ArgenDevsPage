import React, { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../data/testimonials'
import { createAvatarSVG } from '../utils/avatar'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation({ threshold: 0.1 })

  const testimonialsPerView = 3
  const maxIndex = Math.ceil(TESTIMONIALS.length / testimonialsPerView) - 1

  const goToPrevious = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const goToNext = () => {
    setDirection('right')
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)
  }

  const startIndex = currentIndex * testimonialsPerView
  const visibleTestimonials = TESTIMONIALS.slice(
    startIndex,
    startIndex + testimonialsPerView
  )

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('right')
      setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
    }, 8000)

    return () => clearInterval(timer)
  }, [maxIndex])

  return (
    <section
      id="testimonials"
      className="py-12 md:py-20 bg-gradient-to-b from-primary-950 to-primary-900 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-up" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent-dark/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-down text-glow">
            Clientes Satisfechos
          </h2>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Lo que dicen nuestros clientes sobre trabajar con FastSolutions
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={carouselRef}
          className={`relative transition-all duration-700 ${
            carouselVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visibleTestimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`bg-primary-800 border-2 border-accent-light/20 rounded-2xl p-8 hover:border-accent-light/70 transition-all duration-300 hover:shadow-xl hover:shadow-accent-light/40 animate-scale-in group hover-glow relative overflow-hidden stagger-item ${
                    direction === 'left' ? 'animate-slide-right' : 'animate-slide-left'
                  }`}
                  style={{
                    animation: carouselVisible ? undefined : 'none',
                    animationDelay: carouselVisible ? `${idx * 0.1}s` : '0s',
                  }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-accent text-accent group-hover:animate-pulse"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-neutral-200 mb-6 leading-relaxed italic line-clamp-4 group-hover:text-accent-light transition-colors">
                      "{testimonial.message}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-6 border-t border-accent-light/20">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        dangerouslySetInnerHTML={{
                          __html: createAvatarSVG(testimonial.name),
                        }}
                      />
                      <div>
                        <p className="font-display font-bold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-accent-light text-xs font-semibold">
                          {testimonial.role}
                        </p>
                        <p className="text-neutral-400 text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 w-12 h-12 bg-gradient-to-r from-accent to-accent-dark rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-accent/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent z-10 group hover:scale-110"
            aria-label="Testimonial anterior"
          >
            <ChevronLeft size={24} className="group-hover:animate-pulse" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 w-12 h-12 bg-gradient-to-r from-accent to-accent-dark rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-accent/50 transition-all focus:outline-none focus:ring-2 focus:ring-accent z-10"
            aria-label="Testimonial siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: Math.ceil(TESTIMONIALS.length / testimonialsPerView) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                    index === currentIndex
                      ? 'bg-accent-light w-8'
                      : 'bg-accent-light/20 hover:bg-accent-light/60'
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              )
            )}
          </div>

          {/* Slide counter */}
          <div className="text-center mt-8 text-neutral-400 text-sm font-body">
            {currentIndex + 1} de{' '}
            {Math.ceil(TESTIMONIALS.length / testimonialsPerView)}
          </div>
        </div>
      </div>
    </section>
  )
}
