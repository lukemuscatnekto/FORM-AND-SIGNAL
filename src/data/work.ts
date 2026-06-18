export type WorkCategory =
  | 'Automotive'
  | 'Beauty & Wellness'
  | 'Fitness'
  | 'Food & Drink'
  | 'Trades'
  | 'Real Estate'

export type WorkStatus = 'Live' | 'Coming Soon' | 'In Progress'

export type WorkProject = {
  slug: string
  title: string
  subtitle: string
  description: string
  sector: string
  category: WorkCategory
  tags: string[]
  status: WorkStatus
  statusDetail: string
  preview: string
  assetFile: string
  objectPosition: string
  clientName: string
  clientLocation: string
  projectDate: string
  duration: string
  pages: string
  liveUrl?: string
  urlVerified?: boolean
  beforePreview?: string
  heroDescription: string
  brief: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  results: { label: string; value: string }[]
  challenge: string
  solution: string
  deliverables: string[]
  visualLabels: string[]
  transformationCaption?: string
  transformationTimeline?: { title: string; description: string }[]
}

export const workFilterCategories = [
  'All',
  'Automotive',
  'Beauty & Wellness',
  'Fitness',
  'Food & Drink',
  'Trades',
  'Real Estate',
] as const

export type WorkFilterCategory = (typeof workFilterCategories)[number]

