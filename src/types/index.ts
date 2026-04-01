export interface Service {
  id: string
  title: string
  description: string
  icon: string
  useCases: string[]
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
  icon: string
  image: string
  detailedDescription: string
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number | string
  currency: string
  billing: string
  features: string[]
  recommended: boolean
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  message: string
}

export interface ContactFormData {
  name: string
  email: string
  service: string
  message: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  description: string
  category: 'App' | 'Web' | 'Automatización'
  image: string
  video?: string
  technologies: string[]
  impact?: string
  size: 'small' | 'medium' | 'large'
  link?: string
}
