import React, { useState } from "react"
import { MessageCircle } from "lucide-react"
import { FAQModal } from "./FAQModal"

export const FAQButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative bg-gradient-to-r from-accent to-accent-softer text-white rounded-full p-4 shadow-2xl hover:shadow-white/40 hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-accent/50"
          aria-label="Abrir preguntas frecuentes"
          style={{ boxShadow: '0 10px 40px rgba(255, 255, 255, 0.3)' }}
        >
          <MessageCircle size={28} className="relative z-10 group-hover:rotate-12 transition-transform" />

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-primary-800 border-2 border-accent-light/20 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            ¿Tienes dudas?
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-primary-800" />
          </div>

          {/* Ping Animation */}
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
        </button>
      </div>

      {/* Modal */}
      <FAQModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
