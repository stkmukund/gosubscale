import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { IconX } from '@/components/icons'
import { cn } from '@/lib/utils'

export interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export function PrivacyPolicyModal({
  isOpen,
  onClose,
  className,
}: PrivacyPolicyModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  if (!isOpen || !mounted) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
      onClick={onClose}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-xs transition-opacity duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'relative flex flex-col w-full max-w-7xl max-h-[86vh] sm:max-h-[82vh] bg-white text-ink shadow-2xl border-t-[30px] border-brand overflow-hidden transition-all duration-200',
          className,
        )}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex size-8 sm:size-9 items-center justify-center rounded-full bg-black/5 text-ink/70 hover:bg-black/15 hover:text-black focus-visible:outline-2 focus-visible:outline-brand transition-colors cursor-pointer"
        >
          <IconX className="size-4 sm:size-5" />
        </button>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-4 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#222] break-words">
          {/* Header Title */}
          <div>
            <h2
              id="privacy-policy-title"
              className="font-display text-2xl sm:text-3xl md:text-[32px] font-extrabold tracking-tight text-ink pr-10"
            >
              Privacy Policy for SubScale&trade;
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ink">
              <strong>Effective Date:</strong> 13/July/2026
            </p>
          </div>

          <div className="pt-2" />

          {/* Introduction */}
          <div>
            <p>
              <strong>Introduction</strong> By using SubScale&trade;, you agree to the collection, use, and sharing of your information as outlined in this policy. If we update our privacy policy, we will notify you via email and update the changes here.
            </p>
          </div>

          {/* Summary */}
          <div>
            <p>
              <strong>Summary</strong>
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-1.5 marker:text-ink">
              <li>We will not sell, rent, or share your information without your express consent.</li>
              <li>You will not receive spam from us; unsubscribe options are available for all marketing communications.</li>
              <li>We do not have direct access to your payment methods without your consent.</li>
              <li>In compliance with GDPR, you can opt out of marketing communications, request your data, or ask for deletion of your information.</li>
            </ul>
          </div>

          {/* How We Treat Your Information */}
          <div>
            <p>
              <strong>How We Treat Your Information</strong>
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-1.5 marker:text-ink">
              <li>
                <strong>Respect for Privacy</strong>: Your information will never be sold, rented, or shared without your consent.
              </li>
              <li>
                <strong>Communication</strong>: You will receive account updates, blog posts, and newsletters. Unsubscribe at any time.
              </li>
              <li>
                <strong>Payment Security</strong>: Your payment details are encrypted. We only charge the agreed amount with your prior consent.
              </li>
            </ul>
          </div>

          {/* What Information Do We Collect? */}
          <div>
            <p>
              <strong>What Information Do We Collect?</strong>
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-1.5 marker:text-ink">
              <li>
                <strong>Personal Information</strong>: Name, email address, and phone number.
              </li>
              <li>
                <strong>Business Information</strong>: Details about your business to help customize our services.
              </li>
              <li>
                <strong>Technical Data</strong>: Collected via digital tools to enhance your user experience.
              </li>
            </ul>
          </div>

          {/* How Do We Protect Your Information? & Use of Cookies & Compliance */}
          <div className="space-y-4">
            <p>
              <strong>How Do We Protect Your Information?</strong> We use SSL encryption to protect your data and ensure secure transactions.
            </p>

            <p>
              <strong>Use of Cookies</strong> Yes, we use cookies&mdash;not the tasty kind, but the digital ones to track site interactions and enhance your experience. You can manage cookie settings in your browser.
            </p>

            <div>
              <p>
                <strong>Compliance with Privacy Laws</strong>
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1 mt-1.5 marker:text-ink">
                <li>
                  <strong>California Online Privacy Protection Act</strong>: We comply with this act and will not distribute your information without consent.
                </li>
                <li>
                  <strong>Children&rsquo;s Online Privacy Protection Act</strong>: Our services are not directed to anyone under the age of 13.
                </li>
              </ul>
            </div>
          </div>

          {/* Online Privacy Policy Only & Terms of Service & Your Consent & Changes */}
          <div className="space-y-4">
            <p>
              <strong>Online Privacy Policy Only</strong> This policy applies to information collected online through our website, not offline.
            </p>

           <p>
              <strong>Terms of Service</strong> Please view our Terms of Service for more details on the use of our website and services.
            </p> 

            <p>
              <strong>Your Consent</strong> By using our site, you consent to our privacy policy.
            </p>

            <p>
              <strong>Changes to Our Privacy Policy</strong> We will post any changes to our policy on this page. The policy was last updated on 13/July/2026.
            </p>
          </div>

          {/* Contacting Us */}
          <div className="space-y-2 pt-1">
            <p>
              <strong>Contacting Us</strong> If you have any questions about this privacy policy, please contact us at:
            </p>
            <div className="space-y-1 text-ink">
              <p>
                Website:{' '}
                <a
                  href="http://www.gosubscale.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline font-medium break-all"
                >
                  www.gosubscale.com
                </a>
              </p>
              <p>Address: 8 THE GREEN NO 26268 DOVER, DE 19901</p>
              <p>
                Email Contact:{' '}
                <a
                  href="mailto:partnerships@gosubscale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:underline font-medium break-all"
                >
                  partnerships@gosubscale.com
                </a>
              </p>
            </div>
            <p className="pt-2">
              This policy ensures transparency and compliance with legal standards, providing you with a clear understanding of how we handle your data at SubScale&trade;.
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
