import blogIndexData from '@/data/blogs/index.json'

export interface TocItem {
  id: string
  text: string
}

export interface BlogMetadata {
  id: string
  slug: string
  title: string
  category: string
  author: string
  postedDate: string
  excerpt: string
  bannerImage: string
}

export interface BlogPost extends BlogMetadata {
  toc?: TocItem[]
  contentHtml?: string
}

// Load all individual blog JSON files dynamically via Vite glob import
const blogPostModules = import.meta.glob<BlogPost | { default: BlogPost }>(
  '@/data/blogs/*.json',
  { eager: true }
)

// Map for quick lookup of full blog posts by slug/id
const blogPostsMap = new Map<string, BlogPost>()

for (const path in blogPostModules) {
  // Exclude the central index file
  if (path.endsWith('/index.json') || path.endsWith('\\index.json')) {
    continue
  }
  const raw = blogPostModules[path]
  const post: BlogPost = (raw as { default: BlogPost }).default || (raw as BlogPost)
  if (post && post.slug) {
    blogPostsMap.set(post.slug, post)
    if (post.id && post.id !== post.slug) {
      blogPostsMap.set(post.id, post)
    }
  }
}

// Construct the consolidated list of blogs with full post content if available
export const blogs: BlogPost[] = (blogIndexData as BlogMetadata[]).map((meta) => {
  const fullPost = blogPostsMap.get(meta.slug) || blogPostsMap.get(meta.id)
  return fullPost ? { ...meta, ...fullPost } : (meta as BlogPost)
})

// Also register any post that exists as a file but might not be in index yet
for (const [slug, post] of blogPostsMap.entries()) {
  if (!blogs.some((b) => b.slug === slug || b.id === slug)) {
    blogs.push(post)
  }
}

/**
 * Returns all available blog posts
 */
export function getAllBlogs(): BlogPost[] {
  return blogs
}

/**
 * Retrieves a single blog post by slug or ID with full content and TOC
 */
export function getBlogBySlug(slug: string): BlogPost | undefined {
  if (!slug) return undefined
  // First check the dynamic map of loaded individual JSON files
  const post = blogPostsMap.get(slug)
  if (post) return post

  // Fallback to checking the indexed blogs list
  return blogs.find((b) => b.slug === slug || b.id === slug)
}

/**
 * Returns a list of unique blog categories prefixed with "All Categories"
 */
export function getCategories(): string[] {
  const categories = new Set<string>()
  blogs.forEach((b) => {
    if (b.category) categories.add(b.category)
  })
  return ['All Categories', ...Array.from(categories)]
}

/**
 * Returns similar blog posts within the same category, filling up to the limit
 */
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
