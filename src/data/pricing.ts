export const FOUNDING_CONFIG = {
  totalSpots: 5,
  spotsRemaining: 3,
  foundingPrice: 350,
  regularPrice: 397,
  tier: 'Starter',
  tierTitle: 'Starter Launch Kit',
} as const

export function getFoundingBadgeLabel(): string {
  return `Founding rate — ${FOUNDING_CONFIG.spotsRemaining} spots left`
}

export function getFoundingHeadline(): string {
  return `First ${FOUNDING_CONFIG.totalSpots} ${FOUNDING_CONFIG.tierTitle}s at €${FOUNDING_CONFIG.foundingPrice}`
}

export function getFoundingCopy(): string {
  return `Regular price €${FOUNDING_CONFIG.regularPrice}. We're building our portfolio and passing the savings to early clients.`
}

export function getFoundingStandardPricing(): string {
  return `After the first ${FOUNDING_CONFIG.totalSpots} spots, ${FOUNDING_CONFIG.tier} returns to €${FOUNDING_CONFIG.regularPrice}.`
}

export function getFoundingCtaNote(): string {
  return `Applies to ${FOUNDING_CONFIG.tier} tier only. Standard and Premium at full price.`
}

export function getFoundingUrgencyLine(): string {
  return `${FOUNDING_CONFIG.spotsRemaining} spots remaining at this price`
}

export function getFoundingBottomCtaLine(): string {
  return `Founding rate: ${FOUNDING_CONFIG.spotsRemaining} spots left at €${FOUNDING_CONFIG.foundingPrice} for ${FOUNDING_CONFIG.tierTitle}`
}

export function getFoundingDeliveryNote(): string {
  return 'Founding rate locks in 3-day delivery'
}

export const FOUNDING_PRICING_LINK = '/pricing#pricing'
