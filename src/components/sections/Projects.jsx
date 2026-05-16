import { cv } from '../../data/cv'
import ProjectCard from '../ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="relative" style={{ backgroundColor: '#dbeafe' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="section-label bg-sky-300">things I've shipped</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-3">
          <span className="text-rainbow">Projects</span> & Side Quests
        </h2>
        <p className="text-ink/60 text-sm md:text-base mb-12 max-w-xl font-medium">
          Side projects I built because I wanted them to exist — building is how I learn.
        </p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {cv.projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
