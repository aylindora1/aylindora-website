import ExternalLinkIcon from './icons/ExternalLinkIcon'
import GitHubIcon from './icons/GitHubIcon'

export default function ProjectCard({ title, description, image, tech, liveUrl, repoUrl, featured, accentColor }) {
  return (
    <div className={`flex flex-col rounded-3xl bg-white border-thick border-ink overflow-hidden shadow-pop ${featured ? 'md:col-span-2' : ''}`}>

      <div className="relative overflow-hidden border-b-thick border-b-2 border-ink">
        <img
          src={image}
          alt={title}
          className="w-full object-cover h-40 sm:h-52"
        />
        {featured && (
          <span className={`absolute top-3 right-3 ${accentColor} text-ink text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border-thick border-ink shadow-pop-sm`}>
            ★ Featured
          </span>
        )}
        {/* corner colored circle accent */}
        <span className={`absolute -bottom-3 -left-3 w-8 h-8 rounded-full ${accentColor} border-thick border-ink`} />
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="font-display text-lg sm:text-xl font-black text-ink mb-2">{title}</h3>

        <p className="text-ink/60 text-sm leading-relaxed flex-1 mb-4">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {tech.map(t => (
            <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-yellow-100 text-ink font-bold border-thick border-ink">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-ink text-cream text-xs font-black uppercase tracking-wider"
            >
              <ExternalLinkIcon className="w-3.5 h-3.5" />
              Live
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border-thick border-ink text-ink text-xs font-black uppercase tracking-wider"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
