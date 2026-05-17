import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import ScrollProgress from './components/ui/ScrollProgress'

function Footer() {
  return (
    <footer className="border-t-thick border-t-2 border-ink py-8 text-center text-ink/60 text-sm font-bold bg-ink">
      <p className="text-cream">2026</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
