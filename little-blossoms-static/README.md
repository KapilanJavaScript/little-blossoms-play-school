# Little Blossoms Play School

A warm, colourful playschool site for little ones from 18 months to 6 years.

- Single self-contained `index.html` (all CSS + SVG art inlined) — ready to
  drop into any static host (S3 + CloudFront, Netlify, Vercel, GitHub Pages).
- WhatsApp-first enquiry: floating WhatsApp button, ticket CTAs, and a
  "Book a visit" form that opens WhatsApp with the details pre-filled.
- Pop palette (coral / sunny yellow / aqua / leaf) on a warm cream ground.
- Fully responsive; `prefers-reduced-motion` fallback.

## Editing

All contact details live in the HTML (search for the number `+91 90000 00000`
and the WhatsApp links) — replace them with the school's real details.

## Deploy

Upload `index.html` to your S3 bucket and point CloudFront (or any static
host) at it, with `index.html` as the default root object.