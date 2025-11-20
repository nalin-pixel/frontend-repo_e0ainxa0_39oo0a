import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-400/30 via-fuchsia-400/30 to-amber-400/30 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-2xl font-bold text-white">Beyond pixels</h3>
            <p className="mt-4 text-slate-300/90 leading-relaxed">
              I blend product thinking, motion design, and systems engineering to build experiences that feel inevitable. From zero-to-one launches to scaling polished platforms, I ship fast without sacrificing craft.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200/90">
              <li>• Product-led strategy and research</li>
              <li>• Motion-first UI and micro-interactions</li>
              <li>• High-performance full-stack builds</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
