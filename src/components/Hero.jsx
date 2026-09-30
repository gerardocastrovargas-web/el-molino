import { motion } from 'framer-motion'
import { Beef, ChefHat, MapPin, ShieldCheck, ShoppingCart } from 'lucide-react'

const features = [
  { icon: Beef,        title: '100% Carne real',        text: 'Ingredientes seleccionados' },
  { icon: ChefHat,     title: 'Recetas tradicionales',  text: 'Inspiración alemana' },
  { icon: ShieldCheck, title: 'Calidad artesanal',      text: 'Hecho con cuidado' },
  { icon: MapPin,      title: 'Hecho en Mexicali, B.C.', text: 'Desde 2012' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate flex h-[100dvh] min-h-[580px] flex-col overflow-hidden bg-black pt-[76px]">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/assets/hero.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center lg:object-[center_40%]"
        />
      </div>

      {/* Gradient overlays — left-heavy like the mockup */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(0,0,0,.93)_0%,rgba(0,0,0,.78)_38%,rgba(0,0,0,.45)_65%,rgba(0,0,0,.35)_100%)]" />
      {/* Red glow accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_60%,rgba(193,18,31,.18),transparent_50%)]" />
      {/* Bottom fade into the badges bar */}
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-32 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Main content */}
      <div className="mx-auto flex flex-1 max-w-[1240px] items-center px-5 py-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[660px]"
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

          <h1 className="font-display mt-5 text-[clamp(2.8rem,6vw,5.2rem)] font-bold leading-[.96] tracking-[-.045em] text-white text-balance">
            Auténticos embutidos artesanales<br className="hidden sm:block" /> con tradición alemana
          </h1>

          <div className="mt-5 h-[3px] w-14 bg-brand-500 rounded-full" />

          <p className="mt-6 max-w-[500px] text-base leading-[1.75] text-white/80 sm:text-[1.05rem]">
            Desde 2012, en Mexicali, elaboramos embutidos gourmet con carne 100% real,
            ingredientes de calidad y recetas tradicionales.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
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

      {/* Trust badges bar */}
      <div className="border-t border-white/10 bg-black/55 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 divide-x divide-white/10 px-5 sm:grid-cols-4 lg:px-8">
          {features.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + index * 0.1, duration: 0.5 }}
              className="flex min-h-[108px] items-center gap-3 px-3 py-5 sm:px-5"
            >
              <Icon className="shrink-0 text-[#D6A45C]" strokeWidth={1.6} size={22} />
              <div>
                <p className="text-xs font-bold uppercase tracking-[.12em] text-white sm:text-[13px]">{title}</p>
                <p className="mt-1 text-[11px] text-white/55 sm:text-xs">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
