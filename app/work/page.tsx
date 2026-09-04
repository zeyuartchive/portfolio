import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { projects, type Project } from "../data/projects";
import { haasThin } from "../fonts";

function WorkItem({ title, subtitle, href, image, video, span }: Project) {
  const spanClass = span === "large" ? "col-span-4" : span === "small" ? "col-span-2" : "col-span-3";

  return (
    <Link href={href} className={`group ${spanClass}`}>
      {video ? (
        <video src={video} autoPlay muted loop playsInline className="h-[524px] w-full object-cover" />
      ) : (
        <img src={image} alt={title} className="h-[524px] w-full object-cover" />
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
        <section className="mt-20">
          <div className="grid grid-cols-9 gap-[18px]">
            {projects.map((project) => (
              <WorkItem key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
