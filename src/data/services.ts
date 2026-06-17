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
    title: 'Branding',
    icon: 'branding',
    description:
      'A clear, confident identity system — logo direction, palette, type and rules — so you look established from day one.',
    outcome: 'Instant credibility',
  },
  {
    number: '02',
    title: 'Websites',
    icon: 'website',
    description:
      'Modern, fast, conversion-focused sites that turn first impressions into enquiries.',
    outcome: 'More qualified leads',
  },
  {
    number: '03',
    title: 'Content Systems',
    icon: 'content',
    description:
      'Reusable social, launch and campaign assets that keep your brand consistent everywhere.',
    outcome: 'Consistent presence',
  },
  {
    number: '04',
    title: 'Launch Systems',
    icon: 'launch',
    description:
      'A structured path from idea to polished online presence — built to go live cleanly.',
    outcome: 'A confident launch',
  },
]
