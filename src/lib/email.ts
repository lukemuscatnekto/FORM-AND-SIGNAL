import { FOUNDING_CONFIG } from '../data/pricing'
import {
  getPackageBudgetRange,
  getPackageLabel,
  getPackagePrice,
  type InquiryFormValues,
  type InquiryProjectType,
} from '../data/inquiry'

const WHATSAPP_NUMBER = '35677424141'

export function isFoundingAvailable(): boolean {
  return FOUNDING_CONFIG.spotsRemaining > 0
}

export function getWhatsAppHref(message?: string): string {
  const text =
    message ??
    "Hi Luke, I'm interested in a Launch Kit for my business."
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function buildInquiryMailto(values: InquiryFormValues, studioEmail: string): string {
  const businessName = values.businessName.trim() || values.name.trim() || 'New brief'
  const packageLabel = values.projectType ? getPackageLabel(values.projectType) : 'Not specified'
  const price = values.projectType ? getPackagePrice(values.projectType) : null

  const subjectParts = ['Project Inquiry', businessName, packageLabel]
  if (values.projectType === 'founding-spot') {
    subjectParts.unshift('[FOUNDING SPOT]')
  }

  const subject = encodeURIComponent(subjectParts.join(' — '))

  const body = encodeURIComponent(
    [
      'Hi Luke,',
      '',
      "I'm interested in the following Launch Kit for my business:",
      '',
      `Package: ${packageLabel}`,
      `Investment: ${price !== null ? `€${price}` : 'Not specified'}`,
      `Budget Range: ${values.budget || 'Not specified'}`,
      `Timeline: ${values.timeline}`,
      '',
      'About my business:',
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Business name: ${values.businessName.trim()}`,
      `What I'm launching: ${values.launching.trim()}`,
      '',
      'Message:',
      values.message.trim(),
      '',
      '—',
      'Sent from formandsignal.com',
    ].join('\n'),
  )

  return `mailto:${studioEmail}?subject=${subject}&body=${body}`
}

export function getBudgetForProjectType(projectType: InquiryProjectType): string {
  if (!projectType) return ''
  return getPackageBudgetRange(projectType)
}

export function getDefaultProjectTypeForFounding(): InquiryProjectType {
  return isFoundingAvailable() ? 'founding-spot' : 'standard'
}
