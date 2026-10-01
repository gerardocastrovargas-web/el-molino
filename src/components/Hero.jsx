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
    <section
      id="inicio"
      className="relative isolate flex h-[100dvh] min-h-[600px] flex-col overflow-hidden pt-[76px]"
    >
      {/* ── Layer 1: solid dark background (always covers full section) ── */}
      <div className="absolute inset-0 -z-30 bg-[#0a0202]" />

      {/* ── Layer 2: food photo anchored to the RIGHT 58% only ── */}
      {/*  This guarantees the image NEVER bleeds into the text area      */}
      <div className="absolute inset-y-0 right-0 -z-20 w-[58%]">
        <img
          src="/assets/hero.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
      </div>

      {/* ── Layer 3: horizontal blend — dark left → transparent right ── */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(to right, #0a0202 0%, #0a0202 38%, rgba(10,2,2,0.88) 48%, rgba(10,2,2,0.50) 58%, rgba(10,2,2,0.10) 72%, transparent 84%)',
        }}
      />

      {/* ── Layer 4: red glow bottom-left ── */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_6%_88%,rgba(193,18,31,.30),transparent_40%)]" />

      {/* ── Layer 5: bottom fade into badges ── */}
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-32 bg-gradient-to-t from-black/75 to-transparent" />

      {/* ══════════════════════════════════════════════════════════════
          Main content — two-column grid centred on screen
          Left col  → text (always on dark bg)
          Right col → empty spacer (photo fills it via absolute img)
      ══════════════════════════════════════════════════════════════ */}
      <div className="mx-auto flex w-full flex-1 max-w-[1280px] items-center px-8 py-8 lg:px-14 xl:px-20">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[46fr_54fr]">

          {/* ── LEFT: text ── */}
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

            <h1 className="font-display mt-4 text-[clamp(2.2rem,3.6vw,4.2rem)] font-bold leading-[.97] tracking-[-.045em] text-white">
              Auténticos embutidos artesanales con tradición alemana
            </h1>

            <div className="mt-4 h-[3px] w-12 bg-brand-500 rounded-full" />

            <p className="mt-5 max-w-[460px] text-[clamp(.88rem,1.05vw,1.05rem)] leading-[1.78] text-white/80">
              Desde 2012, en Mexicali, elaboramos embutidos gourmet con carne 100%
              real, ingredientes de calidad y recetas tradicionales.
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

          {/* ── RIGHT: spacer — photo fills this area via absolute element ── */}
          <div aria-hidden="true" />
        </div>
      </div>

      {/* ── Trust badges bar ── */}
      <div className="border-t border-white/10 bg-black/55 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-x divide-white/10 px-8 sm:grid-cols-4 lg:px-14 xl:px-20">
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
