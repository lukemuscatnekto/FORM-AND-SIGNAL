import { processSteps } from '../../data/process'

type ProcessTimelineProps = {
  ringClassName?: string
  horizontalLineClassName?: string
  verticalLineClassName?: string
}

export function ProcessTimeline({
  ringClassName = 'ring-surface',
  horizontalLineClassName = 'process-line-h',
  verticalLineClassName = 'process-line-v',
}: ProcessTimelineProps) {
  return (
    <>
      <ol className="relative hidden lg:grid lg:grid-cols-4 lg:gap-6 xl:gap-8">
        <svg
          className="pointer-events-none absolute inset-x-0 top-0 hidden h-12 w-full overflow-visible lg:block"
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            className={horizontalLineClassName}
            x1="12.5"
            y1="24"
            x2="87.5"
            y2="24"
            stroke="rgb(76 107 255 / 0.32)"
            strokeWidth="0.35"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {processSteps.map((step) => (
          <li key={step.number} className="process-step relative px-2 text-center">
            <span
              className={`process-step-node relative z-10 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/35 bg-surface text-sm font-semibold tabular-nums text-accent ring-4 ${ringClassName}`}
            >
              {step.number}
            </span>
            <h3 className="mt-6 text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-3 text-sm leading-[1.7] text-ink-muted">{step.description}</p>
          </li>
        ))}
      </ol>

      <ol className="relative space-y-12 lg:hidden">
        <svg
          className="pointer-events-none absolute bottom-6 left-6 top-6 w-px overflow-visible"
          viewBox="0 0 1 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            className={verticalLineClassName}
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100"
            stroke="rgb(76 107 255 / 0.32)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {processSteps.map((step) => (
          <li key={step.number} className="process-step relative pl-[4.5rem]">
            <span
              className={`process-step-node absolute left-0 top-0 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/35 bg-surface text-sm font-semibold tabular-nums text-accent ring-4 ${ringClassName}`}
            >
              {step.number}
            </span>
            <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-3 max-w-prose text-sm leading-[1.7] text-ink-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </>
  )
}
