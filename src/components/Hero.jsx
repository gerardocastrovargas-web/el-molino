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
    <section id="inicio" className="relative isolate flex h-[100dvh] min-h-[600px] flex-col overflow-hidden bg-black pt-[76px]">

      {/* Background image — anchored right so food stays visible on the right half */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/assets/hero.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right"
        />
      </div>

      {/* Left-to-right gradient: very dark left half fading to transparent on right */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,.97)_0%,rgba(0,0,0,.92)_28%,rgba(0,0,0,.70)_45%,rgba(0,0,0,.30)_62%,rgba(0,0,0,.08)_80%,rgba(0,0,0,.02)_100%)]" />
      {/* Subtle red glow bottom-left */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_8%_85%,rgba(193,18,31,.25),transparent_42%)]" />
      {/* Bottom fade into badges */}
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-32 bg-gradient-to-t from-black/70 to-transparent" />

      {/* ── Main content — two-column grid, centred on screen ── */}
      <div className="mx-auto flex w-full flex-1 max-w-[1400px] items-center px-8 py-8 lg:px-16 xl:px-20">
        {/*
          Grid: text column (left ~46%) | empty spacer (right ~54% — occupied by photo)
          On smaller screens collapses to single column.
        */}
        <div className="grid w-full grid-cols-1 gap-0 lg:grid-cols-[46fr_54fr]">

          {/* LEFT: text content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
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

            <h1 className="font-display mt-4 text-[clamp(2.2rem,3.8vw,4.4rem)] font-bold leading-[.97] tracking-[-.045em] text-white">
              Auténticos embutidos artesanales con tradición alemana
            </h1>

            <div className="mt-4 h-[3px] w-12 bg-brand-500 rounded-full" />

            <p className="mt-5 max-w-[480px] text-[clamp(.88rem,1.05vw,1.05rem)] leading-[1.78] text-white/80">
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

          {/* RIGHT: intentionally empty — the background photo fills this half */}
          <div aria-hidden="true" />
        </div>
      </div>

      {/* ── Trust badges bar ── */}
      <div className="border-t border-white/10 bg-black/55 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-white/10 px-8 sm:grid-cols-4 lg:px-16 xl:px-20">
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

