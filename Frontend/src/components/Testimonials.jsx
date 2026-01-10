import { useEffect, useRef } from "react";

const Testimonials = () => {
const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Startup Founder",
    message:
      "Working with Vinayak Dabhade gave me absolute clarity in decision-making. His structured approach helped us streamline operations and scale our business with confidence.",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    role: "Marketing Lead",
    message:
      "Vinayak’s mentorship helped me develop a stronger leadership mindset. His practical insights and clarity-first coaching made a real difference in how I lead my team.",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    role: "Product Manager",
    message:
      "The coaching sessions with Vinayak were highly actionable. I gained a better understanding of prioritization, execution, and long-term thinking in both product and career growth.",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 4,
  },
  {
    name: "Neha Verma",
    role: "HR Manager",
    message:
      "Vinayak’s guidance helped us improve team alignment and communication. His ability to simplify complex challenges made the entire process smooth and effective.",
    avatar: "https://i.pravatar.cc/150?img=48",
    rating: 5,
  },
  {
    name: "Karan Patel",
    role: "Business Owner",
    message:
      "With Vinayak’s coaching, I gained clarity on business direction and execution. His real-world experience and disciplined approach helped me make better strategic decisions.",
    avatar: "https://i.pravatar.cc/150?img=59",
    rating: 4,
  },
];


  const wrapperRef = useRef(null);
  const isAutoScrolling = useRef(true);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let requestRef;
    const itemWidth = 380 + 24; // Card width + gap

    // Start in the middle of the tripled list
    wrapper.scrollLeft = itemWidth * testimonials.length;

    const performScroll = () => {
      if (isAutoScrolling.current) {
        wrapper.scrollLeft += 0.5;

        // Circular snap logic
        if (wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.offsetWidth - 5) {
          wrapper.scrollLeft = itemWidth * testimonials.length;
        }
        if (wrapper.scrollLeft <= 5) {
          wrapper.scrollLeft = itemWidth * testimonials.length;
        }
      }
      requestRef = requestAnimationFrame(performScroll);
    };

    requestRef = requestAnimationFrame(performScroll);
    return () => cancelAnimationFrame(requestRef);
  }, [testimonials.length]);

  // FIXED ARROW LOGIC
  const scroll = (direction) => {
    // 1. Stop auto-scroll temporarily so it doesn't fight the button
    isAutoScrolling.current = false;

    const distance = 380 + 24;
    const target = direction === "left"
      ? wrapperRef.current.scrollLeft - distance
      : wrapperRef.current.scrollLeft + distance;

    wrapperRef.current.scrollTo({
      left: target,
      behavior: "smooth",
    });

    // 2. Resume auto-scroll after the smooth animation finishes
    setTimeout(() => {
      isAutoScrolling.current = true;
    }, 1000);
  };

  return (
    <section className="bg-gray-50 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2
              className="
      text-2xl sm:text-3xl md:text-4xl
      font-black tracking-tight
      mb-2 sm:mb-3 md:mb-4
      text-gray-900
      leading-tight
    "
            >
              What People Are Saying
            </h2>

            <p
              className="
      text-sm sm:text-base md:text-lg
      text-gray-500
      max-w-md
    "
            >
              Trusted by professionals worldwide.
            </p>
          </div>


          <div className="hidden md:flex gap-3">
            <button onClick={() => scroll("left")} className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-black hover:text-white transition-all">←</button>
            <button onClick={() => scroll("right")} className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-black hover:text-white transition-all">→</button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={wrapperRef}
            // onTouchStart pauses auto-scroll when user swipes manually
            onTouchStart={() => (isAutoScrolling.current = false)}
            onTouchEnd={() => (isAutoScrolling.current = true)}
            onMouseEnter={() => (isAutoScrolling.current = false)}
            onMouseLeave={() => (isAutoScrolling.current = true)}
            className="flex gap-6 overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
              <div
                key={i}
                className="
      w-[260px] sm:w-[320px] md:w-[360px] lg:w-[380px]
      bg-white rounded-[1.5rem] sm:rounded-[2rem]
      p-5 sm:p-6 md:p-8
      border border-gray-100
      shadow-[0_8px_24px_rgba(0,0,0,0.03)]
      flex-shrink-0
    "
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4 sm:mb-5 md:mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span
                      key={j}
                      className={`text-xs sm:text-sm ${j < item.rating ? "text-orange-400" : "text-gray-200"
                        }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8 font-medium italic">
                  “{item.message}”
                </p>

                {/* Footer */}
                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-50">
                  <img
                    src={item.avatar}
                    alt=""
                    className="
          w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
          rounded-full object-cover
          ring-2 ring-gray-50
        "
                  />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-[9px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;