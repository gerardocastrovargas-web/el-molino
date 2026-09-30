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
    <section id="productos" className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="eyebrow text-brand-500">Nuestros productos</span>
            <h2 className="section-title mt-2 text-coal">Sabores que cuentan historias</h2>
          </div>
          <div className="flex items-end justify-between gap-6 lg:justify-end">
            <p className="max-w-md text-sm leading-6 text-black/55">
              Una selección de embutidos artesanales, elaborados con ingredientes naturales y recetas únicas, inspiradas en la tradición.
            </p>
            <div className="hidden shrink-0 gap-2 sm:flex">
              <button className="carousel-btn" onClick={() => scroll(-1)} aria-label="Producto anterior"><ChevronLeft size={20} /></button>
              <button className="carousel-btn carousel-btn--accent" onClick={() => scroll(1)} aria-label="Producto siguiente"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>

        <div className="relative mt-10">
          <button className="carousel-side left-0 -translate-x-1/2" onClick={() => scroll(-1)} aria-label="Producto anterior"><ChevronLeft size={22}/></button>
          <button className="carousel-side right-0 translate-x-1/2 bg-brand-500 text-white" onClick={() => scroll(1)} aria-label="Producto siguiente"><ChevronRight size={22}/></button>

          <div ref={railRef} className="carousel-rail">
            {products.map((product) => (
              <article key={product.name} data-product-card className="product-card group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ece8e2]">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/72 px-3 py-1 text-[10px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-sm">{product.style}</span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-3xl font-bold text-coal">{product.name}</h3>
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-black/58">{product.description}</p>
                  <div className="mt-5 grid grid-cols-1 gap-3 border-t border-black/8 pt-4 sm:grid-cols-2">
                    <div className="flex gap-2 text-xs leading-5 text-black/65"><Flame className="mt-0.5 shrink-0 text-[#B8772A]" size={18}/><span>{product.notes[0]}</span></div>
                    <div className="flex gap-2 text-xs leading-5 text-black/65"><UtensilsCrossed className="mt-0.5 shrink-0 text-[#B8772A]" size={18}/><span>{product.notes[1]}</span></div>
                  </div>
                  <button className="mt-5 w-full rounded-sm bg-brand-500 px-5 py-3.5 text-sm font-bold text-white transition duration-300 hover:scale-[1.01] hover:bg-brand-600 hover:shadow-glow active:scale-[.99]">Ver detalles</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
