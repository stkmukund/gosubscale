import { AnnouncementBar } from '@/components/announcement-bar'
import { Hero } from '@/components/hero'
import { LogoStrip } from '@/components/logo-strip'
import { WhatWeDo } from '@/components/what-we-do'
import { Reasons } from '@/components/reasons'
import { Process } from '@/components/process'
import { Faq } from '@/components/faq'
import { Testimonials } from '@/components/testimonials'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export function App() {
  return (
    <div className="min-h-screen bg-cream text-ink antialiased">
      <AnnouncementBar />
      <Hero />
      <LogoStrip />
      <WhatWeDo />
      <Reasons />
      <Process />
      <Faq />
      <Testimonials />
      <FinalCta />
      <SiteFooter />
    </div>
  )
}

export default App
