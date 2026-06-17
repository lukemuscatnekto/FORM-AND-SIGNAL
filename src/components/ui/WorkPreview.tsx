import { useState } from 'react'

type WorkPreviewProps = {
  title: string
  preview: string
  status: string
  assetFile?: string
  objectPosition?: string
  size?: 'card' | 'detail' | 'hero'
  showStatus?: boolean
}

const sizeClasses = {
  card: 'h-56 sm:h-64 lg:h-[17.5rem]',
  detail: 'h-60 sm:h-72 lg:h-[22rem]',
  hero: 'h-56 sm:h-72 lg:h-[26rem]',
}

export function WorkPreview({
  title,
  preview,
  status,
  assetFile,
  objectPosition = 'center top',
  size = 'card',
  showStatus = true,
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
          className="block h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
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

      {showStatus ? (
        <span className="absolute left-4 top-4 rounded-full border border-border bg-surface/95 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-ink-muted shadow-sm backdrop-blur-sm">
          {status}
        </span>
      ) : null}
    </div>
  )
}
