# Clear View Cleaning Company — Website

A premium, conversion-focused lead-generation website for **Clear View Cleaning Company**, an owner-operated exterior cleaning and home services business in Charleston, SC.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

Requires Node 18.18+ (built and tested on Node 24).

---

## Project Structure

```
src/
  app/
    layout.tsx                 # Root layout: fonts, metadata, header/footer, JSON-LD
    page.tsx                   # Home
    about/page.tsx
    services/page.tsx          # Services overview
    services/[slug]/page.tsx   # Individual service pages (SSG)
    gallery/page.tsx           # Our Work
    service-areas/page.tsx
    contact/page.tsx
    not-found.tsx              # Custom 404
    sitemap.ts / robots.ts     # SEO
    icon.svg                   # Favicon
    globals.css
  components/                  # Reusable UI (see below)
  lib/
    site.ts                    # Business info, phone, areas, trust copy
    services.ts                # All service content + SEO (single source of truth)
```

---

## Editing Content

- **Business details / phone / service areas:** `src/lib/site.ts`
- **Service copy, benefits, what's included, FAQs, SEO meta:** `src/lib/services.ts`
  Adding a service object automatically creates its page, nav entry, footer link,
  sitemap entry, and home-page card.

---

## Replacing Placeholder Images

The site intentionally ships with **elegant gradient/SVG placeholder cards** (`VisualCard`,
the hero illustration, and the gallery) so there are no broken image paths. To use real photos:

1. Drop images into `/public` (create the folder).
2. Swap the gradient block inside `src/components/VisualCard.tsx` for a
   `next/image` `<Image fill />`, or replace `VisualCard` usages on the Home,
   About, and Gallery pages with real images.

Highest-impact photos to add: a headshot of Nicholas, and real before/after shots
for the gallery and service pages.

---

## Notes

- The **contact form is a front-end demo** (no backend). Wire it to an API route,
  form service (Formspree/Resend), or CRM in `src/components/ContactForm.tsx`.
- Phone links use `tel:+18432127116`; the contact page also offers an SMS link.
- Update `site.url` and `site.email` in `src/lib/site.ts` before going live
  (used by metadata, sitemap, robots, and JSON-LD).
