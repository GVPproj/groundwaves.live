/** @type {import('tailwindcss').Config} */

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
    textColor: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
        "accent-inverted": withOpacity("--color-accent-inverted"),
        inverted: withOpacity("--color-fill"),
        fill: withOpacity("--color-fill"),
      },
    },
    backgroundColor: {
      skin: {
        fill: withOpacity("--color-fill"),
        "accent-inverted": withOpacity("--color-accent-inverted"),
        "fill-muted": withOpacity("--color-fill-gradient-end"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-text-base"),
      },
    },
    outlineColor: {
      skin: {
        fill: withOpacity("--color-accent"),
      },
    },
    borderColor: {
      skin: {
        fill: withOpacity("--color-text-base"),
      },
    },
    fill: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
        "accent-inverted": withOpacity("--color-accent-inverted"),
      },
      transparent: "transparent",
    },
    stroke: {
      skin: {
        base: "var(--color-text-base)",
        accent: "var(--color-accent)",
      },
    },

    // This replaces Tailwind's defaults rather than extending them, so only the
    // families listed here exist as utilities — there is deliberately no
    // `font-sans`, since the site is Fraunces throughout.
    fontFamily: {
      serif: ["Fraunces", "serif"],
      mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
    },
    extend: {
      colors: {
        fill: withOpacity("--color-fill"),
        gradend: withOpacity("--color-fill-gradient-end"),
        accent: withOpacity("--color-accent"),
      },
      fontSize: {
        dynamic: "clamp(1rem, 3vw, 2.25rem)",
      },
    },
    // },
  },
  plugins: [require('@tailwindcss/typography')],
};
