/**
 * Genera un avatar con iniciales usando colores consistentes
 * @param name Nombre completo
 * @returns SVG con iniciales
 */
export const generateAvatarInitials = (name: string): string => {
  const initials = name
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')
  return initials
}

/**
 * Genera color determinista basado en el nombre
 * @param name Nombre para generar color
 * @returns Color hexadecimal
 */
export const generateColorFromName = (name: string): string => {
  const colors = [
    '#2537A8',
    '#4A6FD8',
    '#272E5C',
    '#1A1F3A',
    '#3A4FBF',
  ]
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return colors[hash % colors.length]
}

/**
 * Crea SVG de avatar con iniciales
 * @param name Nombre del usuario
 * @returns SVG string
 */
export const createAvatarSVG = (name: string): string => {
  const initials = generateAvatarInitials(name)
  const color = generateColorFromName(name)

  return `
    <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="${color}"/>
      <text x="24" y="26" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="white" text-anchor="middle" dominant-baseline="middle">
        ${initials}
      </text>
    </svg>
  `.trim()
}
