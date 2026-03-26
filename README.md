# Tricky's Portfolio

A modern, responsive portfolio website built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**. Features full-page snap scrolling, glass morphism design, and comprehensive customization options for content, colors, and behavior.

## 🚀 Quick Start

```bash
npm install
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
```

---

## 📋 Customization Guide

### 1. **Data Points** - Content & Structure

All portfolio content is centralized in `/src/const/` files for easy maintenance:

#### **`projectData.tsx`** - Project Cards

Manage your project showcases (Frontend, Backend, Full Stack):

```tsx
type HeavyCardProps = {
  cardTitle: string;           // Project name
  cardLink: string;            // Image path or YouTube embed URL
  cardContent: ReactNode;      // HTML description with highlights
  Badges: Array<{              // Tech stack badges
    badgeName: string;
    badgeLink: string;          // Icon URL (simpleicons.org)
  }>;
  ytMode?: boolean;            // Auto-detect YouTube vs images
};

// Example:
const frontendProjects: HeavyCardProps[] = [
  {
    cardTitle: "Car Filter",
    cardLink: "projects/carFilter.png",  // Path or YouTube embed URL
    cardContent: <>A UI clone showcasing frontend skills</>,
    Badges: [
      { badgeName: "javascript", badgeLink: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { badgeName: "react js", badgeLink: "https://cdn.simpleicons.org/react/61DAFB" },
    ],
  },
  // Add more projects...
];
```

**Note:** YouTube embeds are auto-detected via URL pattern. Images render optimized with `aspect-video` and `object-cover`.

#### **`gridData.ts`** - Certifications, Tech Stack, Clubs

Manage badge grids and skill listings:

```typescript
type CertData = {
  name: string;        // Certification name
  image: string;       // Badge image path (in /public/badges/)
  url: string;        // Link to credential
};

type TechStack = {
  name: string;        // Tech name
  icon: string;        // Icon URL
};

type ClubData = {
  name: string;        // Club/organization name
  logo: string;        // Logo path
  position: string;    // Your role
};

// Add items to arrays:
const certData: CertData[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    image: "/badges/aws-certified-cloud-practitioner.png",
    url: "https://www.credly.com/badges/...",
  },
  // Add more...
];

const techStack: TechStack[] = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  // Add more...
];

const clubData: ClubData[] = [
  { name: "Open Source Club", logo: "/path/to/logo.png", position: "Lead" },
  // Add more...
];
```

#### **Component Props** - Contact, Education, Experience

Edit directly in component files:

- [Home.tsx](src/components/custom/Home.tsx) - Hero intro & bio
- [Experience.tsx](src/components/custom/Experience.tsx) - Work experience entries
- [Education.tsx](src/components/custom/Education.tsx) - Degrees & academics
- [ContactMe.tsx](src/components/custom/ContactMe.tsx) - Email form & social links

---

### 2. **Colors & Theme** - Semantic Tokens

All colors are managed in **[`src/const/theme.ts`](src/const/theme.ts)** using semantic tokens for consistency and easy theme switching:

#### **Page-Level Colors**

```typescript
const PAGE_THEME = {
  portfolio: {
    background: "bg-neutral-950",      // Page background
    baseText: "text-neutral-100",      // Body text
    primary: "text-blue-500",          // Primary accent (hero)
    accent: "text-pink-400",           // Secondary accent
  },
  extra: {
    background: "bg-neutral-950",      // Extra page background
    baseText: "text-neutral-100",
    primary: "text-blue-500",
    accent: "text-purple-400",         // Different accent per page
  },
} as const;
```

**Usage:**

```tsx
import { PAGE_THEME } from "@/const/theme";

<div className={`w-full ${PAGE_THEME.portfolio.background}`}>
  <h1 className={`text-5xl ${PAGE_THEME.portfolio.primary}`}>Welcome</h1>
</div>
```

#### **Heading Colors**

```typescript
const HEADING_COLORS = {
  primary: "text-blue-400",      // Section headings
  accent: "text-pink-400",       // Highlighted titles
  accentSoft: "text-pink-200",   // Lighter variant
  purple: "text-purple-400",
  red: "text-red-400",
  yellow: "text-yellow-400",
  // ... with Soft variants
} as const;
```

#### **Text Colors**

```typescript
const TEXT_COLORS = {
  strong: "text-white",          // Bold/emphasis text
  strongSoft: "text-white/95",
  muted: "text-neutral-400",     // Secondary text
  body: "text-neutral-300",      // Body paragraphs
  subtle: "text-white/40",       // Very faded text
  subtleMuted: "text-white/30",
  dim: "text-neutral-500",       // Dimmed text
} as const;
```

#### **Icon Colors**

