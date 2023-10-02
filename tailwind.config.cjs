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
  content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    // screens: {
    //   sm: "768px",
    //   lg: '1024px',

    // },

    // Uncomment the following extend
    // if existing Tailwind color palette will be used

    // extend: {

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
        "fill-muted": withOpacity("--color-fill-gradient-end"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-text-base"),
        card: withOpacity("--color-card"),
        "card-muted": withOpacity("--color-card-muted"),
      },
    },
    outlineColor: {
      skin: {
        fill: withOpacity("--color-accent"),
      },
    },
    borderColor: {
      skin: {
        line: withOpacity("--color-border"),
        fill: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
      },
    },
    fill: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
      },
      transparent: "transparent",
    },
    stroke: {
      skin: {
        base: "var(--color-text-base)",
        accent: "var(--color-accent)",
        highlight: "var(--color-card)",
      },
    },

    fontFamily: {
      serif: ["Fraunces", "serif"],
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
  plugins: [
		require('flowbite/plugin')
	],
};
