import React, { createContext, useContext, useEffect, useState, useTransition } from 'react'

export type PageType = 'home' | 'blogs' | 'blog-detail'

export interface RouteState {
  page: PageType
  slug: string | null
  pathname: string
  search: string
}

function parseLocation(): RouteState {
  if (typeof window === 'undefined') {
    return { page: 'home', slug: null, pathname: '/', search: '' }
  }

  const pathname = window.location.pathname
  const search = window.location.search
  const hash = window.location.hash
  const urlParams = new URLSearchParams(search)

  // 1. Query parameter slug detection: /blogs/detail.html?slug=... or ?slug=...
  const querySlug = urlParams.get('slug')
  if (querySlug) {
    return {
      page: 'blog-detail',
      slug: querySlug,
      pathname,
      search,
    }
  }

  // 2. Hash routing fallbacks: #/blogs, #blogs, #/blogs/detail.html?slug=...
  if (hash.startsWith('#/blogs/detail') || hash.includes('slug=')) {
    const hashParams = new URLSearchParams(hash.split('?')[1] || '')
    const hashSlug = hashParams.get('slug') || 'revboost-is-now-subscale'
    return {
      page: 'blog-detail',
      slug: hashSlug,
      pathname,
      search,
    }
  }

  if (hash === '#blogs' || hash === '#/blogs') {
    return {
      page: 'blogs',
      slug: null,
      pathname: '/blogs',
      search,
    }
  }

  // 3. Pathname matching:
  // /blogs/detail.html without query param -> fallback to featured slug
  if (pathname.includes('/blogs/detail.html') || pathname.endsWith('/detail.html')) {
    return {
      page: 'blog-detail',
      slug: 'revboost-is-now-subscale',
      pathname,
      search,
    }
  }

  // /blogs/:slug
  const blogsPrefix = '/blogs/'
  if (pathname.startsWith(blogsPrefix)) {
    const subPath = pathname.slice(blogsPrefix.length).replace(/\/$/, '')
    if (subPath && subPath !== 'index.html' && subPath !== 'detail.html') {
      return {
        page: 'blog-detail',
        slug: subPath,
        pathname,
        search,
      }
    }
    return {
      page: 'blogs',
      slug: null,
      pathname: '/blogs',
      search,
    }
  }

  // /blogs
  if (pathname === '/blogs' || pathname === '/blogs/') {
    return {
      page: 'blogs',
      slug: null,
      pathname: '/blogs',
      search,
    }
  }

  // Default home page
  return {
    page: 'home',
    slug: null,
    pathname: '/',
    search,
  }
}

interface RouterContextValue extends RouteState {
  navigate: (to: string, options?: { replace?: boolean }) => void
}

const RouterContext = createContext<RouterContextValue | null>(null)

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [route, setRoute] = useState<RouteState>(() => parseLocation())
  const [, startTransition] = useTransition()

  useEffect(() => {
    const handlePopState = () => {
      startTransition(() => {
        setRoute(parseLocation())
      })
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handlePopState)
    }
  }, [])

  const navigate = (to: string, options?: { replace?: boolean }) => {
    if (typeof window === 'undefined') return

    // Handle external or mailto links
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:')) {
      window.location.href = to
      return
    }

    if (to.startsWith('#') && !to.startsWith('#/blogs') && !to.includes('slug=')) {
      const element = document.querySelector(to)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    if (options?.replace) {
      window.history.replaceState({}, '', to)
    } else {
      window.history.pushState({}, '', to)
    }

    startTransition(() => {
      setRoute(parseLocation())
    })

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  return (
    <RouterContext.Provider value={{ ...route, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter(): RouterContextValue {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}

export function Link({
  to,
  children,
  className,
  replace,
  onClick,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
  replace?: boolean
}) {
  const { navigate } = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return
    }

    // If external or mailto link, let default browser behavior happen
    if (to.startsWith('http') || to.startsWith('mailto:')) {
      if (onClick) onClick(e)
      return
    }

    e.preventDefault()
    if (onClick) onClick(e)
    navigate(to, { replace })
  }

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
