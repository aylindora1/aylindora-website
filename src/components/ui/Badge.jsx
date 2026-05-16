export default function Badge({ label, accent = 'bg-white text-ink border-thick border-ink' }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${accent}`}>
      {label}
    </span>
  )
}
