export const navLinks = [
  { href: '/systems', label: 'Systems' },
  { href: '/work', label: 'Work' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/transmissions', label: 'Transmissions' },
  { href: '/connect', label: 'Connect' },
] as const;

export const content = {
  nav: {
    systems: 'Systems',
    work: 'Work',
    tutorials: 'Tutorials',
    transmissions: 'Transmissions',
    connect: 'Connect',
    menu: 'Menu',
    close: 'Close',
  },

  footer: {
    description:
      'Tools and frameworks for immersive experience designers. Building the future of narrative design through systematic innovation.',
    newsletterDescription:
      'Get valuable insights on immersive design, narrative frameworks, and experience creation straight to your inbox.',
    emailPlaceholder: 'Your email here',
    legalPrefix: 'By signing up, you agree to our',
    legalLinkText: 'Privacy Policy',
    legalSuffix: '. Unsubscribe anytime.',
    copyright: 'KabutoLab™ | LIS | LX',
  },

  cookie: {
    message:
      'We use cookies to analyze site traffic and improve your experience. By clicking "Accept", you consent to our use of cookies.',
    learnMore: 'Learn more',
    accept: 'Accept',
    decline: 'Decline',
  },

  hero: {
    headingLine1: 'Interaction Design.',
    headingLine2: 'HCI Research. Making.',
    subheading:
      'A practice at the intersection of human behavior, immersive technology, and AI systems.',
    cta1: 'See the Work',
    cta2: 'Get in touch',
  },

  aboutStrip: {
    bio: 'Kabuto Lab is the practice of Christian Ramírez Toro — interaction designer, HCI researcher, and builder based in Lisbon. 15 years working at the edges of design, behavior, and technology. Currently building Avatar Lab, researching immersive environments for human wellbeing, and finishing a new Galea record. The work moves across fields because the problems do too.',
    linkGalea: 'Galea on YouTube ↗',
    linkTutorials: 'VR Tutorials ↗',
    linkPortfolio: 'CV / Portfolio PDF ↗',
  },

  signalStrip: {
    line1: 'MSc Interaction Design · Universidade de Lisboa',
    line2: 'EIMAD 2026 · BoREAL: VR for stress mitigation',
    line3Handle: '@kabutolab',
    line3Suffix: ' · Unity · Meta Quest · VR tutorials',
  },

  blog: {
    heading: 'Transmissions',
    subheading: 'Research notes, build logs, and releases',
    viewAll: 'View All →',
    viewAllMobile: 'View All Articles →',
    readArticle: 'Read Article →',
  },

  productScroll: {
    ctaHeadingDesktop: 'Explore All Products',
    ctaButtonDesktop: 'View Collection',
    ctaHeadingMobile: 'View All',
    ctaButtonMobile: 'Products',
  },

  services: {
    sectionLabel: '⬟ Services',
    heading: 'Need a complete immersive experience designed and delivered?',
    subtext:
      'Custom experience design from research to deployment. VR training that changes behavior. AR simulations that compress learning. Mobile experiences that drive real transformation.',
    service1Title: 'Full Experience Design',
    service1Description:
      'Create experiences that captivate and engage your audience with cutting-edge design principles.',
    service2Title: 'Strategic Design Consultation',
    service2Description:
      'Research-driven guidance for your existing immersive project. Architecture review + roadmap.',
    service3Title: 'Research & Validation',
    service3Description:
      'Prove your experience works. Experimental design, data collection, impact measurement.',
  },

  productCard: {
    contactUs: 'Contact Us',
    free: 'FREE',
    getNow: 'Get Now',
  },

  systems: {
    heading: 'Systems',
    subheading: 'Tools and resources for immersive experience designers',
    filterCategoryLabel: 'Category',
    filterTypeLabel: 'Type',
    filterAll: 'All',
    filterFree: 'Free',
    filterPaid: 'Paid',
    filterCustom: 'Custom',
    resetFilters: 'Reset Filters',
    clearFilters: 'Clear Filters',
    showing: 'Showing',
    systemSingular: 'system',
    systemPlural: 'systems',
    noResults: 'No systems found with these filters.',
    errorHeading: 'Something went wrong',
    errorRetry: 'Try again',
    errorBack: '← Back to Systems',
    notFoundHeading: 'System not found',
    notFoundBody: "This system doesn't exist or is no longer available.",
    whatsIncluded: "What's Included",
    relatedSystems: 'Related Systems',
  },

  transmissions: {
    heading: 'Transmissions for the Lab',
    subheading: 'Research notes on immersive design and emergent interaction',
    tagAll: 'All',
    tagWork: 'Work',
    tagResearch: 'Research',
    tagBuilds: 'Builds',
    tagGalea: 'Galea',
    tagProcess: 'Process',
    noPostsTagged: 'No posts tagged "{tag}" yet.',
    readMore: 'Read more →',
    errorHeading: 'Something went wrong',
    errorRetry: 'Try again',
    errorBack: '← Back to Transmissions',
    notFoundHeading: 'Transmission not found',
    notFoundBody: "This transmission doesn't exist or has been removed.",
  },

  work: {
    heading: 'Work',
    subheading: 'Case studies and professional projects',
    noPosts: 'No work posts published yet.',
    readMore: 'Read more →',
    allTransmissions: 'All Transmissions →',
  },

  tutorials: {
    heading: 'Free Learning Resources',
    subheading:
      'Master immersive design with our free video tutorials. Learn VR, AR, and spatial computing fundamentals at your own pace.',
    noTutorials: 'No tutorials available yet. Check back soon!',
    back: '← Back to tutorials',
    lessonSingular: 'lesson',
    lessonPlural: 'lessons',
    errorHeading: 'Something went wrong',
    errorRetry: 'Try again',
    errorBack: '← Back to Tutorials',
    notFoundHeading: 'Tutorial not found',
    notFoundBody: "This tutorial doesn't exist or has been removed.",
  },

  videoPlayer: {
    continueButton: 'Continue to Next Video',
    videoLabel: 'Video',
    videoOf: 'of',
    videoSingular: 'video',
    videoPlural: 'videos',
  },

  connect: {
    heading: 'Connect',
    sectionTitle: 'Get in Touch',
    body: "Let's get in touch.",
    emailLabel: 'Email',
    socialLabel: 'Social',
    portfolioLink: 'Portfolio →',
    linkedInLink: 'LinkedIn →',
  },

  aboutPage: {
    heading: 'About Kabuto Lab',
    body1: 'Kabuto Lab creates tools and frameworks for immersive experience designers.',
    body2:
      'We believe that great immersive experiences come from methodology, not just creativity. Our products help designers structure their thinking and deliver consistent, impactful results.',
    philosophyHeading: 'Our Philosophy',
    philosophyItems: [
      '→ Frameworks over freestyle',
      '→ Process over perfection',
      '→ Tools that scale with your practice',
      '→ No fluff, no gatekeeping',
    ] as const,
    body3: 'Started by designers who got tired of reinventing the wheel on every project.',
    cta: "Let's build better immersive experiences together.",
  },

  privacy: {
    heading: 'Privacy Policy',
    cookieTitle: 'Cookie Usage',
    cookieBody:
      'We use Google Analytics to understand how visitors use our site. This helps us improve your experience.',
    trackTitle: 'What We Track',
    trackItem1: 'Pages visited',
    trackItem2: 'Time spent on site',
    trackItem3: 'Browser and device information',
    trackItem4: 'Anonymized IP addresses',
    choicesTitle: 'Your Choices',
    choicesBody:
      "You can decline cookies at any time. This won't affect your ability to use our site, but it will limit our ability to improve it.",
    contactTitle: 'Contact',
    contactBody: 'Questions? Contact us at christian@kabutolab.tech',
  },
} as const;
