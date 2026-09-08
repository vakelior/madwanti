# Zouheir Ryad — Minimal English Magazine Template (LTR)

A complete multi-page English blog site built with pure HTML/CSS/JS (no server), using **Lucide** icons and modern standards.

## Pages
- `index.html` — Home (featured slider + article grid)
- `post.html?id=1` — Article page (reading, author, related metadata)
- `404.html` — Not found page

## Files
- `assets/site.css` — Full design system (variables, dark mode, LTR, responsive)
- `assets/site.js` — Data (`POSTS`) and shared logic (menu, search, dark mode, footer)
- `images/` — images

## Tech
- Fonts: **Inter** for body text + **Playfair Display** for headings
- Icons: **Lucide** (via `unpkg.com/lucide@latest` + `lucide.createIcons()`)
- Dark mode saved in `localStorage`
- Auto slider with indicators and arrows

## Customization
To change content, edit the `POSTS` array in `assets/site.js`. To add a new article, add a new object with a unique `id` and an image in `images/`.

## Deployment
Upload the whole folder to any static host (cPanel, Netlify, Vercel, GitHub Pages...). No server or database required.
