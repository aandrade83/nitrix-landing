# NitricX — Natural Performance Drink

Premium cinematic landing page built with Next.js 14 (App Router), TailwindCSS, and Framer Motion.

## Deploy on Vercel

1. Import the repo at https://vercel.com/new
2. Framework preset: **Next.js** (auto-detected)
3. No environment variables required
4. Deploy

The hero video lives at `public/video.mp4` (~24 MB) and is served as a static asset.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/` — Next.js App Router (layout, page, globals)
- `components/` — Hero, FlowSection, FlavorsSection, LifestyleSection, FormulaSection, FinalCTA, Navbar, Footer
- `public/video.mp4` — hero video (copied from `assets/video.mp4`)

## Notes

- Video is served from `/video.mp4`. Replace `public/video.mp4` to swap the hero loop.
- Product info (flavors, ingredients, S7® blend) sourced from the Investment Prospectus PDF in `assets/`.
- Brand framing: **Natural Performance Drink** (no pre-workout / medical claims language).
