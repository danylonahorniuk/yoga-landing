import Image from "next/image";

const trainers = [
  {
    name: "Олена Коваль",
    role: "Хатха-йога, медитація",
    exp: "7 років досвіду",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces&q=80",
  },
  {
    name: "Марія Петренко",
    role: "Флай-йога, розтяжка",
    exp: "5 років досвіду",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=faces&q=80",
  },
  {
    name: "Дмитро Сидоренко",
    role: "Аштанга, силова йога",
    exp: "10 років досвіду",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&q=80",
  },
  {
    name: "Наталія Бойко",
    role: "Інь-йога, дихання",
    exp: "6 років досвіду",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces&q=80",
  },
  {
    name: "Андрій Мельник",
    role: "Зумба, кардіо",
    exp: "4 роки досвіду",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces&q=80",
  },
  {
    name: "Ірина Шевченко",
    role: "Йога для початківців",
    exp: "8 років досвіду",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=faces&q=80",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Наша команда</h2>
          <p className="text-gray-500 text-base">Досвідчені фахівці, що присвятили себе вашому добробуту</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl overflow-hidden bg-[#EEF1F6] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-52 w-full">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="px-4 py-3.5 bg-white">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-[#485C46] mt-0.5">{t.role}</p>
                <p className="text-xs text-gray-400 mt-1">{t.exp}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
