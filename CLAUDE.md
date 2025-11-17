# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**RestoGenie Landing Page** is a Next.js 14 + TypeScript landing page for an AI-powered restaurant operations platform. This codebase was migrated from HTML templates (`documents/index.html`, `documents/plans.html`) to a modern React-based architecture.

- **Live Site**: https://restogenie-landing.vercel.app
- **Service URL**: https://www.restogenie.co.kr
- **Target Audience**: Korean restaurant owners (B2C) and franchise headquarters (Enterprise)

---

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

---

## Architecture

### Data-Driven Approach
All content is separated from components via data files in `/src/data/`:

```
src/data/
├── siteDetails.ts      # Site metadata, URLs, Channel Talk key
├── hero.ts             # Hero section content
├── problem.ts          # 6 pain points
├── solution.ts         # YouTube demo video
├── benefits.tsx        # 8 core features (with React Icons)
├── integration.ts      # 15+ integration logos
├── pricing.ts          # Store (B2C) & HQ (Enterprise) pricing
├── faq.ts              # 5 FAQ items
├── waitlist.ts         # Waitlist form fields & benefits
├── footer.ts           # Company info, links, socials
└── menuItems.ts        # Navigation menu
```

**Key Pattern**: Components import data files and render content dynamically. To update copy/content, edit data files, NOT components.

### Component Structure

```
src/components/
├── Header.tsx          # Sticky nav with mobile hamburger
├── Hero.tsx            # Main headline + CTA
├── Problem.tsx         # 6 pain point cards (scrollable on mobile)
├── Solution.tsx        # YouTube embed + description
├── Benefits/           # 8 features with icons & images
│   ├── Benefits.tsx
│   ├── BenefitSection.tsx
│   └── BenefitBullet.tsx
├── Integration.tsx     # Logo grid (15+ partners)
├── Pricing/            # Tabbed pricing (Store/HQ)
│   ├── Pricing.tsx     # Tab switching + feature comparison table
│   └── PricingColumn.tsx
├── FAQ.tsx             # Accordion-style FAQs
├── Waitlist/           # Waitlist form + modals
│   ├── WaitlistForm.tsx
│   ├── SuccessModal.tsx
│   └── ErrorModal.tsx
├── Footer.tsx          # Company info + quick links
└── [Container, Section, SectionTitle] # Layout helpers
```

### Page Composition

`src/app/page.tsx` orchestrates all sections in order:
1. Hero
2. Problem
3. Solution
4. Benefits (Features)
5. Integration
6. Pricing
7. FAQ
8. Waitlist
9. Footer (in layout)

**Disabled Sections**: Stats, Testimonials (no data yet; hidden via comments or conditional rendering)

---

## Key Integrations

### Channel Talk (Customer Support)
- **Plugin Key**: `6730846e-0cb4-4d5e-8997-7d768be6b050`
- **Location**: `src/app/layout.tsx` (global script)
- **Implementation**: Standard Channel Talk boot script in `<Script>` tag

### Google Apps Script (Waitlist Form)
- **Endpoint**: `https://script.google.com/macros/s/AKfycbxuDvGKClt8EIobA0eA4fVmpuxpf3nVeC9SgWPeUDQMKeJmk9wx7-EHP0VScFJ1JM1I2Q/exec`
- **Method**: POST with `FormData`
- **Response**: `{ result: 'success' }` or `{ result: 'error', message: '...' }`
- **Validation**:
  - Email: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - Phone: `/^\d{10,11}$/` (hyphens removed)
- **UI Flow**: Submit → Loading spinner → Success/Error modal with fade animations

### YouTube Demo Video
- **Video ID**: `4lVFVymrx4c`
- **Params**: `autoplay=1&mute=1&loop=1&controls=0`
- **Location**: Solution section

---

## Design System

### Colors (Indigo-based)
```css
Primary: #4f46e5 (Indigo-600)
Primary Hover: #3730a3 (Indigo-700)
Background: #f8fafc (Slate-50)
Card: #ffffff
Text Primary: #0f172a (Slate-900)
Text Secondary: #475569 (Slate-600)
```

### Typography
- **Font**: Pretendard (Korean-optimized web font)
- **Import**: `@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');`
- **Base Size**: 15px (mobile), 16px (desktop)

