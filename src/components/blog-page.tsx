import { useState, useMemo } from 'react'
import { getAllBlogs, getCategories, type BlogPost } from '@/lib/blogs'
import { Link } from '@/lib/router'
import { IconArrowRight, IconSliders, IconChevronDown, IconGrid, IconList } from '@/components/icons'
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
    if (selectedCategory === 'All Categories') {
      return allBlogs
    }
    return allBlogs.filter((blog) => blog.category === selectedCategory)
  }, [allBlogs, selectedCategory])

  return (
    <div className="min-h-screen bg-cream text-ink antialiased flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-5 pt-10 pb-6 sm:px-6 md:px-8 sm:pt-14 sm:pb-10 text-center">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink">
                Insights That Drive Growth
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink/80 font-normal font-arial max-w-2xl mx-auto">
                Expert advice on Shopify growth, conversion optimization, subscriptions, and revenue strategies.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Filter and View Toggle Controls */}
        <section className="px-5 sm:px-6 md:px-8 max-w-7xl mx-auto w-full pb-12 sm:pb-16">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            {/* Category Dropdown */}
            <div className="relative w-full sm:w-72">
              <select
                id="blogCategorySelect"
                aria-label="Filter by Category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none rounded-lg border border-black/20 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-ink shadow-xs transition-colors hover:border-black/40 focus:border-brand focus:outline-hidden focus:ring-2 focus:ring-brand/20 cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black/50">
                <IconChevronDown className="size-4" />
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-black/20 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink shadow-xs transition-all hover:bg-black/5 hover:border-black/40 cursor-pointer"
                aria-label={`Toggle view. Current view is ${viewMode}`}
              >
                <span>{viewMode === 'grid' ? 'View List' : 'View Grid'}</span>
                <IconSliders className="size-4 text-ink/70" />
              </button>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-5 sm:my-8 border-t border-black/15" />

          {/* Articles Section */}
          {filteredBlogs.length === 0 ? (
            <div className="rounded-2xl border border-black/10 bg-white p-8 sm:p-12 text-center">
              <p className="text-base sm:text-lg font-medium text-ink/70">No articles found in this category.</p>
              <button
                type="button"
                onClick={() => setSelectedCategory('All Categories')}
                className="mt-4 inline-flex items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand/90 cursor-pointer"
              >
                Show All Articles
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredBlogs.map((blog, index) => (
                <Reveal key={blog.id} delay={index * 60}>
                  <BlogCard blog={blog} />
                </Reveal>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="flex flex-col gap-5 sm:gap-6">
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
  const detailUrl = `/blogs/${blog.slug}`

  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-black/10 bg-white p-5 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div>
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block rounded-md border border-emerald-500/30 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
            {blog.category}
          </span>
        </div>

        {/* Metadata */}
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-black/60">
          <span>
            <strong className="text-black font-semibold">Author:</strong> {blog.author}
          </span>
          <span className="text-black/30">•</span>
          <span>
            <strong className="text-black font-semibold">Posted:</strong> {blog.postedDate}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-ink hover:text-brand transition-colors leading-snug">
          <Link to={detailUrl}>{blog.title}</Link>
        </h2>

        {/* Excerpt */}
        <p className="mt-3 text-sm leading-relaxed text-black/75 line-clamp-4">
          {blog.excerpt}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-5 sm:mt-6 pt-2">
        <Link
          to={detailUrl}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-brand px-5 py-2.5 sm:py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-brand/90 active:scale-[0.99]"
        >
          <span>READ BLOG</span>
          <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

function BlogListRow({ blog }: { blog: BlogPost }) {
  const detailUrl = `/blogs/${blog.slug}`

  return (
    <article className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 rounded-xl border border-black/10 bg-white p-5 sm:p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="max-w-3xl min-w-0">
        <div className="mb-2.5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
          <span className="inline-block rounded-md border border-emerald-500/30 bg-emerald-50 px-2.5 py-0.5 font-semibold text-emerald-700 shrink-0">
            {blog.category}
          </span>
          <span className="text-black/30">•</span>
          <span className="text-black/60">
            <strong className="text-black font-semibold">Posted:</strong> {blog.postedDate}
          </span>
          <span className="text-black/30">•</span>
          <span className="text-black/60">
            <strong className="text-black font-semibold">Author:</strong> {blog.author}
          </span>
        </div>

        <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-ink hover:text-brand transition-colors leading-snug">
          <Link to={detailUrl}>{blog.title}</Link>
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-black/75 line-clamp-3 md:line-clamp-none">
          {blog.excerpt}
        </p>
      </div>

      <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0">
        <Link
          to={detailUrl}
          className="flex w-full md:w-auto items-center justify-center gap-2 rounded-md bg-brand px-6 py-2.5 sm:py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-brand/90 whitespace-nowrap"
        >
          <span>READ BLOG</span>
          <IconArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  )
}
