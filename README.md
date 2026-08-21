# SubScale™ - Blog & Website Guide

Welcome to the **SubScale™** project documentation. This guide explains how to add new blog posts, manage blog content and images, test your changes locally, and deploy to production.

---

## 1. Quick Start: How to Add a New Blog

You can add a new blog post in **two ways**: using the automated CLI script (recommended) or creating the files manually.

### Option A: Using the CLI Generator (Recommended)

Run the following command in your terminal:

```bash
npm run create-blog -- "Your Blog Title" "Category" "Author Name" "A short 1-2 sentence excerpt."
```

*Or run directly with Node:*
```bash
node scripts/create-blog-json.js "Your Blog Title" "Category" "Author Name" "A short 1-2 sentence excerpt."
```

#### What this command does automatically:
1. Generates a clean URL slug (e.g., `"5 Ways to Scale"` &rarr; `5-ways-to-scale`).
2. Creates an individual blog file at `src/data/blogs/<slug>.json` with starter sections and Table of Contents (TOC).
3. Adds the blog metadata to `src/data/blogs/index.json`.
4. Automatically formats today's date (e.g., `August 21, 2026`).

---

### Option B: Adding a Blog Manually

If you prefer to add a post manually:

1. **Create the Blog File**:
   Create a new file at `src/data/blogs/your-blog-slug.json`.

2. **Paste the Blog Template**:
   ```json
   {
     "id": "your-blog-slug",
     "slug": "your-blog-slug",
     "title": "Your Blog Title",
     "category": "Strategy",
     "author": "John Doe",
     "postedDate": "August 21, 2026",
     "excerpt": "A brief summary of what this article covers for the preview card.",
     "bannerImage": "/images/my-banner.jpg",
     "toc": [
       { "id": "introduction", "text": "INTRODUCTION" },
       { "id": "key-insights", "text": "KEY INSIGHTS" },
       { "id": "conclusion", "text": "CONCLUSION" }
     ],
     "contentHtml": "<p id=\"introduction\">Introduction text goes here...</p><h2 id=\"key-insights\">KEY INSIGHTS</h2><p>Article body content...</p><h2 id=\"conclusion\">CONCLUSION</h2><p>Final takeaways...</p>"
   }
   ```

3. **Add to Central Index**:
   Open `src/data/blogs/index.json` and add your blog's metadata entry at the top of the array:
   ```json
   [
     {
       "id": "your-blog-slug",
       "slug": "your-blog-slug",
       "title": "Your Blog Title",
       "category": "Strategy",
       "author": "John Doe",
       "postedDate": "August 21, 2026",
       "excerpt": "A brief summary of what this article covers for the preview card.",
       "bannerImage": "/images/my-banner.jpg"
     },
     ...
   ]
   ```

---

## 2. Where Blog Data is Stored

| Data Type | File / Folder Location | Purpose |
| :--- | :--- | :--- |
| **Individual Blog Content** | `src/data/blogs/<slug>.json` | Full article content, HTML, and Table of Contents. |
| **Central Blog Index** | `src/data/blogs/index.json` | Lightweight metadata list used for listing and filtering. |
| **Blog Data Layer** | `src/lib/blogs.ts` | Central functions that load, filter, and search blogs. |
| **Blog Images** | `public/images/` | Banner images, logos, and in-article illustrations. |

---

## 3. Blog Data Fields Reference

Every individual blog post JSON file supports the following fields:

| Field | Type | Required | Description | Example |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `string` | **Yes** | Unique identifier (usually identical to `slug`). | `"how-to-scale"` |
| `slug` | `string` | **Yes** | URL slug used in the browser route (`/blogs/:slug`). | `"how-to-scale"` |
| `title` | `string` | **Yes** | The main title of the blog post. | `"How to Scale in 2026"` |
| `category` | `string` | **Yes** | Category name for filtering and similar post recommendations. | `"Strategy"` |
| `author` | `string` | **Yes** | Author's full name. | `"Alex Morgan"` |
| `postedDate` | `string` | **Yes** | Human-readable date string. | `"August 21, 2026"` |
| `excerpt` | `string` | **Yes** | 1–3 sentence summary shown on blog cards and list views. | `"Learn actionable tactics..."` |
| `bannerImage` | `string` | **Yes** | Image path (relative to `public/`). | `"/images/my-banner.jpg"` |
| `toc` | `array` | Optional | Table of contents array (`id` and `text`). | `[{"id": "intro", "text": "INTRO"}]` |
| `contentHtml` | `string` | Optional | Full article content written in standard HTML. | `"<p id=\"intro\">Hello</p>"` |

