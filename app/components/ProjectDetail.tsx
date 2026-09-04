import Link from "next/link";
import type { Project, ProjectMedia } from "../data/projects";
import { projects } from "../data/projects";
import { haasThin } from "../fonts";
import SiteHeader from "./SiteHeader";

function GalleryItem({ item }: { item: ProjectMedia }) {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        aria-label={item.label}
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-full object-cover"
      />
    );
  }

  if (item.type === "image") {
    return <img src={item.src} alt={item.alt} className="w-full object-cover" />;
  }

  return (
    <div className="flex min-h-[320px] w-full items-center justify-center bg-[#2a2a2a] px-6 text-center sm:min-h-[420px] lg:min-h-[520px]">
      <p className={`${haasThin.className} text-[13px] tracking-[0.04em] text-white/30`}>
        Add {item.label}
      </p>
    </div>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <SiteHeader active="work" fixed />

      <div className="mx-auto max-w-[1700px] px-[18px] pt-[140px] pb-20 sm:pt-[92px]">
        <div className="grid grid-cols-12 gap-x-[18px] gap-y-16">
          <aside className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-[92px] lg:pr-6">
              <div className="mb-10">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-[22px] text-white/90 transition-colors duration-150 hover:text-[#ff00ff]"
                >
                  <span aria-hidden="true">←</span>
                  <span>back</span>
                </Link>
              </div>

              <h1 className="text-[22px] font-normal text-white/90">{project.title}</h1>
              <p className={`${haasThin.className} text-[14px] leading-none tracking-[0.04em] text-white/60`}>
                {project.subtitle}
              </p>

              <div className="mt-12 space-y-6 text-[22px] font-light leading-[1.05] text-white/90">
                {project.description.length > 0 ? (
                  project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                ) : (
                  <p className="text-white/40">Project description coming soon.</p>
                )}
              </div>

              <p className={`${haasThin.className} mt-12 text-[14px] tracking-[0.04em] text-white/40`}>
                Copyright © 2026 Zeyu Yin
              </p>
            </div>
          </aside>

          <section className="col-span-12 space-y-[18px] lg:col-span-8">
            {project.gallery.map((item, index) => (
              <GalleryItem key={`${project.slug}-${index}`} item={item} />
            ))}

            <nav className="flex items-center justify-between gap-4 pt-10" aria-label="Project navigation">
              <Link
                href={`/work/${previous.slug}`}
                className="inline-flex items-center gap-2 text-[18px] text-white/90 transition-colors duration-150 hover:text-[#ff00ff] sm:text-[22px]"
              >
                <span aria-hidden="true">←</span>
                <span>previous</span>
              </Link>

              <Link
                href={`/work/${next.slug}`}
                className="inline-flex items-center gap-2 text-[18px] text-white/90 transition-colors duration-150 hover:text-[#ff00ff] sm:text-[22px]"
              >
                <span>next</span>
                <span aria-hidden="true">→</span>
              </Link>
            </nav>
          </section>
        </div>
      </div>
    </main>
  );
}
