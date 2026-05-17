// Language-agnostic styling + identity data — shared across all languages
const SHARED = {
  name: 'Aylin Dora Leblebici',
  photo: '../../DoraPic.jpeg',
  contactEmail: 'aylin.d.leblebici@gmail.com',
  phone: '+41 78 307 84 18',
  available: true,

  social: [
    { label: 'GitHub',   href: 'https://github.com/aylindora1',                                              icon: 'github'   },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aylin-dora-leblebici-008015264/',                icon: 'linkedin' },
    { label: 'Email',    href: 'mailto:aylin.d.leblebici@gmail.com',                                         icon: 'mail'     },
  ],

  experienceStyle: [
    { company: 'Saint Benoît Highschool', tech: ['Math', 'Physics', 'Pedagogy'], dotColor: 'bg-rose-400', shadowColor: 'shadow-pop-pink' },
  ],

  skillStyle: [
    { items: ['Java', 'JavaScript', 'Python', 'C', 'Scala', 'SQL'], bg: 'bg-rose-200',    badge: 'bg-white text-rose-700 border-rose-700',       emoji: '✦' },
    { items: ['React', 'Vite', 'HTML5', 'CSS3'],                    bg: 'bg-amber-200',   badge: 'bg-white text-amber-700 border-amber-700',     emoji: '◆' },
    { items: ['Node.js', 'Express', 'REST APIs'],                   bg: 'bg-emerald-200', badge: 'bg-white text-emerald-700 border-emerald-700', emoji: '●' },
    { items: ['Hugging Face', 'LLM Integration', 'Inference API'],  bg: 'bg-sky-200',     badge: 'bg-white text-sky-700 border-sky-700',         emoji: '▲' },
  ],

  projectStyle: [
    { image: 'https://placehold.co/600x340/fb7185/ffffff?text=Ascibasi',     tech: ['React', 'Hugging Face', 'LLM', 'Node.js'], featured: false, accentColor: 'bg-rose-400' },
    { image: 'https://placehold.co/600x340/0ea5e9/ffffff?text=Physics+Game', tech: ['Phaser 3', 'Matter.js', 'Socket.IO'],      featured: false, accentColor: 'bg-sky-400'  },
  ],

  educationStyle: [
    { institution: 'EPFL — École Polytechnique Fédérale de Lausanne', ribbon: 'bg-violet-400' },
  ],

  languageStyle: [
    { accent: 'bg-rose-200 text-rose-800 border-rose-700' },
    { accent: 'bg-sky-200 text-sky-800 border-sky-700' },
    { accent: 'bg-emerald-200 text-emerald-800 border-emerald-700' },
  ],
};

