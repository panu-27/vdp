import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Camera, Star, Calendar, ArrowRight, Quote } from "lucide-react";

const EventDetails = () => {
  const { eventId } = useParams();

  const event = {
    location: "Kolkata",
    title: "Real Estate Game Changer",
    headerImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1540575861501-7c0f110f6f3a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    ],
    reviews: [
      { name: "Rajesh Verma", role: "Real Estate Director", text: "The lead generation systems shared here are lightyears ahead of what we were doing.", rating: 5 },
      { name: "Sneha Kapoor", role: "Property Consultant", text: "Finally, a practical roadmap for scaling in the Indian market. Life-changing session.", rating: 5 },
      { name: "Amit Ghosh", role: "Founder, AG Homes", text: "Sonu's energy is unmatched. The frameworks are easy to implement and show immediate results.", rating: 5 }
    ]
  };

  return (
    <section className="bg-white min-h-screen pb-20">
      
      {/* --- PREMIUM HEADER --- */}
      <div className="relative h-[50vh] md:h-[75vh] flex items-end pb-12 md:pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={event.headerImage} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-95" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <Link to="/gallery" className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6 group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Gallery
          </Link>
          <p className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Event Retrospective</p>
          <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] text-white">
            {event.location} <br />
            <span className="text-blue-600">Archive</span>
          </h1>
        </div>
      </div>

      {/* --- MASONRY GALLERY --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900">Captured Moments</h2>
            <p className="text-slate-400 font-medium mt-2 uppercase tracking-widest text-[10px]">High-Intensity Training & Networking</p>
          </div>
          <div className="h-px flex-1 bg-slate-100 mx-8 hidden md:block"></div>
          <Camera className="text-blue-600 w-10 h-10 hidden md:block" />
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {event.images.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-3xl group break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <img src={src} alt="Event" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* --- PROFESSIONAL REVIEWS SECTION --- */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 italic">Attendee Feedback</h2>
            <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mt-2">Validated by results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {event.reviews.map((review, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 relative group">
                <Quote className="absolute top-8 right-10 w-12 h-12 text-slate-50 group-hover:text-blue-50 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />)}
                </div>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 relative z-10">"{review.text}"</p>
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-slate-900">{review.name}</h4>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PROFESSIONAL CTA SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Decorative background circle */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 px-4 py-1.5 rounded-full mb-6 text-blue-400">
              <Calendar className="w-3 h-3" />
              <span className="text-[10px] font-black uppercase tracking-widest">Upcoming Event</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-tighter leading-none mb-6">
              Don't Miss The <br /> <span className="text-blue-500 text-5xl md:text-7xl">Next Event</span>
            </h3>
            <p className="text-slate-400 font-medium">
              Join Vinayak Dabhades for an intensive scaling masterclass designed for elite entrepreneurs and leaders. Limited seating for maximum impact.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button className="bg-blue-600 text-white group px-10 py-6 rounded-2xl flex items-center gap-4 hover:bg-white hover:text-blue-900 transition-all duration-500 shadow-2xl shadow-blue-600/20">
              <span className="text-xs font-black uppercase tracking-[0.2em]">Explore Upcoming Events</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
          
    </section>
  );
};

export default EventDetails;