import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'How much do you charge?',
    a: 'SubScale operates on a performance basis meaning if you don\u2019t make money we don\u2019t make money. We charge a small percentage of attributable incremental revenue growth of your subscription program.',
  },
  {
    q: 'Can SubScale\u2122 sign an NDA before I work with them?',
    a: 'Absolutely. We\u2019re happy to sign a mutual NDA before diving into any specifics of your business so you can share openly and confidently.',
  },
  {
    q: 'Can your revenue optimization agency help me to increase my current conversion rate?',
    a: 'Yes. Conversion rate optimization is a core part of what we do \u2014 from opt-in flows to checkout and retention, we optimize every step of the funnel.',
  },
  {
    q: 'Do you provide copywriting services for your funnels?',
    a: 'Yes. Our team writes high-converting copy for every part of your subscription funnel, backed by years of tested messaging across 9-figure brands.',
  },
  {
    q: 'How does SubScale\u2122 build funnels?',
    a: 'We combine a battle-tested framework with data from hundreds of millions in processed revenue to build, test, and optimize funnels tailored to your offer.',
  },
  {
    q: 'How long will it take to create and launch my subscription?',
    a: 'Most partners launch within four weeks \u2014 an audit and onboarding week, integration, a QA check, and then go-live, followed by ongoing optimization.',
  },
  {
    q: 'Can I port my data from another provider?',
    a: 'Yes. We handle migrations from other providers and platforms so you can move your subscription data over without losing momentum.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-extrabold tracking-tight text-ink text-balance sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal className="mt-12 divide-y divide-ink/12 border-y border-ink/12">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {item.q}
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-base leading-relaxed text-black">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
