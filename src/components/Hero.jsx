import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5fQlL0qinzob1I8q/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(0,0,0,0)_0%,rgba(2,6,23,0.75)_70%,rgba(2,6,23,1)_100%)]"/>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-white/80">Open to billion-dollar opportunities</span>
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl leading-[1.05] font-extrabold tracking-tight bg-clip-text text-transparent bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-cyan-300 via-fuchsia-300 to-amber-300 drop-shadow-[0_0_30px_rgba(236,72,153,0.25)]">
            Crafting immersive digital experiences
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
            I design and build premium-grade products with motion, personality, and precision. This portfolio is a living canvas of experimentation and world-class execution.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.25)] transition-all">
              Explore Work
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 text-white px-5 py-3 backdrop-blur hover:bg-white/10 transition">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
