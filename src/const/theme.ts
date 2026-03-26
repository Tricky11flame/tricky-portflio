const PAGE_THEME = {
  portfolio: {
    background: "bg-neutral-950",
    baseText: "text-neutral-100",
    primary: "text-blue-500",
    accent: "text-pink-400",
  },
  extra: {
    background: "bg-neutral-950",
    baseText: "text-neutral-100",
    primary: "text-blue-500",
    accent: "text-purple-400",
  },
} as const;

const HEADING_COLORS = {
  primary: "text-blue-400",
  accent: "text-pink-400",
  accentSoft: "text-pink-200",
  purple: "text-purple-400",
  purpleSoft: "text-purple-300",
  red: "text-red-400",
  redSoft: "text-red-100",
  yellow: "text-yellow-400",
  yellowSoft: "text-yellow-100",
} as const;

const TEXT_COLORS = {
  strong: "text-white",
  strongSoft: "text-white/95",
  muted: "text-neutral-400",
  body: "text-neutral-300",
  subtle: "text-white/40",
  subtleMuted: "text-white/30",
  dim: "text-neutral-500",
} as const;

const ICON_COLORS = {
  primary: "text-blue-400",
  accent: "text-pink-400",
  purple: "text-purple-400",
  red: "text-red-400",
  yellow: "text-yellow-400",
} as const;

const BORDER_COLORS = {
  glass: "border-white/10",
  glassHover: "hover:border-white/20",
  badgeMuted: "border-neutral-700",
  badgeLight: "border-white/20",
} as const;

const SURFACE_COLORS = {
  glassBg: "bg-black/30",
  glassHover: "hover:bg-black/50",
  softGlassBg: "bg-black/20",
  softGlassHover: "hover:bg-black/40",
  badgeBg: "bg-black/20",
  badgeText: "text-neutral-400",
  badgeBorder: "border-neutral-700",
} as const;

const SHARED_COLOR_CLASSES = {
  glassCard:
    "bg-black/30 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/50 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4",
  softGlassCard:
    "bg-black/20 border-2 border-white/10 backdrop-blur-md shadow-xl hover:bg-black/40 hover:border-white/20 transition-all duration-300 border-b-4 border-r-4",
  sectionBadge: "bg-black/30 text-white font-mono border-white/20",
  techBadge: "bg-black/20 text-neutral-400 border-neutral-700",
} as const;

export {
  PAGE_THEME,
  HEADING_COLORS,
  TEXT_COLORS,
  ICON_COLORS,
  BORDER_COLORS,
  SURFACE_COLORS,
  SHARED_COLOR_CLASSES,
};
