"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const photos = [
  { src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=85", alt: "Зал для йоги" },
  { src: "https://images.unsplash.com/photo-1601925228869-9571d9fab3cb?w=1200&q=85", alt: "Студія" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=85", alt: "Заняття з йоги" },
  { src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&q=85", alt: "Групове тренування" },
  { src: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=1200&q=85", alt: "Розтяжка" },
  { src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1200&q=85", alt: "Практика йоги" },
];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  const prev = () => go((active - 1 + photos.length) % photos.length);
  const next = () => go((active + 1) % photos.length);

  return (
    <section id="gallery" className="py-20 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Наша студія</h2>
            <p className="text-gray-500 text-base">Простір, створений для вашої практики</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          {/* Main photo */}
          <div className="relative rounded-2xl overflow-hidden h-[280px] md:h-[500px] bg-gray-100">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <Image
                  src={photos[active].src}
                  alt={photos[active].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1280px"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
              aria-label="Попереднє фото"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
              aria-label="Наступне фото"
            >
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-4 z-10 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
              {active + 1} / {photos.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 md:gap-3 mt-3">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`relative flex-1 rounded-xl overflow-hidden transition-all duration-200 ${
                  i === active
                    ? "ring-2 ring-[#485C46] ring-offset-2 opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
                style={{ height: 64 }}
                aria-label={p.alt}
              >
                <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="15vw" />
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
