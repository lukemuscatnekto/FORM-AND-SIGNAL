import { Clock, Globe, Wrench } from 'lucide-react'
import { useState } from 'react'
import type { WorkStatus } from '../../data/work'

type WorkPreviewProps = {
  title: string
  preview: string
  status: WorkStatus
  assetFile?: string
  objectPosition?: string
  size?: 'card' | 'detail' | 'hero'
  showStatus?: boolean
  featured?: boolean
}

const sizeClasses = {
  card: 'h-56 sm:h-64 lg:h-[17.5rem]',
  detail: 'h-60 sm:h-72 lg:h-[22rem]',
  hero: 'h-56 sm:h-72 lg:h-[26rem]',
}

function StatusBadge({ status }: { status: WorkStatus }) {
  if (status === 'Live') {
    return (
      <span
        aria-label="Project status: Live"
        className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-sm"
      >
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"
          aria-hidden="true"
        />
        <Globe className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
        Live
      </span>
    )
  }

  if (status === 'Coming Soon') {
    return (
      <span
        aria-label="Project status: Coming Soon"
        className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400 backdrop-blur-sm"
      >
        <Clock className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
        Coming Soon
      </span>
    )
  }

  return (
    <span
      aria-label="Project status: In Progress"
      className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-accent backdrop-blur-sm"
    >
      <Wrench className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
      In Progress
    </span>
  )
}

export function WorkPreview({
  title,
  preview,
  status,
  assetFile,
  objectPosition = 'center',
  size = 'card',
  showStatus = true,
  featured = false,
}: WorkPreviewProps) {
  const [failed, setFailed] = useState(false)
  const isCard = size === 'card'

  return (
    <div
      className={`relative w-full overflow-hidden bg-surface-muted ${
        isCard ? 'rounded-t-2xl border-b border-border' : ''
      } ${sizeClasses[size]}`}
    >
      {!failed ? (
        <img
          src={preview}
          alt={`${title} project preview`}
          className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ objectPosition }}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full flex-col justify-between bg-gradient-to-br from-surface-muted to-canvas p-6 sm:p-8">
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">
            Preview unavailable
          </span>
          <div>
            <p className="text-lg font-semibold tracking-[-0.02em] text-ink sm:text-xl">{title}</p>
            {assetFile ? (
              <p className="mt-3 text-[11px] leading-relaxed text-ink-soft">
                Required asset: {assetFile}
              </p>
            ) : null}
          </div>
        </div>
      )}

      {featured ? (
        <span className="absolute left-4 top-4 z-10 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
          Featured
        </span>
      ) : null}

      {showStatus ? <StatusBadge status={status} /> : null}
    </div>
  )
}
