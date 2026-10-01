import { motion } from 'framer-motion'
import { Beef, ChefHat, MapPin, ShieldCheck, ShoppingCart } from 'lucide-react'

const features = [
  { icon: Beef,        title: '100% Carne real',         text: 'Ingredientes seleccionados' },
  { icon: ChefHat,     title: 'Recetas tradicionales',   text: 'Inspiración alemana' },
  { icon: ShieldCheck, title: 'Calidad artesanal',       text: 'Hecho con cuidado' },
  { icon: MapPin,      title: 'Hecho en Mexicali, B.C.', text: 'Desde 2012' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate flex h-[100dvh] min-h-[580px] flex-col overflow-hidden bg-black pt-[76px]">

      {/* Background image — fills entire section */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/assets/hero.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[75%_50%]"
        />
      </div>

      {/* Gradient: very dark on the left, fades to nearly transparent on the right */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,.96)_0%,rgba(0,0,0,.88)_30%,rgba(0,0,0,.55)_52%,rgba(0,0,0,.18)_75%,rgba(0,0,0,.06)_100%)]" />
      {/* Subtle red glow bottom-left */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_5%_80%,rgba(193,18,31,.22),transparent_45%)]" />
      {/* Bottom fade into badges */}
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-28 bg-gradient-to-t from-black/65 to-transparent" />

      {/* ── Main content — constrained left column ── */}
      <div className="mx-auto flex w-full flex-1 max-w-[1320px] items-center px-5 py-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[52%] lg:max-w-[48%]"
        >
          <motion.span
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="eyebrow text-[#E7B978] flex items-center gap-2"
          >
            <span className="inline-block h-px w-6 bg-[#E7B978]" />
            Embutidos artesanales · Mexicali, B.C.
          </motion.span>

          <h1 className="font-display mt-4 text-[clamp(2.4rem,4.5vw,4.6rem)] font-bold leading-[.97] tracking-[-.045em] text-white">
            Auténticos embutidos artesanales con tradición alemana
          </h1>

          <div className="mt-4 h-[3px] w-12 bg-brand-500 rounded-full" />

          <p className="mt-5 text-[clamp(.9rem,1.2vw,1.05rem)] leading-[1.75] text-white/80">
            Desde 2012, en Mexicali, elaboramos embutidos gourmet con carne 100% real,
            ingredientes de calidad y recetas tradicionales.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <motion.a
              href="#productos"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Nuestros Productos <span aria-hidden>→</span>
            </motion.a>
            <motion.a
              href="https://wa.me/526864280637"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingCart size={18} /> Hacer Pedido
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ── Trust badges bar ── */}
      <div className="border-t border-white/10 bg-black/55 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 divide-x divide-white/10 px-5 sm:grid-cols-4 lg:px-10">
          {features.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + index * 0.1, duration: 0.5 }}
              className="flex min-h-[96px] items-center gap-3 px-3 py-4 sm:px-5"
            >
              <Icon className="shrink-0 text-[#D6A45C]" strokeWidth={1.6} size={20} />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.12em] text-white sm:text-xs">{title}</p>
                <p className="mt-0.5 text-[10px] text-white/55 sm:text-[11px]">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
