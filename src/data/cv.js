export const cv = {
  name: 'Aylin Leblebici',
  title: 'Full-Stack Software Engineer',
  bio: 'I craft fast, thoughtful digital products — from pixel-perfect UIs to robust backend systems.',
  photo: 'https://placehold.co/400x400/fde047/0f0e17?text=AL',
  contactEmail: 'aylin.d.leblebici@gmail.com',
  available: true,

  social: [
    { label: 'GitHub',   href: 'https://github.com/aylin',         icon: 'github'   },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/aylin',     icon: 'linkedin' },
    { label: 'Email',    href: 'mailto:aylin.d.leblebici@gmail.com', icon: 'mail'     },
  ],

  experience: [
    {
      company: 'Trendyol Group',
      role: 'Senior Frontend Engineer',
      period: 'Mar 2022 – Present',
      location: 'Istanbul, TR (Hybrid)',
      bullets: [
        'Led a cross-functional team of 5 to rebuild the seller dashboard in React 18, cutting page load time by 47%.',
        'Designed and shipped a shared component library used across 6 product squads, reducing UI inconsistencies by 80%.',
        'Introduced Lighthouse CI into the release pipeline, enforcing performance budgets on every merge.',
        'Mentored 3 junior engineers through weekly code reviews and pair-programming sessions.',
      ],
      tech: ['React', 'TypeScript', 'GraphQL', 'Storybook'],
      dotColor: 'bg-rose-400',
      shadowColor: 'shadow-pop-pink',
    },
    {
      company: 'Getir',
      role: 'Frontend Engineer',
      period: 'Jun 2020 – Feb 2022',
      location: 'Istanbul, TR',
      bullets: [
        'Built the real-time order tracking map feature using Mapbox GL, serving 2M+ daily active users.',
        'Migrated the checkout flow from a legacy jQuery codebase to React, removing 14k lines of dead code.',
        'Collaborated with the mobile team to align design tokens across web and React Native.',
      ],
      tech: ['React', 'Mapbox GL', 'Redux', 'Node.js'],
      dotColor: 'bg-amber-400',
      shadowColor: 'shadow-pop-amber',
    },
    {
      company: 'Obase',
      role: 'Junior Web Developer',
      period: 'Sep 2019 – May 2020',
      location: 'Ankara, TR',
      bullets: [
        'Developed internal data visualisation dashboards for logistics clients using D3.js and Vue 2.',
        'Integrated third-party REST APIs for shipment tracking and exposed them through a unified proxy layer.',
      ],
      tech: ['Vue 2', 'D3.js', 'Python', 'FastAPI'],
      dotColor: 'bg-emerald-400',
      shadowColor: 'shadow-pop-emerald',
    },
  ],

  skillCategories: [
    {
      category: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML/CSS'],
      bg: 'bg-rose-200',
      badge: 'bg-white text-rose-700 border-rose-700',
      emoji: '✦',
    },
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Storybook'],
      bg: 'bg-amber-200',
      badge: 'bg-white text-amber-700 border-amber-700',
      emoji: '◆',
    },
    {
      category: 'Backend & APIs',
      items: ['Node.js', 'FastAPI', 'GraphQL', 'REST', 'PostgreSQL'],
      bg: 'bg-emerald-200',
      badge: 'bg-white text-emerald-700 border-emerald-700',
      emoji: '●',
    },
    {
      category: 'Tools & Cloud',
      items: ['Git', 'Docker', 'GitHub Actions', 'Vercel', 'Figma'],
      bg: 'bg-sky-200',
      badge: 'bg-white text-sky-700 border-sky-700',
      emoji: '▲',
    },
  ],

  projects: [
    {
      title: 'Palet — Design Token Manager',
      description:
        'A web app that lets design teams manage, preview, and export design tokens (colors, spacing, typography) across Figma, CSS, and JSON formats. Used by 3 design teams internally at Trendyol.',
      image: 'https://placehold.co/600x340/fb7185/ffffff?text=Palet',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      repoUrl: 'https://github.com/aylin/palet',
      liveUrl: 'https://palet.app',
      featured: true,
      accentColor: 'bg-rose-400',
      tiltClass: '-rotate-1',
    },
    {
      title: 'Karga — Parcel Tracker',
      description:
        'A real-time parcel tracking dashboard that aggregates shipment data from 4 Turkish cargo carriers into one timeline view. Sends push notifications on status changes.',
      image: 'https://placehold.co/600x340/0ea5e9/ffffff?text=Karga',
      tech: ['Next.js', 'Tailwind', 'Prisma', 'Web Push'],
      repoUrl: 'https://github.com/aylin/karga',
      featured: true,
      accentColor: 'bg-sky-400',
      tiltClass: 'rotate-1',
    },
    {
      title: 'Notlar — Markdown Notes',
      description:
        'A minimal, offline-first markdown note-taking app with folder organisation and full-text search. Stores notes in the browser using IndexedDB.',
      image: 'https://placehold.co/600x340/10b981/ffffff?text=Notlar',
      tech: ['React', 'IndexedDB', 'Vite'],
      repoUrl: 'https://github.com/aylin/notlar',
      liveUrl: 'https://notlar.vercel.app',
      featured: false,
      accentColor: 'bg-emerald-400',
      tiltClass: '-rotate-1',
    },
    {
      title: 'Günlük — Habit Tracker',
      description:
        'A daily habit tracker with streak visualisation and weekly progress charts. PWA-enabled so it installs like a native app on mobile.',
      image: 'https://placehold.co/600x340/8b5cf6/ffffff?text=Gunluk',
      tech: ['React', 'PWA', 'Recharts'],
      repoUrl: 'https://github.com/aylin/gunluk',
      featured: false,
      accentColor: 'bg-violet-400',
      tiltClass: 'rotate-1',
    },
  ],

  education: [
    {
      institution: 'Bilkent University',
      degree: 'B.Sc. Computer Engineering',
      period: '2015 – 2019',
      notes: 'GPA 3.72 / 4.00 · Undergraduate research in distributed systems',
      ribbon: 'bg-violet-400',
    },
    {
      institution: 'Coursera / Meta',
      degree: 'Front-End Developer Professional Certificate',
      period: '2021',
      notes: '9-course specialisation covering React, UX fundamentals, and accessibility',
      ribbon: 'bg-amber-400',
    },
  ],
};
