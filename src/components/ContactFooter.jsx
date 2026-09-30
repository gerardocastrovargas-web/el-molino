import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

export default function ContactFooter() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name') || ''
    const phone = form.get('phone') || ''
    const message = form.get('message') || ''
    const text = encodeURIComponent(`Hola, soy ${name}. ${phone ? `Mi teléfono es ${phone}. ` : ''}${message}`)
    window.open(`https://wa.me/526864280637?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer id="contacto" className="bg-ink text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 hidden w-[34%] lg:block">
          <img src="/assets/products/chistorra.jpg" alt="Tabla de embutidos" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-black/20" />
          <p className="font-display absolute left-12 top-1/2 max-w-[220px] -translate-y-1/2 -rotate-3 text-3xl italic leading-tight text-white/90">“Buenos embutidos, mejores momentos”</p>
        </div>

        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 lg:grid-cols-[.9fr_1.1fr_.8fr] lg:px-8 lg:py-20">
          <div>
            <span className="eyebrow text-brand-500">Contáctanos</span>
            <h2 className="font-display mt-2 text-4xl font-bold leading-tight sm:text-5xl">Hablemos de buenos sabores</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">Haz tu pedido, resuelve tus dudas o cuéntanos sobre un proyecto. Estamos listos para atenderte.</p>
            <div className="mt-7 space-y-4">
              <a href="tel:+526864280637" className="contact-link"><Phone size={20}/><span><strong>+52 (686) 428 06 37</strong><small>Teléfono</small></span></a>
              <a href="https://wa.me/526864280637" target="_blank" rel="noreferrer" className="contact-link"><MessageCircle size={20}/><span><strong>WhatsApp</strong><small>Pedidos y atención</small></span></a>
              <a href="mailto:contacto@elmolino.mx" className="contact-link"><Mail size={20}/><span><strong>contacto@elmolino.mx</strong><small>Correo electrónico</small></span></a>
              <div className="contact-link cursor-default"><MapPin size={20}/><span><strong>Mexicali, Baja California</strong><small>Cobertura local y envíos</small></span></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-white/8 bg-white/[.035] p-5 backdrop-blur-sm sm:p-6 lg:mr-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="form-field" name="name" placeholder="Nombre completo*" required />
              <input className="form-field" name="email" type="email" placeholder="Correo electrónico*" required />
            </div>
            <input className="form-field mt-4" name="phone" type="tel" placeholder="Teléfono" />
            <textarea className="form-field mt-4 min-h-32 resize-y" name="message" placeholder="Mensaje*" required />
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-4 text-sm font-bold text-white transition duration-300 hover:bg-brand-600 hover:shadow-glow active:scale-[.99]">
              <Send size={17}/> Enviar mensaje
            </button>
            <p className="mt-3 text-center text-[11px] leading-5 text-white/35">El botón prepara el mensaje para enviarlo por WhatsApp.</p>
          </form>

          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-5">
            <span className="flex h-12 w-[120px] items-center justify-center bg-brand-500 px-3"><img src="/assets/logo.png" alt="El Molino" className="w-full brightness-0 invert" /></span>
            <span className="hidden h-8 w-px bg-white/12 sm:block" />
            <p className="text-xs text-white/42">Sabor artesanal desde 2012.</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-white/60">
            <a href="#productos" className="hover:text-white">Productos</a><a href="#historia" className="hover:text-white">Historia</a><a href="#faq" className="hover:text-white">FAQ</a><a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="social-link" aria-label="Instagram"><Instagram size={17}/></a>
            <a href="#" className="social-link" aria-label="Facebook"><Facebook size={17}/></a>
          </div>
        </div>
        <div className="border-t border-white/8 py-4 text-center text-[11px] text-white/35">© 2026 El Molino. Todos los derechos reservados. Hecho en Mexicali, B.C.</div>
      </div>
    </footer>
  )
}
