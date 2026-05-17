# Aylin Dora Leblebici — Personal Site

A trilingual (EN / FR / TR) personal portfolio I built for myself.
🔗 **Live**: https://www.aylindora.com

## What's in the site

| Section | Highlight |
| --- | --- |
| **Hero** | Intro, social links, animated marquee |
| **Education** | Degree card + EPFL spotlight panel (global standing, brand-red wordmark logo) |
| **Experience** | Teaching work — math & science tutoring |
| **Skills** | Languages, frontend, backend, AI & APIs |
| **Projects** | Aşçıbaşı (AI recipe web app) · Multiplayer physics game |
| **Contact** | `mailto:` form, copy-to-clipboard for email & phone, social links |

---

## Tech

- **Vite** + **React 19** — fast, modern, no router needed (single-page scroll)
- **Tailwind CSS** — utility-first styling with a custom neo-brutalist palette
- **No backend** — purely static, deploy-anywhere
- **i18n** — hand-rolled context + hook in `src/i18n/` (no library)
- **Contact form** — `mailto:` action (no third-party email service required)

---

## Running locally

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # ESLint
```

---

## Project layout

```
src/
├─ App.jsx                       # section composition + footer
├─ main.jsx                      # bootstraps + wraps app in LanguageProvider
├─ index.css                     # Tailwind layers + custom utilities
├─ components/
│  ├─ layout/Navbar.jsx          # nav, language switcher, active section
│  ├─ sections/                  # Hero, Education, Experience, Skills, Projects, Contact
│  └─ ui/                        # reusable bits: cards, links, animated shapes
├─ hooks/
│  └─ useActiveSection.js        # IntersectionObserver-based scroll spy
└─ i18n/
   ├─ LanguageContext.jsx        # <LanguageProvider /> + useLanguage()
   └─ translations.js            # all UI strings + CV content per language
```

---

## Adding or editing a language

All copy lives in `src/i18n/translations.js`. The file separates:

- **Styling / identity** that never translates (colors, icons, photo, social links) — once, in `SHARED`.
- **CV text** per language — in `CV_TEXT.{en, fr, tr}`.
- **UI strings** per language — in `UI.{en, fr, tr}`.

To add a new language, drop a fourth entry into both `CV_TEXT` and `UI`, then add the language code to the `LANGS` array. The navbar switcher and persistence layer pick it up automatically.

---

## Credits

Me, with the help of Claude Code.