### Icons
- **Library**: React Icons (`react-icons`)
- **Packs Used**:
  - `fa6` (Font Awesome 6): Problem section (FaSackXmark, FaBullhorn, etc.)
  - `fi` (Feather): Features section (FiMessageCircle, FiBarChart2, etc.)
  - `bs` (Bootstrap): Stats (BsBarChartFill)
  - `pi` (Phosphor): Stats (PiGlobeFill)
- **Pattern**: Import specific icons, render as JSX components

### Animations
- **Fade-in**: `@keyframes fadeIn` for section reveals
- **Modals**: Enter/leave transitions with `cubic-bezier(0.4, 0, 0.2, 1)`
- **Cards**: Hover → `translateY(-5px)` + shadow

---

## Responsive Strategy

### Breakpoints
- `sm`: 640px (Tailwind default)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (wide)
- `2xl`: 1536px (ultra-wide)

### Mobile-First Patterns
- **Problem Section**: Horizontal scroll cards on mobile → Grid on desktop
- **Pricing Table**: Horizontal scroll + sticky first column on mobile → Full table on desktop
- **Navigation**: Hamburger menu on mobile → Horizontal menu on desktop
- **Container**: Max-width 1200px, padding `1rem` (mobile) / `2rem` (desktop)

---

## Content Guidelines

### Tone & Voice
- **Friendly & Empathetic**: Use "사장님" (Boss), "~하셨나요?" (Did you...?)
- **Problem-Focused**: Specific pain points ("버려지는 식자재", "눈덩이처럼 불어나는 수수료")
- **Solution-Oriented**: "AI가 ~", "자동으로 ~", "데이터 기반 ~"
- **Urgency**: "첫 100개 매장", "12월 런칭"

### Messaging Hierarchy
1. **Value Prop**: "사장님은 음식에만 집중하세요. 돈 새는 구멍은 AI가 막아드립니다."
2. **Problem**: 6 pain points (cost, labor, marketing, admin, intuition, training)
3. **Solution**: "AI 파트너 'RestoGenie'에게 맡기세요"
4. **Features**: 8 core capabilities (chatbot, dashboard, marketing, ads, inventory, scheduling, location, reviews)
5. **CTA**: "대기자 등록 → 런칭 혜택"

---

## Working with Pricing

### Dual Product Strategy
- **RestoGenie Store (B2C)**: Individual restaurant owners, 6 tiers (Free → Enterprise)
- **RestoGenie HQ (Enterprise)**: Franchise headquarters, Access + Control plans

### Implementation
- **Tab Switching**: Headless UI Tabs component
- **Monthly/Annual Toggle**: 20% discount for annual (B2C only)
- **Feature Comparison Table**: 20+ features with icons (✓, ✗, specific values)
- **Plan Highlighting**: Scroll to table + highlight selected column on "플랜 시작하기" click

---

## Image Strategy

### Current State
- **Placeholders**: Most images use `placehold.co` or existing URLs
- **Logo URLs**: Integration logos use `https://rg-proto.jp.ngrok.io/images/logo_*.png`
- **Hero/Features**: `/images/*.webp` paths prepared but not yet uploaded

### Image Specs
- **Hero**: 1200x800px (dashboard mockup)
- **Features**: 600x400px each (8 screenshots)
- **OG/Twitter**: 1200x675px (social sharing)
- **Favicon**: 32x32px or SVG

### Updating Images
1. Add images to `/public/images/`
2. Update paths in data files (e.g., `hero.ts`, `benefits.tsx`)
3. Ensure WebP format for performance
4. No need to restart dev server (Next.js auto-detects)

---

## Disabled Features

### Stats Section
- **Reason**: No real data yet (partner count, transaction volume)
- **Location**: Commented out in `page.tsx`
- **Activation**: Uncomment + update `stats.tsx` with real numbers post-beta

### Testimonials Section
- **Reason**: No customer reviews yet (pre-launch)
- **Location**: Commented out in `page.tsx`
- **Activation**: Collect beta partner reviews → uncomment + update `testimonials.ts`

### Gemini API Demo (Optional)
- **Feature**: AI marketing copy generator (restaurant type + menu → SNS post)
- **Status**: Planned but not implemented
- **If Implementing**: Create `GeminiDemo.tsx` component in Pricing or separate section

---

## Common Tasks

### Update Copy/Content
1. Find relevant data file in `src/data/`
2. Edit text, keeping structure intact
3. Save → Hot reload in browser
4. No component changes needed

