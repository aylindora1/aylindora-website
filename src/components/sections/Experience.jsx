import { cv } from '../../data/cv'
import TimelineEntry from '../ui/TimelineEntry'

export default function Experience() {
  return (
    <section id="experience" className="relative" style={{ backgroundColor: '#fef3c7' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="section-label bg-amber-300">where I've been</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-3">
          Work <span className="text-rainbow">Experience</span>
        </h2>
        <p className="text-ink/60 text-sm md:text-base mb-12 max-w-xl font-medium">
          A few of the places that shaped how I think about building software. ★
        </p>

        <div className="max-w-3xl">
          {cv.experience.map((entry, i) => (
            <TimelineEntry key={i} {...entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
