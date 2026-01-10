import { useParams, Link } from "react-router-dom";
import { ArrowLeft, PlayCircle, Calendar, User, Building, Quote } from "lucide-react";

const SuccessStoryDetail = () => {
  const { storyId } = useParams();

  // Dummy Data for the Detail Page
  const story = {
    founder: "Arjun Mehta",
    company: "Nexus AI",
    title: "Scaling from $10k to $100k MRR without hiring 20 people",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    date: "March 14, 2026",
    category: "Strategic Scaling",
    content: [
      {
        heading: "The Challenge",
        body: "Before joining the program, Arjun was trapped in 'Founder's Burnout'. He was handling every sales call, every customer support ticket, and managing a team that couldn't move without his permission. Revenue was stagnant at $10k because Arjun had no more hours left in the day."
      },
      {
        heading: "The Strategy",
        body: "We implemented the 'High-Performance Systems' framework. This involved mapping every manual task Arjun performed and creating automated workflows or delegating them to a structured leadership tier. We shifted his focus from 'Operating' to 'Directing'."
      },
      {
        heading: "The Result",
        body: "Within four months, Nexus AI scaled to $100k Monthly Recurring Revenue. Most importantly, Arjun now works only 20 hours a week on operations, spending the rest of his time on long-term AI innovation and expansion."
      }
    ]
  };

  return (
    <section className="bg-white min-h-screen pb-20 text-slate-900">
      
      {/* --- COMPACT BRANDED HEADER --- */}
      <div className="relative w-full bg-white overflow-hidden">
        <div className="relative w-full aspect-video md:aspect-[16/4]  bg-slate-950 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt="Hero"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
        </div>
      </div>

      {/* --- CONTENT LAYOUT --- */}
      <div className="max-w-4xl mx-auto px-6 -mt-20   relative z-20">
        
        {/* VIDEO SECTION */}
        <div className="aspect-video w-full rounded-[2rem] overflow-hidden bg-black shadow-2xl border-4 border-white">
          <iframe
            className="w-full h-full"
            src={story.videoUrl}
            title="Success Story Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* METADATA BAR */}
        <div className="flex flex-wrap gap-8 py-10 border-b border-slate-100 mb-12">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Founder: {story.founder}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Company: {story.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{story.date}</span>
          </div>
        </div>

        {/* ARTICLE CONTENT */}
        <div className="space-y-16">
          <div className="relative">
            <Quote className="absolute -left-10 -top-4 w-20 h-20 text-slate-50" />
            <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tight relative z-10">
              "{story.title}"
            </h2>
          </div>

          {story.content.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                  {item.heading}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
          
          {/* CLOSING CALL TO ACTION */}
          <div
  className="
    bg-slate-200 rounded-[1.5rem] md:rounded-[2rem]
    px-6 py-8
    sm:px-8 sm:py-10
    md:px-12 md:py-14
    lg:px-16 lg:py-16
    mt-14 md:mt-20
    text-center
  "
>
  <h3
    className="
      text-blue-500
      text-xl sm:text-2xl md:text-3xl lg:text-4xl
      font-black italic uppercase
      tracking-tight
      mb-4 sm:mb-5 md:mb-6
    "
  >
    Want results like {story.founder}?
  </h3>

  <Link to={"/contact"}
    className="
      bg-blue-500 text-white
      px-6 py-3
      sm:px-8 sm:py-3.5
      md:px-10 md:py-4
      rounded-full
      text-[10px] sm:text-xs
      font-black uppercase tracking-widest
      hover:bg-white hover:text-blue-600
      transition-all duration-300
    "
  >
    Book Your Free Scaling Session
  </Link>
</div>

        </div>

      </div>
    </section>
  );
};

export default SuccessStoryDetail;