### Add New Section
1. Create component in `src/components/`
2. Create data file in `src/data/`
3. Import data in component
4. Add section to `page.tsx` in desired order
5. Update navigation in `menuItems.ts` if needed

### Modify Pricing
- **B2C**: Edit `tiers` array in `pricing.ts`
- **Enterprise**: Edit `enterprisePricing` object in `pricing.ts`
- **Table**: Update `features` array in `pricing.ts` (feature comparison)
- **Toggle**: Monthly/annual logic in `Pricing.tsx` (uses `data-retail-price` attributes)

### Update Channel Talk
- Change `channelTalkPluginKey` in `siteDetails.ts`
- Key is automatically used in `layout.tsx` script

### Update Google Apps Script URL
- Change `GOOGLE_APPS_SCRIPT_URL` constant in waitlist form component
- Located in `WaitlistForm.tsx` (when implemented)

---

## Migration Notes

This codebase was migrated from:
- **Source**: `documents/index.html` (single-page HTML with Tailwind CDN)
- **Target**: Next.js 14 App Router + TypeScript + Tailwind
- **Preserved**: All content, styling, animations, form logic, external integrations
- **Enhanced**: Type safety, component modularity, image optimization, SEO

### Original HTML Structure Mapping
```
HTML Section               → Next.js Component
────────────────────────────────────────────────
Header                     → Header.tsx
Hero                       → Hero.tsx
Problem (6 cards)          → Problem.tsx
Solution (YouTube)         → Solution.tsx
Features (8 cards)         → Benefits.tsx
Integration (logos)        → Integration.tsx
Pricing (tabs + table)     → Pricing.tsx
FAQ                        → FAQ.tsx
Waitlist (form + modal)    → Waitlist/*.tsx
Footer                     → Footer.tsx
```

### External Dependencies from HTML
- **Tailwind CDN** → Tailwind installed via npm
- **Font Awesome** → React Icons (`react-icons/fa6`)
- **Pretendard CDN** → Same CDN import in `globals.css`
- **Channel Talk script** → Moved to `layout.tsx`
- **Google Apps Script** → Same endpoint in `WaitlistForm.tsx`

---

## Known Issues / Future Work

1. **Images**: Replace all placeholders with actual product screenshots
2. **Stats/Testimonials**: Enable sections post-beta launch with real data
3. **Gemini Demo**: Optional feature not yet implemented
4. **Launch Date**: Update "12월 정식 런칭" to specific date in `hero.ts` + `waitlist.ts`
5. **Partner Target**: Confirm "첫 100개 매장" in `hero.ts` + `waitlist.ts`
6. **Social Links**: Add real URLs to `socials` in `footer.ts` (currently placeholders)

---

## Deployment

### Vercel (Current)
- **URL**: https://restogenie-landing.vercel.app
- **Branch**: `main` (auto-deploys on push)
- **Environment Variables**: None required (all public)

### Build Checklist
1. `npm run build` → Should complete without errors
2. Check for TypeScript errors: `npx tsc --noEmit`
3. Lighthouse score: Should be 90+ (already optimized)
4. Test on mobile + desktop
5. Verify Channel Talk loads
6. Test waitlist form submission

---

## File Structure Reference

```
restogenie-landing/
├── documents/              # Original HTML templates (reference only)
│   ├── index.html
│   └── plans.html
├── public/
│   └── images/             # Static images (logos, screenshots)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout (Channel Talk, fonts, metadata)
│   │   ├── page.tsx        # Main landing page (section orchestration)
│   │   ├── globals.css     # Global styles (Pretendard, Tailwind, animations)
│   │   └── favicon.ico
│   ├── components/         # All React components
│   ├── data/               # Content data files (edit here, not components!)
│   ├── types.ts            # TypeScript interfaces
│   └── utils.tsx           # Utility functions (if any)
├── PLANNING.md             # Detailed planning doc (IA, design system, content)
├── CLAUDE.md               # This file
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## Questions to Ask Before Coding

1. **Is this a content change?** → Edit data files, not components
2. **Is this a new section?** → Check PLANNING.md for structure first
3. **Does this affect pricing?** → Understand Store vs HQ distinction
4. **Does this need responsive handling?** → Check mobile-first approach
5. **Is this replacing a placeholder?** → Update image path in data file
6. **Does this affect external services?** → Check Channel Talk, Google Apps Script, YouTube

---

*For detailed planning, see [PLANNING.md](./PLANNING.md)*
*For original HTML reference, see [documents/index.html](./documents/index.html)*
