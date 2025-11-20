import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s create something iconic</h2>
          <p className="mt-4 text-slate-300/90 max-w-xl">Tell me about your vision and timelines. I usually reply within 24 hours.</p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { k: 'Experience', v: '8+ yrs' },
              { k: 'Shipped', v: '40+ apps' },
              { k: 'Clients', v: 'Unicorns & startups' },
            ].map(stat => (
              <div key={stat.k} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-2xl font-bold text-white">{stat.v}</p>
                <p className="text-xs text-slate-300/80">{stat.k}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          {sent ? (
            <div className="text-center py-16">
              <h3 className="text-white text-2xl font-semibold">Message sent!</h3>
              <p className="text-slate-200/90 mt-2">I’ll get back to you shortly.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/80 mb-1">Name</label>
                <input required className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Ada Lovelace"/>
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Email</label>
                <input type="email" required className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="you@company.com"/>
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Project</label>
                <textarea required rows="4" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="What are we building?"/>
              </div>
              <button className="w-full rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-slate-100 transition">Send</button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
