import { motion } from 'framer-motion'
import { Beef, ChefHat, MapPin, ShieldCheck, ShoppingCart } from 'lucide-react'

const features = [
  { icon: Beef, title: '100% Carne real', text: 'Ingredientes seleccionados' },
  { icon: ChefHat, title: 'Recetas tradicionales', text: 'Inspiración alemana' },
  { icon: ShieldCheck, title: 'Calidad artesanal', text: 'Hecho con cuidado' },
  { icon: MapPin, title: 'Hecho en Mexicali, B.C.', text: 'Desde 2012' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[760px] overflow-hidden bg-black pt-[76px] lg:min-h-[820px]">
      <div className="absolute inset-0 -z-20 bg-[url('/assets/products/chistorra.jpg')] bg-cover bg-center lg:bg-[position:center_54%]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,.92)_0%,rgba(0,0,0,.72)_43%,rgba(0,0,0,.42)_70%,rgba(0,0,0,.50)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_46%,rgba(193,18,31,.12),transparent_26%)]" />

      <div className="mx-auto flex min-h-[684px] max-w-[1240px] items-center px-5 py-14 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px]"
        >
          <span className="eyebrow text-[#E7B978]">Embutidos artesanales</span>
          <h1 className="font-display mt-4 text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[.98] tracking-[-.045em] text-white text-balance">
            Auténticos embutidos artesanales con tradición alemana
          </h1>
          <div className="mt-6 h-[3px] w-16 bg-brand-500" />
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Desde 2012, en Mexicali, elaboramos embutidos gourmet con carne 100% real, ingredientes de calidad y recetas tradicionales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#productos" className="btn-primary">Nuestros Productos <span>→</span></a>
            <a href="https://wa.me/526864280637" target="_blank" rel="noreferrer" className="btn-secondary">
              <ShoppingCart size={18} /> Hacer Pedido
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-y border-white/10 bg-black/64 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 divide-x divide-white/10 px-5 sm:grid-cols-4 lg:px-8">
          {features.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .55 + index * .12, duration: .55 }}
              className="flex min-h-[112px] items-center gap-3 px-3 py-5 sm:px-5"
            >
              <Icon className="shrink-0 text-[#D6A45C]" strokeWidth={1.7} />
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
