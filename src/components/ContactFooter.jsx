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
    <footer id="contacto" className="relative bg-[#111008] text-white overflow-hidden">

      {/* ── Full-width food image as background on the right ── */}
      <div className="absolute inset-y-0 right-0 w-[38%] hidden lg:block pointer-events-none">
        <img
          src="/assets/contact-bg.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        {/* Blend left edge into dark background — seamless fusion */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111008_0%,rgba(17,16,8,0.7)_30%,rgba(17,16,8,0.2)_60%,transparent_100%)]" />
      </div>

      {/* Quote on top of the image */}
      <p className="font-display absolute right-[4%] top-1/2 hidden -translate-y-1/2 -rotate-3 text-[1.5rem] italic leading-snug text-white/90 drop-shadow-lg lg:block z-10">
        "Buenos<br />embutidos,<br />mejores<br />momentos"
      </p>

      {/* ── 3-col content grid — no borders, no dividers ── */}
      <div className="relative z-10 mx-auto grid max-w-[1320px] min-h-[480px] gap-0 px-6 py-14 lg:grid-cols-[1fr_1.2fr_0.8fr] lg:px-10 lg:py-16">

        {/* ── Col 1: Contact info ── */}
        <div className="flex flex-col justify-center pr-0 lg:pr-10">
          <span className="eyebrow text-brand-500 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-brand-500" />
            Contáctanos
          </span>
          <h2 className="font-display mt-3 text-[clamp(1.9rem,2.6vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Hablemos de<br />buenos sabores
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Haz tu pedido, resuelve tus dudas o cuéntanos sobre un proyecto. Estamos listos para atenderte.
          </p>

          <div className="mt-7 space-y-4">
            <a href="https://wa.me/526864280637" target="_blank" rel="noreferrer" className="contact-link">
              <MessageCircle size={19} />
              <span><strong>+52 (686) 428 03 37</strong><small>WhatsApp y Teléfono</small></span>
            </a>
            <a href="mailto:contacto@elmolino.mx" className="contact-link">
              <Mail size={19} />
              <span><strong>contacto@elmolino.mx</strong><small>Correo electrónico</small></span>
            </a>
            <div className="contact-link cursor-default">
              <MapPin size={19} />
              <span><strong>Mexicali, Baja California</strong><small>Cobertura local y foránea</small></span>
            </div>
          </div>
        </div>

        {/* ── Col 2: Form — no box, blends with bg ── */}
        <div className="flex flex-col justify-center px-0 pt-10 lg:px-10 lg:pt-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="form-field" name="name"  placeholder="Nombre completo*" required id="contact-name" />
              <input className="form-field" name="email" type="email" placeholder="Correo electrónico*" required id="contact-email" />
            </div>
            <input   className="form-field" name="phone" type="tel" placeholder="Teléfono" id="contact-phone" />
            <textarea className="form-field min-h-[100px] resize-y" name="message" placeholder="Mensaje*" required id="contact-message" />
            <button
              type="submit" id="contact-submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-[13px] text-sm font-bold text-white transition duration-300 hover:bg-brand-600 hover:shadow-glow active:scale-[.99]"
            >
              <Send size={16} /> Enviar mensaje
            </button>
            <p className="text-center text-[11px] text-white/30">
              El botón prepara el mensaje para enviarlo por WhatsApp.
            </p>
          </form>
        </div>

        {/* ── Col 3: Empty — image shows through via absolute bg ── */}
        <div className="hidden lg:block" />

      </div>
    </footer>
  )
}
