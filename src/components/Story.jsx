import { motion } from 'framer-motion'
import { Beef, Leaf, Medal, Wheat } from 'lucide-react'

const benefits = [
  [Beef, 'Carnes seleccionadas'],
  [Leaf, 'Ingredientes naturales'],
  [Wheat, 'Recetas alemanas y mexicanas'],
  [Medal, 'Más de 10 años de experiencia'],
]

export default function Story() {
  return (
    <section id="historia" className="overflow-hidden bg-coal text-white">
      <div className="grid min-h-[640px] lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: .8 }}
          className="relative min-h-[430px] lg:min-h-full"
        >
          <img src="/assets/products/salami.jpg" alt="Proceso artesanal de El Molino" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.1),rgba(0,0,0,.52))]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
        </motion.div>

        <div className="grid gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_220px] lg:px-12 xl:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .65 }}>
            <span className="eyebrow text-brand-500">Nuestra historia</span>
            <h2 className="section-title mt-2 text-white">Tradición que sabe mejor</h2>
            <p className="mt-6 text-sm leading-7 text-white/70 sm:text-base">
              En El Molino llevamos desde 2012 elaborando embutidos artesanales en Mexicali, inspirados en la tradición alemana y en el auténtico sabor de la buena mesa.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              Utilizamos carne real, especias seleccionadas y recetas perfeccionadas con el tiempo para ofrecer productos hechos con pasión, consistencia y respeto por el oficio.
            </p>
            <a href="#contacto" className="btn-primary mt-8 inline-flex">Conoce más sobre nosotros <span>→</span></a>
          </motion.div>

          <div className="self-center border-l border-white/10 pl-0 lg:pl-7">
            {benefits.map(([Icon, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .7 }}
                transition={{ delay: index * .12, duration: .55, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 border-b border-white/10 py-5 last:border-b-0"
              >
                <Icon className="shrink-0 text-[#D5A35E]" size={30} strokeWidth={1.6} />
                <span className="text-sm font-semibold leading-5 text-white/88">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
