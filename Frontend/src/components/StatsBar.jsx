import participants from "../assets/stats/participants.png";
import experience from "../assets/stats/experience.png";
import events from "../assets/stats/events.png";
import liveEvents from "../assets/stats/live-events.png";
import ldp from "../assets/stats/ldp.png";

function StatsBar() {
  const stats = [
    {
      img: participants,
      value: "100000+",
      label: "Participants",
    },
    {
      img: experience,
      value: "14+",
      label: "Years Experience",
    },
    {
      img: events,
      value: "550+",
      label: "Events",
    },
    {
      img: liveEvents,
      value: "350+",
      label: "Live Events",
    },
    {
      img: ldp,
      value: "150+",
      label: "LDP",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              {/* Icon Image */}
              <img
                src={item.img}
                alt={item.label}
                className="h-12 w-12 object-contain"
              />

              {/* Number */}
              <div className="text-xl font-semibold text-gray-800">
                {item.value}
              </div>

              {/* Label */}
              <div className="text-sm text-gray-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
