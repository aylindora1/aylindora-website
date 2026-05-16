import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import EducationContact from './components/sections/EducationContact'
import ScrollProgress from './components/ui/ScrollProgress'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <EducationContact />
      </main>
      <footer className="border-t-thick border-t-2 border-ink py-8 text-center text-ink/60 text-sm font-bold bg-ink">
        <p className="text-cream">
          made with <span className="text-rose-400">★</span> and <span className="text-amber-400">caffeine</span> · {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
