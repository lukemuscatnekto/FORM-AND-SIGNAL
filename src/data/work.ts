export type WorkProject = {
  slug: string
  title: string
  subtitle: string
  sector: string
  description: string
  heroDescription: string
  brief: string
  tags: string[]
  status: string
  year: string
  preview: string
  assetFile: string
  objectPosition?: string
  deliverables: string[]
  visualLabels: string[]
}

export const workProjects: WorkProject[] = [
  {
    slug: 'driven-gloss',
    title: 'Driven Gloss',
    subtitle: 'Mobile Detailing Launch System',
    sector: 'Mobile Detailing',
    description:
      'A complete launch system — brand direction, website, social assets, and enquiry flow for a mobile detailing brand.',
    heroDescription:
      'A launch system built to make a new mobile detailing brand feel professional, energetic, and ready before its official launch.',
    brief:
      'Driven Gloss needed a launch presence that made a new mobile detailing brand feel professional, energetic, and ready before its official launch.',
    tags: ['Branding', 'Website', 'Social Launch'],
    status: 'In Development',
    year: '2026',
    preview: '/assets/driven-gloss-preview.png',
    assetFile: 'driven-gloss-preview.png',
    objectPosition: 'center top',
    deliverables: [
      'Mobile-first landing page',
      'Brand launch direction',
      'Social launch assets',
      'Campaign visuals',
      'Enquiry flow',
    ],
    visualLabels: ['Website', 'Mobile', 'Social', 'Launch assets'],
  },
  {
    slug: 'master-of-detailing',
    title: 'Master of Detailing',
    subtitle: 'Premium Automotive Detailing Website',
    sector: 'Premium Automotive Detailing',
    description:
      'Premium website direction, visual system, and launch assets built around appointment-based detailing.',
    heroDescription:
      'A premium digital presence built to match the quality of the work — cinematic, trustworthy, and structured around appointment-based detailing.',
    brief:
      'Master of Detailing needed a premium digital presence that matched the quality of the work — cinematic, trustworthy, and built around appointment-based detailing.',
    tags: ['Website', 'Visual Direction', 'Launch Assets'],
    status: 'In Development',
    year: '2026',
    preview: '/assets/master-of-detailing-preview.png',
    assetFile: 'master-of-detailing-preview.png',
    objectPosition: 'center top',
    deliverables: [
      'Premium website direction',
      'Automotive visual system',
      'Launch campaign assets',
      'Service structure',
      'WhatsApp booking flow',
    ],
    visualLabels: ['Website', 'Mobile', 'Social', 'Launch assets'],
  },
]

export const transformationContent = {
  headline: 'From first impression to launch-ready presence.',
  copy:
    'FORM & SIGNAL connected the brand, website, content, and enquiry flow into one consistent system — helping the business look more established from day one.',
} as const

export const caseStudyCta = {
  headline: 'Want your business to look launch-ready?',
  copy:
    'FORM & SIGNAL builds the digital foundation around your brand, website, content, and launch presence.',
} as const

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((project) => project.slug === slug)
}
