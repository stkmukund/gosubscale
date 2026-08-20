import { Check } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

const STEPS = [
  { label: 'Week 1', text: 'In-depth audit of your business & onboarding' },
  { label: 'Week 2', text: 'Begin integration and systems implementation' },
  { label: 'Week 3', text: 'Quality assurance check' },
  { label: 'Week 4', text: 'Launch subscription program' },
  { label: 'Weeks 5+', text: 'Monitor, optimize & scale' },
]

export function Process() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl">
            Here&rsquo;s what happens when you partner
            <br className="hidden sm:block" /> with SubScale&trade;
          </h2>
        </Reveal>

        <ol className="mt-14 space-y-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.label} delay={i * 80}>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-brand/50 hover:bg-white/[0.06]">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <p className="text-base text-white sm:text-lg">
                  <span className="font-display font-bold text-brand">{step.label}:</span>{' '}
                  <span className="text-white/80">{step.text}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex justify-center">
          <CtaButton size="lg">Yes! I Want to Make More Money</CtaButton>
        </Reveal>
      </div>
    </section>
  )
}
