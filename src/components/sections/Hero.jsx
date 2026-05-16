import { cv } from '../../data/cv'
import SocialLink from '../ui/SocialLink'

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-24 w-full">

        {/* Mobile header: small avatar + name inline */}
        <div className="flex items-center gap-4 mb-6 md:hidden">
          <img
            src={cv.photo}
            alt={cv.name}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-accent-100 shrink-0"
          />
          <div className="min-w-0">
            {cv.available && (
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available
              </div>
            )}
            <p className="font-display font-bold text-gray-900 text-base leading-tight">{cv.name}</p>
            <p className="text-accent-500 text-sm font-medium">{cv.title}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

          {/* Text content */}
          <div className="flex-1 min-w-0 text-center md:text-left">

            {/* Desktop only: available badge + big heading */}
            <div className="hidden md:block">
              {cv.available && (
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for new opportunities
                </div>
              )}
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Hi, I'm{' '}
                <span className="text-accent-500">{cv.name.split(' ')[0]}</span>
                <br />
                {cv.name.split(' ').slice(1).join(' ')}
              </h1>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-gray-400 mb-6">
                {cv.title}
              </h2>
            </div>

            {/* Bio — shown on both */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-6 md:mb-8">
              {cv.bio}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-6 md:mb-10">
              {cv.social.map(s => (
                <SocialLink key={s.label} {...s} />
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl bg-accent-600 text-white text-sm font-semibold hover:bg-accent-700 transition-colors shadow-sm shadow-accent-200"
              >
                View my work
              </a>
              <a
                href={`mailto:${cv.contactEmail}`}
                className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:border-accent-300 hover:text-accent-600 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Desktop only: large photo with decorative blobs */}
          <div className="hidden md:block shrink-0">
            <div className="relative">
              <div className="w-64 md:w-72 h-64 md:h-72 rounded-3xl overflow-hidden ring-4 ring-accent-100">
                <img
                  src={cv.photo}
                  alt={cv.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl bg-accent-100" />
              <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-sky-100" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
