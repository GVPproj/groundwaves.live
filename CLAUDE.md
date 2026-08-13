# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Groundwaves v3**, an Astro-based website for a music event organization. The site features:
- Event listings and management via Sanity CMS
- Static site generation with Astro
- React components for interactive features
- Tailwind CSS for styling
- Netlify deployment

## Development Commands

Run all commands from the project root:

```bash
pnpm run dev        # Start development server at localhost:4323
pnpm run build      # Build production site to ./dist/
pnpm run preview    # Preview production build locally
pnpm run astro      # Run Astro CLI commands
```

## Architecture

### Core Technologies
- **Astro**: Static site generator with component islands
- **Sanity CMS**: Headless CMS for content management
- **React**: Interactive components (carousel, dropdowns)
- **Tailwind CSS**: Utility-first styling
- **TypeScript**: Type safety

### Key Directories
- `src/pages/`: Route-based pages (index, events/[slug])
- `src/components/`: Reusable Astro components
- `src/layouts/`: Page layout templates
- `schemaTypes/`: Sanity schema definitions
- `structure/`: Sanity studio structure configuration

### Content Management
- **Sanity Studio**: Available at `/admin` route
- **Schema Types**: Events, Artists, Venues, Index/About content

### Pages Structure
The whole public site is two routes plus the studio:
- **index.astro**: Homepage — hero, statement, and the full event listing
  (upcoming + past). There is no separate events index; `/events` redirects to
  `/#events`.
- **events/[slug].astro**: Individual event pages from Sanity
- **/admin**: Sanity Studio

The about copy lives in the footer, not on its own page — `/about` redirects to
`/#about`. `/afw` redirects off-site to afriendlywave.com.

### Component Patterns
- Astro components throughout; no client-side React islands. The React
  integration stays because Sanity Studio needs it.
- Sanity image optimization via `SanityImage.astro`
- Portable Text rendering for rich content
- Sanity fetches go through `safeFetch` in `src/lib/sanity.ts`, which returns a
  fallback when credentials are absent so the site still builds.

## Configuration Files

- **astro.config.mjs**: Astro configuration with integrations
- **sanity.config.ts**: Sanity studio configuration
- **tailwind.config.cjs**: Tailwind CSS configuration
- **tsconfig.json**: TypeScript configuration

## Environment Variables

Required environment variables:
- `PUBLIC_SANITY_STUDIO_PROJECT_ID`: Sanity project ID
- `PUBLIC_SANITY_STUDIO_DATASET`: Sanity dataset name

## Deployment

- **Platform**: Netlify
- **Build Command**: `pnpm run build`
- **Publish Directory**: `dist/`
- **Site URL**: https://groundwaves.live

## Working with Content

### Sanity CMS
- Access studio at `/admin` during development
- Schema types defined in `schemaTypes/` directory
- Content structure managed via `structure/` directory

### Static Content
- Font files in `public/fonts/` — woff2 only, and only the weights declared in
  `src/styles/base.css`

## Common Tasks

### Adding New Pages
1. Create `.astro` file in `src/pages/`
2. Use appropriate layout from `src/layouts/`
3. Query Sanity data if needed using `sanityClient`

### Modifying Sanity Schema
1. Update schema files in `schemaTypes/`
2. Export new types in `schemaTypes/index.ts`
3. Update structure configuration if needed

### Styling
- Tailwind classes used throughout
- Custom CSS in `src/styles/base.css`
- Responsive design patterns established
