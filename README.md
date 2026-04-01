# 🚀 ArgenDevs - Agencia de Desarrollo y Automatización

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**Sitio web moderno y profesional para agencia de desarrollo fullstack, automatizaciones y soluciones empresariales**

[🌐 Ver Demo](#) • [📖 Documentación](#documentación) • [🚀 Deploy Rápido](#deploy-a-vercel) • [📞 Contacto](#contacto)

</div>

---

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Instalación y Setup](#-instalación-y-setup)
- [💻 Desarrollo Local](#-desarrollo-local)
- [🔧 Configuración](#-configuración)
- [📦 Deploy a Vercel](#-deploy-a-vercel)
- [🎨 Personalización](#-personalización)
- [📚 Documentación](#-documentación)
- [🤝 Contribuciones](#-contribuciones)
- [📞 Contacto](#-contacto)

---

## ✨ Características

✅ **Landing Page Responsivo**
- Diseño mobile-first con Tailwind CSS
- Animaciones smooth y efectos visuales premium
- Performante y optimizado para SEO

✅ **Portfolio de Proyectos**
- 9+ proyectos completados (Webs, Apps, Automatizaciones)
- Filtros por categoría dinámicos
- Grid bento layout profesional

✅ **Formulario de Contacto**
- Validación automática con Zod
- Integración con Resend API para emails
- Feedback visual en tiempo real
- WhatsApp y redes sociales integradas

✅ **Secciones Principales**
- Hero con CTA prominente
- Servicios (4 ofertas principales)
- Proceso de trabajo (5 pasos)
- Pricing (3 tiers disponibles)
- FAQ interactivo con modal searchable
- Testimonios de clientes (9 reviews)
- Footer con links y contacto

✅ **Animaciones & UX**
- 30+ animaciones personalizadas
- Scroll reveal con IntersectionObserver
- Hover effects en botones y cards
- Transiciones suaves

✅ **Backend API**
- Endpoint `/api/contact` para formularios
- Handler Python serverless (Vercel compatible)
- Envío de emails automático

---

## 🛠️ Stack Tecnológico

### Frontend
| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **React** | 18.2.0 | UI Framework |
| **TypeScript** | 5.0+ | Type Safety |
| **Tailwind CSS** | 3.3.0 | Styling |
| **Vite** | 4.0+ | Build Tool |
| **Lucide React** | - | Iconos |
| **React Hook Form** | - | Manejo de Formularios |
| **Zod** | - | Validación de Datos |

### Backend
| Tecnología | Uso |
|-----------|-----|
| **Python** | Serverless Functions |
| **Resend API** | Envío de Emails |

### Deployment
| Servicio | Uso |
|---------|-----|
| **Vercel** | Hosting (Frontend + Backend) |
| **GitHub** | Control de Versiones |

---

## 📁 Estructura del Proyecto

```
agency/
├── src/
│   ├── components/              # 14 componentes React
│   │   ├── App.tsx             # Componente raíz
│   │   ├── Header.tsx          # Navegación fija
│   │   ├── Hero.tsx            # Sección landing
│   │   ├── Services.tsx        # 4 servicios
│   │   ├── Process.tsx         # 5 pasos proceso
│   │   ├── Pricing.tsx         # 3 planes precios
│   │   ├── Projects.tsx        # Portfolio filtrable
│   │   ├── FAQ.tsx/FAQModal.tsx# Preguntas frecuentes
│   │   ├── Contact.tsx         # Formulario contacto
│   │   ├── Testimonials.tsx    # Reviews clientes
│   │   ├── Cta.tsx            # Call-to-action
│   │   └── Footer.tsx          # Pie de página
│   │
│   ├── data/                   # Contenido (8 archivos)
│   │   ├── constants.ts        # Config global
│   │   ├── services.ts         # 4 servicios
│   │   ├── projects.ts         # 9 proyectos
│   │   ├── pricing.ts          # 3 planes
│   │   ├── process.ts          # 5 pasos
│   │   ├── faq.ts              # 12 preguntas
│   │   ├── testimonials.ts     # 9 testimonios
│   │   └── navigation.ts       # Links nav
│   │
│   ├── hooks/                  # Custom hooks (2)
│   │   ├── useScrollAnimation.ts
│   │   └── useScrollBehavior.ts
│   │
│   ├── utils/                  # Utilidades
│   │   ├── validation.ts       # Validación
│   │   └── avatar.ts           # Generador avatares
│   │
│   ├── types/
│   │   └── index.ts           # Interfaces TypeScript
│   │
│   ├── index.css              # Global styles + animaciones
│   ├── App.tsx                # Root component
│   └── main.tsx               # Entry point
│
├── api/
│   └── contact.py             # Email handler (Backend)
│
├── public/
│   └── imgs/                  # Imágenes estáticas
│
├── vite.config.ts             # Configuración Vite
├── tailwind.config.js         # Tailwind theme
├── tsconfig.json              # TypeScript config
├── package.json               # Dependencies
└── README.md                  # Este archivo
```

---

## 🚀 Instalación y Setup

### Requisitos Previos
- **Node.js** v16+ y **npm** (o yarn/pnpm)
- **Git** para versionamiento
- Cuenta en **Resend** (opcional, para emails)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/FedeGonzalo16/agency.git
cd agency
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Copiar archivo de referencia
cp .env.example .env.local

# Agregar tus valores (en desarrollo, estos son opcionales)
# En Vercel, agregar en Settings → Environment Variables
RESEND_API_KEY=tu_api_key_aqui
CONTACT_EMAIL=tu_email@tudominio.com
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

Tu app estará disponible en `http://localhost:5173` 🎉

---

## 💻 Desarrollo Local

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Previewear build de producción
npm run preview

# Type checking
npm run type-check

# Linting (si está configurado)
npm run lint
```

### Estructura de Desarrollo

- **Hot Module Replacement (HMR):** Los cambios se reflejan al instante
- **TypeScript Strict Mode:** Verificación de tipos en tiempo de compilación
- **Tailwind CSS:** Estilos en tiempo de compilación (optimizado)

---

## 🔧 Configuración

### Personalizar Brand/Empresa

Editar `src/data/constants.ts`:

```typescript
export const BRAND_NAME = 'Tu Empresa'
export const BRAND_TAGLINE = 'Tu tagline aquí'
export const CONTACT_EMAIL = 'contacto@tuempresa.com'
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/tu-perfil',
  github: 'https://github.com/tu-usuario',
  instagram: 'https://instagram.com/tu-perfil',
}
```

### Agregar/Modificar Proyectos

Editar `src/data/projects.ts`:

```typescript
{
  id: 'proyecto-id',
  title: 'Título del Proyecto',
  description: 'Descripción breve',
  category: 'Webs' | 'Apps' | 'Automatizaciones',
  technologies: ['React', 'Node.js', 'MongoDB'],
  impact: 'Resultado o métrica de impacto',
  size: 'small' | 'medium' | 'large'
}
```

### Cambiar Colores del Tema

Editar `tailwind.config.js`:

```javascript
colors: {
  accent: '#9D4EDD',        // Color principal
  'accent-light': '#E0AAFF',
  'accent-dark': '#7B2CBF',
}
```

### Agregar Nuevas Animaciones

En `tailwind.config.js`:

```javascript
animation: {
  mi-animacion: 'mi-animacion 0.5s ease-in'
},
keyframes: {
  'mi-animacion': {
    '0%': { /* start */ },
    '100%': { /* end */ }
  }
}
```

---

## 📦 Deploy a Vercel

### Opción 1: Desde Vercel Dashboard (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Conéctate con GitHub
3. Selecciona este repositorio
4. Vercel auto-detecta Vite → Click "Deploy"
5. Configurar Environment Variables:
   - `RESEND_API_KEY`: Tu API key de Resend
   - `CONTACT_EMAIL`: Email de contacto

### Opción 2: Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Con variables de entorno
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL
```

### Post-Deploy

✅ Tu app está live en `https://tu-proyecto.vercel.app`
✅ Auto-deploys en cada `git push` a master/main
✅ SSL/HTTPS automático

---

## 🎨 Personalización

### Cambiar Logo

Editar `src/components/Logo.tsx`:

```typescript
// Opción 1: Cambiar texto
<span>Tu Logo</span>

// Opción 2: Usar imagen
<img src="/logo.svg" alt="Logo" width="32" />
```

### Modificar Secciones

Cada sección es un componente independiente en `src/components/`:
- Editar textos, imágenes, colores
- Agregar/quitar secciones en `App.tsx`
- Actualizar datos en `src/data/`

### Agregar Nueva Sección

1. Crear componente: `src/components/MiSeccion.tsx`
2. Usar hook: `const { ref, isVisible } = useScrollAnimation()`
3. Importar en `App.tsx` y agregar al layout

---

## 📚 Documentación

Este proyecto incluye documentación completa:

- **[DOCUMENTATION.md](./DOCUMENTATION.md)** - Guía exhaustiva del proyecto
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Referencia rápida de archivos y funciones

Para desarrolladores nuevos:
1. Leer [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) (5 min)
2. Explorar [DOCUMENTATION.md](./DOCUMENTATION.md) (20 min)
3. Revisar código en `src/` (30 min)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas!

### Flujo de Contribución

1. Fork el repositorio
2. Crear rama: `git checkout -b feature/nueva-feature`
3. Hacer cambios y commit: `git commit -m "Add: nueva feature"`
4. Push: `git push origin feature/nueva-feature`
5. Abrir Pull Request

### Estándares de Código

- ✅ TypeScript strict mode
- ✅ Componentes funcionales con hooks
- ✅ Nombres descriptivos en español/inglés
- ✅ Tailwind CSS para estilos
- ✅ Responsive design mobile-first

---

## 🚀 Roadmap

- [ ] Blog/Artículos
- [ ] Integración con CMS
- [ ] Dark mode toggle
- [ ] i18n (Múltiples idiomas)
- [ ] PWA features
- [ ] Analytics mejorado
- [ ] Newsletter signup
- [ ] Chat widget

---

## 📊 Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| Componentes | 14 |
| Data Files | 8 |
| Animaciones | 30+ |
| Proyectos Portfolio | 9 |
| Líneas de Código (src/) | 2000+ |
| Performance Score | 95+ |
| Lighthouse Score | A+ |

---

## ⚙️ Requisitos de Sistema

```json
{
  "node": ">=16.0.0",
  "npm": ">=8.0.0",
  "navegadores": ["Chrome 90+", "Firefox 88+", "Safari 14+", "Edge 90+"]
}
```

---

## 🔐 Seguridad

- ✅ HTTPS automático en Vercel
- ✅ Validación de formularios con Zod
- ✅ Sanitización de inputs
- ✅ No hay datos sensibles en el código
- ✅ Environment variables protegidas

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Ver [LICENSE](./LICENSE) para más detalles.

---

## 📞 Contacto

**ArgenDevs - Agencia de Desarrollo**

- 📧 Email: [fedeuade2023@gmail.com](mailto:fedeuade2023@gmail.com)
- 💬 WhatsApp: [+54 113 848 2738](https://wa.me/+541138482738)
- 🔗 LinkedIn: [Federico Prieto](https://www.linkedin.com/in/federico-prieto-b60037218/)
- 🐙 GitHub: [@FedeGonzalo16](https://github.com/FedeGonzalo16)
- 📸 Instagram: [@fedee_prieto_](https://www.instagram.com/fedee_prieto_/)

---

## 🙏 Agradecimientos

- [React](https://react.dev) - UI Library
- [Vite](https://vitejs.dev) - Build Tool
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Vercel](https://vercel.com) - Hosting
- [Resend](https://resend.com) - Email Service

---

<div align="center">

**⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub ⭐**

Hecho con ❤️ por [ArgenDevs](https://github.com/FedeGonzalo16)

[Arriba ↑](#argendevs---agencia-de-desarrollo-y-automatización)

</div>
