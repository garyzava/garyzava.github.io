/*
 * Tailwind configuration
 *
 * We enable dark mode via the `class` strategy.  This allows the dark
 * colour palette to be toggled by adding or removing a `dark` class on
 * the `<html>` element.  The `content` array covers all of the file types
 * that Astro and our components use so that Tailwind can tree‑shake
 * unused styles when building for production.
 */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};