export const siteConfig = {
  name: 'FORM & SIGNAL',
  tagline: 'Digital Launch Studio',
  footerCopy:
    'Helping small brands, startups and local businesses look established and launch-ready from day one.',
  email: 'contactformandsignal@gmail.com',
  instagram: 'https://www.instagram.com/formandsignalstudio/',
  bookingUrl: null as string | null,
} as const

export const siteLinks = {
  contact: '/#contact',
  foundingContact: '/?founding=true#contact',
  // Work routes kept for later — not promoted in public nav until portfolio is ready.
  work: '/work',
  approach: '/studio',
  studioPage: '/studio',
  services: '/#services',
  process: '/#process',
  studio: '/#studio',
} as const

export const navLinks = [
  { label: 'Services', href: siteLinks.services },
  { label: 'Process', href: siteLinks.process },
  { label: 'Studio', href: siteLinks.studioPage },
] as const

export const audienceTags = [
  'Studios',
  'Founders',
  'Startups',
  'Local Business',
  'E-commerce',
  'Personal Brands',
] as const

export const footerLinks = {
  studio: [{ label: 'About', href: siteLinks.studio }],
  services: [
    { label: 'What we do', href: siteLinks.services },
    { label: 'Process', href: siteLinks.process },
  ],
  connect: [
    { label: 'Contact', href: siteLinks.contact },
    { label: 'Instagram', external: true, social: true },
    { label: 'Email', email: true },
  ],
} as const

export function getContactHref(): string {
  return siteConfig.bookingUrl ?? siteLinks.contact
}

export function getPrimaryCtaLabel(): string {
  return siteConfig.bookingUrl ? 'Book a call' : 'Start a project'
}

export function getSecondaryCtaLabel(): string {
  return 'Send a quick brief'
}

export function getSecondaryCtaHref(): string {
  return siteLinks.contact
}

export function getEmailHref(): string {
  return `mailto:${siteConfig.email}`
}
