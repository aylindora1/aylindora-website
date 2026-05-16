import { cv } from '../../data/cv'
import Badge from '../ui/Badge'

export default function Skills() {
  return (
    <section id="skills" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-24">
        <p className="section-label">What I work with</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
          Skills & Technologies
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {cv.skillCategories.map(cat => (
            <div key={cat.category} className="p-4 sm:p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
              <h3 className="font-display text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <Badge key={item} label={item} accent={cat.accent} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
