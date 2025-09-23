import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/**
 * Astro configuration
 *
 * The `site` property is used to generate absolute URLs in meta tags.  When
 * deploying to GitHub Pages the site should point at the public URL of your
 * pages deployment.  If you fork this repository under another user or
 * organisation update the URL below accordingly.
 */
export default defineConfig({
  site: 'https://garyzava.github.io/',
  integrations: [
    // Tailwind CSS integration.  The `applyBaseStyles` option is left at its
    // default of true because we explicitly supply our own base styles in
    // components, and Tailwind will still inject its preflight reset.
    tailwind({})
  ],
  // Use the static output adapter so that the project can be served from
  // GitHub Pages without a Node.js server.  This will generate an `astro
  // build` output consisting only of HTML, CSS and JS files.
  output: 'static',
  build: {
    format: 'file'
  }
});