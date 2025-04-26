Product Requirements Document — Sesame AI Marketing Surface

Scope: / (Landing) and /team only – rebuild pixel-perfect and interaction-perfect.

⸻

0. Document Control
   • Version: 1.2
   • Author: ChatGPT — Digital Product Analyst & UX Architect
   • Date: 26 Apr 2025

⸻

1. Purpose & Scope

Re-implement the two public pages of Sesame.com in an independent Next.js 14 code-base so they can be served without functional or visual regression.

⸻

2. Goals & Success Metrics

Performance
• FCP ≤ 1.2 s • LCP ≤ 2 s • CLS < 0.10

Engagement
• Header-nav CTR > 4 % of pageviews
• “See open roles” CTA ≥ 10 % of Team-page sessions
• Gallery-swipe average ≥ 2 interactions per Team-page session

Accessibility
• Full WCAG 2.2 AA pass
• 100 % compliance with prefers-reduced-motion

⸻

3. Target Audiences & Top Jobs-to-Be-Done
   1. Prospective hires → Home → Team → Ashby Jobs
   2. Investors / press → Rapid scroll-scan vision & leadership sections
   3. AI / ML community → Click through to research PDF from Home

⸻

4. Information Architecture

Global
• Sticky Header — “Sesame / Research / Team / Demo”

Landing (/) 1. Hero — H1 “Bringing the computer to life” + tagline paragraph 2. Goals section — 01 Personal Companion, 02 Lightweight Eyewear 3. Join-Us banner — copy + two prototype images, inline Team link 4. Careers banner — small blurb + CTA 5. Footer

Team (/team) 1. Hero — H1 “Team” 2. Leadership blurb (Iribe / Kumar / Brown) 3. Offices + values paragraph 4. Open-roles CTA → new-tab Ashby 5. Roster carousel — 4 staff photos, horizontal scroll-snap 6. Product carousel — 4 prototype images, horizontal scroll-snap 7. Product overview copy 8. Research overview copy + external PDF link 9. Final CTA block — Email us / See open roles 10. Footer

⸻

5. Key User Flows
   • Explore & Apply Home → Team → Open-roles (Ashby)
   • Research Deep-dive Home → inline PDF link → external page
   • Mobile Navigation Hamburger → slide-in menu → page select
   • Motion-Reduction Animations disabled when prefers-reduced-motion

⸻

6. Content & Copy Requirements
   • All H1s, headings, numbered goal titles, bios, and CTA labels must match live site verbatim.
   • Alt-text (exact strings in Content Inventory JSON) required for every foreground image and carousel frame.
   • Footer copy: © 2025 Sesame AI Inc. All rights reserved. + Privacy / Terms links.

⸻

7. Functional Requirements
   • F-1 Sticky header — appears after 24 px scroll (desktop) / 12 px (mobile); backdrop-filter:blur(8px); logo scales 1 → 0.9.
   • F-2 Navigation links — hover underline 2 px #FF7A00 in 180 ms; active-route class; 3 px focus outline.
   • F-3 Scroll-reveal — IntersectionObserver (rootMargin:-25%) animates .reveal-up (translateY 20 → 0, opacity 0 → 1, 400 ms; 60 ms stagger).
   • F-4 Carousel component (roster & product) — CSS scroll-snap x mandatory; arrow buttons; dot indicators; full keyboard & screen-reader support (aria-roledescription="carousel").
   • F-5 Lazy media — Non-critical images loading="lazy"; hero pre-loaded with fetchpriority="high"; AVIF / WebP with JPG/PNG fallback.
   • F-6 Open-roles CTA — opens Ashby in new tab, rel="noopener"; GTM event cta_open_roles.
   • F-7 Hamburger drawer — icon morph; slide-in panel; focus-trap; closes on Esc or route-change.
   • F-8 Reduced-motion — media-query disables transitions & sets scroll-behavior:auto.
   • F-9 SEO & Schema — inject WebSite, Organization, BreadcrumbList JSON-LD; unique <title> & meta description; Open-Graph image /og-image.jpg.
   • F-10 404 — custom static 404 with “Back home” button; redirect legacy /about → /team.

⸻

8. Design System & UI Specs

Colors
• bg-primary #0B0B0C
• text-primary #FFFFFF
• accent #FF7A00
• text-secondary #A0A0A0

Typography — Inter via Google Fonts
• Display-XL 4 rem / 700 — hero desktop
• Heading-M 2.25 rem / 600 — section H2
• Body-M 1 rem / 400 — paragraphs

Spacing — 8-pt scale (4 / 8 / 16 / 24 / 40 / 64 px)
Border radius — 4 px buttons, 8 px cards/images
Shadow — hover 0 8 16 rgba(0,0,0,.15)
Grid — 12 columns, 1200 px max-width, 72 px gutters

Key components
• Hero — full-bleed, min-height 90 vh, dark gradient overlay
• Goal card — badge numeral 72 px; hover translateY -4 px + shadow
• Roster tile — square avatar 240 px; name bold 16 px; role 14 px

⸻

9. Responsive Behaviour
   • ≥ 1280 px — goals 3-col; carousels 3-col
   • 1024–1279 px — roster 4-col; header link gap reduced
   • 768–1023 px — header 56 px; goals 2-col; carousels 2-col masonry
   • 481–767 px — hamburger nav; goals 1-col; carousels scroll-snap
   • ≤ 480 px — hero min-height 70 vh; H1 32 px; roster 1-col

Interactive targets ≥ 32 px; fluid type via clamp().

⸻

10. Accessibility & Performance
    • Semantic landmarks <header><main><footer>; visible focus states; contrast ≥ 4.5:1.
    • Carousels keyboard-navigable (←/→, Tab, Space).
    • Budgets — Total JS ≤ 150 kB gzip; largest LCP asset ≤ 120 kB.

⸻

11. Technical Stack Inference

Next.js 14 (App Router, output:'export') + TypeScript 5.x + Tailwind CSS 3 (JIT) + MDX.
Hosted on Vercel with Cloudflare CDN.
Third-party: Google Fonts (Inter), Google Tag Manager, Ashby Jobs.

⸻

12. Analytics Events
    • nav_click {label,page}
    • cta_join {location:'home'}
    • cta_open_roles {page:'team'}
    • gallery_swipe {carousel:'roster'|'product',direction}
    • outbound_research {url}
    • scroll_depth {percent:25|50|75|100}

⸻

13. Risks & Open Questions
    • Hero images heavy → compress to WebP/AVIF.
    • Ashby uptime dependency → monitor 5xx.
    • Research-PDF hosting permanence.
    • LinkedIn URL structure may change.
    • Footer year rollover automation.

⸻

14. MVP Dev Checklist
    1.  Init repo (Next.js + TypeScript).
    2.  Global layout & theme tokens.
    3.  Build Landing components & scroll-reveal.
    4.  Build Team components & carousels.
    5.  Implement sticky header + mobile nav.
    6.  Axe automated a11y audit & manual keyboard test.
    7.  Vitest unit tests & Cypress E2E (desktop + mobile).
    8.  Vercel preview deploy & Lighthouse CI gate.

⸻

15. Appendix
    • Figma redlines, token JSON, and image assets supplied separately.
