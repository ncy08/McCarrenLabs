Below is a practical, step-by-step playbook for turning any blank project into a pixel-perfect, interaction-perfect clone of the Sesame landing page ( https://www.sesame.com ).
It assumes a modern React / Next 14 + Tailwind stack, but you can map the same structure to plain HTML/CSS or another framework just by keeping the section order and CSS rules identical.

⸻

1 · Frame the project 1. Scaffold

npx create-next-app@latest sesame-clone --typescript --tailwind
cd sesame-clone

    2.	Global styles

Import fonts once in globals.css (or \_app.tsx):

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");
:root{
--clr-text:#0A0A0A;
--clr-accent:#0066FF; /_ link + button _/
--space:0.5rem; /_ 8 px rhythm _/
}
html{scroll-behavior:smooth;}
body{font-family:Inter,system-ui,sans-serif;color:var(--clr-text);}

⸻

2 · Lay the page skeleton

<Header /><!-- sticky -->
<main>
  <Hero />
  <SectionGoals />   <!-- 01 & 02 -->
  <SectionJoin />    <!-- Join Sesame -->
</main>
<Footer />

2.1 Header (sticky)
• Structure: flex row, 100 vw, position:sticky; top:0; z-index:50;
• Left group: Sesame · Research · Team (plain <Link>s)
• Right CTA: “Demo” button – solid accent, 8 px radius, hover :opacity-90
• Active state: underline 2 px accent on the current route.
• Small-screen: collapse to hamburger (slide-in menu) after md.

2.2 Hero

Element Token / class suggestion
H1 text-5xl md:text-7xl leading-[1.05]“Bringing the computer to life”
Copy paragraph prose md:prose-lg mt-4 max-w-[60ch]
Layout centered column, py-24 md:py-40
Entry animation Fade/slide up 40 px over 600 ms on first viewport

2.3 “Goals” (two numbered feature blocks)

Number Heading (H2) Body copy (≈ 2 sentences) CTA
01 A personal companion … “Try our research” → /demo
02 Lightweight eyewear … (no CTA)

Implementation tips ￼
• Use a 12-col grid: on lg: put number/heading left, copy right; stack at sm:.
• Prefix numbers with font-mono text-3xl text-accent.

2.4 Join Sesame section
• H2 “Join Sesame” followed by one sentence and link “team and mission”.
• Below: 4-image gallery (Team hero photos). Use grid-cols-2 md:grid-cols-4 gap-4, each image rounded-2xl object-cover aspect-[3/4].
• Secondary CTA beneath images → Ashby jobs URL.

2.5 Footer

<small>Home · Research · Team · Contact us</small>
<small>© 2025 Sesame AI Inc.</small>
<small>Privacy · Terms</small>

Flex column on mobile, row on md:; give top border border-t-neutral-200.

⸻

3 · Design system cheatsheet
• Color
• Text #0A0A0A
• Accent links / buttons #0066FF
• Section backgrounds all white; rely on generous white space.
• Type scale

Token Size
display-1 64 / 72 px
heading-2 40 / 48 px
body-lg 20 px

    •	Spacing – 8-point grid (var(--space)) but double it between big sections (py-24 md:py-40).
    •	Motion – only subtle fades / translateY for section reveal; respect prefers-reduced-motion.

⸻

4 · Code snippets you can drop in

4.1 Header component (Next + Tailwind)

// components/Header.tsx
import Link from "next/link";
export default function Header() {
const nav = [
{href:"/", label:"Sesame"},
{href:"/research", label:"Research"},
{href:"/team", label:"Team"}
];
return (
<header className="sticky top-0 backdrop-blur bg-white/80 border-b border-neutral-100">
<div className="mx-auto flex items-center justify-between max-w-7xl px-4 py-3">
<nav className="flex gap-6">
{nav.map(n=>(
<Link key={n.href} href={n.href}
              className="font-medium hover:text-accent transition-colors">{n.label}</Link>
))}
</nav>
<Link href="/demo"
          className="rounded-md bg-accent px-4 py-2 text-white font-semibold shadow hover:opacity-90">
Demo
</Link>
</div>
</header>
);
}

4.2 Hero (with Framer Motion)

"use client";
import {motion} from "framer-motion";
export default function Hero() {
return (
<section className="text-center">
<motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}
transition={{duration:0.6}} className="mx-auto max-w-4xl text-5xl md:text-7xl font-semibold">
Bringing the computer to life
</motion.h1>
<p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed">
We believe in a future where computers are lifelike&hellip;{/_ rest of copy _/}
</p>
</section>
);
}

(Repeat the pattern for the Goals & Join sections.)

⸻

5 · Polish & QA checklist 1. Responsive breakpoints: sm ≤ 640 px, md 768 px, lg 1024 px+. 2. Accessibility: semantic headings (h1-h2-h3), alt text on every image, focus outline on links, color-contrast ratio ≥ 4.5. 3. Performance: serve images via <Image> with placeholder="blur"; target FCP ≤ 1.2 s, LCP ≤ 2 s. 4. SEO: <title>Sesame – Bringing the computer to life</title>, OpenGraph tags, canonical URL. 5. Deploy: vercel --prod (or Netlify). Confirm no visual diffs against the reference site at 1440 px, 768 px, and 390 px widths.

⸻

Want the quickest sanity check? 1. Run npx @next/bundle-analyzer — make sure JS ≤ 150 kB. 2. Compare screenshots side-by-side in Chrome DevTools’ “Rendering → Layout Shift Regions” to confirm CLS ≈ 0.

Follow these steps and you’ll have a landing page that matches Sesame.com down to spacing, type scale, and subtle motion—ready to slot into any codebase or CMS.
