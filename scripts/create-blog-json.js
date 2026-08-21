#!/usr/bin/env node

/**
 * CLI Blog Post Generator
 * 
 * Usage:
 *   node scripts/create-blog-json.js "Blog Title" "Category" "Author" "Excerpt" [options]
 * 
 * Examples:
 *   node scripts/create-blog-json.js "How to Scale Subscription Revenue in 2026" "Strategy" "Alex Morgan" "Explore actionable strategies for growing your recurring customer LTV."
 *   node scripts/create-blog-json.js "Maximizing Shopify Subscriptions" "Shopify" "John Doe" "A complete guide to Shopify continuity systems." --banner="/images/shopify-guide.jpg"
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT_DIR = path.resolve(__dirname, '..')
const BLOGS_DIR = path.join(ROOT_DIR, 'src', 'data', 'blogs')
const INDEX_JSON_PATH = path.join(BLOGS_DIR, 'index.json')
const LEGACY_BLOGS_JSON_PATH = path.join(ROOT_DIR, 'src', 'data', 'blogs.json')

/**
 * Converts a string into a clean, URL-friendly slug
 */
function createSlug(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // remove accent marks
    .replace(/[^a-z0-9\s-]/g, '') // remove invalid chars
    .replace(/[\s_]+/g, '-') // collapse whitespace and underscores to -
    .replace(/^-+|-+$/g, '') // trim leading/trailing hyphens
}

/**
 * Formats a Date object into "Month Day, Year" (e.g. "August 21, 2026")
 */
