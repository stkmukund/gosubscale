import blogsData from '@/data/blogs.json'

export interface TocItem {
  id: string
  text: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  category: string
  author: string
  postedDate: string
  excerpt: string
  bannerImage: string
  toc?: TocItem[]
  contentHtml?: string
}

export const blogs: BlogPost[] = blogsData as BlogPost[]

export function getAllBlogs(): BlogPost[] {
  return blogs
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug || blog.id === slug)
}

export function getCategories(): string[] {
  const categories = new Set<string>()
  blogs.forEach((b) => {
    if (b.category) categories.add(b.category)
  })
  return ['All Categories', ...Array.from(categories)]
}

export function getSimilarBlogs(currentSlug: string, category?: string, limit = 3): BlogPost[] {
  let matching = blogs.filter(
    (b) => b.slug !== currentSlug && category && b.category === category
  )

  if (matching.length < limit) {
    const remaining = blogs.filter(
      (b) => b.slug !== currentSlug && !matching.some((m) => m.slug === b.slug)
    )
    matching = [...matching, ...remaining].slice(0, limit)
  } else {
    matching = matching.slice(0, limit)
  }

  return matching
}
