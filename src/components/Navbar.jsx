import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Platform', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#usecases' },
  { label: 'Roadmap', href: '#roadmap' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050d1e]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
            <span className="text-[#050d1e] font-bold text-sm">M</span>
          </div>
          <span className="font-semibold text-white text-lg tracking-tight">MetisIQ</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#demo" className="text-sm text-white/60 hover:text-white transition-colors">
            Log in
          </a>
          <a
            href="#demo"
            className="px-4 py-2 rounded-lg bg-cyan-400 text-[#050d1e] text-sm font-semibold hover:bg-cyan-300 transition-colors"
          >
            Request demo
          </a>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a1628]/95 backdrop-blur-md border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#demo"
            className="mt-2 px-4 py-2 rounded-lg bg-cyan-400 text-[#050d1e] text-sm font-semibold text-center hover:bg-cyan-300 transition-colors"
            onClick={() => setOpen(false)}
          >
            Request demo
          </a>
        </div>
      )}
    </header>
  )
}
