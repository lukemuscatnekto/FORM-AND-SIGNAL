export const inquiryFormOptions = {
  projectTypes: [
    { value: 'founding-spot', label: 'Founding spot — €400' },
    { value: 'branding', label: 'Branding' },
    { value: 'website', label: 'Website' },
    { value: 'content-system', label: 'Content system' },
    { value: 'full-launch', label: 'Full launch system' },
    { value: 'not-sure', label: 'Not sure yet' },
  ],
  budgetRanges: [
    '€500 – €1,500',
    '€1,500 – €3,000',
    '€3,000 – €5,000',
    '€5,000+',
    'Not sure yet',
  ],
  timelines: ['ASAP', 'This month', '1–3 months', 'Still planning'],
} as const

export const inquiryPricingAnchor = {
  starter: 'Starter launch work typically begins from €500.',
  custom: 'Full launch systems are quoted based on scope, timeline, and deliverables.',
} as const

export const inquiryFoundingBanner = {
  headline: 'Founding rate active — €400 for the first 5 launches',
  helperDefault: 'Select "Founding spot" under Project type to claim the rate.',
  helperApplied: 'Founding rate applied — €400 for the first 5 launches.',
} as const

export const inquiryTrustCopy = {
  responseTime:
    'You’ll hear back within 1–2 business days with next steps and availability.',
  mailtoNote: 'Opens your email app with your brief pre-filled.',
  preferEmail: 'Prefer email? Reach us directly at',
} as const

export type InquiryFormValues = {
  name: string
  email: string
  businessName: string
  launching: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

export function buildInquiryMailto(values: InquiryFormValues, studioEmail: string): string {
  const projectTypeLabel =
    inquiryFormOptions.projectTypes.find((option) => option.value === values.projectType)
      ?.label ?? values.projectType

  const subject = encodeURIComponent(
    `Project inquiry — ${values.businessName.trim() || values.name.trim() || 'New brief'}`,
  )
  const body = encodeURIComponent(
    [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Business name: ${values.businessName.trim()}`,
      `What are you launching?: ${values.launching.trim()}`,
      `Project type: ${projectTypeLabel}`,
      `Budget range: ${values.budget}`,
      `Timeline: ${values.timeline}`,
      '',
      'Message:',
      values.message.trim(),
    ].join('\n'),
  )

  return `mailto:${studioEmail}?subject=${subject}&body=${body}`
}
