import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "COACHING PROGRAM",
    subtitle:
      "Business Coaching Program is the Universal Language of Change and Learning",
    button: "KNOW MORE",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    title: "LEADERSHIP MINDSET",
    subtitle: "Develop structured thinking and leadership clarity",
    button: "EXPLORE",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "BUSINESS GROWTH",
    subtitle: "Build scalable systems for sustainable success",
    button: "START NOW",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const dragging = useRef(false);

  /* Auto slide */
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  /* Swipe handlers */
  const onStart = (x) => {
    startX.current = x;
    dragging.current = true;
  };

  const onEnd = (x) => {
    if (!dragging.current) return;
    const delta = startX.current - x;

    if (delta > 50) setCurrent((c) => (c + 1) % slides.length);
    if (delta < -50)
      setCurrent((c) => (c - 1 + slides.length) % slides.length);

    dragging.current = false;
  };

  return (
    <section className="relative w-full h-[60vh] overflow-hidden bg-black">
      {/* TRACK */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out touch-pan-y"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseUp={(e) => onEnd(e.clientX)}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full shrink-0 h-full relative box-border"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* CONTENT (padding INSIDE, not on slide) */}
            <div className="relative z-10 h-full flex items-center">
              <div className="px-4 sm:px-8 md:px-16 w-full max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
                <h1 className="text-white font-bold mb-3 text-xl sm:text-2xl md:text-4xl">
                  {slide.title}
                </h1>

                <p className="text-yellow-400 mb-5 text-sm sm:text-base">
                  {slide.subtitle}
                </p>

                <button className="border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full ${
              current === i ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
