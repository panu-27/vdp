import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const events = [
  {
    cta: "Reserve Your Seat",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  },
  {
    cta: "Reserve Your Seat",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  },
  {
    cta: "Reserve Your Seat",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

function EventHero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const isScrollingManually = useRef(false);
  const AUTO_PLAY_TIME = 6000;

  const handleScroll = () => {
    if (scrollRef.current && !isScrollingManually.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      if (index !== current) setCurrent(index);
    }
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    isScrollingManually.current = true;
    setCurrent(index);
    scrollRef.current.scrollTo({
      left: index * scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
    setTimeout(() => {
      isScrollingManually.current = false;
    }, 600);
  };

  const nextSlide = useCallback(() => {
    scrollToIndex((current + 1) % events.length);
  }, [current]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, AUTO_PLAY_TIME);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* SLIDER TRACK */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex w-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
      >
        {events.map((event, i) => (
          <div key={i} className="w-full shrink-0 snap-start">
            {/* POSTER */}
            <div
              className="
                relative w-full
                aspect-video md:aspect-[16/4]
                bg-slate-950 overflow-hidden
              "
            >
              {/* IMAGE */}
              <img
                src={event.image}
                alt="Event Poster"
                className="
                  object-cover 
                  select-none pointer-events-none
                "
                draggable={false}
              />

              {/* SUBTLE GRADIENT (BOTTOM ONLY) */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-slate-950/70
                  via-slate-950/20
                  to-transparent
                "
              />

              {/* SMALL CTA — LEFT SIDE */}
              <Link
                to="/contact"
                className="
                  absolute
                  bottom-6 sm:bottom-8 md:bottom-10
                  left-4 sm:left-6 md:left-10
                  px-5 py-2.5
                  bg-blue-600 hover:bg-blue-700
                  text-white
                  rounded-full
                  font-bold
                  text-[10px] sm:text-xs
                  uppercase tracking-widest
                  transition-all
                  hover:scale-105
                  shadow-lg shadow-blue-900/40
                "
              >
                {event.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* DOT NAVIGATION */}
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`
              h-1.5 rounded-full transition-all
              ${current === i ? "w-10 bg-blue-500" : "w-4 bg-white/40"}
            `}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* HIDE SCROLLBAR */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
}

export default EventHero;
