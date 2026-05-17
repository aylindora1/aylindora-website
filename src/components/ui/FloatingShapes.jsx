export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* big rose blob top-left */}
      <div className="absolute top-10 -left-12 w-40 h-40 rounded-full bg-rose-300 opacity-50 blur-2xl" />
      {/* amber circle */}
      <div className="absolute top-32 right-10 w-6 h-6 rounded-full bg-amber-400 border-thick border-ink" />
      {/* sky diamond */}
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-sky-400 border-thick border-ink rotate-45" />
      {/* emerald blob */}
      <div className="absolute bottom-20 right-1/3 w-32 h-32 rounded-full bg-emerald-300 opacity-40 blur-2xl" />
      {/* violet square */}
      <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-violet-400 border-thick border-ink" />
      {/* yellow accent */}
      <div className="absolute top-20 left-1/3 w-4 h-4 bg-yellow-300 border-thick border-ink rounded-sm" />
    </div>
  )
}
