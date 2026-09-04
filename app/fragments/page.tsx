"use client";

import { useEffect, useRef, useState } from "react";
import SiteHeader from "../components/SiteHeader";

type ItemSize = "sm" | "md" | "lg" | "xl";
type ItemRatio = "square" | "landscape" | "portrait";
type MediaType = "image" | "video";

type FragmentItem = {
  id: string;
  src: string;
  type: MediaType;
  caption: string;
  size: ItemSize;
  ratio: ItemRatio;
  y: number;
  overlap?: boolean;
};

/* ===== SIZE ===== */
const sizeMap: Record<ItemSize, string> = {
  sm: "w-[220px]",
  md: "w-[280px]",
  lg: "w-[360px]",
  xl: "w-[460px]",
};

const ratioMap: Record<ItemRatio, string> = {
  square: "aspect-square",
  landscape: "aspect-[3/2]",
  portrait: "aspect-[2/3]",
};

/* ===== DATA（已替换成你的文件） ===== */
const topItems: FragmentItem[] = [
  {
    id: "1",
    src: "/fragments/carving.jpg",
    type: "image",
    caption: "Poster For Multiple Formats Book Fair Workshop, 2025",
    size: "sm",
    ratio: "portrait",
    y: 0,
  },
  {
    id: "5",
    src: "/fragments/dp.jpg",
    type: "image",
    caption: "The Doppelganger Logo Photography Campaign, 2025",
    size: "xl",
    ratio: "landscape",
    y: 0,
    overlap: true,
  },
  {
    id: "2",
    src: "/fragments/halim-poster.jpg",
    type: "image",
    caption: "Poster For Multiple Formats Book Fair Workshop, 2025",
    size: "md",
    ratio: "portrait",
    y: 40,
  },
  {
    id: "3",
    src: "/fragments/hyper.mp4",
    type: "video",
    caption: "Hyper.txt Exhibition Teaser Motion, 2026",
    size: "xl",
    ratio: "square",
    y: -20,
  },
  {
    id: "32",
    src: "/fragments/docking.jpg",
    type: "image",
    caption: "Docking Point Poster Design, 2025",
    size: "md",
    ratio: "square",
    y: -20,
  },
    {
    id: "4",
    src: "/fragments/calendar.jpg",
    type: "image",
    caption: "Calendar-January, 2025",
    size: "md",
    ratio: "landscape",
    y: -20,
    overlap: true,
  },
  {
    id: "9",
    src: "/fragments/identified.jpg",
    type: "image",
    caption: "Identified Exhibition Tote Bag, 2025",
    size: "md",
    ratio: "landscape",
    y: 30,
  },
  
];

const bottomItems: FragmentItem[] = [
  {
    id: "52",
    src: "/fragments/sell.jpg",
    type: "image",
    caption: "Resistance Poster Set, 2026",
    size: "xl",
    ratio: "square",
    y: 0,
    overlap: true
  },
  {
    id: "47",
    src: "/fragments/kelli.jpg",
    type: "image",
    caption: "Poster For Multiple Formats Book Fair Workshop, 2025",
    size: "sm",
    ratio: "portrait",
    y: 0,
  },
  {
    id: "81",
    src: "/fragments/cap.jpg",
    type: "image",
    caption: "Donkey Donors Charity Truck Hats, 2026",
    size: "lg",
    ratio: "square",
    y: -30,
    overlap: true,
  },
  {
    id: "8",
    src: "/fragments/ruby.jpg",
    type: "image",
    caption: "Poster For Multiple Formats Book Fair Workshop, 2025",
    size: "lg",
    ratio: "square",
    y: 30,
  },
  {
    id: "17",
    src: "/fragments/askance.jpg",
    type: "image",
    caption: "Askance, 2025",
    size: "md",
    ratio: "square",
    y: 0,
  },
  {
    id: "89",
    src: "/fragments/pictograms.jpg",
    type: "image",
    caption: "Pictogram System for Museum of Contemporary Art, 2024",
    size: "md",
    ratio: "landscape",
    y: 30,
  },
];

/* ===== ITEM ===== */
type MediaItemProps = {
  item: FragmentItem;
  preview: FragmentItem | null;
  setPreview: (item: FragmentItem | null) => void;
};

function MediaItem({ item, preview, setPreview }: MediaItemProps) {
  const isDimmed = preview && preview.id !== item.id;

  return (
    <div
      className={`relative shrink-0 transition-all duration-300 ${
        isDimmed ? "blur-[1px] opacity-60" : "opacity-100"
      }`}
      style={{
        transform: `translateY(${item.y}px)`,
        marginLeft: item.overlap ? "-120px" : "0px",
        zIndex: item.overlap ? 10 : 1,
      }}
    >
      <div
        className={`${sizeMap[item.size]} ${ratioMap[item.ratio]} flex items-center justify-center`}
        onMouseEnter={() => setPreview(item)}
        onMouseLeave={() => setPreview(null)}
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="max-w-full max-h-full object-contain cursor-pointer"
          />
        ) : (
          <img
            src={item.src}
            alt={item.caption}
            className="max-w-full max-h-full object-contain cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

/* ===== ROW ===== */
type RowProps = {
  items: FragmentItem[];
  direction: "left" | "right";
  preview: FragmentItem | null;
  setPreview: (item: FragmentItem | null) => void;
};

function Row({ items, direction, preview, setPreview }: RowProps) {
  return (
    <div className="marquee-row overflow-hidden">
      <div
        className={`marquee-content flex w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        <div className="flex shrink-0 gap-[100px] pr-[100px]">
          {items.map((item) => (
            <MediaItem
              key={`a-${item.id}`}
              item={item}
              preview={preview}
              setPreview={setPreview}
            />
          ))}
        </div>

        <div className="flex shrink-0 gap-[100px] pr-[100px]">
          {items.map((item) => (
            <MediaItem
              key={`b-${item.id}`}
              item={item}
              preview={preview}
              setPreview={setPreview}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===== PAGE ===== */
export default function FragmentsPage() {
  const [preview, setPreview] = useState<FragmentItem | null>(null);

  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let frame: number;

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;

      if (previewRef.current) {
        previewRef.current.style.transform =
          `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden overflow-y-auto">
      <SiteHeader active="fragments" />

      {/* CONTENT */}
      <div className="mt-36 space-y-[160px] pb-[200px]">
        <Row
          items={topItems}
          direction="right"
          preview={preview}
          setPreview={setPreview}
        />

        <Row
          items={bottomItems}
          direction="left"
          preview={preview}
          setPreview={setPreview}
        />
      </div>

      {/* PREVIEW */}
      {preview && (
        <div
          ref={previewRef}
          className="fixed z-[999] pointer-events-none"
          style={{ top: 0, left: 0 }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-8 bg-[#ffff00]/20 blur-3xl" />

              {preview.type === "video" ? (
                <video
                  src={preview.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="relative max-w-[620px] max-h-[65vh] object-contain"
                />
              ) : (
                <img
                  src={preview.src}
                  alt={preview.caption}
                  className="relative max-w-[620px] max-h-[65vh] object-contain"
                />
              )}
            </div>

            <p className="text-[13px] text-white/70">
              {preview.caption}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
