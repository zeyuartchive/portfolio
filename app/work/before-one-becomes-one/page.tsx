import Link from "next/link";
import localFont from "next/font/local";

const haasThin = localFont({
  src: "../../fonts/NeueHaasUnicaPro-Thin.otf",
});

export default function ThesisPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* fixed header */}
      <header className="fixed left-0 top-0 z-50 w-full bg-[#0b0b0b] pt-3 pb-4">
  <div className="relative mx-auto max-w-[1700px] px-[18px] flex items-start justify-end">
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
              href="/contact"
              className="ml-16 text-white/90 transition-colors duration-150 hover:text-[#ffff00]"
            >
              fragments
            </Link>
          </nav>
        </div>
      </header>

      {/* body */}
      <div className="mx-auto max-w-[1700px] px-[18px] pt-[92px] pb-20">
        <div className="grid grid-cols-12 gap-[18px]">
          {/* left fixed text panel */}
          <aside className="col-span-4">
            <div className="sticky top-[92px] pr-6">
              {/* back button */}
              <div className="mb-10">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-[22px] text-white/90 transition-colors duration-150 hover:text-[#ff00ff]"
                >
                  <span>←</span>
                  <span>back</span>
                </Link>
              </div>

              <p className="text-[22px] text-white/90 " >
                Before One Becomes One
              </p>

              <p
                className={`${haasThin.className} mt-0 text-[14px] leading-none tracking-[0.04em] text-white/60`}
              >
                Publication, 2026
              </p>

              <div className="mt-12 space-y-6 text-[22px] leading-[1.05] text-white/90 font-light">
                <p>
                  Before One Becomes One explores identity as an unstable and
                  continuously shifting structure.
                </p>

                <p>
                  The project considers alternate versions of the self as design
                  collaborators, allowing multiple voices to shape narrative,
                  typography, and form.
                </p>

                <p>
                  Rather than presenting a fixed identity, the work functions as an
                  evolving archive of fragments, parallel paths, and speculative
                  autobiographical forms.
                </p>
              </div>

              <div className="mt-12">
                <p
                  className={`${haasThin.className} text-[14px] tracking-[0.04em] text-white/40`}
                >
                  Copyright © 2026  Zeyu Yin
                </p>
              </div>
            </div>
          </aside>

          {/* right scrolling image column */}
          <section className="col-span-8 space-y-[18px]">
            <div className="h-[620px] w-full bg-[#2a2a2a]" />
            <div className="h-[420px] w-full bg-[#2a2a2a]" />
            <div className="h-[620px] w-full bg-[#2a2a2a]" />
            <div className="h-[520px] w-full bg-[#2a2a2a]" />
            <div className="h-[680px] w-full bg-[#2a2a2a]" />

            {/* prev / next */}
            <div className="flex items-center justify-between pt-10">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[22px] text-white/90 transition-colors duration-150 hover:text-[#ff00ff]"
              >
                <span>←</span>
                <span>previous</span>
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[22px] text-white/90 transition-colors duration-150 hover:text-[#ff00ff]"
              >
                <span>next</span>
                <span>→</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}