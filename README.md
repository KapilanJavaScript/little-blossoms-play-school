# Little Blossoms Play School

A bright, child-friendly website for a play school. Live at
https://little-blossoms-school.higgsfield.app

## Stack

- **React 19 + TanStack Start** (server-rendered, deployed as one Cloudflare
  Worker)
- **Tailwind CSS v4** with a custom brand token layer
- **Motion** (Framer Motion) + **Lenis** for smooth scroll and gentle reveals
- Fonts: **Fredoka** (display) + **Nunito** (body)

## Brand

Playful, sunny and clean. Palette: baby-sky `#E7F4FB`, sunny yellow `#FFD44D`,
leaf green `#6FBF61`, blossom pink `#FF5C7A` (interactive accent), sea blue
`#3E8FB3`.

## Structure

- `src/routes/` — the page (`index.tsx`) and app shell (`__root.tsx`)
- `src/components/custom-ui/LbInteractive.tsx` — Lenis smooth scroll, scroll
  progress bar, transform-only reveal component
- `src/styles.css` — the full brand layer (tokens, typography, sections)
- `src/app-meta.json` — title / description / OG metadata
- `design-brief.md` — the concept + design decisions

## Image slots

The site ships with styled placeholder areas for the school's artwork. The
hero image slot is intended to hold an illustration of children forming the
school name; the welcome section slots hold section illustrations. Replace the
placeholder content in `src/routes/index.tsx` and add the files under
`public/assets/`.