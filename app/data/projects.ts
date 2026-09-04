export type ProjectSpan = "small" | "medium" | "large";

export type Project = {
  title: string;
  subtitle: string;
  href: string;
  span: ProjectSpan;
  image?: string;
  video?: string;
};

export const projects: Project[] = [
  { title: "Self Portrait Series", subtitle: "Image Series, 2025", href: "#", image: "/work/self-portrait-series.jpg", span: "small" },
  { title: "AI && U", subtitle: "Book, 2025", href: "#", image: "/work/ai-u.jpg", span: "large" },
  { title: "Error Log: SELF", subtitle: "Book, 2025", href: "#", image: "/work/error-log-self.jpg", span: "medium" },
  { title: "Before One Becomes One", subtitle: "Publication, 2026", href: "/work/before-one-becomes-one", image: "/work/before-one-becomes-one.jpg", span: "medium" },
  { title: "The Moment Before", subtitle: "Installation, 2025", href: "#", image: "/work/the-moment-before.jpg", span: "small" },
  { title: "Introducing AR to Isabella Stewart Gardener Museum", subtitle: "UI/UX, 2026", href: "#", image: "/work/isabella-museum.jpg", span: "large" },
  { title: "Glossier Brand Refresh", subtitle: "Branding, 2026", href: "#", image: "/work/glossier.jpg", span: "large" },
  { title: "Appreciation of Water", subtitle: "Riso Print, 2025", href: "/work/water", video: "/work/water.mp4", span: "small" },
  { title: "Almost Scarf", subtitle: "Textile Publication, 2025", href: "#", image: "/work/almost-scarf.jpg", span: "medium" },
];
