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
      className="shrink-0 text-xs font-medium text-accent-600 hover:text-accent-700 transition-colors ml-2 underline underline-offset-2"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

export default function EducationContact() {
  return (
    <>
      {/* Education */}
      <section id="education" className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-24">
          <p className="section-label">Background</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
            Education
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
            {cv.education.map((edu, i) => (
              <div key={i} className="p-4 sm:p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                <p className="text-accent-600 font-semibold text-sm mb-1">{edu.period}</p>
                <h3 className="font-display text-base sm:text-lg font-bold text-gray-900 mb-1">{edu.institution}</h3>
                <p className="text-gray-600 text-sm mb-2">{edu.degree}</p>
                {edu.notes && (
                  <p className="text-gray-400 text-xs leading-relaxed">{edu.notes}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-accent-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-24">
          <p className="section-label">Let's talk</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-8 md:mb-12 max-w-xl">
            Whether you have a project in mind, a role to fill, or just want to say hello — my inbox is always open.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-3xl">
            {/* Form */}
            <form
              action={`mailto:${cv.contactEmail}`}
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
                  Your name
                </label>
                <input
                  id="name"
                  name="Name"
                  type="text"
                  placeholder="Jane Smith"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
                  Your email
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-accent-600 text-white text-sm font-semibold hover:bg-accent-700 transition-colors shadow-sm"
              >
                Send message
              </button>
            </form>

            {/* Direct contact info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Or email directly</p>
                <div className="flex items-center min-w-0">
                  <span className="text-gray-800 font-medium text-sm break-all min-w-0">{cv.contactEmail}</span>
                  <CopyButton text={cv.contactEmail} />
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-3">Find me online</p>
                <div className="space-y-2">
                  {cv.social.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.icon !== 'mail' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-accent-600 text-sm transition-colors"
                    >
                      <span className="font-medium shrink-0">{s.label}</span>
                      <span className="text-gray-400 shrink-0">→</span>
                      <span className="text-gray-400 text-xs truncate min-w-0">{s.href.replace('mailto:', '')}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
