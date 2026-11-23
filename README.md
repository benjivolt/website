# BG Calisthenics website

The site at [bgcalisthenics.com](https://www.bgcalisthenics.com/). It is a one-page landing site for my calisthenics programs, with a free L-sit program, transformation photos, testimonials and a program sign-up.

Built with React, Vite, Tailwind CSS and Framer Motion.

## Run it

You need Node.js 20.19+ or 22.12+.

```bash
npm ci
npm run dev
```

`npm run build` writes the production site to `dist/`.

## Layout

```
src/components/    page sections (hero, program, testimonials, FAQ, call to action)
src/l-sit-program/ the free L-sit program page
src/hooks/         useInView, used for scroll animations
public/            images and videos
```

## Maintenance

```bash
npm test
npm run build
npm audit
```

This is a static frontend. Checkout links point to Whop; no API server, database, or private API keys are required to run this repository. Keep the Vite development server on localhost and deploy the production `dist/` output.
