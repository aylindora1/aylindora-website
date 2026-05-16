import { cv } from '../../data/cv'
import ProjectCard from '../ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-24">
        <p className="section-label">Things I've built</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {cv.projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
