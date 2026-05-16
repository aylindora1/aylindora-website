import { cv } from '../../data/cv'

export default function Skills() {
  return (
    <section id="skills" className="relative" style={{ backgroundColor: '#fffceb' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="section-label bg-emerald-300">my toolkit</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-3">
          Skills & <span className="text-rainbow">Stack</span>
        </h2>
        <p className="text-ink/60 text-sm md:text-base mb-12 max-w-xl font-medium">
          Tools I've used enough to trust — and a few I'm still falling in love with.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {cv.skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              className={`${cat.bg} border-thick border-ink rounded-3xl p-5 sm:p-6 shadow-pop hover:shadow-pop-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-black text-ink">{cat.emoji}</span>
                <h3 className="font-display text-base sm:text-lg font-black text-ink uppercase tracking-wide">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span
                    key={item}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${cat.badge} border-thick`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
