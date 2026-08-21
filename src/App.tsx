import { AnnouncementBar } from '@/components/announcement-bar'
import { Hero } from '@/components/hero'
import { LogoStrip } from '@/components/logo-strip'
import { WhatWeDo } from '@/components/what-we-do'
import { Calculator } from '@/components/calculator'
import { Process } from '@/components/process'
import { Comparison } from '@/components/comparison'
import { Faq } from '@/components/faq'
import { Testimonials } from '@/components/testimonials'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { BlogPage } from '@/components/blog-page'
import { BlogDetailPage } from '@/components/blog-detail-page'
import { RouterProvider, useRouter } from '@/lib/router'

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white antialiased">
      <Hero />
      <LogoStrip />
      <WhatWeDo />
      <Calculator />
      <Process />
      <Comparison />
      <Testimonials />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </div>
  )
}

function MainContent() {
  const { page, slug } = useRouter()

  return (
    <>
      <AnnouncementBar />
      {page === 'blogs' ? (
        <BlogPage />
      ) : page === 'blog-detail' ? (
        <BlogDetailPage slug={slug} />
      ) : (
        <HomePage />
      )}
    </>
  )
}

export function App() {
  return (
    <RouterProvider>
      <MainContent />
    </RouterProvider>
  )
}

export default App
