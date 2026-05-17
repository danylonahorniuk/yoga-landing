import Image from "next/image";
import { Info } from "lucide-react";

export default function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden" style={{ minHeight: "340px" }}>
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1920&q=85"
        alt="Йога клас"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 flex justify-end items-center min-h-[340px]">
        <div className="bg-white rounded-2xl p-8 md:p-10 max-w-xl w-full shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Безкоштовне 30-денне членство
          </h2>
          <p className="text-gray-500 text-sm mb-7">
            Насолоджуйтесь безкоштовним 30-денним пробним членством. Отримайте доступ до нашої студії, досвідчених тренерів та різноманітних класів без будь-яких зобов'язань. Відчуйте переваги йоги та трансформуйте своє самопочуття.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-[#2D5A27] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#1e3f1b] transition-colors"
            >
              Записатись на сесію
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 text-gray-700 text-sm hover:text-[#2D5A27] transition-colors"
            >
              Зв'язатись з нами
              <Info size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
