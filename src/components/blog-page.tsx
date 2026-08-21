import { useState, useMemo } from 'react'
import { getAllBlogs, getCategories, type BlogPost } from '@/lib/blogs'
import { Link } from '@/lib/router'
import { IconArrowRight, IconSliders, IconChevronDown } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { Navbar } from '@/components/navbar'

export function BlogPage() {
  const allBlogs = useMemo(() => getAllBlogs(), [])
  const categories = useMemo(() => getCategories(), [])
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === 'All Categories') return allBlogs
    return allBlogs.filter((blog) => blog.category === selectedCategory)
  }, [allBlogs, selectedCategory])

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white antialiased flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="px-5 pt-14 pb-6 sm:px-6 md:px-8 sm:pt-20 sm:pb-10 text-center">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Insights That Drive{' '}
                <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">
                  Growth
                </span>
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/50 font-normal max-w-2xl mx-auto">
                Expert advice on Shopify growth, conversion optimization, subscriptions, and revenue strategies.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-5 sm:px-6 md:px-8 max-w-7xl mx-auto w-full pb-12 sm:pb-16">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <div className="relative w-full sm:w-72">
              <select
                aria-label="Filter by Category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 pr-10 text-sm font-medium text-white transition-colors hover:border-white/20 focus:border-brand focus:outline-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#12141a]">
                    {cat}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
                <IconChevronDown className="size-4" />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/70 transition-all hover:bg-white/10 hover:border-white/20 cursor-pointer"
                aria-label={`Toggle view. Current view is ${viewMode}`}
              >
                <span>{viewMode === 'grid' ? 'View List' : 'View Grid'}</span>
                <IconSliders className="size-4 text-white/50" />
              </button>
            </div>
          </div>

          <hr className="my-5 sm:my-8 border-t border-white/[0.06]" />

          {filteredBlogs.length === 0 ? (
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12 text-center">
              <p className="text-base sm:text-lg font-medium text-white/50">No articles found in this category.</p>
              <button
                type="button"
                onClick={() => setSelectedCategory('All Categories')}
                className="mt-4 inline-flex items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand/90 cursor-pointer"
              >
                Show All Articles
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredBlogs.map((blog, index) => (
                <Reveal key={blog.id} delay={index * 60}>
                  <BlogCard blog={blog} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4 sm:gap-5">
              {filteredBlogs.map((blog, index) => (
                <Reveal key={blog.id} delay={index * 50}>
                  <BlogListRow blog={blog} />
                </Reveal>
              ))}
            </div>
          )}
        </section>
      </main>

      <FinalCta />
      <SiteFooter />
    </div>
  )
}

function BlogCard({ blog }: { blog: BlogPost }) {
  const detailUrl = `/blog/${blog.slug}`

  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-7 transition-all duration-300 hover:border-brand/20 hover:bg-white/[0.04]">
      <div>
        <div className="mb-3">
          <span className="inline-block rounded-md border border-brand/20 bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
            {blog.category}
          </span>
        </div>

        <div className="mb-3 flex justify-between items-center gap-x-2 gap-y-1 text-[10px] sm:text-xs text-white/40">
          <span><strong className="text-white/60 font-semibold">Author:</strong> {blog.author}</span>
          <span><strong className="text-white/60 font-semibold">Posted:</strong> {blog.postedDate}</span>
        </div>

        <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-brand transition-colors leading-snug">
          <Link to={detailUrl}>{blog.title}</Link>
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-white/50 line-clamp-4">
          {blog.excerpt}
        </p>
      </div>

      <div className="mt-5 sm:mt-6 pt-2">
        <Link
          to={detailUrl}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 sm:py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-brand/90 active:scale-[0.99]"
        >
          <span>READ BLOG</span>
          <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

function BlogListRow({ blog }: { blog: BlogPost }) {
  const detailUrl = `/blog/${blog.slug}`

  return (
    <article className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-7 md:p-8 transition-all duration-300 hover:border-brand/20 hover:bg-white/[0.04]">
      <div className="max-w-3xl min-w-0">
        <div className="mb-2.5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
          <span className="inline-block rounded-md border border-brand/20 bg-brand/10 px-2.5 py-0.5 font-semibold text-brand shrink-0">
            {blog.category}
          </span>
          <span className="text-white/40">
            <strong className="text-white/60 font-semibold">Posted:</strong> {blog.postedDate}
          </span>
          <span className="text-white/40">
            <strong className="text-white/60 font-semibold">Author:</strong> {blog.author}
          </span>
        </div>

        <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-brand transition-colors leading-snug">
          <Link to={detailUrl}>{blog.title}</Link>
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-white/50 line-clamp-3 md:line-clamp-none">
          {blog.excerpt}
        </p>
      </div>

      <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0">
        <Link
          to={detailUrl}
          className="flex w-full md:w-auto items-center justify-center gap-2 rounded-lg bg-brand px-6 py-2.5 sm:py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-brand/90 whitespace-nowrap"
        >
          <span>READ BLOG</span>
          <IconArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  )
}
