import { cv } from '../../data/cv'
import TimelineEntry from '../ui/TimelineEntry'

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-24">
        <p className="section-label">Career</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
          Work Experience
        </h2>

        <div className="max-w-3xl">
          {cv.experience.map((entry, i) => (
            <TimelineEntry key={i} {...entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
