import { motion } from 'framer-motion'
import { Check, MessageCircle, Zap } from 'lucide-react'
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import {
  inquiryFormOptions,
  inquiryPackages,
  inquiryTrustCopy,
  getFoundingBannerHeadline,
  type InquiryFormValues,
  type InquiryProjectType,
} from '../../data/inquiry'
import { FOUNDING_CONFIG } from '../../data/pricing'
import { getEmailHref, siteConfig } from '../../data/site'
import {
  buildInquiryMailto,
  getBudgetForProjectType,
  getWhatsAppHref,
  isFoundingAvailable,
} from '../../lib/email'

const initialValues: InquiryFormValues = {
  name: '',
  email: '',
  businessName: '',
  launching: '',
  projectType: '',
  budget: '',
  timeline: inquiryFormOptions.timelines[0],
  message: '',
}

const labelClassName =
  'form-label mb-1.5 block text-sm font-semibold text-ink-muted transition-all duration-200'

const fieldClassName =
  'form-field w-full rounded-xl border border-border bg-surface-muted px-4 py-3.5 text-[15px] text-ink transition-[color,border-color,box-shadow,transform] duration-200 placeholder:text-ink-soft focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent/25'

const selectFieldClassName = `${fieldClassName} appearance-none bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10 disabled:cursor-not-allowed disabled:opacity-70 [background-image:url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]`

const helperClassName = 'mt-1 text-[13px] text-ink-soft'

const groupLabelClassName = 'label-sm mb-5'

type InquiryFormProps = {
  foundingPreselected?: boolean
}

