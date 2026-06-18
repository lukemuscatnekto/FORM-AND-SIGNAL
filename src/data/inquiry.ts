import { FOUNDING_CONFIG } from './pricing'

export type InquiryProjectType = 'founding-spot' | 'standard' | 'premium' | ''

export type InquiryFormValues = {
  name: string
  email: string
  businessName: string
  launching: string
  projectType: InquiryProjectType
  budget: string
  timeline: string
  message: string
}

export const inquiryPackages = {
  'founding-spot': {
    id: 'founding-spot' as const,
    cardBadge: 'Founding Rate',
    title: 'Starter Launch Kit',
    displayName: 'Starter Launch Kit — Founding Rate',
    price: FOUNDING_CONFIG.foundingPrice,
    regularPrice: FOUNDING_CONFIG.regularPrice,
    delivery: '3-day delivery',
    budgetRange: '€350 — €500 (Starter / Founding)',
  },
  standard: {
    id: 'standard' as const,
    cardBadge: 'Standard',
    title: 'Launch Kit Plus',
    displayName: 'Launch Kit Plus',
    price: 647,
    delivery: '5-day delivery',
    budgetRange: '€500 — €1,000 (Standard)',
  },
  premium: {
    id: 'premium' as const,
    cardBadge: 'Premium',
    title: 'Full Launch System',
    displayName: 'Full Launch System',
    price: 947,
    delivery: '7-day delivery',
    budgetRange: '€1,000 — €2,000 (Premium / Custom)',
  },
} as const

export const inquiryFormOptions = {
  budgetRanges: [
    '€350 — €500 (Starter / Founding)',
    '€500 — €1,000 (Standard)',
    '€1,000 — €2,000 (Premium / Custom)',
    '€2,000+ (Full system + ongoing)',
    'Not sure yet',
  ],
  timelines: ['ASAP', 'This month', '1–3 months', 'Still planning'],
} as const

export const inquiryTrustCopy = {
  responseTime:
    'You’ll hear back within 1–2 business days with next steps and availability.',
  mailtoNote: 'Opens your email app with your brief pre-filled.',
  preferEmail: 'Prefer email? Reach us directly at',
} as const

export function getPackageLabel(projectType: Exclude<InquiryProjectType, ''>): string {
  return inquiryPackages[projectType].displayName
}

export function getPackagePrice(projectType: Exclude<InquiryProjectType, ''>): number {
  return inquiryPackages[projectType].price
}

export function getPackageBudgetRange(projectType: Exclude<InquiryProjectType, ''>): string {
  return inquiryPackages[projectType].budgetRange
}

export function getFoundingBannerHeadline(): string {
  return `Founding rate active — €${FOUNDING_CONFIG.foundingPrice} for the first ${FOUNDING_CONFIG.totalSpots} ${FOUNDING_CONFIG.tierTitle}s`
}
