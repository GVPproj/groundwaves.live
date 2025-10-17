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
npm run dev        # Start development server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview production build locally
npm run astro      # Run Astro CLI commands
```

## Architecture

### Core Technologies
- **Astro**: Static site generator with component islands
- **Sanity CMS**: Headless CMS for content management
- **React**: Interactive components (carousel, dropdowns)
- **Tailwind CSS**: Utility-first styling
- **TypeScript**: Type safety

### Key Directories
- `src/pages/`: Route-based pages (index, events, about, afw)
- `src/components/`: Reusable Astro and React components
- `src/layouts/`: Page layout templates
- `src/data/`: Static data files (AFW event content)
- `schemaTypes/`: Sanity schema definitions
- `structure/`: Sanity studio structure configuration

### Content Management
- **Sanity Studio**: Available at `/admin` route
- **Schema Types**: Events, Artists, Venues, Index/About content
- **Static Data**: AFW (Active Full Weekend) event data in `src/data/afwContent.ts`

### Pages Structure
- **index.astro**: Homepage with hero content from Sanity
- **events.astro**: Event listings from Sanity
- **about.astro**: About page content from Sanity
- **afw.astro**: Special event page using static data

### Component Patterns
- Mixed Astro/React architecture
- Client-side hydration with `client:load` directive
- Sanity image optimization via `SanityImage.astro`
- Portable Text rendering for rich content

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
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/`
- **Site URL**: https://groundwaves.live

## Working with Content

### Sanity CMS
- Access studio at `/admin` during development
- Schema types defined in `schemaTypes/` directory
- Content structure managed via `structure/` directory

### Static Content
- AFW event data is hardcoded in `src/data/afwContent.ts`
- Images stored in `src/assets/` and `public/` directories
- Font files in `public/fonts/`

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
