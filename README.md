# Gary Zavaleta – Personal Site

This repository contains the source code for a minimalist, responsive personal
website built with **[Astro](https://astro.build)** and **Tailwind CSS**.  The
site showcases Gary Zavaleta’s biography, featured projects and
publications, and provides an easy way to get in touch.  It is designed to be
deployed on GitHub Pages with a single click using the included workflow.

## Project Structure

```
gary-astro/
├── src/
│   ├── components/…… reusable UI components (navbar, hero, cards, footer)
│   ├── data/……… data files for projects and publications
│   ├── layouts/…… shared layout wrapper
│   └── pages/……… page definitions (index.astro, etc.)
├── public/
│   └── assets/…… static assets such as images, the resume placeholder and the OG banner
├── .github/workflows/…… GitHub Pages deployment workflow
├── astro.config.mjs…… Astro configuration
├── tailwind.config.cjs… Tailwind configuration
├── postcss.config.cjs… PostCSS configuration
├── package.json……… NPM dependencies and scripts
└── README.md………… this file
```

## Local development

1. **Install dependencies**

   ```sh
   npm install
   ```

2. **Run the development server**

   ```sh
   npm run dev
   ```

   Astro will start a local development server (usually on
   `http://localhost:4321/`) and watch for file changes.  As you edit the
   source files the browser will refresh automatically.

3. **Build for production**

   ```sh
   npm run build
   ```

   This command outputs a static site into the `dist/` folder.  You can
   preview the production build locally with `npm run preview`.

## Deploying to GitHub Pages

The repository contains a GitHub Actions workflow under
`.github/workflows/deploy.yml` that builds the site and deploys it to the
`gh-pages` branch.  To enable automatic deployments:

1. Push this repository to GitHub under your account (for example
   `garyzava/garyzava.github.io`).
2. In the repository settings, enable GitHub Pages and select the
   `gh-pages` branch as the source.
3. The workflow will run on every push to `main` and publish the site.

You can customise the `site` property in `astro.config.mjs` if you plan to
deploy the site under a different domain or repository name.

## Customising content

The content for featured projects and publications lives in TypeScript data
files under `src/data`.  To add or edit entries simply update
`projects.ts` or `publications.ts`; no layout changes are necessary.  Images
for projects should be placed in `public/assets/` and referenced by their
relative path (e.g. `/assets/my-project-image.png`).  The hero section and
personal information can be edited in `src/components/Hero.astro`.

## License

This project is licensed under the **MIT License**.  See the [LICENSE](./LICENSE)
file for details.