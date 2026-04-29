import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* header */}
      <div className="mx-auto max-w-[1700px] px-[18px] pt-3">
        <header className="relative flex items-start justify-end">
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-[22px] tracking-tight text-white/90 transition-colors duration-150 hover:text-[#00ffff]"
          >
            zeyuartchive
          </Link>

          <nav className="flex text-[22px]">
            <Link href="/about" className="text-[#00ffff]">
              about
            </Link>

            <Link
              href="/work"
              className="ml-8 text-white/90 transition-colors duration-150 hover:text-[#ff00ff]"
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
      </div>

      {/* content */}
      <div className="mx-auto max-w-[1700px] px-[18px] pb-20">
        <section className="mt-28 grid grid-cols-12 gap-[36px]">
          {/* left image */}
          <div className="col-span-3">
            <img
              src="/profile.jpg"
              alt="Zeyu Yin"
              className="w-full object-cover"
            />
          </div>

          {/* middle text */}
          <div className="col-span-5">
            <div className="max-w-[520px] space-y-6 text-[22px] leading-[1.1] text-white/90 font-light">
  <p>
    Zeyu Yin is a graphic designer based in Boston. He received his BFA in Graphic Design from Northeastern University and is currently completing his MFA at Boston University.
  </p>

  <p>
    He works across identity, publication, and digital interfaces, often exploring how visual structures influence the way information is read and understood.
  </p>
</div>
          </div>

          {/* right contact */}
          <div className="col-span-4 flex justify-end">
            <div className="flex h-full w-[306px] flex-col justify-between">
              <div className="space-y-3 text-[22px] text-white/90">
                <a
                  href="mailto:zeyuartchive@gmail.com"
                  className="block transition-colors duration-150 hover:text-[#00ffff]"
                >
                  zeyuartchive@gmail.com
                </a>

                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors duration-150 hover:text-[#00ffff]"
                >
                  instagram
                </a>

                <a
                  href="#"
                  className="block transition-colors duration-150 hover:text-[#00ffff]"
                >
                  resume
                </a>
              </div>

              <p className="text-[14px] text-white/40">
               Based in Boston | Open to Relocate | Available for Opportunities
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}