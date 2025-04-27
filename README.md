# McCarren Labs

A modern React-based web application for Sesame AI, featuring a clean, minimalist design with interactive components and responsive layouts.

[Live Demo](https://mccarrenlabs-rdtwomsjr-ncy08s-projects.vercel.app) • [GitHub Repo](https://github.com/ncy08/mccarrenlabs)

---

## 📸 Screenshots

_Screenshots of the live site would typically be included here_

---

## ✨ Features

- Responsive design with mobile and desktop layouts
- Vertical left-side navigation for desktop view
- Animated goal number sections using Framer Motion
- Interactive components with hover effects and transitions
- Swiper gallery for team member profiles
- Modern UI with clean typography and spacing

---

## 🛠 Tech Stack

| Category      | Tools / Versions                  |
| ------------- | --------------------------------- |
| Framework     | Next.js 14.0.4                    |
| Front-end UI  | React 18, TypeScript 5            |
| Styling       | Tailwind CSS 3.4.17, Emotion      |
| Animations    | Framer Motion 12.9.2, GSAP 3.12.7 |
| Components    | Headless UI 1.7.15, Swiper 10.3.1 |
| Build         | Next.js Build System              |
| Lint / Format | ESLint 8                          |
| Testing       | Vitest 1.0.4, Cypress 13.6.1      |

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/ncy08/mccarrenlabs.git
cd mccarrenlabs

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev   # Next.js runs at http://localhost:3000

# 4. Build for production
npm run build

# 5. Start production server
npm start
```

## 📦 Project Structure

```
mccarrenlabs/
├── app/                     # Next.js app directory (pages)
│   ├── demo/                # Demo page
│   ├── layout/              # Root layout components
│   ├── research/            # Research page
│   ├── team/                # Team page
│   └── layout.tsx           # Root layout component
├── components/              # React components
│   ├── home/                # Home page components
│   │   ├── GoalsSection.tsx # Goals section with animated numbers
│   │   ├── HeroSection.tsx  # Hero banner component
│   │   └── JoinUsBanner.tsx # Call-to-action banner
│   ├── layout/              # Layout components
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Header.tsx       # Site header with navigation
│   │   └── Layout.tsx       # Main layout wrapper
│   ├── team/                # Team page components
│   │   └── TeamGallery.tsx  # Team member gallery with Swiper
│   └── ui/                  # Reusable UI components
│       └── GridBand.tsx     # Grid layout component
├── lib/                     # Utility functions and hooks
│   └── utils.ts             # Utility functions (className merging, etc.)
├── public/                  # Static assets
│   ├── fonts/               # Custom fonts
│   │   └── season/          # Season Sans font files
│   └── images/              # Images
│       └── team/            # Team member photos
├── styles/                  # Global styles
│   ├── globals.css          # Global CSS including Tailwind imports
│   └── hamburger.css        # Mobile menu hamburger animation styles
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 📁 Project Organization Explained

### Core Application Files

- **app/**: Uses Next.js App Router structure where each folder represents a route
  - Each page folder contains a `page.tsx` file that defines the route
  - Special `layout.tsx` files define shared layouts for routes
- **components/**: Organized by feature and functionality
  - **home/**: Components specifically for the homepage
    - `GoalsSection.tsx`: Implements the numbered goals with large animated numerals
    - `HeroSection.tsx`: Main banner with gradient background and heading
    - `JoinUsBanner.tsx`: Call-to-action section for joining the team
  - **layout/**: Site-wide layout components that appear on all pages
    - `Layout.tsx`: Main component with vertical sidebar navigation
    - `Header.tsx`: Responsive header with mobile menu functionality
    - `Footer.tsx`: Site footer with links and copyright
  - **ui/**: Reusable UI primitives used across multiple components
    - `GridBand.tsx`: Grid system component for consistent layouts
- **styles/**: Styling system
  - `globals.css`: Main styling file with Tailwind imports and custom CSS
  - Custom styling for specific components like the mobile hamburger menu

### Configuration Files

- **next.config.js**: Configuration for Next.js including redirects and build options
- **tailwind.config.js**: Tailwind CSS configuration with custom colors and extensions
- **tsconfig.json**: TypeScript configuration with path aliases and compiler options
- **package.json**: Project dependencies and npm scripts

### Static Assets

- **public/**: Static files served directly by the web server
  - **fonts/**: Custom font files (Season Sans) for typography
  - **images/**: Image assets organized by section/feature

## 🚀 Deployment

This project is deployed on Vercel. Pushing to the main branch automatically triggers a new deployment.
