import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

function CopyButton({ text }) {
  const { ui } = useLanguage()
  const [copied, setCopied] = useState(false)
  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button
      onClick={handleCopy}
      className="shrink-0 px-2.5 py-1 ml-2 rounded-lg bg-amber-300 border-thick border-ink text-ink text-[10px] font-black uppercase tracking-wider shadow-pop-sm"
    >
      {copied ? ui.contact.copied : ui.contact.copy}
    </button>
  )
}

export default function Contact() {
  const { cv, ui } = useLanguage()
  const t = ui.contact

  return (
    <section id="contact" className="relative" style={{ background: 'linear-gradient(135deg, #fecaca 0%, #fde68a 33%, #a7f3d0 66%, #bae6fd 100%)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <span className="section-label bg-rose-300">{t.label}</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-3">
          {t.headline1}<span className="text-violet-500">{t.headline2}</span>
        </h2>
        <p className="text-ink/70 text-sm md:text-base mb-12 max-w-xl font-medium">
          {t.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-3xl mr-1.5 md:mr-0">
          <form
            action={`mailto:${cv.contactEmail}`}
            method="POST"
            encType="text/plain"
            className="space-y-4 bg-white border-thick border-ink rounded-3xl p-4 sm:p-6 shadow-pop-sm sm:shadow-pop"
          >
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-ink mb-1.5" htmlFor="name">{t.formName}</label>
              <input
                id="name" name="Name" type="text" placeholder={t.formNamePh} required
                className="w-full px-4 py-2.5 rounded-xl border-thick border-ink bg-cream text-sm text-ink placeholder:text-ink/30 font-medium focus:outline-none focus:bg-amber-100 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-ink mb-1.5" htmlFor="email">{t.formEmail}</label>
              <input
                id="email" name="Email" type="email" placeholder={t.formEmailPh} required
                className="w-full px-4 py-2.5 rounded-xl border-thick border-ink bg-cream text-sm text-ink placeholder:text-ink/30 font-medium focus:outline-none focus:bg-amber-100 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-ink mb-1.5" htmlFor="message">{t.formMessage}</label>
              <textarea
                id="message" name="Message" rows={5}
                placeholder={t.formMessagePh} required
                className="w-full px-4 py-2.5 rounded-xl border-thick border-ink bg-cream text-sm text-ink placeholder:text-ink/30 font-medium focus:outline-none focus:bg-amber-100 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-rose-400 text-ink text-sm font-black uppercase tracking-widest border-thick border-ink shadow-pop"
            >
              {t.send}
            </button>
          </form>

          <div className="space-y-5">
            <div className="bg-white border-thick border-ink rounded-3xl p-4 sm:p-5 shadow-pop-sm sm:shadow-pop space-y-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-rose-600 mb-2">{t.emailLabel}</p>
                <div className="flex items-center min-w-0">
                  <span className="text-ink font-bold text-sm break-all min-w-0">{cv.contactEmail}</span>
                  <CopyButton text={cv.contactEmail} />
                </div>
              </div>
              {cv.phone && (
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-2">{t.phoneLabel}</p>
                  <div className="flex items-center min-w-0">
                    <span className="text-ink font-bold text-sm break-all min-w-0">{cv.phone}</span>
                    <CopyButton text={cv.phone} />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border-thick border-ink rounded-3xl p-4 sm:p-5 shadow-pop-sm sm:shadow-pop">
              <p className="text-[10px] font-black uppercase tracking-widest text-violet-600 mb-3">{t.socialLabel}</p>
              <div className="space-y-2.5">
                {cv.social.map((s, i) => {
                  const colors = ['bg-rose-200', 'bg-sky-200', 'bg-emerald-200']
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.icon !== 'mail' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between gap-3 ${colors[i % 3]} border-thick border-ink rounded-xl px-3 py-2 text-ink text-sm font-bold`}
                    >
                      <span className="shrink-0">{s.label}</span>
                      <span className="text-ink/40 text-xs truncate min-w-0">{s.href.replace('mailto:', '')}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            <p className="text-ink/60 text-xs leading-relaxed font-medium">
              {t.replyNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
