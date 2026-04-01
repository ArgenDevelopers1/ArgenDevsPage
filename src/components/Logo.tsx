import React from 'react'
import logoImg from '../utils/imgs/LOGO ArgenDevs SIN FONDO GRANDE.png'

interface LogoProps {
  className?: string
  onClick?: () => void
}

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-950 rounded ${className}`}
      aria-label="Volver al inicio"
    >
      <img
        src={logoImg}
        alt="ArgenDevs"
        className="h-20 md:h-25 w-auto"
      />
    </button>
  )
}
