import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['Productos', '#productos'],
  ['Historia', '#historia'],
  ['FAQ', '#faq'],
  ['Contacto', '#contacto'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/72 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-black/30 backdrop-blur-[2px]'}`}>
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="flex items-center" aria-label="Ir al inicio">
          <span className="flex h-[58px] w-[148px] items-center justify-center bg-brand-500 px-3 shadow-[0_8px_32px_rgba(193,18,31,.3)]">
            <img src="/assets/logo.png" alt="El Molino" className="h-auto w-full object-contain" />
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Navegación principal">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
        </nav>

        <button className="rounded-full p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl transition-[max-height] duration-300 md:hidden ${open ? 'max-h-80' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 py-4">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-sm font-semibold text-white/90 last:border-b-0">{label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
