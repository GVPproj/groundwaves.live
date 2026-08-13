/** @type {import('tailwindcss').Config} */

// The tokens in base.css are stored comma-separated (`60, 14.29%, 93.14%`), so
// the modern `hsl(var(--x) / <alpha-value>)` form doesn't apply — this closure
// is what lets the slash-opacity syntax (`border-skin-fill/20`) work.
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // One palette, feeding every colour utility Tailwind generates —
    // text-/bg-/border-/fill-/from-/to-/outline- and so on. This replaces
    // Tailwind's defaults rather than extending them, so the only colours that
    // exist are the site's own tokens; there is deliberately no `bg-gray-500`.
    //
    // The `skin` nesting is load-bearing: a flat `base` key would generate a
    // `.text-base` colour utility that collides with Tailwind's `text-base`
    // font size.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      skin: {
        fill: withOpacity('--color-fill'),
        'fill-muted': withOpacity('--color-fill-gradient-end'),
        base: withOpacity('--color-text-base'),
        accent: withOpacity('--color-accent'),
        'accent-deep': withOpacity('--color-accent-deep'),
        'accent-bright': withOpacity('--color-accent-bright'),
        'accent-inverted': withOpacity('--color-accent-inverted'),
        'accent-inverted-deep': withOpacity('--color-accent-inverted-deep'),
      },
    },

    // This replaces Tailwind's defaults rather than extending them, so only the
    // families listed here exist as utilities — there is deliberately no
    // `font-sans`, since the site is Fraunces throughout.
    fontFamily: {
      serif: ['Fraunces', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
