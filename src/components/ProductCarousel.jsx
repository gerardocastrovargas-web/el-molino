import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Flame, UtensilsCrossed } from 'lucide-react'
import { products } from '../data/products'

export default function ProductCarousel() {
  const railRef = useRef(null)

  const scroll = (direction) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector('[data-product-card]')
    const amount = card ? card.getBoundingClientRect().width + 24 : rail.clientWidth * .85
    rail.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section id="productos" className="bg-ivory py-12 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">

        {/* ── Section header ── */}
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div>
            <span className="eyebrow text-brand-500">Nuestros productos</span>
            <h2 className="font-display mt-1 text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-coal">
              Sabores que cuentan historias
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/55 lg:text-right">
            Una selección de embutidos artesanales, elaborados con ingredientes naturales y recetas únicas, inspiradas en la tradición.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div className="relative mt-7">
          <button className="carousel-side left-0 -translate-x-1/2" onClick={() => scroll(-1)} aria-label="Producto anterior"><ChevronLeft size={22}/></button>
          <button className="carousel-side right-0 translate-x-1/2 bg-brand-500 text-white" onClick={() => scroll(1)} aria-label="Producto siguiente"><ChevronRight size={22}/></button>

          <div ref={railRef} className="carousel-rail">
            {products.map((product) => (
              <article key={product.name} data-product-card className="product-card group">
                {/* Image — kept tall */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ece8e2]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/72 px-3 py-1 text-[10px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-sm">
                    {product.style}
                  </span>
                </div>

                {/* Card body — tighter spacing */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-display text-2xl font-bold text-coal">{product.name}</h3>
                  <p className="mt-1 text-xs leading-5 text-black/58">{product.description}</p>

                  <div className="mt-3 grid grid-cols-2 gap-2 border-t border-black/8 pt-3">
                    <div className="flex gap-1.5 text-[11px] leading-4 text-black/65">
                      <Flame className="mt-0.5 shrink-0 text-[#B8772A]" size={15}/>
                      <span>{product.notes[0]}</span>
                    </div>
                    <div className="flex gap-1.5 text-[11px] leading-4 text-black/65">
                      <UtensilsCrossed className="mt-0.5 shrink-0 text-[#B8772A]" size={15}/>
                      <span>{product.notes[1]}</span>
                    </div>
                  </div>

                  <button className="mt-4 w-full rounded-sm bg-brand-500 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:scale-[1.01] hover:bg-brand-600 hover:shadow-glow active:scale-[.99]">
                    Ver detalles
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
