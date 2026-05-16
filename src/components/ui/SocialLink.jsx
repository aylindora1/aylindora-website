import GitHubIcon from './icons/GitHubIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import MailIcon from './icons/MailIcon'

const icons = { github: GitHubIcon, linkedin: LinkedInIcon, mail: MailIcon }

export default function SocialLink({ label, href, icon }) {
  const Icon = icons[icon]
  return (
    <a
      href={href}
      target={icon !== 'mail' ? '_blank' : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-2 text-gray-500 hover:text-accent-600 transition-colors duration-200 group"
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  )
}
