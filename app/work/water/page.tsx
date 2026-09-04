import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import { haasThin } from "../../fonts";

export default function WaterPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      
      <SiteHeader active="work" fixed />

      {/* body */}
      <div className="mx-auto max-w-[1700px] px-[18px] pt-[92px] pb-20">
        <div className="grid grid-cols-12 gap-[18px]">

          {/* left panel */}
          <aside className="col-span-4">
            <div className="sticky top-[92px] pr-6">

              {/* back */}
              <div className="mb-10">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-[22px] text-white/90 transition-colors duration-150 hover:text-[#ff00ff]"
                >
                  <span>←</span>
                  <span>back</span>
                </Link>
              </div>

              {/* title */}
              <p className="text-[22px] text-white/90">
                Appreciation of Water
              </p>

              {/* subtitle */}
              <p
                className={`${haasThin.className} mt-0 text-[14px] leading-none tracking-[0.04em] text-white/60`}
              >
                Riso Print / Poster, 2025
              </p>

              {/* description */}
              <div className="mt-12 space-y-6 text-[22px] leading-[1.05] text-white/90 font-light">

                <p>
                  Appreciation of Water reflects on water as both a material
                  surface and a shifting perceptual state.
                </p>

                <p>
                  Through layered imagery and print-based processes, the work
                  captures distortion, reflection, and instability, allowing
                  forms to dissolve and reappear.
                </p>

                <p>
                  The project suggests a fluid understanding of identity, where
                  nothing is fixed, and meaning emerges through continuous
                  transformation.
                </p>

              </div>

              {/* copyright */}
              <div className="mt-12">
                <p
                  className={`${haasThin.className} text-[14px] tracking-[0.04em] text-white/40`}
                >
                  Copyright © 2025 Zeyu Yin
                </p>
              </div>

            </div>
          </aside>

          {/* right images */}
          <section className="col-span-8 space-y-[18px]">

            {/* video（建议第一张用动图） */}
            <video
              src="/work/water.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full object-cover"
            />

            {/* images */}
            <img src="/work/water-1.jpg" className="w-full object-cover" />
            <img src="/work/water-2.jpg" className="w-full object-cover" />
            <img src="/work/water-3.jpg" className="w-full object-cover" />
            <img src="/work/water-4.jpg" className="w-full object-cover" />

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
