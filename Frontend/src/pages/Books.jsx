import { useState } from "react";
import { BookOpen, Search, Bookmark } from "lucide-react";

const booksData = [
  { id: 1, title: "The Scaling Secret", author: "VDPati", price: 499, topic: "Business", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f" },
  { id: 2, title: "Mindset of a Leader", author: "VDPati", price: 399, topic: "Leadership", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73" },
  // ... add more dummy items to reach 20+
];

const topics = ["All", "Business", "Leadership", "Finance", "Mindset"];

const Books = () => {
  const ITEMS_PER_PAGE = 8;
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = selectedTopic === "All" ? booksData : booksData.filter(b => b.topic === selectedTopic);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <section className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-slate-900 leading-none mb-4">
              The <span className="text-blue-600">Library</span>
            </h1>
            <p className="text-slate-500 font-medium">Curated literature to sharpen your entrepreneurial edge.</p>
          </div>
          
          {/* Topic Pills */}
          <div className="flex flex-wrap gap-2">
            {topics.map(t => (
              <button 
                key={t}
                onClick={() => {setSelectedTopic(t); setCurrentPage(1);}}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${selectedTopic === t ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {paginated.map((book) => (
            <div key={book.id} className="group cursor-pointer">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl mb-4 shadow-md group-hover:shadow-2xl transition-all duration-500">
                <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="bg-white/90 backdrop-blur p-2 rounded-full"><Bookmark className="w-4 h-4 text-blue-600" /></button>
                </div>
              </div>
              <h3 className="font-black uppercase tracking-tighter text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{book.title}</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{book.author}</p>
              <p className="text-blue-600 font-black mt-2">₹{book.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;