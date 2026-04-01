import { PricingPlan } from '../types'

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'oneshot',
    name: 'Solución Puntual',
    description: 'Ideal para resolver un problema concreto: una automatización, una integración entre herramientas o una funcionalidad específica. El precio se define según el alcance del pedido.',
    price: 'Desde $250.000',
    currency: '$',
    billing: 'Proyecto único',
    features: [
      'Qué tan compleja es la tarea a resolver',
      'Cuántos sistemas o herramientas hay que conectar',
      'Si requiere lógica personalizada o es algo estándar',
      'El tiempo estimado de desarrollo',
      'Incluye 30 días de soporte post-entrega',
    ],
    recommended: false,
  },
  {
    id: 'webapp',
    name: 'Producto Digital',
    description: 'Para construir una plataforma, herramienta interna o app web desde cero. El precio varía según la envergadura del producto que tenés en mente.',
    price: 'Desde $600.000',
    currency: '$',
    billing: 'Proyecto completo',
    features: [
      'Cantidad de pantallas y secciones del producto',
      'Si necesita login, roles o perfiles de usuario',
      'Integraciones externas (pagos, correos, APIs, etc.)',
      'Nivel de complejidad del diseño y la experiencia',
      'Cantidad de funcionalidades o módulos',
      'Incluye puesta en producción y 30 días de soporte',
    ],
    recommended: true,
  },
  {
    id: 'retainer',
    name: 'Socio Tecnológico',
    description: 'Para empresas que quieren un equipo técnico de confianza disponible cada mes: mejoras continuas, soporte y evolución del producto. El precio se ajusta a lo que realmente necesitás.',
    price: 'Desde $1.000.000',
    currency: '$',
    billing: 'Mes a mes',
    features: [
      'Horas mensuales dedicadas (volumen de trabajo)',
      'Cantidad de proyectos o funcionalidades activas',
      'Velocidad de respuesta y disponibilidad requerida',
      'Si incluye mantenimiento, monitoreo o solo desarrollo',
      'Escala o reduce según el ritmo de tu negocio',
    ],
    recommended: false,
  },
]