function formatCurrentDate(date = new Date()) {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function parseArguments() {
  const args = process.argv.slice(2)
  const positional = []
  const flags = {}

  for (const arg of args) {
    if (arg.startsWith('--')) {
      const [key, value] = arg.slice(2).split('=')
      flags[key] = value !== undefined ? value : true
    } else {
      positional.push(arg)
    }
  }

  return { positional, flags }
}

function main() {
  const { positional, flags } = parseArguments()

  const title = positional[0] || flags.title
  const category = positional[1] || flags.category
  const author = positional[2] || flags.author
  const excerpt = positional[3] || flags.excerpt

  if (!title) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: Blog title is required.')
    console.log('\nUsage:')
    console.log('  node scripts/create-blog-json.js "Blog Title" "Category" "Author" "Excerpt"\n')
    console.log('Options:')
    console.log('  --slug=<custom-slug>       Override generated URL slug')
    console.log('  --banner=<image-path>      Set custom banner image path')
    console.log('  --date=<date-string>       Set custom posted date (default: today)\n')
    process.exit(1)
  }

  const generatedSlug = createSlug(title)
  const slug = flags.slug ? createSlug(flags.slug) : generatedSlug

  if (!slug) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: Could not generate a valid slug from the provided title.')
    process.exit(1)
  }

  // Ensure directories exist
  if (!fs.existsSync(BLOGS_DIR)) {
    fs.mkdirSync(BLOGS_DIR, { recursive: true })
  }

  const targetFilePath = path.join(BLOGS_DIR, `${slug}.json`)

  // Check for duplicate individual file
  if (fs.existsSync(targetFilePath)) {
    console.error(
      '\x1b[31m%s\x1b[0m',
      `Error: A blog file with slug "${slug}" already exists at:\n  ${targetFilePath}\nPlease choose a different title or provide a unique slug via --slug=<slug>.`
    )
    process.exit(1)
  }

  // Read existing index.json
  let indexList = []
  if (fs.existsSync(INDEX_JSON_PATH)) {
    try {
      const rawIndex = fs.readFileSync(INDEX_JSON_PATH, 'utf8')
      indexList = JSON.parse(rawIndex)
    } catch (err) {
      console.warn('\x1b[33m%s\x1b[0m', `Warning: Failed to parse existing ${INDEX_JSON_PATH}. Starting with empty index.`)
      indexList = []
    }
  }

  // Check for duplicate in index.json
  const existingIndexEntry = indexList.find((b) => b.slug === slug || b.id === slug)
  if (existingIndexEntry) {
    console.error(
      '\x1b[31m%s\x1b[0m',
      `Error: A blog with slug "${slug}" already exists in index.json.\nPlease choose a different title or provide a unique slug via --slug=<slug>.`
    )
    process.exit(1)
  }

  const postedDate = flags.date || formatCurrentDate()
  const bannerImage = flags.banner || '/images/revboost-is-now-subscale01.jpg'
  const finalCategory = category || 'General'
  const finalAuthor = author || 'SubScale Team'
  const finalExcerpt =
    excerpt ||
    `Read our latest insights on ${title.toLowerCase()} and how to optimize your subscription revenue.`

  // Default TOC structure
  const defaultToc = [
    { id: 'introduction', text: 'INTRODUCTION' },
    { id: 'key-insights', text: 'KEY STRATEGIES & INSIGHTS' },
    { id: 'implementation', text: 'HOW TO IMPLEMENT THIS' },
    { id: 'conclusion', text: 'CONCLUSION' },
  ]

  // Default HTML content structure
  const defaultContentHtml = [
    `<p id="introduction">Welcome to this post on <strong>${title}</strong>. In this article, we dive deep into how subscription businesses can maximize revenue, optimize customer retention, and drive sustainable growth.</p>`,
    `<p>Understanding unit economics and continuity is the foundation of any high-performing e-commerce brand.</p>`,
    `<h2 id="key-insights">KEY STRATEGIES & INSIGHTS</h2>`,
    `<p>Here are the core factors that move the needle for subscription brands:</p>`,
    `<ul><li><strong>Optimization:</strong> Continuously test checkout and offer flows to reduce friction.</li><li><strong>Retention:</strong> Build VIP member loyalty and personalized re-engagement campaigns.</li><li><strong>Infrastructure:</strong> Ensure solid billing systems, smart payment routing, and low decline rates.</li></ul>`,
    `<h2 id="implementation">HOW TO IMPLEMENT THIS</h2>`,
    `<p>Step-by-step implementation plan for your brand to execute these strategies effectively.</p>`,
    `<h2 id="conclusion">CONCLUSION</h2>`,
    `<p>Scaling subscription revenue is a systems problem, not just a traffic problem. Focus on compounding post-purchase value to unlock long-term profitability.</p>`,
    `<p>Want to scale your subscription brand? Talk to us &rarr; <a href="https://gosubscale.com/book/" target="_blank" rel="noopener noreferrer">https://gosubscale.com/book/</a></p>`,
  ].join('')

  // Full blog post object
  const newBlogPost = {
    id: slug,
    slug: slug,
    title: title,
    category: finalCategory,
    author: finalAuthor,
    postedDate: postedDate,
    excerpt: finalExcerpt,
    bannerImage: bannerImage,
    toc: defaultToc,
    contentHtml: defaultContentHtml,
  }

  // Metadata object for index.json
  const newBlogMetadata = {
    id: slug,
    slug: slug,
    title: title,
    category: finalCategory,
    author: finalAuthor,
    postedDate: postedDate,
    excerpt: finalExcerpt,
    bannerImage: bannerImage,
  }

  // 1. Write individual blog JSON file
  fs.writeFileSync(targetFilePath, JSON.stringify(newBlogPost, null, 2), 'utf8')
  console.log('\x1b[32m%s\x1b[0m', `✔ Created individual blog file: src/data/blogs/${slug}.json`)

  // 2. Prepend to index.json so latest posts appear first
  indexList.unshift(newBlogMetadata)
  fs.writeFileSync(INDEX_JSON_PATH, JSON.stringify(indexList, null, 2), 'utf8')
  console.log('\x1b[32m%s\x1b[0m', `✔ Updated central index: src/data/blogs/index.json (${indexList.length} total posts)`)

  // 3. Sync legacy src/data/blogs.json if it exists
  if (fs.existsSync(LEGACY_BLOGS_JSON_PATH)) {
    try {
      const rawLegacy = fs.readFileSync(LEGACY_BLOGS_JSON_PATH, 'utf8')
      const legacyList = JSON.parse(rawLegacy)
      legacyList.unshift(newBlogPost)
      fs.writeFileSync(LEGACY_BLOGS_JSON_PATH, JSON.stringify(legacyList, null, 2), 'utf8')
    } catch (e) {
      // Ignore legacy sync error
    }
  }

  console.log('\n\x1b[36m%s\x1b[0m', '🎉 Blog post successfully generated!')
  console.log(`  • Title:      ${title}`)
  console.log(`  • Slug:       ${slug}`)
  console.log(`  • Category:   ${finalCategory}`)
  console.log(`  • Author:     ${finalAuthor}`)
  console.log(`  • Date:       ${postedDate}`)
  console.log(`  • Route URL:  /blogs/${slug}`)
  console.log(`  • File:       ${path.relative(ROOT_DIR, targetFilePath)}\n`)
  console.log('You can now open and edit the contentHtml and toc in the created JSON file.')
}

main()
