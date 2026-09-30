import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data/faqs'

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="eyebrow text-brand-500">Preguntas frecuentes</span>
            <h2 className="section-title mt-2 text-coal">Te ayudamos a elegir</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-black/55 lg:justify-self-end">
            Aquí respondemos las dudas más comunes sobre nuestros productos, pedidos, envíos y más. Si no encuentras tu respuesta, contáctanos.
          </p>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-2 lg:gap-4">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.question} className="overflow-hidden rounded-lg border border-black/8 bg-white/50 transition-shadow hover:shadow-sm">
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-coal sm:text-[15px]">{item.question}</span>
                  <Plus className={`shrink-0 text-[#A76C26] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} size={20} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: .28, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-black/7 px-5 pb-5 pt-4 text-sm leading-6 text-black/60">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
