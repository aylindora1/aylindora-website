import Badge from './Badge'

export default function TimelineEntry({ company, role, period, location, bullets, tech }) {
  return (
    <div className="relative pl-6 sm:pl-8 pb-8 md:pb-12 last:pb-0">
      {/* vertical line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-accent-200" />
      {/* dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3px] rounded-full bg-accent-500 ring-4 ring-white" />

      <div className="mb-3">
        <div className="flex flex-col xs:flex-row xs:items-baseline xs:justify-between gap-0.5 xs:gap-2">
          <h3 className="font-display text-base sm:text-lg font-semibold text-gray-900">{role}</h3>
          <p className="text-gray-500 text-xs sm:text-sm shrink-0">{period}</p>
        </div>
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-0.5">
          <p className="text-accent-600 font-medium text-sm">{company}</p>
          <p className="text-gray-400 text-xs">{location}</p>
        </div>
      </div>

      <ul className="space-y-1.5 mb-3 md:mb-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-gray-600 text-sm leading-relaxed">
            <span className="text-accent-400 mt-1 shrink-0">›</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {tech.map(t => (
          <Badge key={t} label={t} accent="bg-accent-100 text-accent-700" />
        ))}
      </div>
    </div>
  )
}
