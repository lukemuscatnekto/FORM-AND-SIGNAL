import { motion } from 'framer-motion'
import { audienceTags } from '../../data/site'

function AudienceTag({ tag }: { tag: string }) {
  return (
    <motion.span
      className="inline-flex items-center whitespace-nowrap opacity-70"
      whileHover={{ scale: 1.05, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <span className="text-sm text-ink-muted">{tag}</span>
    </motion.span>
  )
}

function StaticAudienceTags() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-y-2 px-5">
      {audienceTags.map((tag, index) => (
        <span key={tag} className="inline-flex items-center">
          <AudienceTag tag={tag} />
          {index < audienceTags.length - 1 ? (
            <span className="mx-3 text-[11px] leading-none text-accent" aria-hidden="true">
              ·
            </span>
          ) : null}
        </span>
      ))}
    </div>
  )
}

export function AudienceStrip() {
  const sequence = [...audienceTags, ...audienceTags]

  return (
    <section className="border-y border-border bg-surface py-4 sm:py-5">
      <div className="flex w-full md:hidden motion-reduce:flex motion-reduce:md:flex">
        <StaticAudienceTags />
      </div>

      <div className="relative hidden overflow-hidden md:block motion-reduce:hidden">
        <div
          className="marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-12 lg:w-16"
          aria-hidden="true"
        />
        <div
          className="marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-12 lg:w-16"
          aria-hidden="true"
        />

        <div className="marquee-track flex w-max animate-marquee items-center will-change-transform">
          {sequence.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="inline-flex shrink-0 items-center whitespace-nowrap"
            >
              <AudienceTag tag={tag} />
              <span className="mx-2.5 text-[11px] leading-none text-accent" aria-hidden="true">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
