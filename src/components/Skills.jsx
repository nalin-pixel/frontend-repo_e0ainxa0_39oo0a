import { motion } from 'framer-motion'
import { Cpu, Layers, Atom, Shield } from 'lucide-react'

const skills = [
  { icon: Cpu, title: 'Engineering', items: ['TypeScript', 'FastAPI', 'MongoDB', 'WebSockets'] },
  { icon: Layers, title: 'Interface', items: ['Framer Motion', 'Spline', 'Radix UI', 'Tailwind'] },
  { icon: Atom, title: 'AI & Data', items: ['LangChain', 'Vector DBs', 'RAG', 'Agentic UX'] },
  { icon: Shield, title: 'Quality', items: ['Testing', 'Accessibility', 'Perf budgets', 'Observability'] }
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(250,204,21,0.08),transparent_60%)]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Capabilities</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20"
            >
              <s.icon className="w-6 h-6 text-white/90" />
              <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
              <ul className="mt-4 space-y-1 text-slate-200/90 text-sm">
                {s.items.map(it => <li key={it}>• {it}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
