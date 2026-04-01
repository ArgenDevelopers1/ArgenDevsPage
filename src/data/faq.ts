export interface FAQItem {
  id: string
  question: string
  answer: string
  category: "General" | "Servicios" | "Implementación" | "Presupuesto" | "Soporte"
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "general-1",
    question: "¿Cuál es el tiempo de implementación típico?",
    answer: "El tiempo varía según la complejidad del proyecto. En promedio, los proyectos pequeños toman 2-4 semanas, los medianos 1-2 meses, y los grandes pueden extenderse a 3-4 meses. Trabajamos con sprints semanales para entregas incrementales.",
    category: "General"
  },
  {
    id: "general-2",
    question: "¿Qué diferencia hay entre desarrollar y automatizar?",
    answer: "Desarrollar es crear soluciones personalizadas desde cero. Automatizar es optimizar procesos existentes usando herramientas como N8N o Python. A menudo combinamos ambos enfoques para máximo impacto.",
    category: "General"
  },
  {
    id: "servicios-1",
    question: "¿Qué tipos de automatizaciones pueden implementar?",
    answer: "Automatizamos casi cualquier proceso: flujos de datos entre aplicaciones, generación de reportes, gestión de clientes, notificaciones automáticas, procesamiento de forms, sincronización de datos y mucho más.",
    category: "Servicios"
  },
  {
    id: "servicios-2",
    question: "¿Pueden integrarse con mis herramientas actuales?",
    answer: "Sí, tenemos experiencia integrando más de 50 plataformas: Salesforce, Google Workspace, Shopify, Slack, Stripe, y muchas más. Si tu herramienta tiene API, podemos integrarla.",
    category: "Servicios"
  },
  {
    id: "servicios-3",
    question: "¿Desarrollan aplicaciones web completas?",
    answer: "Sí, desarrollamos aplicaciones full-stack usando React en frontend y Python/Node.js/Java en backend. Incluyen bases de datos, autenticación, dashboards y APIs REST.",
    category: "Servicios"
  },
  {
    id: "implementacion-1",
    question: "¿Necesito saber de tecnología para implementar esto?",
    answer: "No. Tu equipo no necesita conocimientos técnicos. Nos encargamos de todo: diseño, implementación, capacitación y soporte. Tu equipo solo necesita usar las herramientas resultantes.",
    category: "Implementación"
  },
  {
    id: "implementacion-2",
    question: "¿Cuál es el proceso de trabajo?",
    answer: "Seguimos 5 fases: 1) Diagnóstico de tus procesos, 2) Propuesta técnica, 3) Desarrollo con entregas semanales, 4) Despliegue y capacitación, 5) Soporte continuo.",
    category: "Implementación"
  },
  {
    id: "presupuesto-1",
    question: "¿Cómo se calcula el presupuesto?",
    answer: "Hacemos un análisis de tu necesidad y presentamos tres opciones: Proyecto Puntual (precio fijo), Aplicación Completa (más grande), o Retainer Mensual (soporte continuo). Cada opción se detalla con desglose de horas y costo.",
    category: "Presupuesto"
  },
  {
    id: "presupuesto-2",
    question: "¿Hay cargos ocultos?",
    answer: "No. Todo es transparente. El presupuesto incluye desarrollo, testing, despliegue y 30 días de soporte gratuito. Cualquier cambio adicional fuera del alcance se cotiza por separado.",
    category: "Presupuesto"
  },
  {
    id: "presupuesto-3",
    question: "¿Puedo ahorrar dinero con automatización?",
    answer: "Sí, en promedio nuestros clientes ahorran entre 20-40 horas semanales en tareas manuales. A nivel de empresa, representa grandes reducciones anuales en costos de operación.",
    category: "Presupuesto"
  },
  {
    id: "soporte-1",
    question: "¿Qué pasa después de que termina el proyecto?",
    answer: "Ofrecemos planes de soporte mensual: desde monitoreo básico hasta mejoras continuas. Puedes contactarnos ante cualquier inconveniente y responderemos a la brevedad.",
    category: "Soporte"
  },
  {
    id: "soporte-2",
    question: "¿Pueden escalar la solución más adelante?",
    answer: "Claro. Diseñamos pensando en escalabilidad. A medida que tu negocio crece, podemos agregar más funcionalidades, usuarios o integraciones sin rehacer todo.",
    category: "Soporte"
  },
]

export const FAQ_CATEGORIES = [
  "Todos",
  "General",
  "Servicios",
  "Implementación",
  "Presupuesto",
  "Soporte"
] as const