// Per-language CV content
const CV_TEXT = {
  en: {
    title: 'Computer Engineering Student @ EPFL',
    bio: 'Second-year Computer Engineering student at EPFL with strong foundations in software engineering. Experienced in building full-stack AI applications.',
    location: 'Lausanne, Switzerland',
    experience: [{
      role: 'STEM Tutor',
      period: '2023 – Present',
      location: 'Istanbul, TR',
      bullets: [
        'Teach mathematics and science to high school students.',
        'Support students in exam preparation through tailored study plans and problem-solving sessions.',
      ],
    }],
    skillCategories: [
      { category: 'Programming' },
      { category: 'Frontend'    },
      { category: 'Backend'     },
      { category: 'AI & APIs'   },
    ],
    projects: [
      {
        title: 'Aşçıbaşı — AI Recipe Web App',
        description: 'A full-stack AI-powered cooking assistant. Designed a responsive React frontend with dynamic ingredient handling, integrated Hugging Face LLM models for real-time recipe generation, and crafted the UI branding and custom iconography.',
      },
      {
        title: 'Multiplayer Real-Time Physics Game',
        description: 'A browser-based multiplayer game with realistic physics. Built a server-authoritative architecture, implemented physics simulation with Matter.js, and managed real-time synchronization across clients over a local network.',
      },
    ],
    education: [{
      degree: 'B.Sc. Computer Engineering',
      period: '2024 – 2027 (expected)',
      notes: 'Completed CMS (Mathematical Preparation) foundation year.',
    }],
    languages: [
      { name: 'Turkish', level: 'Native'         },
      { name: 'French',  level: 'DALF C1'        },
      { name: 'English', level: 'IELTS Band 8.0' },
    ],
  },

  fr: {
    title: 'Étudiante en Informatique @ EPFL',
    bio: "Étudiante en deuxième année de Génie Informatique à l'EPFL avec de solides bases en ingénierie logicielle. Expérimentée dans la création d'applications IA full-stack.",
    location: 'Lausanne, Suisse',
    experience: [{
      role: 'Tutrice STEM',
      period: "2023 – Aujourd'hui",
      location: 'Istanbul, TR',
      bullets: [
        'Enseigne les mathématiques et les sciences aux lycéens.',
        "Accompagne les élèves dans la préparation aux examens avec des plans d'étude sur mesure et des séances de résolution de problèmes.",
      ],
    }],
    skillCategories: [
      { category: 'Programmation' },
      { category: 'Frontend'      },
      { category: 'Backend'       },
      { category: 'IA & APIs'     },
    ],
    projects: [
      {
        title: 'Aşçıbaşı — Application Web de Recettes IA',
        description: "Un assistant culinaire IA full-stack. J'ai conçu un frontend React responsive avec gestion dynamique des ingrédients, intégré des modèles LLM Hugging Face pour la génération de recettes en temps réel, et créé l'identité visuelle et l'iconographie.",
      },
      {
        title: 'Jeu Multijoueur de Physique en Temps Réel',
        description: "Un jeu multijoueur navigateur avec une physique réaliste. J'ai construit une architecture serveur-autoritaire, implémenté la simulation physique avec Matter.js, et géré la synchronisation en temps réel entre clients sur un réseau local.",
      },
    ],
    education: [{
      degree: 'B.Sc. en Génie Informatique',
      period: '2024 – 2027 (prévu)',
      notes: 'Année prépa CMS (Cours de mathématiques spéciales) terminée.',
    }],
    languages: [
      { name: 'Turc',      level: 'Langue maternelle' },
      { name: 'Français',  level: 'DALF C1'           },
      { name: 'Anglais',   level: 'IELTS 8.0'         },
    ],
  },

  tr: {
    title: "EPFL'de Bilgisayar Mühendisliği Öğrencisi",
    bio: "EPFL'de Bilgisayar Mühendisliği ikinci sınıf öğrencisiyim; yazılım mühendisliğinde sağlam temellere sahibim. Full-stack yapay zeka uygulamaları geliştirme deneyimim var.",
    location: 'Lausanne, İsviçre',
    experience: [{
      role: 'Fen Özel Ders Hocası',
      period: '2023 – Günümüz',
      location: 'İstanbul, TR',
      bullets: [
        'Lise öğrencilerine matematik ve fen bilimleri öğretiyorum.',
        'Öğrencilere sınav hazırlığında özel çalışma planları ve problem çözme oturumlarıyla destek oluyorum.',
      ],
    }],
    skillCategories: [
      { category: 'Programlama'        },
      { category: 'Frontend'           },
      { category: 'Backend'            },
      { category: 'Yapay Zeka & API'   },
    ],
    projects: [
      {
        title: 'Aşçıbaşı — Yapay Zekâ Yemek Tarifi Web Uygulaması',
        description: 'Yapay zeka destekli, full-stack bir yemek asistanı. Dinamik malzeme yönetimi olan duyarlı bir React frontend tasarladım, gerçek zamanlı tarif üretimi için Hugging Face LLM modellerini entegre ettim ve marka kimliği ile özel ikonografisini hazırladım.',
      },
      {
        title: 'Çok Oyunculu Gerçek Zamanlı Fizik Oyunu',
        description: 'Gerçekçi fizikli, tarayıcı tabanlı çok oyunculu bir oyun. Sunucu-yetkili bir mimari kurdum, Matter.js ile fizik simülasyonunu uyguladım ve yerel ağ üzerinden istemciler arasında gerçek zamanlı senkronizasyonu yönettim.',
      },
    ],
    education: [{
      degree: 'Lisans, Bilgisayar Mühendisliği',
      period: '2024 – 2027 (beklenen)',
      notes: 'CMS (Üst Matematik) hazırlık yılını tamamladım.',
    }],
    languages: [
      { name: 'Türkçe',    level: 'Ana dil'   },
      { name: 'Fransızca', level: 'DALF C1'   },
      { name: 'İngilizce', level: 'IELTS 8.0' },
    ],
  },
};

function mergeArr(styleArr, textArr) {
  return styleArr.map((s, i) => ({ ...s, ...textArr[i] }));
}

export function buildCV(lang) {
  const t = CV_TEXT[lang] || CV_TEXT.en;
  return {
    ...SHARED,
    title: t.title,
    bio: t.bio,
    location: t.location,
    experience:      mergeArr(SHARED.experienceStyle, t.experience),
    skillCategories: mergeArr(SHARED.skillStyle,      t.skillCategories),
    projects:        mergeArr(SHARED.projectStyle,    t.projects),
    education:       mergeArr(SHARED.educationStyle,  t.education),
    languages:       mergeArr(SHARED.languageStyle,   t.languages),
  };
}

