import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Clock, Calendar, ArrowLeft, CheckCircle2, 
  Share2, X, Copy, Check, MessageCircle, 
  Mail, Facebook, Instagram 
} from "lucide-react";

const BlogDetail = () => {
  const { blogId } = useParams();
  
  // State for Share Modal
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Dynamic Content Data
  const title = "Mastering Modern Leadership: 10 Essential Qualities";
  const shareUrl = window.location.href;
  const shareTitle = `Read this guide on ${title}`;

  // Share Logic
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        url: shareUrl,
      }).catch(() => setIsShareModalOpen(true));
    } else {
      setIsShareModalOpen(true);
    }
  };

  return (
    <section className="bg-white min-h-screen pt-12 pb-20 selection:bg-blue-50">
      <div className="max-w-2xl mx-auto px-6">
        
        {/* --- BACK NAVIGATION --- */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">Back to Blog</span>
        </Link>

        {/* --- ARTICLE HEADER --- */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-blue-600 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Strategy & Growth</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            {title}
          </h1>

          <div className="flex items-center justify-between border-y border-slate-100 py-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white">VP</div>
              <div className="text-[11px] text-slate-500">
                <span className="font-bold text-slate-900 uppercase">V.D. Pati</span> • Jan 10, 2026
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-2 text-slate-400">
                <Clock size={14} />
                <span className="text-[11px] font-bold uppercase tracking-wider">12 min read</span>
              </div>
              <button 
                onClick={handleShare}
                className="text-slate-400 hover:text-blue-600 transition-colors p-1"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* --- FEATURE IMAGE --- */}
        <div className="mb-10 rounded-2xl overflow-hidden bg-slate-100 aspect-video shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf" 
            alt="Leadership Excellence" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* --- ARTICLE CONTENT --- */}
        <article className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed mb-8 font-medium">
            Leadership is no longer defined by a title or a corner office. In today's digital era, it is the ability to inspire progress through radical accountability and competence.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 uppercase tracking-tight">1. Radical Accountability</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The most respected leaders take ownership of failures and share the credit for successes. Radical accountability means moving away from the "blame culture." Instead of asking who made a mistake, a leader asks how the system can be improved to prevent it.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 uppercase tracking-tight">2. Strategic Empathy</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Empathy is a high-performance tool. Understanding the motivations and fears of your team allows you to align their personal goals with the mission. This creates a self-sustaining momentum that no amount of micromanagement can replicate.
          </p>

          <div className="my-10 border-l-4 border-blue-600 pl-6 py-4 bg-slate-50 rounded-r-xl font-serif text-lg italic text-slate-800">
            "Leadership is not about being in charge. It is about taking care of those in your charge."
            <footer className="text-xs text-slate-500 mt-2 not-italic font-bold uppercase tracking-widest font-sans">— Simon Sinek</footer>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 uppercase tracking-tight">3. The Learner-In-Chief Mentality</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The moment a leader stops learning, they stop leading. To improve leadership qualities, you must be obsessed with feedback loops. 
          </p>
          
          <ul className="space-y-4 mb-10 list-none p-0">
            {[
              "Active Listening: Spending 70% of conversations listening.",
              "Vulnerability: Admitting when you don't have all the answers.",
              "Decisiveness: Making 70% correct decisions quickly over 100% too late."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
                <span className="text-sm font-medium leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 uppercase tracking-tight">Conclusion</h2>
          <p className="text-slate-600 leading-relaxed mb-12">
            Becoming a great leader is a marathon of self-discipline. It requires daily reflection and a commitment to serving others. As you apply these principles, your influence will grow naturally because it has been earned.
          </p>
        </article>

        {/* --- FOOTER TAGS --- */}
        <footer className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
          <div className="flex gap-2">
            {['Leadership', 'Growth'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 rounded-md text-[10px] font-bold uppercase tracking-widest">
                #{tag}
              </span>
            ))}
          </div>
          <button onClick={handleShare} className="text-slate-400 hover:text-blue-600 transition-colors">
            <Share2 size={18} />
          </button>
        </footer>
      </div>

      {/* --- SHARE MODAL --- */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsShareModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-[2rem] p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Share this guide</h3>
              <button onClick={() => setIsShareModalOpen(false)} className="text-slate-400 hover:text-slate-900 p-1">
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-10">
              {[
                { icon: <MessageCircle size={22} className="text-green-500" />, label: 'WA', url: `https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}` },
                { icon: <Facebook size={22} className="text-blue-600" />, label: 'FB', url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
                { icon: <Mail size={22} className="text-slate-600" />, label: 'Mail', url: `mailto:?subject=${shareTitle}&body=${shareUrl}` },
                { icon: <Instagram size={22} className="text-pink-600" />, label: 'Insta', url: `https://www.instagram.com/` },
              ].map((platform) => (
                <a 
                  key={platform.label}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-all group-hover:scale-110">
                    {platform.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{platform.label}</span>
                </a>
              ))}
            </div>

            <div className="relative flex items-center bg-slate-50 rounded-2xl p-2 border border-slate-100">
              <input readOnly value={shareUrl} className="bg-transparent text-[11px] text-slate-500 px-3 flex-1 outline-none overflow-hidden text-ellipsis" />
              <button 
                onClick={handleCopyLink}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
                  ${copied ? 'bg-green-500 text-white' : 'bg-blue-600 text-white hover:bg-slate-900'}`}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogDetail;