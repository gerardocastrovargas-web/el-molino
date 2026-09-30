import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

export default function ContactFooter() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name') || ''
    const email = form.get('email') || ''
    const phone = form.get('phone') || ''
    const message = form.get('message') || ''
    const text = encodeURIComponent(
      `Hola, soy ${name}.${email ? ` Mi correo: ${email}.` : ''}${phone ? ` Mi teléfono: ${phone}.` : ''} ${message}`
    )
    window.open(`https://wa.me/526864280637?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer id="contacto" className="relative bg-[#111008] text-white overflow-hidden">

      {/* ── Contact section ─────────────────────────────────────────── */}
      <div className="relative">
        {/* Decorative right-side food image — desktop only */}
        <div className="absolute inset-y-0 right-0 hidden w-[36%] lg:block pointer-events-none select-none">
          <img
            src="/assets/contact-bg.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          {/* gradient blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111008] via-[#111008]/60 to-transparent" />
          {/* Quote overlay */}
          <p className="font-display absolute left-10 top-1/2 max-w-[200px] -translate-y-1/2 -rotate-3 text-[1.65rem] italic leading-snug text-white/90 drop-shadow-lg">
            "Buenos<br/>embutidos,<br/>mejores<br/>momentos"
          </p>
        </div>

        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 lg:grid-cols-[1fr_1.1fr_0.6fr] lg:px-8 lg:py-20">

          {/* ── Left: contact info ─── */}
          <div>
            <span className="eyebrow text-brand-500 flex items-center gap-2">
              <span className="inline-block h-px w-5 bg-brand-500" />
              Contáctanos
            </span>
            <h2 className="font-display mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Hablemos de<br/>buenos sabores
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              Haz tu pedido, resuelve tus dudas o cuéntanos sobre un proyecto. Estamos listos para atenderte.
            </p>

            <div className="mt-8 space-y-5">
              <a href="https://wa.me/526864280637" target="_blank" rel="noreferrer" className="contact-link">
                <MessageCircle size={20} />
                <span>
                  <strong>+52 (686) 428 03 37</strong>
                  <small>WhatsApp y Teléfono</small>
                </span>
              </a>
              <a href="mailto:contacto@elmolino.mx" className="contact-link">
                <Mail size={20} />
                <span>
                  <strong>contacto@elmolino.mx</strong>
                  <small>Correo electrónico</small>
                </span>
              </a>
              <div className="contact-link cursor-default">
                <MapPin size={20} />
                <span>
                  <strong>Mexicali, Baja California</strong>
                  <small>Cobertura local y envíos</small>
                </span>
              </div>
            </div>
          </div>

          {/* ── Center: form ─── */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-white/10 bg-white/[.04] p-5 backdrop-blur-sm sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="form-field"
                name="name"
                placeholder="Nombre completo*"
                required
                id="contact-name"
              />
              <input
                className="form-field"
                name="email"
                type="email"
                placeholder="Correo electrónico*"
                required
                id="contact-email"
              />
            </div>
            <input
              className="form-field mt-4"
              name="phone"
              type="tel"
              placeholder="Teléfono"
              id="contact-phone"
            />
            <textarea
              className="form-field mt-4 min-h-[128px] resize-y"
              name="message"
              placeholder="Mensaje*"
              required
              id="contact-message"
            />
            <button
              type="submit"
              id="contact-submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-[14px] text-sm font-bold text-white transition duration-300 hover:bg-brand-600 hover:shadow-glow active:scale-[.99]"
            >
              <Send size={17} /> Enviar mensaje
            </button>
            <p className="mt-3 text-center text-[11px] leading-5 text-white/35">
              El botón prepara el mensaje para enviarlo por WhatsApp.
            </p>
          </form>

          {/* Spacer — reserved for right image overlap on desktop */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* ── Footer bar ──────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          {/* Logo + tagline */}
          <div className="flex items-center gap-4">
            <a href="#inicio" aria-label="Ir al inicio">
              <img
                src="/assets/logo.png"
                alt="El Molino"
                className="h-[46px] w-[124px] rounded-md object-cover shadow-[0_6px_24px_rgba(193,18,31,.25)] transition-opacity hover:opacity-90"
              />
            </a>
            <span className="hidden h-7 w-px bg-white/12 sm:block" />
            <p className="text-xs text-white/40">Sabor artesanal desde 2012.</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-white/55" aria-label="Footer navigation">
            <a href="#productos" className="hover:text-white transition-colors">Productos</a>
            <a href="#historia"  className="hover:text-white transition-colors">Historia</a>
            <a href="#faq"       className="hover:text-white transition-colors">FAQ</a>
            <a href="#contacto"  className="hover:text-white transition-colors">Contacto</a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a href="#" className="social-link" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="#" className="social-link" aria-label="Facebook"><Facebook size={17} /></a>
          </div>
        </div>

        <div className="border-t border-white/8 py-4 text-center text-[11px] text-white/35">
          © 2026 El Molino. Todos los derechos reservados. · Hecho con pasión en Mexicali, B.C.
        </div>
      </div>
    </footer>
  )
}
