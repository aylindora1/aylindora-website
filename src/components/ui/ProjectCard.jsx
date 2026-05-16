import ExternalLinkIcon from './icons/ExternalLinkIcon'
import GitHubIcon from './icons/GitHubIcon'

export default function ProjectCard({ title, description, image, tech, liveUrl, repoUrl, featured }) {
  return (
    <div className={`group flex flex-col rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${featured ? 'md:col-span-2' : ''}`}>
      <div className="overflow-hidden bg-accent-50">
        <img
          src={image}
          alt={title}
          className="w-full object-cover h-36 sm:h-44 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-base sm:text-lg font-semibold text-gray-900">{title}</h3>
          {featured && (
            <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
              Featured
            </span>
          )}
        </div>

        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
          {tech.map(t => (
            <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
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
              className="flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
            >
              <ExternalLinkIcon />
              Live site
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
