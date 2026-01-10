import { useEffect, useState } from "react";

import participants from "../assets/stats/participants.png";
import experience from "../assets/stats/experience.png";
import events from "../assets/stats/events.png";
import liveEvents from "../assets/stats/live-events.png";
import ldp from "../assets/stats/ldp.png";

function StatsBar() {
  const stats = [
    { img: participants, value: "100000+", label: "Participants" },
    { img: experience, value: "14+", label: "Years Experience" },
    { img: events, value: "550+", label: "Events" },
    { img: liveEvents, value: "350+", label: "Live Events" },
    { img: ldp, value: "150+", label: "LDP" },
  ];

  const targets = stats.map((s) =>
    parseInt(s.value.replace(/\D/g, ""))
  );

  const [counts, setCounts] = useState(targets.map(() => 0));

  useEffect(() => {
    const duration = 3500;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCounts(targets.map((t) => Math.floor(t * progress)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  // Mobile-only manual placement
  const mobileGridConfig = [
    "col-start-1 row-start-1",
    "col-start-2 row-start-2",
    "col-start-3 row-start-1",
    "col-start-4 row-start-2",
    "col-start-5 row-start-1",
  ];

  return (
    <section className="w-full bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-5 md:grid-cols-5 gap-y-12 gap-x-2 text-center">
          {stats.map((item, index) => (
            <div
  key={index}
  className={`
    flex flex-col items-center
    gap-2 sm:gap-3 md:gap-4
    ${mobileGridConfig[index]}
    md:col-auto md:row-auto
  `}
>
  {/* Icon */}
  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14">
    <img
      src={item.img}
      alt={item.label}
      className="w-full h-full object-contain"
    />
  </div>

  {/* Text */}
  <div className="flex flex-col items-center">
    <span
      className="
        text-base sm:text-lg md:text-2xl
        font-bold text-gray-900
        leading-none
      "
    >
      {counts[index].toLocaleString()}+
    </span>

    <span
      className="
        text-[9px] sm:text-[10px] md:text-xs
        font-medium text-gray-400
        uppercase tracking-wide
        mt-1
        text-center
      "
    >
      {item.label}
    </span>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
