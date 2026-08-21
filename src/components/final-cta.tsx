import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconArrowRight, IconX, IconCheck } from '@/components/icons'

function GrowthAuditModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#12141a] p-6 sm:p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-1 text-white/40 hover:text-white transition-colors"
              aria-label="Close"
            >
              <IconX className="size-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand/15 mb-4">
                  <IconCheck className="size-7 text-brand" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Request received
                </h3>
                <p className="text-sm text-white/50">
                  We&rsquo;ll be in touch within 24 hours to schedule your free growth audit.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  Get your free growth audit
                </h3>
                <p className="text-sm text-white/50 mb-6">
                  We&rsquo;ll analyze your subscription funnel and show you exactly where
                  you&rsquo;re leaving revenue on the table.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-white/60 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/60 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@brand.com"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/60 mb-1.5">
                      Monthly Revenue
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                    >
                      <option value="" disabled className="bg-[#12141a]">
                        Select range
                      </option>
                      <option className="bg-[#12141a]">$100K - $500K</option>
                      <option className="bg-[#12141a]">$500K - $1M</option>
                      <option className="bg-[#12141a]">$1M - $5M</option>
                      <option className="bg-[#12141a]">$5M+</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-display text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)] transition-all hover:bg-brand/90"
                  >
                    Get My Free Audit
                    <IconArrowRight className="size-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function FinalCta() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section id="book-a-demo" className="bg-[#0a0b0f] py-20 sm:py-24 md:py-32 border-t border-white/[0.04]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] via-brand/[0.03] to-transparent px-6 py-14 sm:px-12 sm:py-16 md:px-20 md:py-20 text-center"
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white text-balance">
                Ready to scale subscription revenue?
              </h2>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-white/50 max-w-xl mx-auto">
                See why high-volume DTC brands partner with SubScale. Get a free growth audit —
                no strings attached.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-display text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)] transition-all hover:bg-brand/90 hover:shadow-[0_12px_32px_-10px_rgba(16,185,129,0.7)] w-full sm:w-auto"
                >
                  Get Your Free Growth Audit
                  <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="https://gosubscale.com/book/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-display text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 w-full sm:w-auto"
                >
                  Book a Demo
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/40">
                <span className="flex items-center gap-1.5">
                  <IconCheck className="size-3.5 text-brand" strokeWidth={2.5} />
                  Performance-based pricing
                </span>
                <span className="flex items-center gap-1.5">
                  <IconCheck className="size-3.5 text-brand" strokeWidth={2.5} />
                  Launch in 4 weeks
                </span>
                <span className="flex items-center gap-1.5">
                  <IconCheck className="size-3.5 text-brand" strokeWidth={2.5} />
                  No long-term contracts
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <GrowthAuditModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
