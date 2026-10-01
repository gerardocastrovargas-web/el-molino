import { Mail, MapPin, MessageCircle, Send } from 'lucide-react'

export default function ContactFooter() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name    = form.get('name')    || ''
    const email   = form.get('email')   || ''
    const phone   = form.get('phone')   || ''
    const message = form.get('message') || ''
    const text = encodeURIComponent(
      `Hola, soy ${name}.${email ? ` Mi correo: ${email}.` : ''}${phone ? ` Mi teléfono: ${phone}.` : ''} ${message}`
    )
    window.open(`https://wa.me/526864280637?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer id="contacto" className="bg-[#111008] text-white">
      {/* ── 3-column real grid — no absolutes ── */}
      <div className="grid min-h-[520px] lg:grid-cols-[1fr_1.2fr_1fr]">

        {/* ── Col 1: Contact info ── */}
        <div className="flex flex-col justify-center px-8 py-14 sm:px-10 lg:px-12 xl:px-14">
          <span className="eyebrow text-brand-500 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-brand-500" />
            Contáctanos
          </span>
          <h2 className="font-display mt-3 text-[clamp(2rem,2.8vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Hablemos de<br />buenos sabores
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/60">
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

        {/* ── Col 2: Form ── */}
        <div className="flex flex-col justify-center border-x border-white/10 px-8 py-14 sm:px-10 lg:px-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
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
              className="form-field"
              name="phone"
              type="tel"
              placeholder="Teléfono"
              id="contact-phone"
            />
            <textarea
              className="form-field min-h-[110px] resize-y"
              name="message"
              placeholder="Mensaje*"
              required
              id="contact-message"
            />
            <button
              type="submit"
              id="contact-submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-[14px] text-sm font-bold text-white transition duration-300 hover:bg-brand-600 hover:shadow-glow active:scale-[.99]"
            >
              <Send size={17} /> Enviar mensaje
            </button>
            <p className="text-center text-[11px] leading-5 text-white/35">
              El botón prepara el mensaje para enviarlo por WhatsApp.
            </p>
          </form>
        </div>

        {/* ── Col 3: Food image + quote ── */}
        <div className="relative hidden overflow-hidden lg:block">
          <img
            src="/assets/contact-bg.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/45" />
          {/* Quote */}
          <p className="font-display absolute inset-0 flex items-center justify-center px-8 text-center text-[1.55rem] italic leading-snug text-white/90 drop-shadow-lg -rotate-2">
            "Buenos<br />embutidos,<br />mejores<br />momentos"
          </p>
        </div>

      </div>
    </footer>
  )
}
