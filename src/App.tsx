import React, { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Pricing } from './components/Pricing'
import { Projects } from './components/Projects'
import { FAQButton } from './components/FAQButton'
import { Cta } from './components/Cta'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
const App: React.FC = () => {
  useEffect(() => {
    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Preload first process image for faster rendering
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = '/imgs/diagnostico.webp'
    link.imageSrcset = '/imgs/diagnostico.webp'
    link.type = 'image/webp'
    document.head.appendChild(link)

    // Fallback PNG preload
    const linkPng = document.createElement('link')
    linkPng.rel = 'preload'
    linkPng.as = 'image'
    linkPng.href = '/imgs/diagnostico.jpg'
    linkPng.type = 'image/jpeg'
    document.head.appendChild(linkPng)
  }, [])

  return (
    <div className="bg-primary-950 text-white overflow-x-hidden relative bg-ambient">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Process />
          <Pricing />
          <Projects />
          <Cta />
          <Contact />
        </main>
        <Footer />
      </div>
      {/* Floating FAQ Button */}
      <FAQButton />
    </div>
  )
}

export default App
