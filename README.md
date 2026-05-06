# xunos.com — Website Source

Static marketing site for [Xunos](https://xunos.com), built with React, Vite, and Tailwind CSS.

## How it works

```
Edit src/App.jsx  →  git push  →  GitHub Actions builds  →  xunos.com updates
```

Every push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml), which:
1. Installs dependencies
2. Runs `npm run build` (outputs to `dist/`)
3. Publishes `dist/` to GitHub Pages

The site is served from GitHub Pages at the custom domain `xunos.com`.

---

## Project structure

```
site_xunos/
├── src/
│   ├── App.jsx       ← entire site content — edit this to change the site
│   ├── main.jsx      ← React entry point (don't edit)
│   └── index.css     ← Tailwind directives (don't edit)
├── public/
│   ├── hero-datacenter.jpg    ← hero background image
│   ├── logo-xunos-blanc.png   ← white Xunos logo
│   └── CNAME                  ← custom domain (don't edit)
├── index.html          ← page shell: title, meta tags
├── package.json        ← dependencies
├── vite.config.js      ← build config
├── tailwind.config.js  ← CSS config
└── .github/
    └── workflows/
        └── deploy.yml  ← CI/CD pipeline
```

---

## Making changes

### Prerequisites (first time only)

```bash
node --version   # requires Node.js 18+
npm install      # install dependencies
```

### Workflow

```bash
npm run dev      # start local dev server at http://localhost:5173
# edit src/App.jsx, changes appear instantly in the browser
npm run build    # optional: test the production build locally
```

Once you are happy with the result:

```bash
git add src/
git commit -m "describe your change"
git push
```

The site updates on xunos.com within ~1 minute.

### Changing text content

All text is in **`src/App.jsx`**. The file is organized in clearly labelled sections:

| Section | What to look for in the file |
|---------|------------------------------|
| Page title / meta description | `index.html` |
| Navigation links | `{/* ── Header ── */}` |
| Hero headline and tagline | `{/* ── Hero ── */}` |
| Services cards | `{/* ── Services ── */}` |
| Team members | `{/* ── Team ── */}` |
| Contact / CTA | `{/* ── Contact ── */}` |
| Footer copyright | `{/* ── Footer ── */}` |

### Replacing images

Drop the new file into `public/` and update the reference at the top of `src/App.jsx`:

```js
const heroImage = '/your-new-image.jpg'
const logoImage = '/your-new-logo.png'
```

### Adding a team member

In `src/App.jsx`, find the `{/* Primary three */}` block and add a `<TeamCard>`:

```jsx
<TeamCard name="Full Name" role="Job Title" size="lg">
  Bio text here.
</TeamCard>
```

Use `size="sm"` and `accent="cyan"` for the secondary founders row.

---

## Tech stack

| Tool | Version | Role |
|------|---------|------|
| [React](https://react.dev) | 18 | UI framework |
| [Vite](https://vitejs.dev) | 6 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3 | Styling |
| [lucide-react](https://lucide.dev) | 0.460 | Icons |
| GitHub Actions | — | CI/CD |
| GitHub Pages | — | Hosting |
