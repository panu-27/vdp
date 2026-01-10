import { useEffect, useRef, useState } from "react";
import hero1 from "../assets/HeroSlider/hero1.png";
import hero2 from "../assets/HeroSlider/hero2.png";
import hero3 from "../assets/HeroSlider/hero3.png";
import hero4 from "../assets/HeroSlider/hero4.png";

const slides = [
  {
    title: "COACHING PROGRAM",
    subtitle: "Business Coaching Program is the Universal Language of Change and Learning",
    button: "KNOW MORE",
    image: hero1,
  },
  {
    title: "LEADERSHIP MINDSET",
    subtitle: "Develop structured thinking and leadership clarity",
    button: "EXPLORE",
    image: hero2,
  },
  {
    title: "BUSINESS GROWTH",
    subtitle: "Build scalable systems for sustainable success",
    button: "START NOW",
    image: hero3,
  },
  {
    title: "PERSONAL DEVELOPMENT",
    subtitle: "Unlock your potential with personalized coaching",
    button: "JOIN US",
    image: hero4,
  },
];

// We add the first and last slides to the ends to create the infinite illusion
const extendedSlides = [
  slides[slides.length - 1], 
  ...slides, 
  slides[0]
];

function HeroSlider() {
  // Start at index 1 because index 0 is the "cloned" last slide
  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const startX = useRef(0);
  const dragging = useRef(false);

  /* Circular Logic: Teleport when reaching clones */
  const handleTransitionEnd = () => {
    if (current === 0) {
      setIsTransitioning(false);
      setCurrent(slides.length);
    } else if (current === slides.length + 1) {
      setIsTransitioning(false);
      setCurrent(1);
    }
  };

  /* Reset transition after teleportation */
  useEffect(() => {
    if (!isTransitioning) {
      // Small delay to allow the state to update without animation
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  /* Auto slide */
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const onStart = (x) => {
    startX.current = x;
    dragging.current = true;
  };

  const onEnd = (x) => {
    if (!dragging.current) return;
    const delta = startX.current - x;
    if (delta > 50) setCurrent((prev) => prev + 1);
    if (delta < -50) setCurrent((prev) => prev - 1);
    dragging.current = false;
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-black 
                 h-auto aspect-video md:aspect-[16/4]"
    >
      {/* TRACK */}
      <div
        className={`flex h-full ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => onStart(e.clientX)}
        onMouseUp={(e) => onEnd(e.clientX)}
        onMouseLeave={() => (dragging.current = false)}
      >
        {extendedSlides.map((slide, i) => (
  <div
    key={i}
    className="w-full shrink-0 h-full relative bg-no-repeat"
    style={{
      backgroundImage: `url(${slide.image})`,
      backgroundSize: "100%",
      backgroundPosition: "0 30%",
    }}
  >
    {/* Optional overlay */}
    <div className="absolute inset-0 bg-black/20" />
  </div>
))}

      </div>

      {/* DOTS (Adjusted for extended array) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => {
          // Logic to map the dots to the correct slide since index is offset by 1
          const isActive = current === i + 1 || 
                          (current === 0 && i === slides.length - 1) || 
                          (current === slides.length + 1 && i === 0);
          return (
            <button
              key={i}
              onClick={() => setCurrent(i + 1)}
              className={`transition-all duration-300 rounded-full ${
                isActive ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/50"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default HeroSlider;