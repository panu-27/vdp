import { useState } from "react";
import { Wrench, ArrowRight, Download, Laptop } from "lucide-react";

const toolsData = [
  { id: 1, title: "Real Estate CRM Template", category: "CRM", price: "Free", description: "Manage your property leads with our custom Notion/Excel template.", icon: <Laptop /> },
  { id: 2, title: "Sales Script Pro", category: "Sales", price: 999, description: "Professional closing scripts for cold calls and meetings.", icon: <Wrench /> },
  // ... add more dummy items
];

const categories = ["All", "CRM", "Sales", "Legal", "Marketing"];

const BusinessTools = () => {
  const [selectedCat, setSelectedCat] = useState("All");

  const filtered = selectedCat === "All" ? toolsData : toolsData.filter(t => t.category === selectedCat);

  return (
    <section className="bg-slate-50 min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-slate-900 mb-4">
            Business <span className="text-blue-600">Toolkit</span>
          </h2>
          <div className="flex justify-center gap-3">
             {categories.map(c => (
               <button 
                key={c}
                onClick={() => setSelectedCat(c)}
                className={`text-[10px] font-bold uppercase tracking-widest border-b-2 px-2 py-1 transition-all ${selectedCat === c ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400'}`}
               >
                 {c}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((tool) => (
            <div key={tool.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {tool.icon}
              </div>
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">{tool.category}</p>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-4 leading-none">{tool.title}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">{tool.description}</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="font-black text-slate-900">{typeof tool.price === 'number' ? `₹${tool.price}` : tool.price}</span>
                <button className="flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all">
                  Get Tool <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTools;