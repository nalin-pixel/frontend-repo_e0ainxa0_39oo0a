import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Neon Commerce',
    tagline: 'Next-gen storefront with micro-animations and 3D embeds',
    image: 'https://images.unsplash.com/photo-1751759196124-a0b55924a36d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwQ29tbWVyY2V8ZW58MHwwfHx8MTc2MzY2NDAzOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    url: '#',
    tags: ['React', 'Framer Motion', 'Spline']
  },
  {
    title: 'Cerebral AI Studio',
    tagline: 'Realtime AI playground orchestrating cloud agents',
    image: 'https://images.unsplash.com/photo-1704790461396-5e8e85009927?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM2NjQwNDB8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    url: '#',
    tags: ['FastAPI', 'WebSockets', 'MongoDB']
  },
  {
    title: 'Iridescent OS',
    tagline: 'A desktop-in-the-browser with glass and glow',
    image: 'https://images.unsplash.com/photo-1518556737724-e362c03e8740?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM2NjQwNDF8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    url: '#',
    tags: ['Vite', 'Tailwind', 'Radix']
  }
]

export default function Projects() {
  return (
    <section id="work" className="relative py-28 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Signature Work</h2>
          <a href="#contact" className="text-sky-300 hover:text-white transition">Request a project</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:border-white/20"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold tracking-tight">{p.title}</h3>
                    <p className="text-slate-300/80 text-sm mt-1">{p.tagline}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/70" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs text-white/80 bg-white/10 border border-white/10 rounded-full px-2 py-1">{t}</span>
                  ))}
                </div>
            </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
