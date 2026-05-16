import { useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cv } from '../../data/cv'

const NAV_LINKS = [
  { label: 'Experience', href: '#experience', hover: 'hover:bg-rose-300'    },
  { label: 'Skills',     href: '#skills',     hover: 'hover:bg-amber-300'   },
  { label: 'Projects',   href: '#projects',   hover: 'hover:bg-emerald-300' },
  { label: 'Education',  href: '#education',  hover: 'hover:bg-sky-300'     },
  { label: 'Contact',    href: '#contact',    hover: 'hover:bg-violet-300'  },
]

const ACTIVE_COLOR = {
  experience: 'bg-rose-300',
  skills:     'bg-amber-300',
  projects:   'bg-emerald-300',
  education:  'bg-sky-300',
  contact:    'bg-violet-300',
}

const SECTION_IDS = ['hero', 'experience', 'skills', 'projects', 'education', 'contact']

export default function Navbar() {
  const active = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b-thick border-b-2 border-ink">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display font-black text-ink text-xl hover:scale-105 transition-transform inline-flex items-center gap-1.5"
        >
          {cv.name.split(' ')[0]}
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border-thick border-ink" />
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href, hover }) => {
            const id = href.slice(1)
            const isActive = active === id
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`px-3 py-1.5 rounded-xl text-sm font-bold border-thick border-transparent transition-all duration-150 ${
                    isActive
                      ? `${ACTIVE_COLOR[id]} text-ink border-ink shadow-pop-sm -translate-y-0.5`
                      : `text-ink ${hover}`
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          className="md:hidden p-2 rounded-xl text-ink border-thick border-ink bg-amber-300 shadow-pop-sm hover:-translate-y-0.5 hover:shadow-pop transition-all"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t-thick border-t-2 border-ink bg-cream px-4 py-3">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map(({ label, href, hover }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-bold text-ink border-thick border-ink ${hover.replace('hover:', '')}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
