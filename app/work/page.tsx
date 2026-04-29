import Link from "next/link";
import localFont from "next/font/local";

const haasThin = localFont({
  src: "../fonts/NeueHaasUnicaPro-Thin.otf",
});

type WorkItemProps = {
  title: string;
  subtitle: string;
  href: string;
  image?: string;
  video?: string;
  span?: "small" | "medium" | "large";
};

function WorkItem({
  title,
  subtitle,
  href,
  image,
  video,
  span = "medium",
}: WorkItemProps) {
  const spanClass =
    span === "large"
      ? "col-span-4"
      : span === "small"
      ? "col-span-2"
      : "col-span-3";

  return (
    <Link href={href} className={`group ${spanClass}`}>

      {/* 👇 关键：video / image 自动切换 */}
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="h-[524px] w-full object-cover"
        />
      ) : (
        <img
          src={image}
          alt={title}
          className="h-[524px] w-full object-cover"
        />
      )}

      {/* title */}
      <p className="mt-3 text-[22px] leading-[0.95] text-white/90 transition-colors duration-150 group-hover:text-[#ff00ff]">
        {title}
      </p>

      {/* subtitle */}
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

      <div className="mx-auto min-h-screen max-w-[1700px] px-[18px] pt-3 pb-8">

        {/* header */}
        <header className="relative flex items-start justify-end">

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-[22px] tracking-tight text-white/90 transition-colors duration-150 hover:text-[#ff00ff]"
          >
            zeyuartchive
          </Link>

          <nav className="flex text-[22px]">

            <Link
              href="/about"
              className="text-white/90 transition-colors duration-150 hover:text-[#00ffff]"
            >
              about
            </Link>

            <Link
              href="/work"
              className="ml-8 text-[#ff00ff]"
            >
              work
            </Link>

            <Link
              href="/fragments"
              className="ml-16 text-white/90 transition-colors duration-150 hover:text-[#ffff00]"
            >
              fragments
            </Link>

          </nav>

        </header>

        {/* grid */}
        <section className="mt-20">

          <div className="grid grid-cols-9 gap-[18px]">

            <WorkItem
              title="Self Portrait Series"
              subtitle="Image Series, 2025"
              href="#"
              image="/work/self-portrait-series.jpg"
              span="small"
            />
            
            <WorkItem
              title="AI && U"
              subtitle="Book, 2025"
              href="#"
              image="/work/ai-u.jpg"
              span="large"
            />
            
            <WorkItem
              title="Error Log: SELF"
              subtitle="Book, 2025"
              href="#"
              image="/work/error-log-self.jpg"
              span="medium"
            />

            <WorkItem
              title="Before One Becomes One"
              subtitle="Publication, 2026"
              href="/work/before-one-becomes-one"
              image="/work/before-one-becomes-one.jpg"
              span="medium"
            />

            <WorkItem
              title="The Moment Before"
              subtitle="Installation, 2025"
              href="#"
              image="/work/the-moment-before.jpg"
              span="small"
            />
            
            <WorkItem
              title="Introducing AR to Isabella Stewart Gardener Museum"
              subtitle="UI/UX, 2026"
              href="#"
              image="/work/isabella-museum.jpg"
              span="large"
            />

            <WorkItem
              title="Glossier Brand Refresh"
              subtitle="Branding, 2026"
              href="#"
              image="/work/glossier.jpg"
              span="large"
            />

            {/* 👇 这个现在会显示 video 了 */}
            <WorkItem
              title="Appreciation of Water"
              subtitle="Riso Print, 2025"
              href="/work/water"
              video="/work/water.mp4"
              span="small"
            />
            
            <WorkItem
              title="Almost Scarf"
              subtitle="Textile Publication, 2025"
              href="#"
              image="/work/almost-scarf.jpg"
              span="medium"
            />

          </div>

        </section>

      </div>

    </main>
  );
}