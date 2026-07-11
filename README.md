# Shiva Sharma — Portfolio

A premium, 3D-driven portfolio built in the visual language of the supplied
"nucleus in deep space" welcome page. The hero's living, noise-deformed
icosahedron isn't a one-off — it recurs throughout the site as a small
section marker, tying every section back to the same instrument panel.

Live stack: **React 19 + Vite, Tailwind CSS, Framer Motion, React Three
Fiber / drei, Lenis smooth scroll.**

---

## 1. Design Analysis

The source page is a cosmic instrument: a sky-mapped sphere background, a
glowing noise-deformed icosahedron ("nucleus") at the center, particles
drifting in from a spherical shell toward the origin, and slow ambient
auto-rotation via OrbitControls. UI chrome is deliberately minimal —
uppercase, letter-spaced, monospace-adjacent button labels in thin pill
outlines that only fill in on hover, parked in the corners so they never
compete with the 3D scene.

**Tokens carried forward into this build:**

| Role | Value | Notes |
|---|---|---|
| Background | `#06080F` (`void`) | Near-black blue, not pure black |
| Deep accent | `#1A1340` (`nebula-deep`) | Glass panel base tint |
| Mid accent | `#3A2D6B` (`nebula-mid`) | Gradient midpoint, nucleus material |
| Primary accent | `#F9B31C` (`amber`) | **Inherited directly from the source's button color** |
| Secondary accent | `#5FE0D4` (`ion`) | New — added range for a portfolio's data/energy moments |
| Body text | `#C9CEE0` (`mist`) | Muted lavender-white, not pure white |

**Type system:** Space Grotesk (display, geometric/technical) + Inter
(body, readability) + JetBrains Mono (eyebrows, stats, nav labels, button
text — echoes the source's uppercase tracked button language).

**Signature element:** the nucleus motif recurs as a small marker
(`MiniNucleus`) at the top of every section, and project/service cards
get a glass + glow hover treatment that nods to the same material.

---

## 2. Portfolio Architecture

```
Navbar (fixed, glass on scroll)
Hero            — full-viewport 3D nucleus scene + headline
About           — bio + quick-facts panel
Skills          — three grouped proficiency-bar panels
Services        — 4 tilt cards
Experience      — reverse-chronological timeline (genuinely sequential data)
Projects        — 4 case-study tilt cards w/ generated gradient covers
Credentials     — certifications + education, two-column
Achievements    — animated counting stat grid
Testimonials    — 3 quote cards
Contact         — info column + form
Footer
```

## 3. Folder Structure

```
portfolio/
├── index.html
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css                  # global styles, glass/eyebrow/button utilities
│   ├── data/                      # ← ALL PLACEHOLDER CONTENT LIVES HERE
│   │   ├── profile.js             # name, role, bio, socials, contact info
│   │   ├── skills.js              # grouped skills + proficiency levels
│   │   ├── services.js            # 4 service offerings
│   │   ├── experience.js          # work history timeline
│   │   ├── projects.js            # featured project case studies
│   │   └── misc.js                # certifications, education, achievements, testimonials
│   ├── hooks/
│   │   └── useLenisScroll.js      # smooth-scroll setup, respects reduced motion
│   ├── lib/
│   │   └── simplexNoise.js        # dependency-free noise used to deform the nucleus
│   └── components/
│       ├── 3d/
│       │   ├── Nucleus.jsx        # the signature deformed-icosahedron mesh
│       │   ├── StarField.jsx      # animated particles drifting to origin
│       │   ├── FixedStars.jsx     # static ambient backdrop particles
│       │   ├── HeroScene.jsx      # full hero canvas (lazy-loaded)
│       │   └── MiniNucleus.jsx    # small section-marker instance (lazy-loaded)
│       ├── ui/
│       │   ├── Button.jsx         # pill button, 3 variants
│       │   ├── TiltCard.jsx       # glass card w/ 3D mouse-tilt + glow
│       │   ├── SectionHeader.jsx  # eyebrow + MiniNucleus + title + description
│       │   ├── SocialIcon.jsx     # icon lookup for social links
│       │   └── LoadingScreen.jsx  # initial 3D loading sequence
│       └── sections/
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── About.jsx
│           ├── Skills.jsx
│           ├── Services.jsx
│           ├── Experience.jsx
│           ├── Projects.jsx
│           ├── CredentialsSection.jsx
│           ├── Achievements.jsx
│           ├── Testimonials.jsx
│           ├── Contact.jsx
│           └── Footer.jsx
```

## 4. Running it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint — passes clean
```

The 3D hero scene and every `MiniNucleus` section marker are
**lazy-loaded** via `React.lazy` + `Suspense`, so the Three.js bundle
(~240KB gzipped) doesn't block first paint of the text content. Tailwind
JIT only ships the classes actually used, and the production build
manually chunks `three`, `@react-three/*`, and `framer-motion`/`gsap`
separately from app code for better caching.

Accessibility: visible focus rings site-wide, a skip-to-content link,
`aria-hidden` on all purely decorative 3D canvases, `prefers-reduced-motion`
respected by both Lenis (smooth scroll disables entirely) and the loading
screen (skips the animated sequence).

## 5. Assets Required

This build deliberately uses **zero external image/font assets beyond
Google Fonts** — every visual (nucleus, starfields, gradient project
covers) is generated in code, so there's nothing to source or license.
If you want to personalize further:

- **Headshot / about photo** — wired up in `About.jsx`. Replace
  `public/images/profile.jpg` with your real photo (same filename, any
  aspect ratio — it's cropped to 4:5 via `object-cover`). A placeholder
  graphic ships in its place until you do.
- **Real project screenshots** (optional) — `Projects.jsx` currently uses
  generated gradient covers (`project.gradient` in `data/projects.js`).
  Swap the gradient `<div>` for an `<img>` if you have real screenshots.
- **Favicon** — none is wired up; add one to `public/` and reference it
  in `index.html`.
- **Resume PDF** — `profile.resumeUrl` in `data/profile.js` is `"#"`;
  point it at a real file.

## 6. Future Content Replacement Guide

Every piece of placeholder copy lives in `src/data/`. Nothing else needs
to change.

1. **`data/profile.js`** — your name, role, tagline, bio paragraphs,
   email, location, availability, social links (each needs a `label`,
   `href`, and an `icon` key matching one in `ui/SocialIcon.jsx`).
2. **`data/skills.js`** — edit the three `skillGroups`; each skill takes
   a `name` and a `level` (0–100) that drives the animated bar fill.
3. **`data/services.js`** — four cards; `deliverables` renders as pill tags.
4. **`data/experience.js`** — add/remove jobs freely, the timeline
   re-renders automatically; keep reverse-chronological order.
5. **`data/projects.js`** — `gradient` must be a valid Tailwind gradient
   class string (`from-X via-Y to-Z`) using the colors defined in
   `tailwind.config.js`, or swap for a real image as noted above.
6. **`data/misc.js`** — certifications, education, achievements (the
   `value` field supports a leading number + suffix, e.g. `"40+"`,
   which the stat counter parses and animates), and testimonials.

To add a **new social platform**: add an entry to `SocialIcon.jsx`'s
`ICONS` map (react-icons' `fa6` set has most brand icons), then reference
that key from `data/profile.js`.

To **rebrand colors**: everything funnels through the named tokens in
`tailwind.config.js` (`void`, `nebula`, `amber`, `ion`, `mist`) — change
the hex values there rather than hunting through components.
