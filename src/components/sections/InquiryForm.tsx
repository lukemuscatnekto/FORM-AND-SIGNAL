import { motion } from 'framer-motion'
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import {
  buildInquiryMailto,
  inquiryFormOptions,
  inquiryPricingAnchor,
  inquiryTrustCopy,
  type InquiryFormValues,
} from '../../data/inquiry'
import { getEmailHref, siteConfig } from '../../data/site'

const initialValues: InquiryFormValues = {
  name: '',
  email: '',
  businessName: '',
  launching: '',
  projectType: 'branding',
  budget: inquiryFormOptions.budgetRanges[0],
  timeline: inquiryFormOptions.timelines[0],
  message: '',
}

const labelClassName =
  'form-label mb-1.5 block text-sm font-semibold text-[#A2A8B3] transition-all duration-200'

const fieldClassName =
  'form-field w-full rounded-xl border border-[#2A2F3A] bg-[#11141B] px-4 py-3.5 text-[15px] text-[#F2F2F3] transition-[color,border-color,box-shadow,transform] duration-200 placeholder:text-[#6B7280] focus:border-[#4C6BFF] focus:outline-none focus:ring-[3px] focus:ring-[#4C6BFF]/25'

const selectFieldClassName = `${fieldClassName} appearance-none bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10 [background-image:url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]`

const helperClassName = 'mt-1 text-[13px] text-[#6B7280]'

const groupLabelClassName = 'label-sm mb-5'

type InquiryFormProps = {
  foundingPreselected?: boolean
}

export function InquiryForm({ foundingPreselected = false }: InquiryFormProps) {
  const [values, setValues] = useState<InquiryFormValues>(initialValues)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!foundingPreselected) return

    setValues((current) => ({ ...current, projectType: 'founding-spot' }))
  }, [foundingPreselected])

  const update =
    (field: keyof InquiryFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)

    window.setTimeout(() => {
      window.location.href = buildInquiryMailto(values, siteConfig.email)
    }, 2000)

    window.setTimeout(() => {
      setSubmitted(false)
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="text-left">
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
          <div>
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
          <div>
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
          <div>
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
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="inquiry-project-type" className={labelClassName}>
              Project type
            </label>
            <select
              id="inquiry-project-type"
              name="projectType"
              required
              value={values.projectType}
              onChange={update('projectType')}
              className={selectFieldClassName}
            >
              {inquiryFormOptions.projectTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <div className="rounded-xl border border-border bg-surface-muted px-4 py-4 sm:px-5">
              <p className="text-sm leading-relaxed text-ink-muted">{inquiryPricingAnchor.starter}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {inquiryPricingAnchor.custom}
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="inquiry-budget" className={labelClassName}>
              Budget range
            </label>
            <select
              id="inquiry-budget"
              name="budget"
              required
              value={values.budget}
              onChange={update('budget')}
              className={selectFieldClassName}
            >
              {inquiryFormOptions.budgetRanges.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
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
          <div className="sm:col-span-2">
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
          <motion.button
            type="submit"
            disabled={submitted}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#4C6BFF] px-8 py-3.5 text-sm font-medium text-white btn-primary-shadow transition-[color,transform,box-shadow] duration-200 hover:bg-[#5B7DFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] sm:w-auto"
            animate={
              submitted
                ? {
                    scale: [1, 1.05, 1],
                    backgroundColor: ['#4C6BFF', '#5875FF', '#5875FF'],
                  }
                : {
                    scale: 1,
                    backgroundColor: '#4C6BFF',
                  }
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
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
          {inquiryTrustCopy.preferEmail}{' '}
          <a
            href={getEmailHref()}
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
        <p className={helperClassName}>{inquiryTrustCopy.mailtoNote}</p>
      </div>
    </form>
  )
}