---

## 4. How to Add and Use Images

All static images live inside the **`public/images/`** directory.

### Step 1: Add your image file
Place your image (PNG, JPG, WebP, GIF) into:
```
public/images/my-article-cover.jpg
```

### Step 2: Use it as a Banner Image
Set `bannerImage` in your blog JSON file:
```json
"bannerImage": "/images/my-article-cover.jpg"
```

### Step 3: Use images inside the article content
Inside `contentHtml`, insert a standard HTML `<img>` tag:
```html
<img src="/images/my-chart.png" alt="Revenue growth chart" />
```
*(Images inside `.blog-prose` automatically scale and adapt responsively.)*

---

## 5. How Slugs and URLs Work

- The blog router matches URLs with the format:
  ```
  https://yourdomain.com/blogs/<slug>
  ```
- **Example**: A file named `src/data/blogs/shopify-tips.json` with `"slug": "shopify-tips"` will be accessible at:
  ```
  /blogs/shopify-tips
  ```
- **Fallback URL formats** (also automatically supported for compatibility):
  - `/blogs/detail.html?slug=shopify-tips`
  - `/#/blogs/detail.html?slug=shopify-tips`

---

## 6. Table of Contents & Section Linking

To link Table of Contents (TOC) items to specific headings or paragraphs:

1. In the `toc` array, specify the `id`:
   ```json
   "toc": [
     { "id": "why-ltv-matters", "text": "WHY LTV MATTERS" }
   ]
   ```
2. In `contentHtml`, add the matching `id` attribute to the heading or paragraph:
   ```html
   <h2 id="why-ltv-matters">WHY LTV MATTERS</h2>
   <p>Here is why LTV is crucial for your business...</p>
   ```
When clicked, the page will smoothly scroll to that section.

---

## 7. How to Test Locally

1. **Start the local dev server**:
   ```bash
   npm run dev
   ```
2. **Open in browser**:
   Navigate to `http://localhost:5173` (or the port shown in your terminal).
3. **Verify Blog Pages**:
   - Go to `http://localhost:5173/blogs` to view the blog list and filter by category.
   - Click on your new blog post to verify the detail page, banner, TOC, and content.

---

## 8. How to Build & Deploy

### 1. Run the Production Build Test
Verify that there are no TypeScript or bundling errors:
```bash
npm run build
```
This runs `tsc` and compiles optimized production assets into the `dist/` directory.

### 2. Deploying to Vercel
The project includes a [`vercel.json`](file:///d:/gosubscale-react/vercel.json) file with SPA rewrite rules:
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
- Push your changes to your Git repository (GitHub / GitLab).
- Vercel will automatically detect Vite and deploy your site.
- Dynamic blog routes like `/blogs/your-slug` will work without 404 errors.

---

## 9. Full Step-by-Step Example

Let's create a real blog post called **"Subscription Retention Masterclass"**:

### Step 1: Run the CLI generator
```bash
npm run create-blog -- "Subscription Retention Masterclass" "Retention" "Alex Morgan" "Master the art of keeping subscription customers engaged for the long term."
```

### Step 2: Add your image
Copy `retention-guide.jpg` to `public/images/retention-guide.jpg`.

### Step 3: Edit the generated file
Open `src/data/blogs/subscription-retention-masterclass.json`:
```json
{
  "id": "subscription-retention-masterclass",
  "slug": "subscription-retention-masterclass",
  "title": "Subscription Retention Masterclass",
  "category": "Retention",
  "author": "Alex Morgan",
  "postedDate": "August 21, 2026",
  "excerpt": "Master the art of keeping subscription customers engaged for the long term.",
  "bannerImage": "/images/retention-guide.jpg",
  "toc": [
    { "id": "introduction", "text": "INTRODUCTION" },
    { "id": "step-1", "text": "STEP 1: REBILL STRATEGY" },
    { "id": "conclusion", "text": "CONCLUSION" }
  ],
  "contentHtml": "<p id=\"introduction\">Welcome to the retention masterclass...</p><h2 id=\"step-1\">STEP 1: REBILL STRATEGY</h2><p>Here is how to optimize rebill timing...</p><h2 id=\"conclusion\">CONCLUSION</h2><p>In summary, retention is key to scaling.</p>"
}
```

### Step 4: Preview and Deploy
- Check `http://localhost:5173/blogs/subscription-retention-masterclass`.
- Commit and push to Git to deploy.
