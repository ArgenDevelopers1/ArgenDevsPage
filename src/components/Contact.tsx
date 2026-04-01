import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, Linkedin, Instagram } from 'lucide-react'
import { SERVICES } from '../data/services'
import { SOCIAL_LINKS } from '../data/constants'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* Zod Schema for Validation */
const ContactFormSchema = z.object({
  name: z
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre debe tener menos de 100 caracteres')
    .regex(/^[a-záéíóúñàèìòùäëïöüâêîôû\s'-]+$/i, 'Ingresa un nombre válido'),
  email: z
    .string()
    .email('Por favor ingresa un email válido')
    .min(5, 'El email debe tener al menos 5 caracteres')
    .max(100, 'El email no debe exceder 100 caracteres'),
  phone: z
    .string()
    .min(8, 'El teléfono debe tener al menos 8 dígitos')
    .max(20, 'El teléfono no debe exceder 20 caracteres')
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
      'Ingresa un número de teléfono válido (ej: +54 9 11 1234-5678)'),
  service: z
    .string()
    .min(1, 'Por favor selecciona un servicio'),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje debe tener máximo 2000 caracteres'),
})

type ContactFormInputs = z.infer<typeof ContactFormSchema>

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [currentWhatsAppIndex, setCurrentWhatsAppIndex] = useState(0)
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation()

  const whatsappNumbers = [
    '+5491138482738',
    '+541126290810',
  ]

  const currentWhatsAppNumber = whatsappNumbers[currentWhatsAppIndex]

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${currentWhatsAppNumber}?text=Hola%2C%20quisiera%20hablar%20sobre%20un%20proyecto.`
    window.open(url, '_blank')

    // Alternar al siguiente número
    setCurrentWhatsAppIndex((prev) => (prev + 1) % whatsappNumbers.length)
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, dirtyFields },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      setSubmitError(null)
      
      // Enviar los datos a la función serverless de Vercel
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        setSubmitError(result.error || 'Ocurrió un error al enviar el mensaje.')
        console.error('API error:', result)
        return
      }

      console.log('Mensaje enviado exitosamente:', result)
      setIsSubmitted(true)
      reset()
      
      setTimeout(() => setIsSubmitted(false), 6000)
    } catch (error) {
      setSubmitError('Ocurrió un error inesperado. Por favor intenta nuevamente.')
      console.error('Submission error:', error)
    }
  }

  const baseInput =
  "w-full bg-primary-800 border-2 border-accent-light/20 rounded-xl px-4 py-2 text-white placeholder-neutral-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent-light/70 focus:shadow-lg focus:shadow-accent-light/20";

  const inputClass = (field: keyof ContactFormInputs) => {
    if (errors[field]) {
      return `${baseInput} border-red-500 focus:border-red-500 focus:ring-red-500/60`;
    }

    if (dirtyFields[field] && !errors[field]) {
      return `${baseInput} border-neutral-500`;
    }

    return baseInput;
  };

  const renderValidationStatus = (field: keyof ContactFormInputs, successMessage: string) => {
    if (errors[field]) {
      return <p className="text-red-400 text-sm mt-2">{'Error: ' + errors[field]?.message}</p>
    }
    if (dirtyFields[field]) {
      return <p className="text-accent text-sm mt-2">{'✓ ' + successMessage}</p>
    }
    return null
  }
  
  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-primary-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center neon-glow">
              <CheckCircle size={48} className="text-white" />
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-down text-glow">
            ¡Mensaje Enviado!
          </h2>
          <p className="text-neutral-300 text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-12 md:py-16 bg-primary-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-dark opacity-5 rounded-full blur-3xl pointer-events-none animate-bounce-slow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          
          {/* Left Column: Info */}
          <div ref={formRef} className={`md:sticky md:top-24 transition-all duration-700 ${
            formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 animate-slide-down text-glow text-center md:text-left">
              Hablemos
            </h2>
            <p className="text-neutral-300 text-base md:text-lg mb-6 animate-fade-in text-center md:text-left" style={{ animationDelay: '0.2s' }}>
              Completá el formulario o contactanos por nuestras redes. Nos pondremos en contacto en las próximas 24 horas para planificar próximos pasos.
            </p>
            <div className="space-y-4 animate-slide-up flex flex-col items-center md:items-start" style={{ animationDelay: '0.3s' }}>
               <a
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row items-center gap-3 text-white font-bold text-lg group hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-green-600/90 group-hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:shadow-lg group-hover:shadow-green-600/50">
                  <Send size={24} className="group-hover:scale-115 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="group-hover:text-green-400 transition-colors duration-300">Chatear en WhatsApp</span>
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-700 border-glow text-center md:text-left flex flex-col items-center md:items-start">
              <p className="text-neutral-100 text-center md:text-left mb-4 text-sm">
                También nos podés encontrar en:
              </p>
              <div className="flex justify-center md:justify-start gap-4 w-full">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-800 hover:bg-accent border-2 border-accent-light/20 hover:border-accent-light/70 rounded-full flex items-center justify-center text-neutral-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent group hover-glow hover:scale-110 hover:shadow-lg hover:shadow-accent-light/50"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="group-hover:animate-pulse" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-800 hover:bg-accent border-2 border-accent-light/20 hover:border-accent-light/70 rounded-full flex items-center justify-center text-neutral-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent group hover-glow hover:scale-110 hover:shadow-lg hover:shadow-accent-light/50"
                  aria-label="Instagram"
                >
                  <Instagram size={24} className="group-hover:animate-pulse" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className={`bg-primary-800/50 border-2 border-accent-light/20 rounded-3xl p-8 md:p-12 backdrop-blur-lg transition-all duration-700 hover:border-accent-light/50 hover:shadow-2xl hover:shadow-accent-light/20 ${
            formVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
          }`}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <label htmlFor="name" className="block text-white font-semibold mb-1 text-sm">Nombre</label>
                <input {...register('name')} id="name" type="text" placeholder="Tu nombre completo" className={inputClass('name') + ' hover:border-accent/50 transition-colors py-2'} />
                {renderValidationStatus('name', 'Nombre válido')}
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="email" className="block text-white font-semibold mb-1 text-sm">Email</label>
                <input {...register('email')} id="email" type="email" placeholder="tu@email.com" className={inputClass('email') + ' hover:border-accent/50 transition-colors py-2'} />
                {renderValidationStatus('email', 'Email válido')}
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.35s' }}>
                <label htmlFor="phone" className="block text-white font-semibold mb-1 text-sm">Teléfono</label>
                <input {...register('phone')} id="phone" type="tel" placeholder="+54 9 11 1234-5678" className={inputClass('phone') + ' hover:border-accent/50 transition-colors py-2'} />
                {renderValidationStatus('phone', 'Teléfono válido')}
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <label htmlFor="service" className="block text-white font-semibold mb-1 text-sm">Servicio de Interés</label>
                <select {...register('service')} id="service" className={inputClass('service') + ' hover:border-accent/50 transition-colors py-2'}>
                  <option value="">Selecciona un servicio...</option>
                  {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
                {renderValidationStatus('service', 'Servicio seleccionado')}
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <label htmlFor="message" className="block text-white font-semibold mb-1 text-sm">Mensaje</label>
                <textarea {...register('message')} id="message" rows={3} placeholder="Cuéntanos sobre tu proyecto..." className={inputClass('message') + ' resize-none hover:border-accent/50 transition-colors py-2'} />
                {renderValidationStatus('message', 'Mensaje válido')}
              </div>
              
              {submitError && <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm animate-slide-down">{submitError}</div>}
              
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="w-full bg-gradient-to-r from-accent to-accent-softer text-white px-8 py-3 rounded-xl font-display font-bold text-base shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-primary-800 group overflow-hidden relative border-t-2 border-l-2 border-white/40 border-b-2 border-r-2 border-accent-light/20 hover:border-t-2 hover:border-l-2 hover:border-white/60 hover:border-b-2 hover:border-r-2 hover:border-accent-light/40"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="relative">Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} className="relative" />
                    <span className="relative">Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

