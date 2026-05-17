import { useLanguage } from '../../i18n/LanguageContext'

const EPFL_RED = '#FF0000'

function EpflLogo({ size = 'md' }) {
  const cls = size === 'lg'
    ? 'text-5xl sm:text-6xl px-6 py-3'
    : 'text-3xl sm:text-4xl px-5 py-2'
  return (
    <div className={`inline-flex items-center justify-center bg-white border-thick border-ink rounded-2xl shadow-pop-sm ${cls}`}>
      <span className="font-display font-black tracking-tighter" style={{ color: EPFL_RED }}>
        EPFL
      </span>
    </div>
  )
}

export default function Education() {
  const { cv, ui } = useLanguage()
  const t = ui.education
  const spot = t.spotlight

  return (
    <section id="education" className="relative" style={{ backgroundColor: '#fef3c7' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="section-label bg-violet-300">{t.label}</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-3">
          <span className="text-sky-500">{t.headline2}</span>
        </h2>
        <p className="text-ink/60 text-sm md:text-base mb-12 max-w-xl font-medium">
          {t.subtitle}
        </p>

        {/* Education cards */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mb-10 md:mb-14">
          {cv.education.map((edu, i) => (
            <div
              key={i}
              className="relative bg-white border-thick border-ink rounded-3xl p-5 sm:p-6 shadow-pop"
            >
              <div className={`absolute -top-3 -right-3 ${edu.ribbon} border-thick border-ink rounded-full px-3 py-1 shadow-pop-sm`}>
                <p className="text-ink font-black text-[10px] uppercase tracking-wider">{edu.period}</p>
              </div>
              <h3 className="font-display text-base sm:text-lg font-black text-ink mb-1 mt-2">{edu.institution}</h3>
              <p className="text-rose-600 text-sm font-bold mb-2">{edu.degree}</p>
              {edu.notes && (
                <p className="text-ink/50 text-xs leading-relaxed">{edu.notes}</p>
              )}
            </div>
          ))}
        </div>

        {/* EPFL spotlight */}
        <div className="relative bg-white border-thick border-ink rounded-3xl p-5 sm:p-8 shadow-pop max-w-4xl mb-10 md:mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 mb-5">
            <EpflLogo size="lg" />
            <div className="flex-1 min-w-0">
              <span className="section-label bg-rose-300">{spot.label}</span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-ink mt-2">
                {spot.headline}
              </h3>
            </div>
          </div>
          <p className="text-ink/70 text-sm md:text-base leading-relaxed mb-5">
            {spot.description}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {spot.stats.map((stat, i) => {
              const palettes = [
                'bg-rose-200 text-rose-800 border-rose-700',
                'bg-sky-200 text-sky-800 border-sky-700',
                'bg-emerald-200 text-emerald-800 border-emerald-700',
                'bg-amber-200 text-amber-800 border-amber-700',
              ]
              return (
                <span
                  key={i}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold border-thick ${palettes[i % palettes.length]}`}
                >
                  {stat}
                </span>
              )
            })}
          </div>
        </div>

        {/* Languages */}
        <div className="max-w-3xl">
          <span className="section-label bg-emerald-300">{t.languagesLabel}</span>
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-ink mb-6">
            {t.languagesHeading}
          </h3>
          <div className="flex flex-wrap gap-3">
            {cv.languages.map(lang => (
              <div
                key={lang.name}
                className={`flex items-baseline gap-2 px-4 py-2 rounded-2xl border-thick ${lang.accent} shadow-pop-sm`}
              >
                <span className="font-display font-black text-base">{lang.name}</span>
                <span className="text-xs font-bold opacity-70">· {lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
