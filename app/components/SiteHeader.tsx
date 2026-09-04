import Link from "next/link";

export type SiteSection = "about" | "work" | "fragments";

type SiteHeaderProps = {
  active?: SiteSection;
  fixed?: boolean;
};

const sectionStyles: Record<SiteSection, { active: string; hover: string }> = {
  about: { active: "text-[#00ffff]", hover: "hover:text-[#00ffff]" },
  work: { active: "text-[#ff00ff]", hover: "hover:text-[#ff00ff]" },
  fragments: { active: "text-[#ffff00]", hover: "hover:text-[#ffff00]" },
};

const navigation: { label: string; href: string; section: SiteSection }[] = [
  { label: "about", href: "/about", section: "about" },
  { label: "work", href: "/work", section: "work" },
  { label: "fragments", href: "/fragments", section: "fragments" },
];

export default function SiteHeader({ active, fixed = false }: SiteHeaderProps) {
  const logoHover = active ? sectionStyles[active].hover : "hover:text-white";

  return (
    <div
      className={
        fixed
          ? "fixed left-0 top-0 z-50 w-full bg-[#0b0b0b] px-[18px] pt-3 pb-4"
          : "mx-auto max-w-[1700px] px-[18px] pt-3"
      }
    >
      <header
        className={`relative flex flex-col items-center sm:flex-row sm:items-start sm:justify-end ${
          fixed ? "mx-auto max-w-[1700px]" : ""
        }`}
      >
        <Link
          href="/"
          className={`text-[22px] tracking-tight text-white/90 transition-colors duration-150 sm:absolute sm:left-1/2 sm:-translate-x-1/2 ${logoHover}`}
        >
          zeyuartchive
        </Link>

        <nav className="mt-5 flex w-full justify-between text-[19px] sm:mt-0 sm:w-auto sm:justify-start sm:text-[22px]" aria-label="Main navigation">
          {navigation.map((item, index) => (
            <Link
              key={item.section}
              href={item.href}
              aria-current={active === item.section ? "page" : undefined}
              className={`py-2 sm:py-0 ${index === 1 ? "sm:ml-8" : index === 2 ? "sm:ml-16" : ""} ${
                active === item.section
                  ? sectionStyles[item.section].active
                  : `text-white/90 transition-colors duration-150 ${sectionStyles[item.section].hover}`
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
