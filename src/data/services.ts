export type Service = {
  number: string
  title: string
  description: string
  outcome: string
  icon: 'branding' | 'website' | 'content' | 'launch'
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Website',
    icon: 'website',
    description: 'Mobile-first sites that load fast and convert visitors.',
    outcome: 'More qualified leads',
  },
  {
    number: '02',
    title: 'Brand Identity',
    icon: 'branding',
    description: 'Logo, colors, and visual system that looks professional.',
    outcome: 'Instant credibility',
  },
  {
    number: '03',
    title: 'Instagram Content',
    icon: 'content',
    description: 'Posts, carousels, and captions that get you noticed.',
    outcome: 'Consistent presence',
  },
  {
    number: '04',
    title: 'Launch Strategy',
    icon: 'launch',
    description: 'Google Business, reviews, and a plan to get found.',
    outcome: 'A confident launch',
  },
]
