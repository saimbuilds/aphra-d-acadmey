# aphra-d-acadmey

Landing page redesign for Aphro-D Academy, a fitness, nutrition and mindset membership for men over 40.

Built with Next.js 16 (App Router), React 19 and plain CSS. No environment variables or external services are needed.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

1. In Vercel, choose **Add New → Project** and import this GitHub repository.
2. Leave the defaults (Framework: Next.js, Build command: `next build`, Output: `.next`).
3. Click **Deploy**.

## Project layout

- `app/page.tsx`: page sections
- `app/content.ts`: copy, programs, testimonials and FAQ
- `app/DailyPhone.tsx`, `app/Pricing.tsx`: interactive sections
- `app/globals.css`: all styles
- `public/media`: images. Member photos, course art and the founder portrait come from Aphro-D Academy. Lifestyle photos are free-licence Pexels images, credited in `public/media/stock/CREDITS.md`.

## Before going live

- Point the free-trial buttons at the real checkout links.
- Confirm the FAQ answers about the trial and cancelling.
