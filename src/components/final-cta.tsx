import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section id="book-a-demo" className="bg-cream px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 pt-4">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-2xl sm:rounded-[2rem] bg-ink px-5 py-12 sm:px-8 sm:py-16 md:py-20 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white text-balance">
          Ready to scale subscription revenue?
        </h2>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-white/75">
          See why companies are partnering with SubScale&trade;
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center w-full">
          <CtaButton size="lg" className="w-full sm:w-auto">
            Yes, I Want Guaranteed Results
          </CtaButton>
        </div>
      </Reveal>
    </section>
  )
}
