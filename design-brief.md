# Little Blossoms Play School — design brief

- **Design read:** Cheerful, safe and sunny kindergarten for parents choosing a
  preschool. Warm emotional register of morning sunshine and a cozy belonging.
  Bright and playful, never loud. The audience is the parent; the subject is
  the child's happy day.

- **Concept spine:** "A day at Little Blossoms" — journey/waypoints. The whole
  page is the arc of one school day. Scrolling glides through *hello → play →
  learn → create → outside → home time*, framed as a single unhurried morning
  that ends in a sun-hat-waving goodbye.

- **Delivery tier:** cinema (the animated website, scroll-scrub journey).

- **Palette (locked):**
  - `--accent: #FF5C7A` blossom pink — the ONE interactive accent (kickers,
    progress, underlines, primary buttons).
  - `--sun: #FFD44D` sunny yellow — celebration fills, highlights.
  - `--sprout: #6FBF61` leaf green — success/secondary fills.
  - `--sea: #3E8FB3` sea blue — deep contrast bands, footer.
  - `--sky: #E7F4FB` baby-sky ground — page + copy-panel tint.
  - `--cloud: #FFFFFF` clean card ground.
  - `--ink: #3B4A56` soft blue-slate ink for readable text.
  - `--ink-soft: #5F707C` muted ink.
  Defense: child-friendly kindergarten, so saturated-but-clean rainbow fields
  (yellow/green/blue) are the world; exactly ONE interaction accent (pink).
  Avowedly avoids graphite+orange, near-black+neon, beige+brass, AI-purple.

- **Type (locked):** Fredoka (rounded cheerful display) for headings; Nunito
  (rounded humanist sans) for body. Both OFL, bundled via fontsource.

- **Section plan (layout families, no consecutive repeats):**
  0. **Hero = the scroll-scrub journey** — chapters read over one continuous film.
  1. Welcome / Who we are — split: image + copy (2-col zigzag).
  2. Programs — asymmetric feature list / cards (4 programs).
  3. A day inside — timeline/strip with bespoke spot illustrations.
  4. Why Little Blossoms — full-band statements with a large photo.
  5. What parents say — testimonial wall (staggered cards).
  6. Enroll / Book a visit — banner CTA with sun-filled artwork.
  7. Footer — sea-blue closing with waypoint recap.
  Eyebrows: journey chapters own their kickers; content sections drop most
  eyebrows to keep the ration.

- **CTA inventory (distinct garments, bespoke chrome):**
  - Nav: "Book a visit" — rounded sun-button (pill) with spring hover.
  - Journey chapter: underline text-link whose underline is a wavy "grass
    frond".
  - Enroll band: oversized headline button — the label sits in a speech bubble
    that wiggles on hover.
  - Footer: classical inline arrow link.

Animation mode: non-animated (user's own choice).

The generated scroll-film direction was dropped by the user ("not working");
they will supply cartoon illustration images themselves (hero = kids forming
the school name, plus welcome / programs / book-a-visit). Build a clean
minimal site now with image slots they fill later. Interactivity = light
scroll-reveal motion (transform-only, reduced-motion safe), NOT a scrub film.
No mp4 / no video.
  - **Wow / Tier-1 technique:** bespoke illustrated imagery (user-supplied) in
    generously spaced sections + transform-only scroll reveals + Lenis smooth
    scroll. Interacts with the user's scroll, never a passive autoplay loop.

- The concept spine (a calm, sunny day at Little Blossoms) is now carried by
  copy + the user's illustrations rather than a film.