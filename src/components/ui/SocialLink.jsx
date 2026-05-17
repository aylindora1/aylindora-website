import GitHubIcon from './icons/GitHubIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import MailIcon from './icons/MailIcon'

const icons = { github: GitHubIcon, linkedin: LinkedInIcon, mail: MailIcon }
const bgByIcon = {
  github:   'bg-violet-200 hover:bg-violet-300',
  linkedin: 'bg-sky-200 hover:bg-sky-300',
  mail:     'bg-emerald-200 hover:bg-emerald-300',
}

export default function SocialLink({ label, href, icon }) {
  const Icon = icons[icon]
  return (
    <a
      href={href}
      target={icon !== 'mail' ? '_blank' : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border-thick border-ink text-ink ${bgByIcon[icon]} shadow-pop-sm`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-xs font-black uppercase tracking-wider">{label}</span>
    </a>
  )
}