function FoundingBanner() {
  if (!isFoundingAvailable()) {
    return (
      <div className="mb-6 rounded-xl border border-border bg-surface-muted p-4">
        <p className="text-sm font-semibold text-ink">Regular pricing now applies</p>
        <p className="mt-1 text-xs text-ink-muted">
          All founding spots have been claimed. Starter Launch Kit is €{FOUNDING_CONFIG.regularPrice}.
        </p>
      </div>
    )
  }

  return (
    <div className="mb-6 rounded-xl border border-accent/20 bg-accent/5 p-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
          <Zap className="h-3 w-3 text-accent" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-accent">{getFoundingBannerHeadline()}</p>
          <p className="mt-1 text-xs text-ink-muted">
            Select &ldquo;Starter Launch Kit — Founding Spot&rdquo; below to claim this rate.{' '}
            <span className="font-semibold text-ink">
              {FOUNDING_CONFIG.spotsRemaining} spots remaining.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

type PackageCardProps = {
  type: Exclude<InquiryProjectType, ''>
  selected: boolean
  disabled?: boolean
  onSelect: (type: Exclude<InquiryProjectType, ''>) => void
}

function PackageCard({ type, selected, disabled = false, onSelect }: PackageCardProps) {
  const pkg = inquiryPackages[type]
  const isFounding = type === 'founding-spot'
  const soldOut = isFounding && !isFoundingAvailable()

  return (
    <motion.button
      type="button"
      disabled={disabled || soldOut}
      onClick={() => onSelect(type)}
      whileTap={disabled || soldOut ? undefined : { scale: 0.98 }}
      className={`relative rounded-xl border p-4 text-left transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50 ${
        selected
          ? isFounding
            ? 'border-accent bg-accent/5'
            : 'border-border-strong bg-surface-muted'
          : 'border-border bg-surface hover:border-border-strong'
      }`}
    >
      {soldOut ? (
        <span className="absolute right-2 top-2 rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-soft">
          Sold out
        </span>
      ) : selected ? (
        <span
          className={`absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full ${
            isFounding ? 'bg-accent' : 'bg-ink-muted'
          }`}
        >
          <Check className="h-3 w-3 text-canvas" strokeWidth={3} aria-hidden="true" />
        </span>
      ) : null}

      <span
        className={`text-[10px] font-bold uppercase tracking-wider ${
          isFounding ? 'text-accent' : 'text-ink-soft'
        }`}
      >
        {pkg.cardBadge}
      </span>
      <p className="mt-1 text-sm font-semibold text-ink">{pkg.title}</p>
      {isFounding ? (
        <p className="mt-0.5 text-lg font-bold text-accent">
          €{pkg.price}{' '}
          <span className="text-sm font-normal text-ink-muted line-through">
            €{FOUNDING_CONFIG.regularPrice}
          </span>
        </p>
      ) : (
        <p className="mt-0.5 text-lg font-bold text-ink">€{pkg.price}</p>
      )}
      <p className="mt-1 text-xs text-ink-muted">
        {soldOut
          ? 'Regular rate applies'
          : isFounding
            ? `${FOUNDING_CONFIG.spotsRemaining} spots left`
            : pkg.delivery}
      </p>
    </motion.button>
  )
}

export function InquiryForm({ foundingPreselected = false }: InquiryFormProps) {
  const [values, setValues] = useState<InquiryFormValues>(initialValues)
  const [submitted, setSubmitted] = useState(false)
  const [projectTypeError, setProjectTypeError] = useState('')

  useEffect(() => {
    if (!foundingPreselected) return

    if (isFoundingAvailable()) {
      setValues((current) => ({
        ...current,
        projectType: 'founding-spot',
        budget: getBudgetForProjectType('founding-spot'),
      }))
      return
    }

    setValues((current) => ({
      ...current,
      projectType: 'standard',
      budget: getBudgetForProjectType('standard'),
    }))
  }, [foundingPreselected])

  useEffect(() => {
    if (!values.projectType) return

    if (values.projectType === 'founding-spot' && !isFoundingAvailable()) {
      setValues((current) => ({
        ...current,
        projectType: 'standard',
        budget: getBudgetForProjectType('standard'),
      }))
      return
    }

    setValues((current) => ({
      ...current,
      budget: getBudgetForProjectType(values.projectType),
    }))
  }, [values.projectType])

  const update =
    (field: keyof InquiryFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
    }

  const selectProjectType = (projectType: Exclude<InquiryProjectType, ''>) => {
    setProjectTypeError('')
    setValues((current) => ({
      ...current,
      projectType,
      budget: getBudgetForProjectType(projectType),
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!values.projectType) {
      setProjectTypeError('Please select a Launch Kit package.')
      return
    }

    setSubmitted(true)

    window.setTimeout(() => {
      window.location.href = buildInquiryMailto(values, siteConfig.email)
    }, 2000)

    window.setTimeout(() => {
      setSubmitted(false)
    }, 2000)
  }

  const whatsappMessage =
    values.projectType && values.businessName
      ? `Hi Luke, I'm interested in the ${inquiryPackages[values.projectType].displayName} for ${values.businessName}.`
      : "Hi Luke, I'm interested in a Launch Kit for my business."

  return (
    <form onSubmit={handleSubmit} className="text-left" noValidate>
      <FoundingBanner />

      <fieldset className="border-0 p-0">
        <legend className={groupLabelClassName}>About you</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="field-group">
            <label htmlFor="inquiry-name" className={labelClassName}>
              Name
            </label>
            <input
              id="inquiry-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={values.name}
              onChange={update('name')}
              className={fieldClassName}
            />
          </div>
          <div className="field-group">
            <label htmlFor="inquiry-email" className={labelClassName}>
              Email
            </label>
            <input
              id="inquiry-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={values.email}
              onChange={update('email')}
              className={fieldClassName}
            />
          </div>
          <div className="field-group">
            <label htmlFor="inquiry-business" className={labelClassName}>
              Business name
            </label>
            <input
              id="inquiry-business"
              name="businessName"
              type="text"
              autoComplete="organization"
              value={values.businessName}
              onChange={update('businessName')}
              className={fieldClassName}
            />
          </div>
          <div className="field-group">
            <label htmlFor="inquiry-launching" className={labelClassName}>
              What are you launching?
            </label>
            <input
              id="inquiry-launching"
              name="launching"
              type="text"
              required
              value={values.launching}
              onChange={update('launching')}
              className={fieldClassName}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-10 border-0 p-0">
        <legend className={groupLabelClassName}>Project details</legend>

        <div>
          <p className={labelClassName}>Choose your Launch Kit</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <PackageCard
              type="founding-spot"
              selected={values.projectType === 'founding-spot'}
              onSelect={selectProjectType}
            />
            <PackageCard
              type="standard"
              selected={values.projectType === 'standard'}
              onSelect={selectProjectType}
            />
            <PackageCard
              type="premium"
              selected={values.projectType === 'premium'}
              onSelect={selectProjectType}
            />
          </div>
          {projectTypeError ? (
            <p className="mt-2 text-sm text-amber-400" role="alert">
              {projectTypeError}
            </p>
          ) : null}
        </div>

        {values.projectType ? (
          <div className="mt-4 rounded-xl border border-border bg-surface-muted p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-soft">Selected package</p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  {inquiryPackages[values.projectType].displayName}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wider text-ink-soft">Investment</p>
                {values.projectType === 'founding-spot' ? (
                  <p className="mt-1 text-2xl font-bold text-accent">
                    €{FOUNDING_CONFIG.foundingPrice}{' '}
                    <span className="text-sm font-normal text-ink-muted line-through">
                      €{FOUNDING_CONFIG.regularPrice}
                    </span>
                  </p>
                ) : (
                  <p className="mt-1 text-2xl font-bold text-ink">
                    €{inquiryPackages[values.projectType].price}
                  </p>
                )}
              </div>
            </div>
            {values.projectType === 'founding-spot' && isFoundingAvailable() ? (
              <p className="mt-3 text-xs text-accent">
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  Founding rate — {FOUNDING_CONFIG.spotsRemaining} spots remaining
                </span>
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="field-group sm:col-span-2">
            <label htmlFor="inquiry-budget" className={labelClassName}>
              Budget range
            </label>
            <select
              id="inquiry-budget"
              name="budget"
              required
              value={values.budget}
              onChange={update('budget')}
              disabled={Boolean(values.projectType)}
              className={selectFieldClassName}
            >
              <option value="" disabled>
                Select budget range
              </option>
              {inquiryFormOptions.budgetRanges.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {values.projectType ? (
              <p className={helperClassName}>Matched to your selected package.</p>
            ) : null}
          </div>
          <div className="field-group">
            <label htmlFor="inquiry-timeline" className={labelClassName}>
              Timeline
            </label>
            <select
              id="inquiry-timeline"
              name="timeline"
              required
              value={values.timeline}
              onChange={update('timeline')}
              className={selectFieldClassName}
            >
              {inquiryFormOptions.timelines.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="field-group sm:col-span-2">
            <label htmlFor="inquiry-message" className={labelClassName}>
              Message
            </label>
            <textarea
              id="inquiry-message"
              name="message"
              rows={5}
              required
              value={values.message}
              onChange={update('message')}
              className={`${fieldClassName} min-h-[9rem] resize-y`}
            />
          </div>
        </div>
      </fieldset>

      <div className="mt-10 rounded-2xl border border-border bg-surface-muted p-5 sm:p-6">
        <p className="text-sm font-medium leading-relaxed text-ink">{inquiryTrustCopy.responseTime}</p>

        <div className="mt-5 border-t border-border pt-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.button
              type="submit"
              disabled={submitted}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white btn-primary-shadow transition-[color,transform,box-shadow] duration-200 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]"
              animate={
                submitted
                  ? {
                      scale: [1, 1.05, 1],
                    }
                  : { scale: 1 }
              }
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {submitted ? (
                <>
                  <span aria-hidden="true">✓</span>
                  Inquiry ready
                </>
              ) : (
                <>
                  Send inquiry
                  <span aria-hidden="true">→</span>
                </>
              )}
            </motion.button>
            <a
              href={getWhatsAppHref(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:border-border-strong hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
              Message on WhatsApp
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-ink-soft">
          {inquiryTrustCopy.preferEmail}{' '}
          <a href={getEmailHref()} className="text-accent hover:underline">
            {siteConfig.email}
          </a>
        </p>
        <p className={helperClassName}>{inquiryTrustCopy.mailtoNote}</p>
      </div>
    </form>
  )
}
