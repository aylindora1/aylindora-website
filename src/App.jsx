import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import EducationContact from './components/sections/EducationContact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <EducationContact />
      </main>
      <footer className="border-t border-gray-100 py-8 text-center text-gray-400 text-sm">
        Built with React & Tailwind CSS · {new Date().getFullYear()}
      </footer>
    </>
  )
}
