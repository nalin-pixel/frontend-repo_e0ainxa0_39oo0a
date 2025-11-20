import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <div className="flex items-center gap-3 text-slate-400 text-sm">
            <a href="#top" className="hover:text-white">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
