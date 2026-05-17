import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { buildCV, UI, LANGS } from './translations'

const STORAGE_KEY = 'site-lang'

function detectInitialLang() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && LANGS.includes(stored)) return stored
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase()
  if (LANGS.includes(browser)) return browser
  return 'en'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({
    lang,
    setLang: (l) => { if (LANGS.includes(l)) setLangState(l) },
    cv: buildCV(lang),
    ui: UI[lang],
  }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
