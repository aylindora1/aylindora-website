export const cv = {
  name: 'Aylin Leblebici',
  title: 'Full-Stack Software Engineer',
  bio: 'I craft fast, thoughtful digital products — from pixel-perfect UIs to robust backend systems.',
  photo: 'https://placehold.co/400x400/e9d5ff/6d28d9?text=AL',
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
    },
  ],

  skillCategories: [
    {
      category: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML/CSS'],
      accent: 'bg-violet-100 text-violet-700',
    },
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Storybook'],
      accent: 'bg-sky-100 text-sky-700',
    },
    {
      category: 'Backend & APIs',
      items: ['Node.js', 'FastAPI', 'GraphQL', 'REST', 'PostgreSQL'],
      accent: 'bg-emerald-100 text-emerald-700',
    },
    {
      category: 'Tools & Cloud',
      items: ['Git', 'Docker', 'GitHub Actions', 'Vercel', 'Figma'],
      accent: 'bg-amber-100 text-amber-700',
    },
  ],

  projects: [
    {
      title: 'Palet — Design Token Manager',
      description:
        'A web app that lets design teams manage, preview, and export design tokens (colors, spacing, typography) across Figma, CSS, and JSON formats. Used by 3 design teams internally at Trendyol.',
      image: 'https://placehold.co/600x340/ede9fe/7c3aed?text=Palet',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      repoUrl: 'https://github.com/aylin/palet',
      liveUrl: 'https://palet.app',
      featured: true,
    },
    {
      title: 'Karga — Parcel Tracker',
      description:
        'A real-time parcel tracking dashboard that aggregates shipment data from 4 Turkish cargo carriers into one timeline view. Sends push notifications on status changes.',
      image: 'https://placehold.co/600x340/dbeafe/2563eb?text=Karga',
      tech: ['Next.js', 'Tailwind', 'Prisma', 'Web Push'],
      repoUrl: 'https://github.com/aylin/karga',
      featured: true,
    },
    {
      title: 'Notlar — Markdown Notes',
      description:
        'A minimal, offline-first markdown note-taking app with folder organisation and full-text search. Stores notes in the browser using IndexedDB.',
      image: 'https://placehold.co/600x340/d1fae5/059669?text=Notlar',
      tech: ['React', 'IndexedDB', 'Vite'],
      repoUrl: 'https://github.com/aylin/notlar',
      liveUrl: 'https://notlar.vercel.app',
      featured: false,
    },
    {
      title: 'Günlük — Habit Tracker',
      description:
        'A daily habit tracker with streak visualisation and weekly progress charts. PWA-enabled so it installs like a native app on mobile.',
      image: 'https://placehold.co/600x340/fef3c7/d97706?text=Günlük',
      tech: ['React', 'PWA', 'Recharts'],
      repoUrl: 'https://github.com/aylin/gunluk',
      featured: false,
    },
  ],

  education: [
    {
      institution: 'Bilkent University',
      degree: 'B.Sc. Computer Engineering',
      period: '2015 – 2019',
      notes: 'GPA 3.72 / 4.00 · Undergraduate research in distributed systems',
    },
    {
      institution: 'Coursera / Meta',
      degree: 'Front-End Developer Professional Certificate',
      period: '2021',
      notes: '9-course specialisation covering React, UX fundamentals, and accessibility',
    },
  ],
};
