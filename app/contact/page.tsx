import SiteHeader from "../components/SiteHeader";
import { haasThin } from "../fonts";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <SiteHeader />

      <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-[1700px] flex-col px-[18px] pb-8 sm:min-h-[calc(100vh-38px)]">



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
