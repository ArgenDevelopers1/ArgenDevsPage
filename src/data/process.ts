import { ProcessStep } from '../types'

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'diagnosis',
    step: 1,
    title: 'Diagnóstico',
    description: 'Análisis profundo de tu negocio y desafíos.',
    detailedDescription:
      'Comenzamos con una inmersión total en tus operaciones. Analizamos tus procesos actuales, identificamos cuellos de botella y detectamos las oportunidades de mayor impacto para la automatización y la mejora tecnológica. Esta fase es clave para asegurar que la solución final esté perfectamente alineada con tus objetivos.',
    icon: 'Microscope',
    image: '/imgs/diagnostico.jpg',
  },
  {
    id: 'proposal',
    step: 2,
    title: 'Propuesta',
    description: 'Arquitectura clara, timeline y presupuesto.',
    detailedDescription:
      'Con un entendimiento claro de tus necesidades, diseñamos una solución a medida. Te presentamos una propuesta técnica detallada que incluye la arquitectura del sistema, un cronograma de hitos realista y un presupuesto transparente. Así, sabes exactamente qué esperar, cuándo y a qué costo.',
    icon: 'FileText',
    image: '/imgs/propuesta.jpg',
  },
  {
    id: 'development',
    step: 3,
    title: 'Desarrollo',
    description: 'Implementación ágil con entregables semanales.',
    detailedDescription:
      'Nuestro equipo de desarrollo da vida a la solución utilizando metodologías ágiles. Trabajamos en sprints cortos, entregando valor de forma incremental cada semana. Mantenemos una comunicación fluida contigo para que seas parte del proceso y el producto final cumpla tus expectativas.',
    icon: 'Hammer',
    image: '/imgs/desarrollo.jpg',
  },
  {
    id: 'deployment',
    step: 4,
    title: 'Despliegue',
    description: 'Puesta en marcha y capacitación de tu equipo.',
    detailedDescription:
      'Llevamos la solución del entorno de pruebas a producción. Nos encargamos de una transición suave, minimizando cualquier disrupción en tu operación. Además, proporcionamos documentación completa y sesiones de capacitación para que tu equipo aproveche al máximo las nuevas herramientas.',
    icon: 'Rocket',
    image: '/imgs/despliegue.jpg',
  },
  {
    id: 'support',
    step: 5,
    title: 'Soporte',
    description: 'Monitoreo, mantenimiento y optimizaciones.',
    detailedDescription:
      'Nuestro compromiso no termina con el lanzamiento. Ofrecemos planes de soporte y mantenimiento para garantizar que tu sistema funcione de manera óptima a largo plazo. Monitoreamos el rendimiento, aplicamos actualizaciones y proponemos optimizaciones continuas para que tu inversión siga generando valor.',
    icon: 'HeartHandshake',
    image: '/imgs/soporte.jpg',
  },
]
