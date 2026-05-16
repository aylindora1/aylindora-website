import { cv } from '../../data/cv'
import SocialLink from '../ui/SocialLink'
import FloatingShapes from '../ui/FloatingShapes'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <FloatingShapes />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-20 w-full relative z-10">

        {/* Mobile: compact header */}
        <div className="flex items-center gap-4 mb-8 md:hidden">
          <div className="relative shrink-0">
            <img
              src={cv.photo}
              alt={cv.name}
              className="w-16 h-16 rounded-2xl object-cover border-thick border-ink shadow-pop-sm"
            />
            {cv.available && (
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-thick border-ink animate-pulse" />
            )}
          </div>
          <div className="min-w-0">
            <p className="font-display font-black text-ink text-base leading-tight">{cv.name}</p>
            <p className="text-rose-500 text-sm font-bold">{cv.title}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

          {/* Text */}
          <div className="flex-1 min-w-0 text-center md:text-left">

            <div className="hidden md:block mb-6">
              {cv.available && (
                <div className="inline-flex items-center gap-2 bg-emerald-300 text-ink text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full border-thick border-ink shadow-pop-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-ink animate-pulse" />
                  Open for opportunities
                </div>
              )}
              <h1 className="font-display text-5xl lg:text-7xl font-black leading-[1.05] mb-4">
                <span className="text-ink">Hey, I'm </span>
                <span className="text-rainbow">{cv.name.split(' ')[0]}</span>
                <br />
                <span className="text-ink">{cv.name.split(' ').slice(1).join(' ')}</span>
                <span className="text-rose-500">.</span>
              </h1>
              <p className="font-display text-xl md:text-2xl font-bold text-ink/60 mb-6">
                {cv.title}
              </p>
            </div>

            <p className="text-ink/70 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-6 md:mb-8">
              {cv.bio}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-8 md:mb-10">
              {cv.social.map(s => (
                <SocialLink key={s.label} {...s} />
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="group px-6 py-3 rounded-2xl bg-rose-400 text-ink text-sm font-black uppercase tracking-wider border-thick border-ink shadow-pop hover:shadow-pop-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                See my work →
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl bg-amber-300 text-ink text-sm font-black uppercase tracking-wider border-thick border-ink shadow-pop hover:shadow-pop-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Say hello
              </a>
            </div>
          </div>

          {/* Desktop photo — sticker style */}
          <div className="hidden md:flex shrink-0 flex-col items-center gap-4">
            <div className="relative">
              <div className="w-64 lg:w-72 h-64 lg:h-72 rounded-3xl overflow-hidden border-thick border-ink shadow-pop-lg rotate-3 hover:rotate-0 transition-transform duration-300 bg-yellow-300">
                <img src={cv.photo} alt={cv.name} className="w-full h-full object-cover" />
              </div>
              {/* Sticker accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-400 border-thick border-ink shadow-pop-sm animate-float-slow" />
              <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full bg-violet-400 border-thick border-ink shadow-pop-sm font-black text-xs uppercase tracking-widest -rotate-6">
                Hi!
              </div>
              <div className="absolute top-1/2 -right-6 w-8 h-8 bg-sky-400 border-thick border-ink rotate-45 shadow-pop-sm animate-wiggle" />
            </div>

            {/* Stat row */}
            <div className="flex gap-3 mt-4">
              <div className="bg-rose-200 border-thick border-ink rounded-2xl px-4 py-2.5 text-center shadow-pop-sm -rotate-2">
                <p className="font-display font-black text-ink text-xl leading-none">{cv.experience.length}</p>
                <p className="text-ink/60 text-[10px] uppercase font-bold tracking-wider mt-1">roles</p>
              </div>
              <div className="bg-sky-200 border-thick border-ink rounded-2xl px-4 py-2.5 text-center shadow-pop-sm rotate-1">
                <p className="font-display font-black text-ink text-xl leading-none">{cv.projects.length}</p>
                <p className="text-ink/60 text-[10px] uppercase font-bold tracking-wider mt-1">projects</p>
              </div>
              <div className="bg-amber-200 border-thick border-ink rounded-2xl px-4 py-2.5 text-center shadow-pop-sm -rotate-1">
                <p className="font-display font-black text-ink text-xl leading-none">5+</p>
                <p className="text-ink/60 text-[10px] uppercase font-bold tracking-wider mt-1">years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-16 md:mt-24 -mx-4 sm:-mx-6 overflow-hidden border-y-2 border-thick border-ink bg-ink py-3">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4 shrink-0">
                <span className="font-display font-black text-cream text-lg">★ DESIGNS</span>
                <span className="font-display font-black text-rose-400 text-lg">★ BUILDS</span>
                <span className="font-display font-black text-cream text-lg">★ SHIPS</span>
                <span className="font-display font-black text-amber-400 text-lg">★ ITERATES</span>
                <span className="font-display font-black text-cream text-lg">★ COLLABORATES</span>
                <span className="font-display font-black text-emerald-400 text-lg">★ MENTORS</span>
                <span className="font-display font-black text-cream text-lg">★ LEARNS</span>
                <span className="font-display font-black text-sky-400 text-lg">★ TINKERS</span>
                <span className="font-display font-black text-cream text-lg">★ BREWS COFFEE</span>
                <span className="font-display font-black text-violet-400 text-lg">★ READS BOOKS</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
