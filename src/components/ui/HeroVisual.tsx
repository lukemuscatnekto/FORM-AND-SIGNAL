// Hero mockup can be replaced with a real client result once 1–2 launches are completed.
import { LogoMark } from './Logo'
import { BrandWordmark } from './BrandWordmark'

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full" aria-hidden="true">
      <div className="relative rounded-[1.75rem] border border-border bg-surface p-5 sm:p-7">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="relative mx-auto w-full max-w-[min(100%,520px)]">
          <div className="overflow-hidden rounded-t-xl border border-b-0 border-border bg-surface-muted">
            <div className="flex items-center gap-1.5 border-b border-border bg-elevated px-3 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]/80" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]/80" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]/80" />
            </div>
            <div className="bg-canvas px-5 pb-5 pt-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <LogoMark size="sm" className="h-9 w-9" alt="" />
                  <div className="text-left">
                    <p className="text-[10px]">
                      <BrandWordmark />
                    </p>
                    <p className="text-[10px] text-ink-soft">Digital Launch Studio</p>
                  </div>
                </div>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[9px] font-medium text-accent">
                  Launch-ready
                </span>
              </div>
              <div className="mt-5 space-y-2">
                <div className="h-2 w-[72%] rounded-full bg-white/10" />
                <div className="h-2 w-full rounded-full bg-white/10" />
                <div className="h-2 w-[88%] rounded-full bg-white/10" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-lg border border-border bg-surface" />
                <div className="h-14 rounded-lg border border-border bg-surface" />
                <div className="h-14 rounded-lg border border-accent/25 bg-accent/10" />
              </div>
            </div>
          </div>
          <div className="h-2.5 rounded-b-lg border border-t-0 border-border bg-elevated" />
          <div className="mx-auto mt-1 h-1 w-16 rounded-full bg-border-strong" />
        </div>

        <div className="relative mt-6 flex items-end justify-center gap-4 sm:mt-8 sm:gap-5">
          <div className="relative z-10 w-[112px] shrink-0 sm:w-[128px]">
            <div className="overflow-hidden rounded-[1.35rem] border border-border bg-surface p-1.5">
              <div className="rounded-[1.1rem] bg-surface-muted p-2.5">
                <div className="mx-auto mb-2 h-1 w-7 rounded-full bg-border-strong" />
                <div className="flex items-center gap-1.5">
                  <LogoMark size="sm" className="h-5 w-5" alt="" />
                  <div className="h-1.5 flex-1 rounded-full bg-border" />
                </div>
                <div className="mt-2.5 space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-border" />
                  <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
                </div>
                <div className="mt-3 h-7 rounded-md bg-accent/15" />
              </div>
            </div>
          </div>

          <div className="relative w-[180px] shrink-0 rotate-[4deg] sm:w-[204px]">
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-start justify-between gap-2">
                <LogoMark size="sm" className="h-8 w-8" alt="" />
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
              <p className="mt-4 text-[9px]">
                <BrandWordmark />
              </p>
              <p className="mt-1 text-[9px] text-ink-soft">Digital Launch Studio</p>
              <div className="my-3 h-px bg-border" />
              <p className="text-[9px] leading-relaxed text-ink-muted">Established from day one.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
