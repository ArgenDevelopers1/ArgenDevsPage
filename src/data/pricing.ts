import { PricingPlan } from '../types'

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'oneshot',
    name: 'Proyecto Puntual',
    description: 'Para automatizaciones y soluciones puntuales bien definidas.',
    price: 'Desde $250.000',
    currency: '$',
    billing: 'Proyecto único',
    features: [
      'Análisis y diseño incluido',
      'Desarrollo completo',
      'Documentación técnica',
      '30 días de soporte gratuito',
      'Ajustes menores incluidos',
    ],
    recommended: false,
  },
  {
    id: 'webapp',
    name: 'Aplicación Web Completa',
    description: 'Para productos web, dashboards o plataformas SaaS desde cero.',
    price: 'Desde $600.000',
    currency: '$',
    billing: 'Proyecto completo',
    features: [
      'Arquitectura fullstack profesional',
      'Frontend React + Backend Flask',
      'Base de datos',
      'Autenticación OAuth2 y JWT',
      '30 días de soporte incluido',
      'Deployment en producción',
    ],
    recommended: true,
  },
  {
    id: 'retainer',
    name: 'Retainer Mensual',
    description: 'Para equipos que necesitan soporte, mejoras y nuevas funcionalidades continuas.',
    price: 'Desde $1.000.000',
    currency: '$',
    billing: 'Mes a mes',
    features: [
      '20-40 horas de trabajo mensual',
      'Prioridad en soporte',
      'Mejoras y optimizaciones',
      'Monitoreo y mantenimiento',
      'Escala según necesidad',
      'Acceso directo al arquitecto técnico',
    ],
    recommended: false,
  },
]
