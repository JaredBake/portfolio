# Portfolio (Next.js + Tailwind + Vercel)

Single-page personal portfolio built with Next.js App Router + Tailwind CSS.

## Edit your content

Update your info/projects in `src/content/portfolio.json`.

Optional:
- Add a resume PDF at `public/resume.pdf`.

## Run locally

If PowerShell blocks `npm`/`npx` (because it tries to run `npm.ps1`), use the `.cmd` variants:

```bash
npm.cmd run dev
```

Then open http://localhost:3000

## Deploy with Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project** → import your GitHub repo.
3. Vercel auto-detects **Next.js** and deploys.

## Scripts

- `npm.cmd run dev` — dev server
- `npm.cmd run build` — production build
- `npm.cmd run start` — run production server
- `npm.cmd run lint` — lint
