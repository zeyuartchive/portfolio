import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-between px-6 pt-3 pb-6">

        <header>
          <h1 className="text-[22px] tracking-tight text-white/90">
            zeyuartchive
          </h1>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center">

          <div className="flex h-[220px] w-[220px] items-center justify-center overflow-hidden bg-black md:h-[380px] md:w-[380px]">

            <video
              src="/home-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />

          </div>

          <nav className="mt-4 flex flex-col items-center gap-[2px] text-[22px]">

  <Link
    href="/about"
    className="py-1 text-white/90 transition-colors duration-150 hover:text-[#00ffff]"
  >
    about
  </Link>

  <Link
    href="/work"
    className="py-1 text-white/90 transition-colors duration-150 hover:text-[#ff00ff]"
  >
    work
  </Link>

  <Link
    href="/fragments"
    className="py-1 text-white/90 transition-colors duration-150 hover:text-[#ffff00]"
  >
    fragments
  </Link>

</nav>

        </section>

        <footer className="text-[9px] tracking-wide text-white/20">
          archive in progress
        </footer>

      </div>
    </main>
  );
}
