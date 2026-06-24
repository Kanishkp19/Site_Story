# Site_Story — Web Design Studio Landing Page

A multi-file React + Vite conversion of the original single-file HTML landing
page, rebranded to **Site_Story**, with a Lusion.co-inspired 3D WebGL hero
(via `@react-three/fiber` + `@react-three/drei`), GSAP scroll animations, and
full mobile responsiveness.

## Project structure

```
site-story/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx                # Page composition
    ├── data/
    │   └── content.js         # All copy, pricing, portfolio data — edit here
    ├── hooks/
    │   ├── useMagnetic.js      # Magnetic button hover effect
    │   ├── useTilt.js          # 3D tilt on portfolio cards
    │   ├── useScrollReveal.js  # GSAP ScrollTrigger fade/rise reveals
    │   ├── useSmoothAnchors.js # Smooth-scroll for in-page nav links
    │   └── useIsMobile.js      # Responsive breakpoint hook
    ├── components/
    │   ├── Cursor.jsx          # Custom dot/ring cursor (desktop only)
    │   ├── Navbar.jsx
    │   ├── Hero.jsx            # Headline + CTAs + entrance animation
    │   ├── HeroScene.jsx       # 3D distorted blob (react-three-fiber)
    │   ├── ParticleCanvas.jsx  # 2D canvas particle network (legacy layer)
    │   ├── MagneticButton.jsx
    │   ├── WhatsAppIcon.jsx
    │   ├── Stats.jsx           # Count-up stats
    │   ├── Features.jsx
    │   ├── Pricing.jsx         # Packages + payment steps
    │   ├── Portfolio.jsx
    │   ├── PortfolioCard.jsx   # Tilt-enabled card wrapper
    │   ├── PortfolioMock.jsx   # Generic mini-site mockup renderer
    │   ├── AddOns.jsx
    │   ├── Process.jsx
    │   ├── Terms.jsx
    │   ├── CTA.jsx
    │   └── Footer.jsx
    └── styles/
        └── index.css           # All styling (design tokens at the top)
```

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## What's new vs. the original HTML

- **3D hero (`HeroScene.jsx`)** — a morphing, light-catching icosahedron
  (Lusion-style distorted blob) built with `@react-three/fiber` +
  `@react-three/drei`'s `MeshDistortMaterial`, plus a thin orbiting ring and
  ambient `Sparkles`. It rotates idly, breathes with a sine-wave scale, and
  parallax-follows the cursor. The original 2D particle-network canvas is
  kept as a layer behind it for extra depth.
- **Mobile-aware 3D** — blob scale, particle count, sparkle count, and pixel
  ratio all drop on small screens (`useIsMobile`) to keep frame rates smooth
  on phones; the scene itself never blocks touch interaction
  (`pointer-events: none` throughout).
- **Componentized** — every section is its own file, content lives in one
  `data/content.js` so copy/pricing/portfolio edits don't touch any JSX.
- **Branding** — all "Kanishk Pandey" references replaced with **Site_Story**
  (nav, footer, page title, meta description, copyright). First-person
  copy ("I build…") updated to studio voice ("we build…") where it reads
  naturally as a company.

## Notes

- WhatsApp number and contact email live in `src/data/content.js` under
  `BRAND` — update there once before deploying.
- The 3D canvas is fully decorative (`aria-hidden`) and sits behind all
  interactive content, so it never interferes with clicks or screen readers.