```typescript
const ICON_COLORS = {
  primary: "text-blue-400",
  accent: "text-pink-400",
  purple: "text-purple-400",
  red: "text-red-400",
  yellow: "text-yellow-400",
} as const;
```

#### **Border Colors**

```typescript
const BORDER_COLORS = {
  glass: "border-white/10",       // Subtle glass borders
  glassHover: "hover:border-white/20",
  badgeMuted: "border-neutral-700",
  badgeLight: "border-white/20",
} as const;
```

#### **Shared Component Classes** - Glass Morphism Patterns

```typescript
const SHARED_COLOR_CLASSES = {
  glassCard: "bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4",
  softGlassCard: "bg-black/20 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/40 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4",
  sectionBadge: "bg-black/30 text-white font-mono border-white/20",
  techBadge: "bg-black/20 text-neutral-400 border-neutral-700",
} as const;
```

**To customize colors:**

1. Edit hex/RGB values in `theme.ts`
2. Components automatically update via import
3. All Tailwind classes (e.g., `text-blue-400` → `text-purple-600`) are supported

---

### 3. **Pluggable Functions & Hooks**

#### **`useDirectionalSnap`** - Smart Scroll Navigation

Located in [src/hooks/use-directional-snap.ts](src/hooks/use-directional-snap.ts)

Controls full-page snap scrolling with directional awareness:

```typescript
// Upward scroll: Enter section from BOTTOM first, then TOP
// Downward scroll: Always enter section from TOP

interface UseDirectionalSnapOptions {
  snapLockMs?: number;  // Lock duration between snaps (default: 700ms)
}

useDirectionalSnap(scrollRef, { snapLockMs: 700 });
```

**Usage in components:**

```tsx
import { useDirectionalSnap } from "@/hooks/use-directional-snap";

export function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useDirectionalSnap(scrollRef);

  return (
    <div ref={scrollRef} className="h-screen overflow-y-auto snap-y snap-mandatory">
      <section className="h-screen snap-start">Section 1</section>
      <section className="h-screen snap-start">Section 2</section>
    </div>
  );
}
```

**Customization:**

- **`snapLockMs`**: Increase to prevent rapid scrolling, decrease for snappier response
- **Anchor Logic**: Edit `currentAnchor` state to change entry points (top/bottom)

#### **`useIsMobile`** - Responsive Breakpoint Hook

Located in [src/hooks/use-mobile.ts](src/hooks/use-mobile.ts)

Detects mobile viewport:

```typescript
import { useIsMobile } from "@/hooks/use-mobile";

export function MyComponent() {
  const isMobile = useIsMobile();
  
  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}
```

**Breakpoint:** `768px` (customizable by editing `MOBILE_BREAKPOINT`)

---

### 4. **Reusable Components**

#### **`HeavyCard`** - Project Showcase Card

[src/components/custom/HeavyCard.tsx](src/components/custom/HeavyCard.tsx)

Renders project cards with auto-detected media (YouTube or image):

```tsx
<HeavyCard
  cardTitle="My Project"
  cardLink="projects/screenshot.png"  // or YouTube embed URL
  cardContent={<>Project description</>}
  Badges={[
    { badgeName: "React", badgeLink: "https://cdn.simpleicons.org/react/61DAFB" },
  ]}
/>
```

**Features:**

- Auto-detects YouTube embeds vs image paths
- Images: Optimized with `aspect-video` + `object-cover`
- Videos: Renders responsive `<iframe>`
- Prevents overflow via `overflow-hidden`

#### **`ProjectShowcaseSection`** - Container for Project Grids

[src/components/custom/ProjectShowcaseSection.tsx](src/components/custom/ProjectShowcaseSection.tsx)

Wraps multiple `HeavyCard` components:

```tsx
<ProjectShowcaseSection
  title="Frontend Projects"
  sectionBadge="showcase"
  projects={frontendProjects}
/>
```

#### **`GridTypeCard`** - Flexible Grid Cards

[src/components/custom/GridTypeCard.tsx](src/components/custom/GridTypeCard.tsx)

Used for certifications, tech stack, clubs:

```tsx
<GridTypeCard
  title="Certification Name"
  subtitle="AWS Certified"
  icon={<BadgeIcon />}
  onClick={() => window.open(url)}
/>
```

---

### 5. **Responsive Design**

Built with mobile-first Tailwind breakpoints:

| Breakpoint | Size | Prefix |
|-----------|------|--------|
| Mobile | < 640px | (default) |
| Tablet | ≥ 640px | `sm:` |
| Desktop | ≥ 768px | `md:` |
| Large | ≥ 1024px | `lg:` |

**Examples:**

```tsx
// Typography scales up on larger screens
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Title</h1>

// Grid adapts to screen size
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

// Padding resets on desktop (mobile breathing room only)
<div className="pb-20 md:pb-0">Content</div>
```

