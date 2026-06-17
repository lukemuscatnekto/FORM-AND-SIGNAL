export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We learn your business, your audience and what a strong launch looks like for you.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Identity and interface crafted to feel premium, clear and unmistakably yours.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Developed clean, fast and responsive — ready to perform on every device.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'Shipped, polished and supported so you go live with confidence.',
  },
]

export const studioPillars = [
  { title: 'Strategic', description: 'Direction before decoration.', mark: 'strategic' as const },
  { title: 'Premium', description: 'Considered in every detail.', mark: 'premium' as const },
  { title: 'Launch-ready', description: 'Built to go live cleanly.', mark: 'launch' as const },
] as const
