## Scope

You uploaded 9 fully-designed HTML pages (`about_luxebook`, `concierge_booking`, `contact_us`, `luxebook_home_1`, `luxebook_home_2`, `luxury_services`, `member_access`, `member_dashboard`, `our_treatments`) plus a `DESIGN.md` design system. The current project is the blank TanStack Start template — there is no "existing UI" in the codebase yet. So "preserve the existing UI" means **preserve your uploaded HTML designs exactly** as I port them into the React app.

The request as written (auth + OTP + reset, AI consultation wizard, booking system, patient dashboard, full admin dashboard, condition detail pages, treatment detail pages, blog) is roughly 30+ screens of net-new product surface beyond what you uploaded. That is multiple sessions of work. I'll do this in phases and start with Phase 1 now.

## Phase 1 — Port your 9 designs (this turn)

1. Set up the design system in `src/styles.css`:
   - Emerald / champagne gold / warm beige / ivory tokens from `DESIGN.md`
   - Playfair Display + Hanken Grotesk via `<link>` in `__root.tsx`
   - Utility classes for glassmorphism, gold-thread borders, fade-in / stagger / scroll-reveal animations
2. Create a shared sticky glass nav + footer matching the uploaded designs, with a luxury animated mobile menu.
3. Convert each uploaded HTML page into a TanStack route, preserving layout, hierarchy, spacing, and imagery:
   - `/` ← `luxebook_home_1`
   - `/experience` ← `luxebook_home_2` (second home variant as a secondary landing)
   - `/about` ← `about_luxebook`
   - `/treatments` ← `our_treatments`
   - `/services` ← `luxury_services`
   - `/booking` ← `concierge_booking`
   - `/contact` ← `contact_us`
   - `/auth` ← `member_access`
   - `/dashboard` ← `member_dashboard`
4. Add per-route `head()` metadata (title, description, og) — distinct per route.
5. Add `sitemap.xml` + `robots.txt`.
6. Wire all nav links, ensure responsiveness, add scroll-reveal + hover micro-interactions.

Frontend-only. No backend, no real auth, no DB. Forms are visual only.

## Phase 2 — (later, on request)

- Real auth (Lovable Cloud): Login / Signup / Forgot / OTP / Reset
- Patient dashboard with real data
- AI consultation wizard (4 steps) using Lovable AI
- Booking flow with date/time/doctor selection state
- Condition + Treatment detail pages (templated)
- Admin dashboard

## Phase 3 — (later, on request)

- Blog, awards, certifications, before/after gallery as standalone routes
- SEO polish, JSON-LD, performance pass

## Technical notes

- Stack stays TanStack Start v1 + React 19 + Tailwind v4 (as templated). Not Next.js 15 — that's not what this project runs on. Framer Motion will be added for animations.
- Your HTML uses Tailwind via CDN + inline `<style>`. I'll inline the custom CSS into `styles.css` as `@theme` tokens + `@utility` rules, and port markup to JSX.
- Images referenced in your HTML (Unsplash / placeholder URLs) will be kept as-is unless you want me to swap them.

Confirm and I'll build Phase 1.