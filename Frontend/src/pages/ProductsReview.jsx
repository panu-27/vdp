import { useParams } from "react-router-dom";
import { Play, Star, Video, Quote } from "lucide-react";

const dummyReviews = [
  {
    name: "Amit Sharma",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    comment: "This program completely changed how I run my business. The systems we built allowed me to step back and focus on strategy.",
    date: "Feb 12, 2026",
    role: "CEO, TechFlow Solutions"
  },
  {
    name: "Sneha Kulkarni",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/zpOULjyy-n8",
    comment: "The clarity I gained is unmatched. We shifted from chaos to a high-performance culture in less than 90 days.",
    date: "Jan 28, 2026",
    role: "Founder, Bloom Digital"
  },
  {
    name: "Rahul Verma",
    rating: 4,
    videoUrl: "https://www.youtube.com/embed/3JZ_D3iqxDA",
    comment: "I was skeptical about scaling without burnout, but the blueprint provided here is gold. ROI was visible in the first month.",
    date: "Jan 10, 2026",
    role: "Director, BuildRight"
  },
];

const ProductReviews = () => {
  const { productId } = useParams();
  const displayTitle = productId ? productId.replace(/-/g, " ") : "Wall of Success";

  return (
    <section className="bg-white min-h-screen pb-20">
      
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
      <div className="max-w-7xl mx-auto px-6 mt-20">
        {/* Responsive Video/Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {dummyReviews.map((review, index) => (
            <div key={index} className="group space-y-6">
              
              {/* YouTube Video Block */}
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200">
                <iframe
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                  src={review.videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Visual "Play" Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-black/5 flex items-center justify-center group-hover:bg-transparent transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-slate-900" />
                  </div>
                </div>
              </div>

              {/* Review Text Content */}
              <div className="space-y-4 px-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-black uppercase italic tracking-tight text-slate-900">{review.name}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-slate-900' : 'fill-slate-200 text-slate-200'}`} />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -left-2 -top-2 w-8 h-8 text-slate-100 opacity-20" />
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10 italic">
                    "{review.comment}"
                  </p>
                </div>

                <p className="text-[10px] font-bold text-slate-300 uppercase">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;