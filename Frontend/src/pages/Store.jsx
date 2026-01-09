import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShoppingBag,
  BookOpen,
  Wrench,
  GraduationCap,
  MessageSquare,
} from "lucide-react";

const Store = () => {
  const navigate = useNavigate();

  const storeCategories = [
    {
      title: "Learning Programs",
      path: "/courses",
      icon: <GraduationCap className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      description: "Expert-led video modules",
    },
    {
      title: "Digital Publications",
      path: "/books",
      icon: <BookOpen className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop",
      description: "Strategic growth literature",
    },
    {
      title: "Execution Tools",
      path: "/business-tools",
      icon: <Wrench className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      description: "CRMs, Scripts & Templates",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* ================= HEADER ================= */}
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Store Header"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center mb-4">
            <span className="bg-blue-600 p-2 rounded-lg text-white shadow-lg shadow-blue-600/20">
              <ShoppingBag className="w-5 h-5" />
            </span>
          </div>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest italic mb-2">
            The <span className="text-blue-400">Store</span>
          </h1>
          <p className="text-slate-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">
            Professional Growth Ecosystem
          </p>
        </div>
      </div>

      {/* ================= CATEGORY CARDS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {storeCategories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => navigate(cat.path)}
              className="
                group relative
                h-[340px] sm:h-[400px] md:h-[500px]
                overflow-hidden rounded-[2rem] md:rounded-[3rem]
                cursor-pointer shadow-xl
                transition-all duration-500 hover:-translate-y-2
                border border-slate-100
              "
            >
              {/* Background */}
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-md text-white p-3 rounded-xl mb-4 w-fit">
                  {cat.icon}
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black italic uppercase tracking-tight text-white mb-1">
                  {cat.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm font-medium mb-5 max-w-xs">
                  {cat.description}
                </p>

                <div className="inline-flex items-center gap-2 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-white/10 px-5 py-3 rounded-full group-hover:bg-blue-600 transition-colors w-fit">
                  Enter {cat.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-[4px] md:border-[6px] border-blue-600/0 group-hover:border-blue-600/20 rounded-[2rem] md:rounded-[3rem] transition-all pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* ================= CUSTOM SOLUTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="relative rounded-[2rem] md:rounded-[3rem] border border-slate-100 bg-slate-50 p-6 sm:p-10 md:p-16 overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="max-w-2xl text-center md:text-left">
              <p className="text-blue-600 text-[9px] font-black uppercase tracking-[0.3em] mb-3">
                Enterprise & Consultation
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase text-slate-900 mb-4">
                Looking for a{" "}
                <span className="text-blue-600">Custom Solution?</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base">
                Personalized mentorship, bulk licensing, or tailored business
                strategies — our executive team is ready.
              </p>
            </div>

            <button className="bg-slate-950 text-white px-8 sm:px-10 py-4 rounded-xl flex items-center gap-3 hover:bg-blue-600 transition-all">
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
                Contact Strategy Team
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
