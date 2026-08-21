import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconPlus, IconMinus } from '@/components/icons'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'How much do you charge?',
    a: 'SubScale operates on a performance basis — meaning if you don\u2019t make money, we don\u2019t make money. We charge a small percentage of the attributable incremental revenue growth of your subscription program.',
  },
  {
    q: 'Can SubScale sign an NDA before I work with them?',
    a: 'Absolutely. We\u2019re happy to sign a mutual NDA before diving into any specifics of your business so you can share openly and confidently.',
  },
  {
    q: 'Can your team help me increase my current conversion rate?',
    a: 'Yes. Conversion rate optimization is a core part of what we do — from opt-in flows to checkout and retention, we optimize every step of the funnel.',
  },
  {
    q: 'Do you provide copywriting services for funnels?',
    a: 'Yes. Our team writes high-converting copy for every part of your subscription funnel, backed by years of tested messaging across 9-figure brands.',
  },
  {
    q: 'How does SubScale build funnels?',
    a: 'We combine a battle-tested framework with data from hundreds of millions in processed revenue to build, test, and optimize funnels tailored to your offer.',
  },
  {
    q: 'How long will it take to create and launch my subscription?',
    a: 'Most partners launch within four weeks — an audit and onboarding week, integration, a QA check, and then go-live, followed by ongoing optimization.',
  },
  {
    q: 'Can I port my data from another provider?',
    a: 'Yes. We handle migrations from other providers and platforms so you can move your subscription data over without losing momentum.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-[#0a0b0f] py-20 sm:py-24 md:py-32 border-t border-white/[0.04]">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            Frequently asked{' '}
            <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="mt-4 text-base text-white/50">
            Everything you need to know before partnering with us.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={cn(
                  'rounded-xl border transition-colors duration-300',
                  isOpen
                    ? 'border-brand/20 bg-brand/[0.03]'
                    : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:py-5 text-left cursor-pointer"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-white leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      'flex size-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300',
                      isOpen ? 'bg-brand text-brand-foreground' : 'bg-white/10 text-white/60',
                    )}
                  >
                    {isOpen ? <IconMinus className="size-3.5" /> : <IconPlus className="size-3.5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm sm:text-base leading-relaxed text-white/50">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
