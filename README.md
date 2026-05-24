# Transformica — Landing Page

A 90-day body recomposition coaching landing page built with React (via Babel-in-browser) and a WebGL2 nebula shader background.

## Local preview

```bash
npx http-server -p 8000 -c-1
# open http://localhost:8000/
```

## Deploy

This repo is set up for GitHub Pages. After pushing to `main`, enable
**Settings → Pages → Source: Deploy from a branch → main / (root)**.
A `.nojekyll` file is included so Jekyll doesn't touch the build.

## Structure

- `index.html` — entry, loads React + Babel from CDN
- `app.jsx` — root component + checkout modal
- `sections.jsx` — Nav, Hero, Stats, Plan, Results, Testimonials, FAQ, Footer
- `components.jsx` — Icon set, BrandMark, Reveal, Counter, Tilt
- `nebula-shader.jsx` — interactive WebGL2 hero background
- `styles.css` — full design system
- `assets/` — logo + 7 transformation photos
