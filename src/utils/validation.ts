/**
 * Validaciones reutilizables para formularios
 */

export const ValidationPatterns = {
  // Solo letras y espacios
  LETTERS_ONLY: /^[a-záéíóúñàèìòùäëïöüâêîôû\s'-]+$/i,
  
  // Email válido
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  
  // Solo números
  NUMBERS_ONLY: /^\d+$/,
  
  // Número de teléfono válido (con formato básico)
  PHONE: /^[\d\s\-\+\(\)]+$/,
  
  // URL válida
  URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  
  // No contiene caracteres peligrosos
  NO_DANGEROUS_CHARS: /^[^<>{}[\];'"`]*$/,
}

/**
 * Valida si un string contiene solo espacios en blanco
 */
export const isEmptyOrWhitespace = (str: string): boolean => {
  return !str || str.trim().length === 0
}

/**
 * Valida la longitud de un string
 */
export const isValidLength = (
  str: string,
  minLength: number,
  maxLength?: number
): boolean => {
  const length = str.length
  if (maxLength) {
    return length >= minLength && length <= maxLength
  }
  return length >= minLength
}

/**
 * Sanitiza un string para prevenir XSS básico
 */
export const sanitizeString = (str: string): string => {
  return str
    .replace(/[<>]/g, '') // Remover ángulos
    .replace(/[`'"]/g, '') // Remover quotes
    .trim()
}

/**
 * Valida un email
 */
export const isValidEmail = (email: string): boolean => {
  return ValidationPatterns.EMAIL.test(email)
}

/**
 * Valida que solo contenga letras y espacios
 */
export const containsOnlyLetters = (str: string): boolean => {
  return ValidationPatterns.LETTERS_ONLY.test(str)
}

/**
 * Valida que no contenga caracteres peligrosos
 */
export const isClean = (str: string): boolean => {
  return ValidationPatterns.NO_DANGEROUS_CHARS.test(str)
}

/**
 * Calcula la fortaleza de una contraseña (si se agrega campo de password)
 */
export const calculatePasswordStrength = (password: string): 'weak' | 'medium' | 'strong' => {
  let strength = 0

  // Longitud
  if (password.length >= 8) strength++
  if (password.length >= 12) strength++

  // Números
  if (/\d/.test(password)) strength++

  // Letras minúsculas y mayúsculas
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++

  // Caracteres especiales
  if (/[^a-zA-Z\d]/.test(password)) strength++

  if (strength <= 2) return 'weak'
  if (strength <= 3) return 'medium'
  return 'strong'
}

/**
 * Genera un mensaje de error amigable basado en el tipo de validación
 */
export const getErrorMessage = (
  field: string,
  type: 'required' | 'min' | 'max' | 'pattern' | 'email' | 'custom',
  value?: number | string
): string => {
  const messages: Record<string, Record<string, string>> = {
    name: {
      required: 'El nombre es requerido',
      min: `El nombre debe tener al menos ${value} caracteres`,
      max: `El nombre no puede exceder ${value} caracteres`,
      pattern: 'El nombre solo puede contener letras, espacios, guiones y apóstrofes',
    },
    email: {
      required: 'El email es requerido',
      email: 'Por favor ingresa un email válido',
      max: `El email no puede exceder ${value} caracteres`,
    },
    message: {
      required: 'El mensaje es requerido',
      min: `El mensaje debe tener al menos ${value} caracteres`,
      max: `El mensaje no puede exceder ${value} caracteres`,
      pattern: 'El mensaje contiene caracteres no permitidos',
    },
  }

  return messages[field]?.[type] || 'Este campo no es válido'
}
