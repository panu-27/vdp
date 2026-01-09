import React from 'react';

const EventStats = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Title and Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="md:w-2/3">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Explore <br />
              <span className="text-white">Sonu Sharma Events</span>
            </h2>
          </div>
          
          <div className="md:w-1/3">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Mr Sharma motivational sessions offer numerous advantages, including boosting confidence, 
              promoting goal-setting, enhancing communication, fostering teamwork, and improving 
              problem-solving skills, ultimately contributing to personal and professional success.
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION: Feature Image / Video Container */}
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 group">
          <img 
            src="https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80" 
            alt="Event Preview" 
            className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Play Button Overlay (Optional) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>

          {/* Bottom Gradient for the Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>

      </div>
    </section>
  );
};

export default EventStats;