// UI strings (everything outside the CV data)
export const UI = {
  en: {
    nav: { experience: 'Experience', skills: 'Skills', projects: 'Projects', education: 'Education', contact: 'Contact' },
    hero: {
      available: 'Open for opportunities',
      greeting: "Hey, I'm ",
      seeWork: 'See my work →',
      sayHello: 'Say hello',
      statProjects: 'projects',
      statLanguages: 'languages',
      marquee: ['★ CODES', '★ BUILDS', '★ SHIPS', '★ DESIGNS', '★ TEACHES', '★ LEARNS', '★ TINKERS', '★ EXPERIMENTS', '★ TRILINGUAL', "★ EPFL '27"],
    },
    experience: { label: 'what I do', headline1: 'Teaching ', headline2: 'Experience', subtitle: 'Sharing what I love with the next generation of curious minds. ★' },
    skills:     { label: 'my toolkit', headline1: 'Skills & ', headline2: 'Stack', subtitle: "Tools I've used enough to trust — and a few I'm still falling in love with." },
    projects:   { label: "things I've shipped", headline1: '', headline2: 'Projects', headline3: ' & Side Quests', subtitle: 'Side projects I built because I wanted them to exist — building is how I learn.' },
    education:  {
      label: 'how I got here',
      headline2: 'Education',
      subtitle: 'Formal training and the courses that filled the gaps.',
      languagesLabel: 'words I speak',
      languagesHeading: 'Languages',
      spotlight: {
        label: 'why EPFL?',
        headline: 'A world-class engineering school',
        description: "EPFL is consistently ranked among the world's top 20 universities and is one of the leading institutions for engineering, computer science, and technology in continental Europe. Its campus in Lausanne brings together students and researchers from over 120 countries.",
        stats: [
          'Top 20 worldwide · QS World Rankings',
          "Among Europe's top engineering schools",
          'Renowned for AI, robotics & computer science',
          '120+ nationalities on campus',
        ],
      },
    },
    contact: {
      label: "don't be a stranger",
      headline1: "Let's ", headline2: 'Talk',
      subtitle: "Got a project, a role, or just a good idea? I'd genuinely love to hear from you.",
      formName: 'Your name',           formNamePh: 'Jane Smith',
      formEmail: 'Your email',         formEmailPh: 'jane@example.com',
      formMessage: 'Message',          formMessagePh: "Tell me what's on your mind...",
      send: 'Send it ✦',
      emailLabel: 'Email me directly',
      phoneLabel: 'Or call / text',
      socialLabel: 'Find me online',
      copy: 'Copy', copied: '✓ Copied',
      replyNote: "I typically reply within a day or two. If something's urgent, email is your best bet ✦",
    },
    footer: { madeWith: 'made with', and: 'and', caffeine: 'caffeine' },
  },

  fr: {
    nav: { experience: 'Expérience', skills: 'Compétences', projects: 'Projets', education: 'Formation', contact: 'Contact' },
    hero: {
      available: 'Ouverte aux opportunités',
      greeting: 'Salut, je suis ',
      seeWork: 'Voir mes projets →',
      sayHello: 'Dites bonjour',
      statProjects: 'projets',
      statLanguages: 'langues',
      marquee: ['★ CODE', '★ CONSTRUIT', '★ LIVRE', '★ DESSINE', '★ ENSEIGNE', '★ APPREND', '★ BRICOLE', '★ EXPÉRIMENTE', '★ TRILINGUE', "★ EPFL '27"],
    },
    experience: { label: 'ce que je fais', headline1: 'Expérience en ', headline2: 'Enseignement', subtitle: "Partager ce que j'aime avec la prochaine génération d'esprits curieux. ★" },
    skills:     { label: 'ma boîte à outils', headline1: 'Compétences & ', headline2: 'Outils', subtitle: "Des outils que j'ai assez utilisés pour leur faire confiance — et quelques-uns dont je tombe encore amoureuse." },
    projects:   { label: "ce que j'ai livré", headline1: '', headline2: 'Projets', headline3: ' & Quêtes annexes', subtitle: "Des projets perso que j'ai construits parce que je voulais qu'ils existent — construire, c'est apprendre." },
    education:  {
      label: 'comment je suis arrivée ici',
      headline2: 'Formation',
      subtitle: 'Mon parcours académique et les cours qui ont comblé les lacunes.',
      languagesLabel: 'les langues que je parle',
      languagesHeading: 'Langues',
      spotlight: {
        label: "pourquoi l'EPFL ?",
        headline: "Une école d'ingénieurs de classe mondiale",
        description: "L'EPFL est régulièrement classée parmi les 20 meilleures universités au monde et figure parmi les institutions de pointe en ingénierie, informatique et technologie en Europe continentale. Son campus à Lausanne accueille des étudiants et chercheurs de plus de 120 pays.",
        stats: [
          'Top 20 mondial · QS World Rankings',
          "Parmi les meilleures écoles d'ingénieurs d'Europe",
          'Reconnue en IA, robotique et informatique',
          '+120 nationalités sur le campus',
        ],
      },
    },
    contact: {
      label: 'restez en contact',
      headline1: 'On en ', headline2: 'parle ?',
      subtitle: "Un projet, un poste, ou juste une bonne idée ? J'adorerais avoir de vos nouvelles.",
      formName: 'Votre nom',           formNamePh: 'Jane Smith',
      formEmail: 'Votre email',        formEmailPh: 'jane@example.com',
      formMessage: 'Message',          formMessagePh: 'Dites-moi ce qui vous préoccupe...',
      send: 'Envoyer ✦',
      emailLabel: 'Écrivez-moi directement',
      phoneLabel: 'Ou appelez / SMS',
      socialLabel: 'Trouvez-moi en ligne',
      copy: 'Copier', copied: '✓ Copié',
      replyNote: "Je réponds généralement sous un jour ou deux. Si c'est urgent, l'email est le meilleur moyen ✦",
    },
    footer: { madeWith: 'fait avec', and: 'et', caffeine: 'caféine' },
  },

  tr: {
    nav: { experience: 'Deneyim', skills: 'Yetenekler', projects: 'Projeler', education: 'Eğitim', contact: 'İletişim' },
    hero: {
      available: 'Fırsatlara açığım',
      greeting: 'Merhaba, ben ',
      seeWork: 'Projelerime bak →',
      sayHello: 'Selam ver',
      statProjects: 'proje',
      statLanguages: 'dil',
      marquee: ['★ KODLAR', '★ İNŞA EDER', '★ YAYINLAR', '★ TASARLAR', '★ ÖĞRETİR', '★ ÖĞRENİR', '★ KURCALAR', '★ PROJELER', '★ ÜÇ DİL', "★ EPFL '27"],
    },
    experience: { label: 'ne yapıyorum', headline1: 'Öğretmenlik ', headline2: 'Deneyimi', subtitle: 'Sevdiğim şeyleri meraklı zihinlerin yeni nesliyle paylaşıyorum. ★' },
    skills:     { label: 'ekipmanım', headline1: 'Yetenekler & ', headline2: 'Araçlar', subtitle: 'Güvenecek kadar kullandığım araçlar — ve henüz aşık olmaya başladıklarım.' },
    projects:   { label: 'yayınladıklarım', headline1: '', headline2: 'Projeler', headline3: ' ve Yan Görevler', subtitle: 'Var olmalarını istediğim için inşa ettiğim yan projeler — inşa etmek öğrenme yolum.' },
    education:  {
      label: 'buraya nasıl geldim',
      headline2: 'Eğitim',
      subtitle: 'Resmi eğitim ve aradaki boşlukları dolduran dersler.',
      languagesLabel: 'konuştuğum diller',
      languagesHeading: 'Diller',
      spotlight: {
        label: 'neden EPFL?',
        headline: 'Dünya çapında bir mühendislik okulu',
        description: "EPFL, dünyanın en iyi 20 üniversitesi arasında düzenli olarak yer alıyor ve Avrupa'da mühendislik, bilgisayar bilimi ve teknoloji alanlarında önde gelen kurumlardan biri. Lozan'daki kampüsü 120'den fazla ülkeden öğrenci ve araştırmacıyı bir araya getiriyor.",
        stats: [
          "Dünyada ilk 20 · QS Dünya Sıralaması",
          "Avrupa'nın en iyi mühendislik okulları arasında",
          'Yapay zeka, robotik ve bilgisayar biliminde öncü',
          '120+ ülkeden öğrenci',
        ],
      },
    },
    contact: {
      label: 'tanışalım',
      headline1: 'Hadi ', headline2: 'Konuşalım',
      subtitle: 'Bir projeniz, iş ilanınız ya da güzel bir fikriniz mi var? Sizden haber almak için sabırsızlanıyorum.',
      formName: 'Adınız',              formNamePh: 'Jane Smith',
      formEmail: 'E-postanız',         formEmailPh: 'jane@example.com',
      formMessage: 'Mesaj',            formMessagePh: 'Aklınızdan geçeni anlatın...',
      send: 'Gönder ✦',
      emailLabel: 'Doğrudan e-posta gönderin',
      phoneLabel: 'Veya arayın / mesaj',
      socialLabel: 'Beni internette bulun',
      copy: 'Kopyala', copied: '✓ Kopyalandı',
      replyNote: 'Genelde bir-iki gün içinde yanıtlarım. Acil bir şey varsa e-posta en iyi yol ✦',
    },
    footer: { madeWith: 'yapım malzemeleri:', and: 've', caffeine: 'kafein' },
  },
};

export const LANGS = ['en', 'fr', 'tr'];
