import { useState, useEffect } from 'react'
import { Menu, X, Star } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-200/90 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-amber-400 shadow-[0_0_30px_rgba(168,85,247,0.45)]" />
            <span className="text-white/90 font-semibold tracking-tight">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 text-slate-900 font-semibold bg-white px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Star className="w-4 h-4 text-amber-500" /> Hire Me
            </a>
          </nav>

          <button
            className="md:hidden text-white/90 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col">
            <NavLink href="#work" onClick={() => setOpen(false)}>Work</NavLink>
            <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink href="#skills" onClick={() => setOpen(false)}>Skills</NavLink>
            <NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