export const workProjects: WorkProject[] = [
  {
    slug: 'driven-gloss',
    title: 'Driven Gloss',
    subtitle: 'Mobile car detailing brand',
    sector: 'Mobile Detailing',
    category: 'Automotive',
    description:
      'A complete launch system — brand direction, live website, social assets, and enquiry flow for a mobile detailing brand.',
    heroDescription:
      'A live mobile detailing brand with a launch-ready site — WhatsApp enquiries, service breakdown, and a polished mobile experience.',
    brief:
      'Driven Gloss needed a professional online presence that turned Instagram interest into booked enquiries — fast, mobile-first, and credible from day one.',
    tags: ['Branding', 'Website', 'Social Launch'],
    status: 'Live',
    statusDetail: 'Live',
    projectDate: '2026',
    duration: '5 days',
    pages: '5',
    clientName: 'Driven Gloss',
    clientLocation: 'Malta',
    liveUrl: 'https://www.drivengloss.com/',
    urlVerified: true,
    preview: '/assets/drivengloss-live-mockup.png',
    assetFile: 'drivengloss-live-mockup.png',
    objectPosition: 'center',
    testimonial: {
      quote:
        'Luke built our site in 5 days and we started getting WhatsApp enquiries immediately. The mobile experience is exactly what our customers needed.',
      author: 'Driven Gloss Team',
      role: 'Founder',
    },
    results: [
      { label: 'Delivery', value: '5 Days' },
      { label: 'Pages', value: '5' },
      { label: 'Status', value: 'Live' },
    ],
    challenge:
      'Driven Gloss had no online presence. Customers found them through Instagram DMs but had no way to view services, pricing, or book appointments. They were losing leads to competitors with professional websites.',
    solution:
      'Built a dark, mobile-first landing site with WhatsApp integration, service breakdown, and gallery. Optimized Google Business Profile for local search in Malta.',
    deliverables: [
      'Mobile-first landing page',
      'Brand launch direction',
      'Social launch assets',
      'Campaign visuals',
      'Enquiry flow',
    ],
    visualLabels: ['Website', 'Mobile', 'Social', 'Launch assets'],
    transformationCaption:
      'From zero online presence to a live launch-ready website in 5 days.',
    transformationTimeline: [
      {
        title: 'Discovery & direction',
        description: 'Mapped services, audience, and the mobile-first enquiry flow.',
      },
      {
        title: 'Design & build',
        description: 'Built the site, wrote copy, and integrated WhatsApp lead capture.',
      },
      {
        title: 'Launch & optimize',
        description: 'Went live with Google Business Profile setup and on-page SEO.',
      },
    ],
  },
  {
    slug: 'master-of-detailing',
    title: 'Master of Detailing',
    subtitle: 'Premium detailing by Matthias',
    sector: 'Premium Automotive Detailing',
    category: 'Automotive',
    description:
      'Premium website direction, visual system, and launch assets built around appointment-based detailing.',
    heroDescription:
      'A premium digital presence built to match the quality of the work — cinematic, trustworthy, and structured around appointment-based detailing.',
    brief:
      'Master of Detailing needed a premium digital presence that matched the quality of the work — cinematic, trustworthy, and built around appointment-based detailing.',
    tags: ['Website', 'Visual Direction', 'Launch Assets'],
    status: 'In Progress',
    statusDetail: 'In Progress',
    projectDate: '2026',
    duration: '7 days',
    pages: '5',
    clientName: 'Master of Detailing by Matthias',
    clientLocation: 'Malta',
    urlVerified: false,
    preview: '/assets/master-of-detailing-preview.png',
    assetFile: 'master-of-detailing-preview.png',
    objectPosition: 'center top',
    testimonial: {
      quote:
        'The premium feel of the site matches our brand perfectly. Matthias finally has a digital presence that reflects the quality of his work.',
      author: 'Matthias',
      role: 'Founder',
    },
    results: [
      { label: 'Delivery', value: '7 Days' },
      { label: 'Pages', value: '5' },
      { label: 'Status', value: 'In Progress' },
    ],
    challenge:
      "Master of Detailing had an outdated, broken website that didn't reflect the premium nature of the service. Potential high-end clients were bouncing immediately.",
    solution:
      'Created a dark, luxury aesthetic with cinematic imagery, service tiers, and a quote funnel. Full mobile optimization for on-the-go browsing.',
    deliverables: [
      'Premium website direction',
      'Automotive visual system',
      'Launch campaign assets',
      'Service structure',
      'WhatsApp booking flow',
    ],
    visualLabels: ['Website', 'Mobile', 'Social', 'Launch assets'],
    transformationCaption:
      'From an outdated site to a premium launch-ready presence in 7 days.',
    transformationTimeline: [
      {
        title: 'Audit & strategy',
        description: 'Identified gaps in the old site and defined a premium visual direction.',
      },
      {
        title: 'Design system & build',
        description: 'Built cinematic pages, service tiers, and a quote funnel.',
      },
      {
        title: 'Launch & handover',
        description: 'Deployed the live site with mobile optimization and booking flow.',
      },
    ],
  },
  {
    slug: 'placeholder-salon',
    title: 'Beauty Lounge',
    subtitle: 'Premium salon & spa',
    sector: 'Beauty & Wellness',
    category: 'Beauty & Wellness',
    description:
      "A beauty salon in St Paul's Bay needing a modern, appointment-ready website.",
    heroDescription:
      "A modern salon brand in St Paul's Bay preparing for a full digital launch with booking-ready pages and premium visual direction.",
    brief:
      "Beauty Lounge needed a polished online presence that matched the quality of the in-salon experience and made booking effortless.",
    tags: ['Website', 'Booking', 'Branding'],
    status: 'Coming Soon',
    statusDetail: 'Coming Soon',
    urlVerified: false,
    projectDate: '2026',
    duration: '—',
    pages: '—',
    clientName: 'Beauty Lounge',
    clientLocation: "St Paul's Bay, Malta",
    preview: '/assets/driven-gloss-preview.png',
    assetFile: 'beauty-lounge-preview.png',
    objectPosition: 'center',
    results: [
      { label: 'Delivery', value: 'TBD' },
      { label: 'Pages', value: 'TBD' },
      { label: 'Status', value: 'Coming Soon' },
    ],
    challenge:
      'The salon relied on walk-ins and Instagram DMs with no structured booking flow or service menu online.',
    solution:
      'Building a mobile-first site with service pages, gallery, and integrated appointment booking.',
    deliverables: [
      'Multi-page salon website',
      'Service menu structure',
      'Booking integration',
      'Brand visual direction',
      'Social launch assets',
    ],
    visualLabels: ['Website', 'Mobile', 'Booking', 'Brand'],
    transformationCaption: 'From Instagram-only presence to a full appointment-ready launch.',
    transformationTimeline: [
      {
        title: 'Discovery',
        description: 'Defining services, pricing tiers, and booking requirements.',
      },
      {
        title: 'Design & build',
        description: 'Crafting the visual system and appointment-ready pages.',
      },
      {
        title: 'Launch',
        description: 'Going live with booking flow and local SEO setup.',
      },
    ],
  },
]

export const transformationContent = {
  headline: 'From first impression to launch-ready presence.',
  copy:
    'FORM & SIGNAL connected the brand, website, content, and enquiry flow into one consistent system — helping the business look more established from day one.',
} as const

export const caseStudyCta = {
  headline: 'Ready for your own launch?',
  copy: 'I build launch-ready websites for Malta service businesses. Book a free 15-minute call.',
} as const

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((project) => project.slug === slug)
}

export function getNextWorkProject(slug: string): WorkProject {
  const index = workProjects.findIndex((project) => project.slug === slug)
  const nextIndex = index === -1 ? 0 : (index + 1) % workProjects.length
  return workProjects[nextIndex]
}

export function getWorkTestimonials(): WorkProject[] {
  return workProjects.filter((project) => project.testimonial)
}

export function getVerifiedLiveProjects(): WorkProject[] {
  return workProjects.filter(
    (project) => project.status === 'Live' && project.urlVerified === true && project.liveUrl,
  )
}

export function getLiveWorkProjects(): WorkProject[] {
  return getVerifiedLiveProjects()
}

export function getRecentlyLaunchedProject(): WorkProject | undefined {
  return getVerifiedLiveProjects()[0]
}
