"use client";
import { useModal } from "./modals/ModalContext";

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
const TIMES = ["08:00", "10:00", "12:00", "17:00", "18:30", "20:00"];

const CLASS_COLORS: Record<string, string> = {
  "Хатха-йога":  "#485C46",
  "Аштанга":     "#2D3A1E",
  "Розтяжка":    "#6B9B7A",
  "Інь-йога":    "#8B6BAE",
  "Флай-йога":   "#5B8BC9",
  "Зумба":       "#D4875A",
  "Дитяча йога": "#C96B6B",
  "Медитація":   "#5B9E9B",
};

type ClassEntry = {
  day: number;
  time: string;
  title: string;
  trainer: string;
  duration: string;
};

const schedule: ClassEntry[] = [
  // 08:00
  { day: 0, time: "08:00", title: "Хатха-йога",  trainer: "Олена К.",   duration: "60 хв" },
  { day: 2, time: "08:00", title: "Хатха-йога",  trainer: "Олена К.",   duration: "60 хв" },
  { day: 4, time: "08:00", title: "Хатха-йога",  trainer: "Олена К.",   duration: "60 хв" },
  // 10:00
  { day: 1, time: "10:00", title: "Флай-йога",   trainer: "Марія П.",   duration: "75 хв" },
  { day: 3, time: "10:00", title: "Флай-йога",   trainer: "Марія П.",   duration: "75 хв" },
  { day: 5, time: "10:00", title: "Розтяжка",    trainer: "Марія П.",   duration: "60 хв" },
  { day: 6, time: "10:00", title: "Інь-йога",    trainer: "Наталія Б.", duration: "90 хв" },
  // 12:00
  { day: 5, time: "12:00", title: "Дитяча йога", trainer: "Ірина Ш.",   duration: "45 хв" },
  { day: 6, time: "12:00", title: "Медитація",   trainer: "Олена К.",   duration: "60 хв" },
  // 17:00
  { day: 0, time: "17:00", title: "Розтяжка",    trainer: "Марія П.",   duration: "60 хв" },
  { day: 1, time: "17:00", title: "Хатха-йога",  trainer: "Ірина Ш.",   duration: "60 хв" },
  { day: 2, time: "17:00", title: "Інь-йога",    trainer: "Наталія Б.", duration: "90 хв" },
  { day: 3, time: "17:00", title: "Хатха-йога",  trainer: "Ірина Ш.",   duration: "60 хв" },
  { day: 4, time: "17:00", title: "Розтяжка",    trainer: "Марія П.",   duration: "60 хв" },
  // 18:30
  { day: 0, time: "18:30", title: "Аштанга",     trainer: "Дмитро С.",  duration: "90 хв" },
  { day: 1, time: "18:30", title: "Зумба",       trainer: "Андрій М.",  duration: "60 хв" },
  { day: 2, time: "18:30", title: "Зумба",       trainer: "Андрій М.",  duration: "60 хв" },
  { day: 3, time: "18:30", title: "Аштанга",     trainer: "Дмитро С.",  duration: "90 хв" },
  { day: 4, time: "18:30", title: "Аштанга",     trainer: "Дмитро С.",  duration: "90 хв" },
  { day: 5, time: "18:30", title: "Зумба",       trainer: "Андрій М.",  duration: "60 хв" },
  // 20:00
  { day: 0, time: "20:00", title: "Інь-йога",    trainer: "Наталія Б.", duration: "60 хв" },
  { day: 2, time: "20:00", title: "Флай-йога",   trainer: "Марія П.",   duration: "75 хв" },
  { day: 4, time: "20:00", title: "Флай-йога",   trainer: "Марія П.",   duration: "75 хв" },
];

const todayIndex = (() => {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1; // JS: 0=Sun → convert to 0=Mon
})();

export default function Schedule() {
  const { openBooking } = useModal();

  return (
    <section id="schedule" className="py-20 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Розклад занять</h2>
          <p className="text-gray-500 text-base">Оберіть зручний час та тренера</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-sm" style={{ scrollbarWidth: "none" }}>
          <table className="w-full min-w-[720px] border-collapse bg-white">
            <thead>
              <tr>
                {/* Time header */}
                <th className="bg-[#485C46] w-20" />
                {DAYS.map((day, i) => (
                  <th
                    key={day}
                    className="py-4 px-3 text-sm font-semibold text-center"
                    style={{
                      backgroundColor: i === todayIndex ? "#3a4a38" : "#485C46",
                      color: i === todayIndex ? "#fff" : "rgba(255,255,255,0.75)",
                    }}
                  >
                    {day}
                    {i === todayIndex && (
                      <span className="block text-[10px] font-normal opacity-80 mt-0.5">сьогодні</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {TIMES.map((time, timeIdx) => (
                <tr key={time} className={timeIdx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                  {/* Time column */}
                  <td className="py-3 px-4 text-xs font-medium text-gray-400 border-r border-gray-100 text-right whitespace-nowrap align-top pt-4">
                    {time}
                  </td>

                  {/* Day columns */}
                  {DAYS.map((_, dayIdx) => {
                    const cls = schedule.find(
                      (c) => c.day === dayIdx && c.time === time
                    );
                    const color = cls ? CLASS_COLORS[cls.title] : null;
                    return (
                      <td
                        key={dayIdx}
                        className="py-2 px-1.5 border-b border-gray-50 align-top"
                        style={{
                          minWidth: "110px",
                          backgroundColor: dayIdx === todayIndex ? "rgba(72,92,70,0.03)" : undefined,
                        }}
                      >
                        {cls && color && (
                          <div
                            className="rounded-lg px-2.5 py-2 border-l-[3px] cursor-pointer hover:brightness-95 transition-all"
                            style={{
                              borderLeftColor: color,
                              backgroundColor: color + "15",
                            }}
                            onClick={openBooking}
                            title="Записатись"
                          >
                            <p className="text-xs font-semibold leading-tight" style={{ color }}>
                              {cls.title}
                            </p>
                            <p className="text-[11px] text-gray-500 mt-0.5">{cls.trainer}</p>
                            <p className="text-[10px] text-gray-400 mt-0.5">{cls.duration}</p>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 px-1">
          {Object.entries(CLASS_COLORS).map(([name, color]) => (
            <div key={name} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: color }} />
              <span className="text-xs text-gray-500">{name}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">Натисніть на будь-яке заняття щоб записатись</p>
          <button
            onClick={openBooking}
            className="cursor-pointer bg-[#485C46] text-white px-7 py-3 rounded-md text-sm font-semibold hover:bg-[#3a4a38] transition-colors"
          >
            Записатись на заняття
          </button>
        </div>

      </div>
    </section>
  );
}
