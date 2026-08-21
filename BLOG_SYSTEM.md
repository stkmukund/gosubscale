# SubScale™ - Blog System Architecture

This document explains the internal architecture and data flow of the blog system in SubScale™.

---

## High-Level Architecture Flow

```
[ Individual JSON Files (src/data/blogs/*.json) + Central Index (index.json) ]
                                    │
                                    ▼
                 [ Data Layer (src/lib/blogs.ts) ]
                 - import.meta.glob (auto-loads posts)
                 - getAllBlogs() / getBlogBySlug()
                 - getCategories() / getSimilarBlogs()
                                    │
                  ┌─────────────────┴─────────────────┐
                  ▼                                   ▼
        [ Router (src/lib/router.tsx) ]      [ Router (src/lib/router.tsx) ]
               URL: /blogs                          URL: /blogs/:slug
                  │                                   │
                  ▼                                   ▼
      [ BlogPage Component ]              [ BlogDetailPage Component ]
     (src/components/blog-page.tsx)      (src/components/blog-detail-page.tsx)
      - Category filter dropdown          - Hero banner & posted date badge
      - Grid / List view toggle           - Article HTML content (.blog-prose)
      - BlogCard / BlogListRow            - Table of Contents (scroll spy)
                                          - Similar blogs recommendation
```

---

## 1. Blog Data Layer

### Files Responsible:
- **`src/data/blogs/*.json`**: Individual blog post JSON files containing full content, TOC, and metadata.
- **`src/data/blogs/index.json`**: Central array containing metadata for all blogs.
- **`src/lib/blogs.ts`**: The central TypeScript module that loads and queries blog data.

### How it works:
1. **Dynamic File Loading**:  
   `src/lib/blogs.ts` uses Vite’s `import.meta.glob` feature to automatically scan and import all JSON files inside `src/data/blogs/` at build/bundle time:
   ```typescript
   const blogPostModules = import.meta.glob<BlogPost | { default: BlogPost }>(
     '@/data/blogs/*.json',
     { eager: true }
   )
   ```
2. **Indexing & Caching**:  
   Posts are stored in a JavaScript `Map<string, BlogPost>` keyed by their `slug` and `id` for instant `O(1)` lookups.
3. **Exported Query Functions**:
   - `getAllBlogs()`: Returns all blog posts in order.
   - `getBlogBySlug(slug)`: Retrieves a specific full blog post (including `toc` and `contentHtml`) by slug.
   - `getCategories()`: Returns a list of unique categories (prefixed with `"All Categories"`).
   - `getSimilarBlogs(slug, category, limit)`: Returns related articles sharing the same category (with fallback to other posts if fewer than `limit` match).

---

## 2. Routing & Dynamic URL Resolution

### Files Responsible:
- **`src/lib/router.tsx`**: Lightweight client-side router with browser history integration.
- **`src/App.tsx`**: Root component that decides which page component to render.
- **`vercel.json`**: Server configuration ensuring single-page app (SPA) rewrites.

### How it works:
1. When a user visits a URL, `parseLocation()` in `src/lib/router.tsx` analyzes `window.location.pathname`:
   - `/blogs` &rarr; sets route state to `{ page: 'blogs', slug: null }`.
   - `/blogs/:slug` (e.g. `/blogs/revboost-is-now-subscale`) &rarr; extracts the slug and sets route state to `{ page: 'blog-detail', slug: 'revboost-is-now-subscale' }`.
   - `/` &rarr; sets route state to `{ page: 'home', slug: null }`.
2. In `src/App.tsx`, `MainContent()` renders the corresponding page based on `page`:
   ```tsx
   {page === 'blogs' ? (
     <BlogPage />
   ) : page === 'blog-detail' ? (
     <BlogDetailPage slug={slug} />
   ) : (
     <HomePage />
   )}
   ```
3. Navigation links are rendered using the custom `<Link to="/blogs/slug">` component, which uses HTML5 `history.pushState` to transition smoothly without page reloads.

---

## 3. Blog Listing Page (`BlogPage`)

### File Responsible:
- **`src/components/blog-page.tsx`**

### Key Responsibilities:
1. **Data Fetching**: Calls `getAllBlogs()` and `getCategories()` on mount using React's `useMemo`.
2. **Filtering State**:
   - `selectedCategory`: Tracks active category filter. When changed, `filteredBlogs` updates in real-time.
   - `viewMode`: Toggles between `'grid'` (card layout) and `'list'` (horizontal row layout).
3. **Card Rendering**:
   - `BlogCard`: Rendered in grid view (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
   - `BlogListRow`: Rendered in list view (`flex flex-col md:flex-row`).
4. **Links**: Each card links to `/blogs/${blog.slug}`.

---

## 4. Blog Detail Page (`BlogDetailPage`)

### File Responsible:
- **`src/components/blog-detail-page.tsx`**

### Key Responsibilities:
1. **Post Lookup**:
   - Receives `slug` from router.
   - Calls `getBlogBySlug(slug)` to load full post content.
   - If not found, renders a friendly "Blog Post Not Found" screen with a link back to `/blogs`.
2. **Title Synchronization**:
   - Updates `document.title` to `${blog.title} | SubScale™ Blog`.
3. **Content Rendering**:
   - Renders `blog.contentHtml` inside a `.blog-prose` wrapper with responsive typography and image scaling.
4. **Table of Contents (TOC) with Active Scroll Spy**:
   - Renders sticky sidebar with section links on large screens.
   - A scroll listener tracks headings and highlights the active section in real-time (`activeTocId`).
   - Clicking a TOC item smoothly scrolls the window to the matching element ID.
5. **Similar Blogs Widget**:
   - Calls `getSimilarBlogs(blog.slug, blog.category)` and renders 3 related articles at the bottom of the post.

---

## Component & File Reference Summary

| File | Type | Primary Role |
| :--- | :--- | :--- |
| `src/data/blogs/<slug>.json` | Data | Individual blog post data (content, TOC, meta). |
| `src/data/blogs/index.json` | Data | Central catalog list of blog metadata. |
| `src/lib/blogs.ts` | Data Layer | Glob imports JSON files; provides query functions. |
| `src/lib/router.tsx` | Router | Parses `/blogs` and `/blogs/:slug` URLs; manages navigation state. |
| `src/App.tsx` | Root Layout | Connects Router state to `BlogPage` or `BlogDetailPage`. |
| `src/components/blog-page.tsx` | UI Component | Blog listing, category filtering, grid/list toggle. |
| `src/components/blog-detail-page.tsx` | UI Component | Full post reader, TOC scroll spy, similar posts widget. |
| `scripts/create-blog-json.js` | Tooling | CLI generator script for creating new blog posts. |
| `vercel.json` | Config | SPA rewrite configuration for clean URL hosting. |
