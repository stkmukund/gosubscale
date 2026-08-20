import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section id="book-a-demo" className="bg-cream px-5 pb-16 pt-4 md:px-8">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center md:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl">
            Ready to scale subscription revenue?
          </h2>
          <p className="mt-5 text-lg text-white/70">
            See why companies are partnering with SubScale&trade;
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton size="lg">Yes, I Want Guaranteed Results</CtaButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
