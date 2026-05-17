import { useLanguage } from '../../i18n/LanguageContext'
import TimelineEntry from '../ui/TimelineEntry'

export default function Experience() {
  const { cv, ui } = useLanguage()
  const t = ui.experience

  return (
    <section id="experience" className="relative" style={{ backgroundColor: '#fef3c7' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="section-label bg-amber-300">{t.label}</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-3">
          {t.headline1}<span className="text-rose-500">{t.headline2}</span>
        </h2>
        <p className="text-ink/60 text-sm md:text-base mb-12 max-w-xl font-medium">
          {t.subtitle}
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
