import { Service } from '../types'

export const SERVICES: Service[] = [
  {
    id: 'automation',
    title: 'Automatizaciones',
    description:
      'Workflows inteligentes con n8n (sin código) y scripts robustos en Python que conectan sistemas, procesan datos y eliminan tareas repetitivas.',
    icon: 'Zap',
    useCases: [
      'Workflows n8n: integraciones entre plataformas',
      'Scripts Python: web scraping y ETL',
      'Bots de monitoreo y notificaciones automáticas',
      'Procesamiento batch y sincronización de datos',
    ],
  },
  {
    id: 'mobile',
    title: 'Desarrollo de Apps Móviles',
    description:
      'Aplicaciones móviles nativas y multiplataforma para iOS y Android, con experiencias fluidas y rendimiento optimizado.',
    icon: 'Smartphone',
    useCases: [
      'Apps nativas iOS y Android',
      'Aplicaciones multiplataforma (React Native)',
      'Integración con APIs y servicios backend',
      'Apps con geolocalización y notificaciones push',
    ],
  },
  {
    id: 'dashboards',
    title: 'Sistemas Internos y Dashboards',
    description:
      'Herramientas de gestión y paneles de control personalizados que centralizan tus datos en una interfaz intuitiva.',
    icon: 'BarChart3',
    useCases: [
      'Dashboards de visualización de KPIs',
      'Gestión de proyectos y tareas',
      'Paneles administrativos internos',
      'Reportes y analytics en tiempo real',
    ],
  },
  {
    id: 'fullstack',
    title: 'Aplicaciones Web Fullstack',
    description:
      'Productos web completos, desde el frontend moderno (React) hasta backends escalables (Flask), listos para tu audiencia.',
    icon: 'Layers',
    useCases: [
      'Plataformas SaaS completas',
      'Aplicaciones B2B y B2C',
      'Marketplaces y e-commerce',
      'Portales de gestión con usuarios',
    ],
  },
]
