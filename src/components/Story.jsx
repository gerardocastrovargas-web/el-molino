import { motion } from 'framer-motion'
import { Beef, Leaf, Medal, Wheat } from 'lucide-react'

const benefits = [
  [Beef,  'Carnes seleccionadas'],
  [Leaf,  'Ingredientes naturales'],
  [Wheat, 'Recetas alemanas y mexicanas'],
  [Medal, 'Más de 10 años de experiencia'],
]

export default function Story() {
  return (
    <section id="historia" className="overflow-hidden bg-coal text-white">
      {/* 3-column grid: 1/3 image | 1/3 text | 1/3 badges */}
      <div className="grid min-h-[480px] lg:grid-cols-[1fr_1fr_1fr]">

        {/* ── Col 1: Chef image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85 }}
          className="relative min-h-[340px] lg:min-h-full"
        >
          <img
            src="/assets/story-chef.jpg"
            alt="Artesano de El Molino elaborando embutidos"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          {/* fade right into text column */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0)_50%,rgba(20,14,8,0.85)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,14,8,0.6)_0%,transparent_40%)]" />
        </motion.div>

        {/* ── Col 2: Text + CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex flex-col justify-center px-8 py-14 sm:px-10 lg:px-10 xl:px-12"
        >
          <span className="eyebrow text-brand-500 flex items-center gap-2">
            <span className="inline-block h-px w-5 bg-brand-500" />
            Nuestra historia
          </span>
          <h2 className="font-display mt-3 text-[clamp(2rem,3vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
            Tradición que sabe mejor
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/70">
            En El Molino llevamos desde 2012 elaborando embutidos artesanales en Mexicali, inspirados en la tradición alemana y con el auténtico sabor de la buena carne.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Utilizamos carne 100% real, especias seleccionadas y recetas que han sido perfeccionadas con el tiempo, para ofrecer un producto de calidad, hecho con pasión y respeto por la tradición.
          </p>
          <a
            href="#contacto"
            className="btn-primary mt-8 self-start"
          >
            Conoce más sobre nosotros <span aria-hidden>→</span>
          </a>
        </motion.div>

        {/* ── Col 3: Benefit badges ── */}
        <div className="flex flex-col justify-center border-l border-white/10 px-8 py-14 sm:px-10 lg:px-10 xl:px-12">
          {benefits.map(([Icon, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: index * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 border-b border-white/10 py-5 last:border-b-0"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D5A35E]/40 bg-[#D5A35E]/10">
                <Icon className="text-[#D5A35E]" size={20} strokeWidth={1.6} />
              </span>
              <span className="text-sm font-semibold leading-5 text-white/85">{label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
