import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { projects, type Project } from "../data/projects";
import { haasThin } from "../fonts";

function WorkItem({ slug, title, subtitle, image, video, span }: Project) {
  const spanClass =
    span === "large"
      ? "col-span-1 sm:col-span-6 lg:col-span-4"
      : span === "small"
        ? "col-span-1 sm:col-span-3 lg:col-span-2"
        : "col-span-1 sm:col-span-3 lg:col-span-3";

  return (
    <Link href={`/work/${slug}`} className={`group ${spanClass}`}>
      {video ? (
        <video src={video} autoPlay muted loop playsInline className="h-[60vh] min-h-[360px] max-h-[560px] w-full object-cover sm:h-[420px] lg:h-[524px]" />
      ) : (
        <img src={image} alt={title} className="h-[60vh] min-h-[360px] max-h-[560px] w-full object-cover sm:h-[420px] lg:h-[524px]" />
      )}

      <p className="mt-3 text-[22px] leading-[0.95] text-white/90 transition-colors duration-150 group-hover:text-[#ff00ff]">
        {title}
      </p>
      <p
        className="mt-[2px] text-[14px] tracking-[0.04em] text-white/60 transition-colors duration-150 group-hover:text-[#ff00ff]"
        style={{ fontFamily: haasThin.style.fontFamily }}
      >
        {subtitle}
      </p>
    </Link>
  );
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <SiteHeader active="work" />
      <div className="mx-auto min-h-screen max-w-[1700px] px-[18px] pb-8">
        <section className="mt-12 sm:mt-20">
          <div className="grid grid-cols-1 gap-x-[18px] gap-y-10 sm:grid-cols-6 lg:grid-cols-9 lg:gap-y-[18px]">
            {projects.map((project) => (
              <WorkItem key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
