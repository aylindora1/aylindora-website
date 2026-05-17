import { useLanguage } from '../../i18n/LanguageContext'

export default function Skills() {
  const { cv, ui } = useLanguage()
  const t = ui.skills

  return (
    <section id="skills" className="relative" style={{ backgroundColor: '#fffceb' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="section-label bg-emerald-300">{t.label}</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-3">
          {t.headline1}<span className="text-amber-500">{t.headline2}</span>
        </h2>
        <p className="text-ink/60 text-sm md:text-base mb-12 max-w-xl font-medium">
          {t.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {cv.skillCategories.map(cat => (
            <div
              key={cat.category}
              className={`${cat.bg} border-thick border-ink rounded-3xl p-5 sm:p-6 shadow-pop`}
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
