import Link from "next/link";
import localFont from "next/font/local";

const haasThin = localFont({
  src: "../fonts/NeueHaasUnicaPro-Thin.otf",
});
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">

      <div className="mx-auto flex min-h-screen max-w-[1700px] flex-col px-[18px] pt-3 pb-8">


        {/* header */}
        <header className="relative flex items-start justify-end">

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-[22px] tracking-tight text-white/90 transition-colors duration-150 hover:text-[#ffff00]"
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
              className="ml-8 text-white/90 transition-colors duration-150 hover:text-[#ff00ff]"
            >
              work
            </Link>


            <Link
              href="/contact"
              className="ml-16 text-[#ffff00]"
            >
              contact
            </Link>

          </nav>

        </header>



        {/* content */}
        <section className="flex flex-1 flex-col items-center justify-center text-center">


          <p className="text-[22px] leading-[0.95] text-white/90">
            contact
          </p>



          <div className="mt-6 flex flex-col items-center gap-[2px] text-[22px] leading-[1.05]">

            <a
              href="mailto:yinzeyu@bu.edu"
              className="text-white/90 transition-colors duration-150 hover:text-[#ffff00]"
            >
              email
            </a>


            <a
              href="https://www.instagram.com/ialmostlived_archive/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 transition-colors duration-150 hover:text-[#ffff00]"
            >
              instagram
            </a>


            <a
              href="https://www.linkedin.com/in/zeyu-yin-9b8b73178/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 transition-colors duration-150 hover:text-[#ffff00]"
            >
              linkedin
            </a>


            <a
              href="#"
              className="text-white/90 transition-colors duration-150 hover:text-[#ffff00]"
            >
              resume
            </a>

          </div>



          <p
  className={`${haasThin.className} mt-10 text-[14px] tracking-[0.04em] text-white/40`}
>
  Based in Boston | Open to Relocate | Available for Opportunities
</p>


        </section>



      </div>

    </main>
  );
}