"use client";
import Image from "next/image";
import { Info } from "lucide-react";
import { useModal } from "./modals/ModalContext";
import { FadeIn } from "./ui/FadeIn";

export default function Hero() {
  const { openBooking, openContact } = useModal();
  return (
    <section id="home" className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#F0EDE6" }}>

      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1920&q=85"
          alt="Йога"
          fill
          priority
          className="object-cover object-center md:object-right"
          sizes="100vw"
        />
      </div>

      {/* Mobile: dark overlay for readability */}
      <div className="absolute inset-0 pointer-events-none md:hidden" style={{ background: "rgba(0,0,0,0.45)" }} />

      {/* Desktop: beige gradient */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{ background: "linear-gradient(to right, #F0EDE6 30%, #F0EDE655 48%, transparent 62%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-lg pt-16">
          <FadeIn delay={0.1}>
            <h1
              className="uppercase mb-6 leading-none tracking-wide"
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 700,
              }}
            >
              <span className="md:hidden text-white">Йога перш<br />за все</span>
              <span className="hidden md:block" style={{ color: "#2D3A1E" }}>Йога перш<br />за все</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-sm md:text-lg mb-8 max-w-sm leading-relaxed md:text-gray-700 text-white/90">
              Ласкаво просимо до Great Fit — місця, де традиції зустрічаються з інноваціями. Наші тренери проведуть вас через трансформаційні програми, що зміцнять тіло та заспокоять розум.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
              <button
                onClick={openBooking}
                className="cursor-pointer bg-[#485C46] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#3a4a38] transition-colors w-full sm:w-auto text-center"
              >
                Записатись на сесію
              </button>
              <button
                onClick={openContact}
                className="cursor-pointer flex items-center gap-2 text-sm font-medium transition-colors text-white/90 hover:text-white md:text-gray-700 md:hover:text-[#485C46]"
              >
                Зв'язатись з нами
                <Info size={16} />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

    </section>
  );
}
