import { useEffect, useRef } from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "Aarav Mehta", role: "Startup Founder", message: "This platform completely changed how we run our events. Everything feels seamless and professional.", avatar: "https://i.pravatar.cc/150?img=12", rating: 5 },
    { name: "Sneha Kulkarni", role: "Marketing Lead", message: "The experience was smooth, intuitive, and beautifully designed. Highly recommended!", avatar: "https://i.pravatar.cc/150?img=32", rating: 5 },
    { name: "Rohit Sharma", role: "Product Manager", message: "We saw immediate impact after using this. The attention to detail really stands out.", avatar: "https://i.pravatar.cc/150?img=45", rating: 4 },
    { name: "Neha Verma", role: "HR Manager", message: "Onboarding and engagement became much easier. The UI is extremely user-friendly.", avatar: "https://i.pravatar.cc/150?img=48", rating: 5 },
    { name: "Karan Patel", role: "Event Organizer", message: "One of the best platforms we’ve used. Reliable, fast, and visually impressive.", avatar: "https://i.pravatar.cc/150?img=59", rating: 4 },
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
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-4 text-gray-900">What People Are Saying</h2>
            <p className="text-gray-500 text-lg">Trusted by professionals worldwide.</p>
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
                className="w-[300px] sm:w-[380px] bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex-shrink-0"
              >
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={`text-sm ${j < item.rating ? "text-orange-400" : "text-gray-200"}`}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-8 font-medium italic">“{item.message}”</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <img src={item.avatar} alt="" className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-50" />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.role}</p>
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