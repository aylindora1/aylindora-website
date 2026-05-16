import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement
      const scrolled = h.scrollTop
      const total = h.scrollHeight - h.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full transition-[width] duration-100"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #f43f5e, #f59e0b, #fde047, #10b981, #0ea5e9, #8b5cf6, #ec4899)',
        }}
      />
    </div>
  )
}
