import { useEffect, useState, useMemo } from 'react'
import { getBlogBySlug, getSimilarBlogs, type BlogPost } from '@/lib/blogs'
import { Link, useRouter } from '@/lib/router'
import { IconArrowLeft, IconArrowRight } from '@/components/icons'
import { Navbar } from '@/components/navbar'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export function BlogDetailPage({ slug }: { slug: string | null }) {
  const currentSlug = slug || 'revboost-is-now-subscale'
  const blog = useMemo(() => getBlogBySlug(currentSlug), [currentSlug])
  const similarBlogs = useMemo(
    () => (blog ? getSimilarBlogs(blog.slug, blog.category) : []),
    [blog]
  )

  const [activeTocId, setActiveTocId] = useState<string>('')
  const { navigate } = useRouter()

  // Update page title
  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} | SubScale™ Blog`
    } else {
      document.title = 'Blog Post Not Found | SubScale™'
    }
  }, [blog])

  // Observe active section for Table of Contents
  useEffect(() => {
    if (!blog?.toc || blog.toc.length === 0) return

    const handleScroll = () => {
      const scrollY = window.scrollY + 180
      let currentActive = blog.toc?.[0]?.id || ''

      for (const item of blog.toc || []) {
        const el = document.getElementById(item.id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY
          if (scrollY >= top) {
            currentActive = item.id
          }
        }
      }
      setActiveTocId(currentActive)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [blog])

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setActiveTocId(id)
    }
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-cream text-ink antialiased flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-3xl mx-auto px-5 py-24 text-center">
          <h1 className="font-display text-4xl font-bold">Blog Post Not Found</h1>
          <p className="mt-4 text-black/70">
            Sorry, we could not find the blog post you were looking for.
          </p>
          <div className="mt-8">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-bold text-white uppercase tracking-wider hover:bg-black/80"
            >
              <IconArrowLeft className="size-4" />
              <span>Back to Blogs</span>
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream text-ink antialiased flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 md:pt-12 pb-14 sm:pb-16">
          {/* Top Hero Banner */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-black/10 bg-white shadow-sm">
            <img
              src={blog.bannerImage || '/images/revboost-is-now-subscale.jpg'}
              alt={blog.title}
              className="w-full"
            />
            {/* Posted Date Pill Badge on bottom-right of banner */}
            <div className="sm:absolute sm:bottom-0 sm:right-0 bg-brand text-white px-4 py-2 sm:px-6 sm:py-2.5 sm:rounded-tl-xl text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center sm:justify-start gap-1">
              <span>Posted Date:</span>
              <span className="font-bold">{blog.postedDate}</span>
            </div>
          </div>

          {/* Article & Sidebar Grid */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Main Article Column */}
            <article className="lg:col-span-8 min-w-0">
              {/* Author & Category Meta */}
              <div className="text-xs sm:text-sm text-black/75 mb-3 font-medium flex flex-wrap items-center gap-y-1">
                <span>
                  <strong className="text-black font-bold">Author:</strong> {blog.author}
                </span>
                <span className="mx-2 text-black/40">|</span>
                <span>
                  <strong className="text-black font-bold">Category:</strong> {blog.category}
                </span>
              </div>

              {/* Blog Title */}
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.15] mb-6 sm:mb-8 break-words">
                {blog.title}
              </h1>

              {/* Blog HTML Content */}
              <div
                className="blog-prose space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-black/85 font-normal"
                dangerouslySetInnerHTML={{ __html: blog.contentHtml || '' }}
              />
            </article>

            {/* Right Sticky Table of Contents Sidebar */}
            {blog.toc && blog.toc.length > 0 && (
              <aside className="lg:col-span-4 lg:sticky lg:top-24 w-full">
                <div className="rounded-xl border border-black/10 bg-white p-5 sm:p-6 shadow-xs">
                  <h3 className="font-display text-base sm:text-lg font-bold text-ink tracking-tight pb-3 border-b border-black/10">
                    Table of Contents
                  </h3>
                  <ul className="mt-3.5 space-y-2.5 sm:space-y-3">
                    {blog.toc.map((item) => {
                      const isActive = activeTocId === item.id
                      return (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => scrollToSection(e, item.id)}
                            className={`block text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors hover:text-brand ${
                              isActive
                                ? 'text-brand font-bold translate-x-1 duration-150'
                                : 'text-black/70'
                            }`}
                          >
                            {item.text}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </aside>
            )}
          </div>

          {/* Back to Blogs Button */}
          <div className="mt-10 sm:mt-14 md:mt-16 flex justify-center">
            <Link
              to="/blogs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-black px-8 py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-ink/90 active:scale-[0.99]"
            >
              <IconArrowLeft className="size-4" />
              <span>BACK TO BLOGS</span>
            </Link>
          </div>

          {/* Similar Blogs Section */}
          {similarBlogs.length > 0 && (
            <section className="mt-14 sm:mt-16 md:mt-20 pt-10 sm:pt-12 border-t border-black/15">
              <div className="mb-6 sm:mb-8 text-center sm:text-left">
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-ink">
                  Similar Blogs
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {similarBlogs.map((simBlog) => (
                  <article
                    key={simBlog.id}
                    className="flex flex-col justify-between rounded-xl border border-black/10 bg-white p-5 sm:p-6 shadow-xs transition-all hover:shadow-md hover:-translate-y-1"
                  >
                    <div>
                      <div className="mb-2.5">
                        <span className="inline-block rounded-md border border-emerald-500/30 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                          {simBlog.category}
                        </span>
                      </div>
                      <div className="mb-2 flex flex-wrap items-center gap-x-2 text-xs text-black/60">
                        <span>
                          <strong className="text-black font-semibold">Author:</strong> {simBlog.author}
                        </span>
                        <span>•</span>
                        <span>{simBlog.postedDate}</span>
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-ink hover:text-brand transition-colors line-clamp-2 leading-snug">
                        <Link to={`/blogs/${simBlog.slug}`}>
                          {simBlog.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-black/70 line-clamp-3 leading-relaxed">
                        {simBlog.excerpt}
                      </p>
                    </div>

                    <div className="mt-5 sm:mt-6 pt-2">
                      <Link
                        to={`/blogs/${simBlog.slug}`}
                        className="flex w-full items-center justify-center gap-2 rounded-md bg-brand px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-brand/90"
                      >
                        <span>READ BLOG</span>
                        <IconArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <FinalCta />
      <SiteFooter />
    </div>
  )
}
