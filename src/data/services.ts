import { Service } from '../types'

export const SERVICES: Service[] = [
  {
    id: 'automation',
    title: 'Automatizaciones',
    description:
      'Hacemos que tu negocio trabaje solo. Conectamos tus herramientas (correo, CRM, planillas, etc.) para que las tareas repetitivas se hagan automáticamente, sin que tengas que mover un dedo.',
    icon: 'Zap',
    useCases: [
      'Envío automático de correos y notificaciones',
      'Sincronización de datos entre plataformas',
      'Generación automática de reportes',
      'Alertas y bots de monitoreo 24/7',
    ],
  },
  {
    id: 'mobile',
    title: 'Apps Móviles',
    description:
      'Llevamos tu negocio al bolsillo de tus clientes. Creamos aplicaciones para celular (iPhone y Android) que son rápidas, fáciles de usar y que generan una experiencia memorable.',
    icon: 'Smartphone',
    useCases: [
      'App propia con tu marca para iOS y Android',
      'Notificaciones push para fidelizar clientes',
      'Integración con pagos, mapas y redes sociales',
      'Versión móvil de tu plataforma web',
    ],
  },
  {
    id: 'saas',
    title: 'Herramientas Internas',
    description:
      'Creamos el "panel de control" de tu empresa. Un sistema hecho a medida para que vos y tu equipo gestionen todo desde un solo lugar: clientes, tareas, inventario, métricas y más.',
    icon: 'BarChart3',
    useCases: [
      'Panel de administración para tu equipo',
      'Seguimiento de clientes, ventas o proyectos',
      'Reportes y métricas en tiempo real',
      'Reemplaza planillas de Excel desorganizadas',
    ],
  },
  {
    id: 'fullstack',
    title: 'Plataformas Web',
    description:
      'Construimos plataformas digitales completas orientadas a tus usuarios o clientes. Desde el sitio que ellos ven hasta toda la lógica que lo hace funcionar detrás de escena.',
    icon: 'Layers',
    useCases: [
      'Marketplaces y tiendas online',
      'Plataformas con registro de usuarios',
      'Portales B2B o B2C a medida',
      'Startups y productos digitales desde cero',
    ],
  },
]
