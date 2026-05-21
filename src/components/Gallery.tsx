import Image from "next/image";
import { FadeIn } from "./ui/FadeIn";

const photos = [
  { src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=900&q=80", alt: "Зал для йоги" },
  { src: "https://images.unsplash.com/photo-1601925228869-9571d9fab3cb?w=600&q=80", alt: "Студія" },
  { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", alt: "Заняття з йоги" },
  { src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80", alt: "Групове тренування" },
  { src: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=600&q=80", alt: "Розтяжка" },
  { src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80", alt: "Практика йоги" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Наша студія</h2>
            <p className="text-gray-500 text-base">Простір, створений для вашої практики</p>
          </div>
        </FadeIn>

        {/* Mobile: 2-col grid */}
        <div className="md:hidden grid grid-cols-2 gap-2">
          {photos.map((p, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className={`relative rounded-xl overflow-hidden ${i === 0 ? "col-span-2 h-52" : "h-36"}`}>
                <Image src={p.src} alt={p.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="50vw" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desktop: masonry-style grid */}
        <FadeIn delay={0.1}>
          <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-3 h-[520px]">
            {/* Big photo - spans 2 cols and 2 rows */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden">
              <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="66vw" />
            </div>
            {/* Top right */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image src={photos[1].src} alt={photos[1].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
            </div>
            {/* Bottom right */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image src={photos[2].src} alt={photos[2].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
            </div>
          </div>

          {/* Desktop: bottom row of 3 */}
          <div className="hidden md:grid grid-cols-3 gap-3 mt-3 h-[220px]">
            {photos.slice(3).map((p, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden">
                <Image src={p.src} alt={p.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
