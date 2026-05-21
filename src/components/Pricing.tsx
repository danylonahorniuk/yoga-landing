"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "./modals/ModalContext";
import { FadeIn } from "./ui/FadeIn";

const plans = [
  {
    name: "Стартер",
    price: "800",
    desc: "Ідеально для початку",
    features: [
      "4 заняття на місяць",
      "Доступ до всіх класів",
      "Консультація тренера",
      "Йога-килимок включено",
    ],
    cta: "Почати",
    highlight: false,
  },
  {
    name: "Популярний",
    price: "1 600",
    desc: "Найкращий вибір",
    features: [
      "12 занять на місяць",
      "Доступ до всіх класів",
      "Пріоритетний запис",
      "Персональна консультація",
      "Доступ до медитацій",
      "Йога-килимок включено",
    ],
    cta: "Обрати план",
    highlight: true,
  },
  {
    name: "Безліміт",
    price: "2 400",
    desc: "Для справжніх практиків",
    features: [
      "Необмежена кількість занять",
      "Доступ до всіх класів",
      "Пріоритетний запис",
      "Персональний тренер (2×/міс)",
      "Доступ до медитацій",
      "Знижка 10% на товари",
    ],
    cta: "Почати",
    highlight: false,
  },
];

function PlanCard({ plan, openBooking }: { plan: typeof plans[0]; openBooking: () => void }) {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col h-full ${
        plan.highlight
          ? "bg-[#485C46] text-white shadow-2xl"
          : "bg-[#E8E2D6] text-gray-900 shadow-md"
      }`}
    >
      {plan.highlight && (
        <span className="self-start mb-4 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
          ✦ Найпопулярніший
        </span>
      )}
      <p className={`text-sm font-medium mb-1 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>
        {plan.name}
      </p>
      <div className="flex items-end gap-1 mb-1">
        <span className="text-4xl font-bold">₴{plan.price}</span>
        <span className={`text-sm mb-1.5 ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>/міс</span>
      </div>
      <p className={`text-sm mb-6 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>{plan.desc}</p>
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm">
            <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
              plan.highlight ? "bg-white/20" : "bg-[#485C46]/10"
            }`}>
              <Check size={10} className={plan.highlight ? "text-white" : "text-[#485C46]"} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={openBooking}
        className={`cursor-pointer mt-auto w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
          plan.highlight
            ? "bg-[#E8E2D6] text-[#485C46] hover:bg-[#ddd8cc]"
            : "bg-[#485C46] text-white hover:bg-[#3a4a38]"
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );
}

export default function Pricing() {
  const { openBooking } = useModal();
  const [activePlan, setActivePlan] = useState(1); // Popular by default
  const plan = plans[activePlan];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Тарифи та ціни</h2>
            <p className="text-gray-500 text-base">Оберіть план, що підходить саме вам</p>
          </div>
        </FadeIn>

        {/* Mobile: tabs + full card */}
        <div className="md:hidden">
          {/* Tab row */}
          <div className="flex rounded-xl bg-[#E8E2D6] p-1 mb-5 gap-1">
            {plans.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActivePlan(i)}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activePlan === i
                    ? p.highlight
                      ? "bg-[#485C46] text-white shadow-sm"
                      : "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                {p.highlight ? "✦ " : ""}{p.name}
              </button>
            ))}
          </div>

          {/* Full card with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlan}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <PlanCard plan={plan} openBooking={openBooking} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => (
            <FadeIn key={plan.name} delay={plan.highlight ? 0.1 : 0.3}>
              <div className={plan.highlight ? "md:scale-105" : ""}>
                <PlanCard plan={plan} openBooking={openBooking} />
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Перший місяць — безкоштовно. Скасування в будь-який час.
        </p>
      </div>
    </section>
  );
}
