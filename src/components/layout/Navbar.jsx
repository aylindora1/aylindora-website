import { useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useLanguage } from '../../i18n/LanguageContext'
import { LANGS } from '../../i18n/translations'

const NAV_META = [
  { key: 'education',  href: '#education',  hover: 'hover:bg-sky-300'     },
  { key: 'experience', href: '#experience', hover: 'hover:bg-rose-300'    },
  { key: 'skills',     href: '#skills',     hover: 'hover:bg-amber-300'   },
  { key: 'projects',   href: '#projects',   hover: 'hover:bg-emerald-300' },
  { key: 'contact',    href: '#contact',    hover: 'hover:bg-violet-300'  },
]

const ACTIVE_COLOR = {
  education:  'bg-sky-300',
  experience: 'bg-rose-300',
  skills:     'bg-amber-300',
  projects:   'bg-emerald-300',
  contact:    'bg-violet-300',
}

const SECTION_IDS = ['hero', 'education', 'experience', 'skills', 'projects', 'contact']

function LangSwitcher({ className = '' }) {
  const { lang, setLang } = useLanguage()
  return (
    <div className={`inline-flex items-center gap-1 rounded-xl border-thick border-ink bg-ink p-0.5 shadow-pop-sm ${className}`}>
      {LANGS.map(code => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={`Switch language to ${code.toUpperCase()}`}
            className={`px-2 py-1 rounded-lg text-xs font-black uppercase tracking-wider transition-colors ${
              active ? 'bg-emerald-400 text-ink' : 'bg-white text-ink/70 hover:text-ink'
            }`}
          >
            {code.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}

export default function Navbar() {
  const active = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)
  const { cv, ui } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b-thick border-b-2 border-ink">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a
          href="#hero"
          className="font-display font-black text-ink text-xl inline-flex items-center gap-1.5"
        >
          {cv.name.split(' ')[0]}
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border-thick border-ink" />
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_META.map(({ key, href, hover }) => {
            const isActive = active === key
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`px-3 py-1.5 rounded-xl text-sm font-bold border-thick border-transparent ${
                    isActive
                      ? `${ACTIVE_COLOR[key]} text-ink border-ink shadow-pop-sm`
                      : `text-ink ${hover}`
                  }`}
                >
                  {ui.nav[key]}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LangSwitcher />

          <button
            className="md:hidden p-2 rounded-xl text-ink border-thick border-ink bg-amber-300 shadow-pop-sm"
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
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t-thick border-t-2 border-ink bg-cream px-4 py-3">
          <ul className="flex flex-col gap-2">
            {NAV_META.map(({ key, href, hover }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-bold text-ink border-thick border-ink ${hover.replace('hover:', '')}`}
                >
                  {ui.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
