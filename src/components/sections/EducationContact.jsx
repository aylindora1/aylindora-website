import { useState } from 'react'
import { cv } from '../../data/cv'

function CopyButton({ text }) {
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
      className="shrink-0 px-2.5 py-1 ml-2 rounded-lg bg-amber-300 border-thick border-ink text-ink text-[10px] font-black uppercase tracking-wider shadow-pop-sm hover:-translate-y-0.5 hover:shadow-pop transition-all"
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  )
}

export default function EducationContact() {
  return (
    <>
      {/* Education */}
      <section id="education" className="relative" style={{ backgroundColor: '#fef3c7' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <span className="section-label bg-violet-300">how I got here</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-3">
            <span className="text-rainbow">Education</span>
          </h2>
          <p className="text-ink/60 text-sm md:text-base mb-12 max-w-xl font-medium">
            Formal training and the courses that filled the gaps.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl">
            {cv.education.map((edu, i) => (
              <div
                key={i}
                className={`relative bg-white border-thick border-ink rounded-3xl p-5 sm:p-6 shadow-pop hover:shadow-pop-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0`}
              >
                {/* corner ribbon */}
                <div className={`absolute -top-3 -right-3 ${edu.ribbon} border-thick border-ink rounded-full px-3 py-1 shadow-pop-sm`}>
                  <p className="text-ink font-black text-[10px] uppercase tracking-wider">{edu.period}</p>
                </div>
                <h3 className="font-display text-base sm:text-lg font-black text-ink mb-1 mt-2">{edu.institution}</h3>
                <p className="text-rose-600 text-sm font-bold mb-2">{edu.degree}</p>
                {edu.notes && (
                  <p className="text-ink/50 text-xs leading-relaxed">{edu.notes}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative" style={{ background: 'linear-gradient(135deg, #fecaca 0%, #fde68a 33%, #a7f3d0 66%, #bae6fd 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <span className="section-label bg-rose-300">don't be a stranger</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-3">
            Let's <span className="text-rainbow">Talk</span>
          </h2>
          <p className="text-ink/70 text-sm md:text-base mb-12 max-w-xl font-medium">
            Got a project, a role, or just a good idea? I'd genuinely love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-3xl">
            <form
              action={`mailto:${cv.contactEmail}`}
              method="POST"
              encType="text/plain"
              className="space-y-4 bg-white border-thick border-ink rounded-3xl p-5 sm:p-6 shadow-pop -rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-ink mb-1.5" htmlFor="name">Your name</label>
                <input
                  id="name" name="Name" type="text" placeholder="Jane Smith" required
                  className="w-full px-4 py-2.5 rounded-xl border-thick border-ink bg-cream text-sm text-ink placeholder:text-ink/30 font-medium focus:outline-none focus:bg-amber-100 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-ink mb-1.5" htmlFor="email">Your email</label>
                <input
                  id="email" name="Email" type="email" placeholder="jane@example.com" required
                  className="w-full px-4 py-2.5 rounded-xl border-thick border-ink bg-cream text-sm text-ink placeholder:text-ink/30 font-medium focus:outline-none focus:bg-amber-100 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-ink mb-1.5" htmlFor="message">Message</label>
                <textarea
                  id="message" name="Message" rows={5}
                  placeholder="Tell me what's on your mind..." required
                  className="w-full px-4 py-2.5 rounded-xl border-thick border-ink bg-cream text-sm text-ink placeholder:text-ink/30 font-medium focus:outline-none focus:bg-amber-100 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-rose-400 text-ink text-sm font-black uppercase tracking-widest border-thick border-ink shadow-pop hover:shadow-pop-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Send it ✦
              </button>
            </form>

            <div className="space-y-5">
              <div className="bg-white border-thick border-ink rounded-3xl p-5 shadow-pop rotate-1 hover:rotate-0 transition-transform">
                <p className="text-[10px] font-black uppercase tracking-widest text-rose-600 mb-2">Email me directly</p>
                <div className="flex items-center min-w-0">
                  <span className="text-ink font-bold text-sm break-all min-w-0">{cv.contactEmail}</span>
                  <CopyButton text={cv.contactEmail} />
                </div>
              </div>

              <div className="bg-white border-thick border-ink rounded-3xl p-5 shadow-pop -rotate-1 hover:rotate-0 transition-transform">
                <p className="text-[10px] font-black uppercase tracking-widest text-violet-600 mb-3">Find me online</p>
                <div className="space-y-2.5">
                  {cv.social.map((s, i) => {
                    const colors = ['bg-rose-200', 'bg-sky-200', 'bg-emerald-200']
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target={s.icon !== 'mail' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between gap-3 ${colors[i % 3]} border-thick border-ink rounded-xl px-3 py-2 text-ink text-sm font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform`}
                      >
                        <span className="shrink-0">{s.label}</span>
                        <span className="text-ink/40 text-xs truncate min-w-0">{s.href.replace('mailto:', '')}</span>
                      </a>
                    )
                  })}
                </div>
              </div>

              <p className="text-ink/60 text-xs leading-relaxed font-medium">
                I typically reply within a day or two. If something's urgent, email is your best bet ✦
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
