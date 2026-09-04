export type ProjectSpan = "small" | "medium" | "large";

export type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; label: string }
  | { type: "placeholder"; label: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  span: ProjectSpan;
  image?: string;
  video?: string;
  description: string[];
  gallery: ProjectMedia[];
};

const starterGallery = (title: string, image?: string): ProjectMedia[] => [
  ...(image ? [{ type: "image" as const, src: image, alt: title }] : []),
  { type: "placeholder", label: `${title} image ${image ? 2 : 1}` },
  { type: "placeholder", label: `${title} image ${image ? 3 : 2}` },
  { type: "placeholder", label: `${title} image ${image ? 4 : 3}` },
  ...(!image ? [{ type: "placeholder" as const, label: `${title} image 4` }] : []),
];

export const projects: Project[] = [
  {
    slug: "self-portrait-series",
    title: "Self Portrait Series",
    subtitle: "Image Series, 2025",
    year: "2025",
    image: "/work/self-portrait-series.jpg",
    span: "small",
    description: [
      "A series of self-portraits exploring how a single subject can be reinterpreted across different drawing styles and materials. The project tests portraiture as a system of variation, using repetition to suggest that identity is constructed through multiple, coexisting representations rather than a single stable image. "
    ],
    gallery: starterGallery("Self Portrait Series", "/work/self-portrait-series.jpg"),
  },
  {
    slug: "ai-and-u",
    title: "AI && U",
    subtitle: "Book, 2025",
    year: "2025",
    image: "/work/ai-u.jpg",
    span: "large",
    description: [],
    gallery: [
      { type: "image", src: "/work/ai-u.jpg", alt: "AI and U book cover" },
      { type: "image", src: "/work/AIU2.png", alt: "AI and U book spread 2" },
      { type: "image", src: "/work/AIU3.png", alt: "AI and U book spread 3" },
      { type: "image", src: "/work/AIU4.png", alt: "AI and U book spread 4" },
      { type: "image", src: "/work/AIU5.png", alt: "AI and U book spread 5" },
    ],
  },
  {
    slug: "error-log-self",
    title: "Error Log: SELF",
    subtitle: "Book, 2025",
    year: "2025",
    image: "/work/error-log-self.jpg",
    span: "medium",
    description: [],
    gallery: starterGallery("Error Log: SELF", "/work/error-log-self.jpg"),
  },
  {
    slug: "before-one-becomes-one",
    title: "Before One Becomes One",
    subtitle: "Publication, 2026",
    year: "2026",
    span: "medium",
    description: [
      "Before One Becomes One explores identity as an unstable and continuously shifting structure.",
      "The project considers alternate versions of the self as design collaborators, allowing multiple voices to shape narrative, typography, and form.",
      "Rather than presenting a fixed identity, the work functions as an evolving archive of fragments, parallel paths, and speculative autobiographical forms.",
    ],
    gallery: starterGallery("Before One Becomes One"),
  },
  {
    slug: "the-moment-before",
    title: "The Moment Before",
    subtitle: "Installation, 2025",
    year: "2025",
    image: "/work/the-moment-before.jpg",
    span: "small",
    description: [],
    gallery: starterGallery("The Moment Before", "/work/the-moment-before.jpg"),
  },
  {
    slug: "isabella-stewart-gardner-museum-ar",
    title: "Introducing AR to Isabella Stewart Gardener Museum",
    subtitle: "UI/UX, 2026",
    year: "2026",
    image: "/work/isabella-museum.jpg",
    span: "large",
    description: [],
    gallery: starterGallery("Isabella Stewart Gardner Museum AR", "/work/isabella-museum.jpg"),
  },
  {
    slug: "glossier-brand-refresh",
    title: "Glossier Brand Refresh",
    subtitle: "Branding, 2026",
    year: "2026",
    image: "/work/glossier.jpg",
    span: "large",
    description: [],
    gallery: starterGallery("Glossier Brand Refresh", "/work/glossier.jpg"),
  },
  {
    slug: "water",
    title: "Appreciation of Water",
    subtitle: "Riso Print / Poster, 2025",
    year: "2025",
    video: "/work/water.mp4",
    span: "small",
    description: [
      "Appreciation of Water reflects on water as both a material surface and a shifting perceptual state.",
      "Through layered imagery and print-based processes, the work captures distortion, reflection, and instability, allowing forms to dissolve and reappear.",
      "The project suggests a fluid understanding of identity, where nothing is fixed, and meaning emerges through continuous transformation.",
    ],
    gallery: [
      { type: "video", src: "/work/water.mp4", label: "Appreciation of Water motion study" },
      { type: "placeholder", label: "Appreciation of Water image 1" },
      { type: "placeholder", label: "Appreciation of Water image 2" },
      { type: "placeholder", label: "Appreciation of Water image 3" },
      { type: "placeholder", label: "Appreciation of Water image 4" },
    ],
  },
  {
    slug: "almost-scarf",
    title: "Almost Scarf",
    subtitle: "Textile Publication, 2025",
    year: "2025",
    image: "/work/almost-scarf.jpg",
    span: "medium",
    description: [],
    gallery: starterGallery("Almost Scarf", "/work/almost-scarf.jpg"),
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
