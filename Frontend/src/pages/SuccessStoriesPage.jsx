import { ArrowUpRight, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const stories = [
  {
    id: "tech-transform",
    founder: "Arjun Mehta",
    company: "Nexus AI",
    result: "210% Revenue Growth",
    tag: "Scaling",
    excerpt: "How Arjun moved from 80-hour work weeks to a fully automated operations model in 4 months.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    size: "large" 
  },
  {
    id: "brand-pivot",
    founder: "Ananya Iyer",
    company: "LuxeStay",
    result: "Exit for $4.2M",
    tag: "Exit Strategy",
    excerpt: "Redefining leadership mindset to prepare for a high-value acquisition.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    size: "small"
  },
  {
    id: "sales-engine",
    founder: "Vikram Seth",
    company: "SaaS Rocket",
    result: "Zero to $100k MRR",
    tag: "Sales Mastery",
    excerpt: "Implementing the Sales Mastery Blueprint to close enterprise deals faster.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    size: "small"
  },
  {
    id: "leadership-shift",
    founder: "Karan Malhotra",
    company: "Global Logistics",
    result: "Team Efficiency +40%",
    tag: "Leadership",
    excerpt: "Building a culture of high-performance and extreme ownership.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    size: "large"
  }
];

const SuccessStoriesPage = () => {
  return (
    <section className="bg-gray-200 min-h-screen pb-20">
      
      {/* --- BRANDED OVERLAY HEADER --- */}
      <div className="relative min-h-[60vh] flex items-end pb-12 md:pb-20 px-6 overflow-hidden bg-white mb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
            alt="Success Stories"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#22294b] to-transparent opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative z-10">
          <div className="md:col-span-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-4 flex items-center gap-2">
               <Trophy className="w-3 h-3" /> The Portfolio of Excellence
            </p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] text-white">
              Success <br />
              <span className="text-blue-500">Stories</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-slate-300 text-sm md:text-lg border-l-2 border-blue-500 pl-4 md:pl-6 max-w-sm font-medium">
              A curated look at the founders who dared to scale and the systems that made it possible.
            </p>
          </div>
        </div>
      </div>

      {/* --- MASONRY GRID --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {stories.map((story) => (
            <Link 
              to={`/success-stories/${story.id}`} 
              key={story.id} 
              className="relative block group overflow-hidden break-inside-avoid"
            >
              {/* Card Image */}
              <div className={`relative overflow-hidden rounded-[2rem] bg-slate-100 ${story.size === 'large' ? 'aspect-[4/5]' : 'aspect-square'}`}>
                <img 
                  src={story.image} 
                  alt={story.founder} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Result Overlay */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                      <Zap className="w-3 h-3 text-blue-600 fill-blue-600" /> {story.result}
                    </span>
                  </div>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{story.tag}</p>
                  <h3 className="text-2xl font-black italic uppercase text-white tracking-tight mb-2">
                    {story.founder} <span className="text-white/50">/ {story.company}</span>
                  </h3>
                  <p className="text-slate-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {story.excerpt}
                  </p>
                </div>
              </div>

              {/* Floating Action Link */}
              <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-blue-600 transition-colors">
                Read Full Case Study <ArrowUpRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[2rem] p-10 md:p-16 mt-20 text-center">
            <h3 className="text-white text-3xl font-black italic uppercase mb-6">Want results like Them?</h3>
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all">
              Book Your Free Scaling Session
            </button>
          </div>
      </div>

      

    </section>
  );
};

export default SuccessStoriesPage;