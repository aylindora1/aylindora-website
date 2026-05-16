import Badge from './Badge'

export default function TimelineEntry({ company, role, period, location, bullets, tech, dotColor, shadowColor }) {
  return (
    <div className="relative pl-8 sm:pl-12 pb-10 md:pb-14 last:pb-0 group">
      {/* vertical line */}
      <div className="absolute left-3 top-3 bottom-0 w-1 bg-ink group-last:hidden" />
      {/* dot */}
      <div className={`absolute left-0 top-0 w-7 h-7 rounded-full ${dotColor} border-thick border-ink shadow-pop-sm`} />

      <div className={`sticker ${shadowColor} p-5 sm:p-6 -rotate-[0.4deg] hover:rotate-0`}>
        <div className="mb-3">
          <div className="flex flex-col xs:flex-row xs:items-baseline xs:justify-between gap-1">
            <h3 className="font-display text-base sm:text-lg font-black text-ink">{role}</h3>
            <p className="text-ink/50 text-xs sm:text-sm shrink-0 font-bold tabular-nums">{period}</p>
          </div>
          <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-0.5 mt-1">
            <p className="text-rose-600 font-bold text-sm">@ {company}</p>
            <p className="text-ink/40 text-xs italic">{location}</p>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-ink/70 text-sm leading-relaxed">
              <span className="text-rose-500 mt-1 shrink-0 font-black">★</span>
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {tech.map(t => (
            <Badge key={t} label={t} accent="bg-white text-ink border-thick border-ink" />
          ))}
        </div>
      </div>
    </div>
  )
}
