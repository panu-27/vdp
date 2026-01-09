import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const products = [
  {
    id: "growth-coaching",
    name: "Business Growth Coaching",
    category: "Strategic Scaling",
    description: "A structured coaching program to scale systems and leadership for founders.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
  {
    id: "leadership-program",
    name: "Leadership Mindset Program",
    category: "Mental Performance",
    description: "Build clarity, confidence, and high-performance leadership skills.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: "sales-mastery",
    name: "Sales Mastery Blueprint",
    category: "Revenue Optimization",
    description: "Proven sales frameworks and triggers used by world-class organizations.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
];

const ProductsPage = () => {
  return (
    <section className="bg-white min-h-screen pb-20 text-slate-900">
      
      {/* --- BRANDED OVERLAY HEADER --- */}
      <div className="relative min-h-[60vh] flex items-end pb-12 md:pb-20 px-6 overflow-hidden bg-white mb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Products Header"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Your Specific Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#22294b] to-transparent opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative z-10">
          <div className="md:col-span-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-4">
               Premium Programs
            </p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] text-white">
              Our <br />
              <span className="text-blue-500">Products</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-slate-300 text-sm md:text-lg border-l-2 border-blue-500 pl-4 md:pl-6 max-w-sm font-medium">
              Tailored excellence designed for high-impact results. Explore our curated professional growth frameworks.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Products Grid - Optimized Height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group block"
            >
              {/* Aspect Ratio 16/9 for Cinematic Low Profile */}
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-100 mb-6 transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:shadow-slate-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-900">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2 px-1">
                <div className="flex items-center gap-1">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-2.5 h-2.5 fill-slate-900 text-slate-900" />
                   ))}
                   <span className="text-[9px] font-bold text-slate-400 ml-2 uppercase tracking-tighter">Verified Review</span>
                </div>
                
                <h2 className="text-xl font-black italic uppercase tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h2>
                
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                <div className="pt-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:gap-4 transition-all">
                  Product Reviews <ArrowRight className="w-3 h-3 text-blue-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;