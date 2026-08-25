import { useState } from 'react'
import { IconArrowRight } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { BookADemoModal } from '@/components/book-a-demo-modal'

export function FinalCta() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false)

  return (
    <section id="book-a-demo" className="bg-black px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-2xl sm:rounded-[2rem] bg-[#1a1a1a] px-6 py-14 sm:px-12 sm:py-16 md:px-16 md:py-20 text-center">
        <h2 className="mx-auto max-w-4xl font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white text-balance">
          Ready to scale subscription revenue?
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white/85">
          See why companies are partnering with SubScale&trade;
        </p>
        <div className="mt-8 flex justify-center w-full">
          <button
            type="button"
            onClick={() => setIsBookDemoOpen(true)}
            className="group inline-flex items-center justify-center gap-2 rounded-xs sm:rounded-sm bg-brand px-3 py-3.5 sm:px-8 sm:py-4 font-display text-[10px] sm:text-sm md:text-base font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand/90 active:scale-[0.99] w-full sm:w-auto cursor-pointer"
          >
            <span>YES, I WANT GUARANTEED RESULTS</span>
            <IconArrowRight className="size-4 sm:size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </Reveal>

      <BookADemoModal
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />
    </section>
  )
}