---

### 6. **Styling & Utilities**

#### **Custom Tailwind Utilities** - [src/index.css](src/index.css)

```css
/* Hide scrollbar (cross-browser) */
@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

**Usage:**

```tsx
<div className="overflow-y-auto scrollbar-hide">Content</div>
```

#### **Glass Morphism Pattern**

Used throughout via `SHARED_COLOR_CLASSES`:

```css
backdrop-blur-md        /* Frosted glass effect */
bg-black/30            /* Semi-transparent background */
border-white/10        /* Subtle borders */
hover:bg-black/50      /* Interactive hover state */
border-b-4 border-r-4  /* 3D depth with bottom/right borders */
```

---

### 7. **File Structure**

```
src/
├── assets/
│   └── data.js                        # Legacy data (deprecated, use /const/)
├── components/
│   ├── custom/
│   │   ├── HeavyCard.tsx              # Project card component
│   │   ├── ProjectShowcaseSection.tsx # Project grid container
│   │   ├── GridTypeCard.tsx           # Generic grid card
│   │   ├── Home.tsx                   # Hero intro section
│   │   ├── Experience.tsx             # Work experience section
│   │   ├── Education.tsx              # Education section
│   │   ├── Certification.tsx          # Certs grid section
│   │   ├── SoftwareDev.tsx            # Tech stack section
│   │   ├── Academic.tsx               # Academic research section
│   │   ├── Clubs.tsx                  # Club memberships section
│   │   ├── ContactMe.tsx              # Contact form section
│   │   ├── BackendProjects.tsx        # Backend showcase
│   │   ├── FrontendProjects.tsx       # Frontend showcase
│   │   ├── FullStackProjects.tsx      # Full stack showcase
│   │   ├── Projects.tsx               # Projects navigation
│   │   ├── customized.tsx             # Layout utilities & backgrounds
│   │   └── InteractiveNav.tsx         # Navigation component
│   └── ui/                            # shadcn/ui components
├── const/
│   ├── theme.ts                       # Semantic color tokens ⭐
│   ├── projectData.tsx                # Project cards data
│   └── gridData.ts                    # Certs, tech, clubs data
├── hooks/
│   ├── use-directional-snap.ts        # Scroll snap logic ⭐
│   └── use-mobile.ts                  # Mobile breakpoint detection
├── lib/
│   └── utils.ts                       # Utility functions
├── pages/
│   ├── Portfolio.tsx                  # Main portfolio page
│   └── Extra.tsx                      # Bonus content page
├── App.tsx                            # Root component
├── main.tsx                           # App entry point
├── index.css                          # Global styles & utilities
└── App.css                            # App-specific styles
```

---

### 8. **Common Customizations**

#### **Change Primary Color Scheme**

Edit `theme.ts`:

```typescript
const PAGE_THEME = {
  portfolio: {
    primary: "text-blue-500",     // → "text-purple-600"
    accent: "text-pink-400",      // → "text-cyan-400"
  },
};
```

#### **Add New Project**

Edit `projectData.tsx`:

```tsx
const frontendProjects: HeavyCardProps[] = [
  // ... existing projects
  {
    cardTitle: "New Project",
    cardLink: "/projects/new-project.png",
    cardContent: <>Description here</>,
    Badges: [
      { badgeName: "tech", badgeLink: "https://cdn.simpleicons.org/tech/..." },
    ],
  },
];
```

#### **Disable Snap Scrolling**

Remove from [Portfolio.tsx](src/pages/Portfolio.tsx):

```tsx
// const scrollRef = useRef<HTMLDivElement>(null);
// useDirectionalSnap(scrollRef);  // ← Comment out
```

And remove `snap-y snap-mandatory` from container:

```tsx
// className={`... snap-y snap-mandatory ...`}
```

#### **Customize Snap Timing**

Edit `use-directional-snap.ts`:

```typescript
const SNAP_LOCK_DURATION = 700; // ← Change to 500 (faster) or 1000 (slower)
```

---

## 🎨 Design System

- **Glass Morphism**: Backdrop blur + semi-transparent backgrounds
- **Typography**: Responsive scaling with semantic tokens
- **Spacing**: 4px base unit (Tailwind default)
- **Colors**: Dark theme (neutral-950 bg) with neon accents (blue, pink, purple)
- **Interactions**: Smooth transitions (300ms), hover state elevation

---

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool (lightning fast)
- **Tailwind CSS 3** - Utility-first styling
- **shadcn/ui** - Pre-built component library
- **Framer Motion** - Animation (optional, for scroll effects)

---

## 🔗 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Simple Icons](https://simpleicons.org/) - Tech badge icons
- [Vite Guide](https://vite.dev/)

---

## 📝 License

Feel free to clone and customize for your own portfolio!