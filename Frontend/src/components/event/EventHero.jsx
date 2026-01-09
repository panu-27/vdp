import { useEffect, useRef, useState, useCallback } from "react";

// (Data remains the same)
const events = [
  {
    badge: "Coming Soon · October 2025",
    title: "Transform Your Business",
    highlight: "Business",
    description: "Join India’s most powerful business & networking event and learn proven strategies to scale faster.",
    date: "28",
    monthYear: "October 2025",
    venue: "Pragati Maidan, New Delhi",
    seatsLeft: 42,
    seatsFilledPercent: 85,
    cta: "Book My Seat Now",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  },
  {
    badge: "Upcoming · January 2026",
    title: "Scale Your Leadership",
    highlight: "Leadership",
    description: "An exclusive leadership summit for founders and CXOs to master modern management.",
    date: "15",
    monthYear: "January 2026",
    venue: "BKC, Mumbai",
    seatsLeft: 68,
    seatsFilledPercent: 60,
    cta: "Reserve Your Spot",
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
    if (scrollRef.current) {
      isScrollingManually.current = true;
      setCurrent(index);
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
      setTimeout(() => { isScrollingManually.current = false; }, 600);
    }
  };

  const nextSlide = useCallback(() => {
    const nextIndex = (current + 1) % events.length;
    scrollToIndex(nextIndex);
  }, [current]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, AUTO_PLAY_TIME);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative w-full h-[600px] sm:h-[700px] md:h-[85vh] lg:h-[100svh] bg-[#020617] overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* SCROLLABLE TRACK */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {events.map((event, i) => (
          <div key={i} className="w-full shrink-0 h-full snap-start relative flex items-center">
            
            {/* Background Image with Ken Burns effect */}
            <div className="absolute inset-0 z-0">
              <img 
                src={event.image} 
                className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear opacity-40 ${current === i ? 'scale-110' : 'scale-100'}`} 
                alt="" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/20 via-[#020617]/80 to-[#020617] md:bg-gradient-to-r md:from-[#020617] md:via-[#020617]/60 md:to-transparent" />
            </div>

            {/* Content Wrapper - Responsive Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-10 md:pt-0">
              
              {/* Left Column: Text Content */}
              <div className="md:col-span-7 space-y-5 md:space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
                   <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                   <span className="text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">{event.badge}</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black italic uppercase text-white tracking-tighter leading-[0.9]">
                  {event.title.split(" ").slice(0, -1).join(" ")} <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                    {event.highlight}
                  </span>
                </h1>

                <p className="text-slate-300 text-sm md:text-xl max-w-lg leading-relaxed font-medium">
                  {event.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button className="group relative px-10 py-4 md:py-5 bg-blue-600 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/40">
                    <span className="relative z-10 text-white font-black text-base md:text-lg uppercase tracking-wider">{event.cta}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>

              {/* Right Column: Floating Stats Card */}
              <div className="md:col-span-5 hidden lg:block">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group/card">
                   <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-[80px] rounded-full" />
                   
                   <div className="flex items-center gap-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-700 text-white h-20 w-20 rounded-2xl flex flex-col items-center justify-center font-bold shadow-xl">
                        <span className="text-3xl leading-none">{event.date}</span>
                        <span className="text-xs uppercase mt-1">{event.monthYear.split(' ')[0]}</span>
                      </div>
                      <div>
                        <p className="font-bold text-2xl text-white tracking-tight">{event.monthYear}</p>
                        <p className="text-slate-400 font-medium">{event.venue}</p>
                      </div>
                   </div>

                   <div className="space-y-3">
                      <div className="flex justify-between text-[11px] font-bold text-slate-300 uppercase tracking-widest">
                        <span>Registration Open</span>
                        <span className="text-blue-400 font-black">{event.seatsLeft} SEATS LEFT</span>
                      </div>
                      <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden p-[2px]">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                          style={{ width: `${event.seatsFilledPercent}%` }} 
                        />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NAVIGATION DOCK (Center Bottom) */}
      {/* NAVIGATION DOCK - Pinned inside the bottom of the section */}
<div className="absolute bottom-25 left-0 right-0 z-30 flex justify-center px-4">
  <div className="flex items-center gap-3 bg-white backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-2xl shadow-2xl max-w-fit">
    {events.map((_, i) => (
      <button
        key={i}
        onClick={() => scrollToIndex(i)}
        className="relative h-1.5 flex items-center group outline-none"
        aria-label={`Slide ${i + 1}`}
      >
        {/* The Track */}
        <div className={`h-full rounded-full transition-all duration-500 bg-black ${current === i ? "w-10 md:w-16" : "w-4 md:w-6 group-hover:bg-white/30"}`} />
        
        {/* The Progress Fill */}
        {current === i && (
          <div 
            key={`progress-${i}-${isPaused}`}
            className={`absolute inset-0 bg-blue-500 rounded-full origin-left ${!isPaused ? 'animate-hero-progress' : 'w-full'}`}
            style={{ animationDuration: `${AUTO_PLAY_TIME}ms` }}
          />
        )}
      </button>
    ))}
  </div>
</div>

      <style>{`
        @keyframes hero-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-hero-progress {
          animation-name: hero-progress;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

export default EventHero;