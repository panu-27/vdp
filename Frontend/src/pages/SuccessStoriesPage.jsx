import React from "react";
import { ArrowUpRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const stories = [
  {
    id: "tech-transform",
    founder: "Arjun Mehta",
    company: "Nexus AI",
    result: "210% Growth",
    tag: "Scaling",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    id: "brand-pivot",
    founder: "Ananya Iyer",
    company: "LuxeStay",
    result: "Exit $4.2M",
    tag: "Exit Strategy",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    id: "sales-engine",
    founder: "Vikram Seth",
    company: "SaaS Rocket",
    result: "$100k MRR",
    tag: "Sales Mastery",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
  },
  {
    id: "leadership-shift",
    founder: "Karan Malhotra",
    company: "Logistics",
    result: "+40% Eff.",
    tag: "Leadership",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
  },
  {
    id: "tech-transform",
    founder: "Arjun Mehta",
    company: "Nexus AI",
    result: "210% Growth",
    tag: "Scaling",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    id: "brand-pivot",
    founder: "Ananya Iyer",
    company: "LuxeStay",
    result: "Exit $4.2M",
    tag: "Exit Strategy",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    id: "sales-engine",
    founder: "Vikram Seth",
    company: "SaaS Rocket",
    result: "$100k MRR",
    tag: "Sales Mastery",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
  },
  {
    id: "leadership-shift",
    founder: "Karan Malhotra",
    company: "Logistics",
    result: "+40% Eff.",
    tag: "Leadership",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
  }
];

const SuccessStoriesPage = () => {
  return (
    <section className="bg-gray-200 min-h-screen pb-20">
      
      {/* --- HERO SECTION (UNCHANGED PER YOUR REQUEST) --- */}
      <div className="relative w-full bg-white overflow-hidden">
        <div className="relative w-full aspect-video md:aspect-[16/4] bg-slate-950 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
        </div>
      </div>

      {/* --- COMPACT GRID SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-12 md:mt-20">
        
        {/* - grid-cols-2: Always two columns on mobile
          - lg:grid-cols-3: Three columns on large screens to keep cards small
        */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {stories.map((story) => (
            <Link 
              to={`/success-stories/${story.id}`} 
              key={story.id} 
              className="relative block group"
            >
              {/* THE CARD: aspect-[16/11] makes it half the height of a square card */}
              <div className="relative overflow-hidden rounded-xl md:rounded-[2rem] bg-slate-100 aspect-[16/11] shadow-md border border-slate-300/30">
                <img 
                  src={story.image} 
                  alt={story.founder} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Compact Result Badge */}
                <div className="absolute top-2 left-2 md:top-5 md:left-5">
                  <div className="bg-blue-600 px-2 py-0.5 md:px-3 md:py-1 rounded-sm shadow-xl">
                    <span className="text-[7px] md:text-[10px] font-black uppercase tracking-tighter text-white flex items-center gap-1">
                      <Zap className="w-2 h-2 md:w-3 md:h-3 fill-white" /> {story.result}
                    </span>
                  </div>
                </div>

                {/* Simplified Bottom Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 bg-gradient-to-t from-slate-950 via-black/20 to-transparent">
                  <p className="text-blue-400 text-[6px] md:text-[9px] font-black uppercase tracking-[0.2em] mb-0.5">
                    {story.tag}
                  </p>
                  <h3 className="text-[10px] md:text-xl font-black italic uppercase text-white tracking-tight leading-none">
                    {story.founder} <span className="hidden md:inline text-white/40">/ {story.company}</span>
                  </h3>
                </div>
              </div>

              {/* Action indicator below card */}
              <div className="mt-2 md:mt-4 flex items-center justify-between px-1">
                <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-600 transition-colors">
                  Case Study
                </span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition-all group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* --- BRANDED CTA FOOTER --- */}
        <div className="bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-16 mt-16 md:mt-24 text-center shadow-2xl border border-white/5">
            <h3 className="text-white text-xl md:text-3xl font-black italic uppercase mb-6 leading-tight">
              Want results <br className="md:hidden" /> like Them?
            </h3>
            <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all shadow-lg shadow-blue-900/40">
              Book Your Free Scaling Session
            </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesPage;