# groundwaves.live

A modern website for a music event organization built with Astro, featuring content management through Sanity CMS, interactive React components, and responsive design with Tailwind CSS.

![Groundwaves Preview](public/previewGH.png)

## Technologies

- **Astro** - Static site generator with component islands architecture
- **Sanity CMS** - Headless content management system
- **React** - Interactive UI components with client-side hydration
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Setup

```bash
npm install        # Install dependencies
npm run codegen    # Generate TypeScript types from Sanity schemas
```

The `codegen` command extracts your Sanity schema and generates TypeScript types in `sanity.types.ts`. Run this after cloning the repo or whenever you modify Sanity schema definitions.

## Development

```bash
npm run dev        # Start development server at localhost:4321
npm run build      # Build production site
npm run preview    # Preview production build
npm run codegen    # Regenerate Sanity types after schema changes
```

## Deployment

Deployed to Netlify at [groundwaves.live](https://groundwaves.live)
