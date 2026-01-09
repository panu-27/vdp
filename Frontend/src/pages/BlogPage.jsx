import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";

// Dummy Data
const dummyBlogs = Array.from({ length: 24 }).map((_, i) => ({
  id: `blog-${i + 1}`,
  title:
    i % 2 === 0
      ? "Scaling Business Systems in 2026"
      : "The Psychology of Peak Leadership",
  excerpt:
    "Discover the core principles that allowed 500+ founders to automate their growth and regain their time.",
  date: "Jan 12, 2026",
  category:
    i % 3 === 0 ? "Business" : i % 3 === 1 ? "Leadership" : "Mindset",
  image: `https://picsum.photos/seed/${i + 40}/600/400`,
}));

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 12;

  // Filter logic
  const filteredBlogs = useMemo(() => {
    return dummyBlogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const paginate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-slate-50 min-h-screen pb-20">
      {/* ================= HEADER ================= */}
      <div className="relative min-h-[60vh] flex items-end pb-12 md:pb-20 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#22294b] to-transparent opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative z-10">
          <div className="md:col-span-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] text-slate-900">
              Insights & <br />
              <span className="text-blue-600">Knowledge</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-yellow-600 text-sm md:text-lg border-l-2 border-blue-600 pl-4 md:pl-6 max-w-sm font-medium">
              Exclusive articles curated for the next generation of Indian
              entrepreneurs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10">
        {/* ================= FILTERS ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          {/* Categories */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-2 p-1 bg-white rounded-full border border-slate-200 shadow-sm w-max">
              {["All", "Business", "Leadership", "Mindset"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search blogs..."
              className="bg-white border border-slate-200 rounded-full pl-12 pr-12 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full"
              >
                <X className="w-3 h-3 text-slate-400" />
              </button>
            )}
          </div>
        </div>

        {/* ================= BLOG GRID ================= */}
        {currentBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBlogs.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-2">
                    {blog.date}
                  </p>
                  <h2 className="text-xl font-bold mb-3 leading-tight text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-6 flex-grow">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-blue-600">
                    Read Article
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <Search className="w-10 h-10 mx-auto text-slate-400 mb-4" />
            <h3 className="text-xl font-bold text-slate-900">
              No articles found
            </h3>
            <p className="text-slate-500 mt-2">
              Try adjusting your search or category.
            </p>
          </div>
        )}

        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-white border border-slate-200 disabled:opacity-40 hover:bg-blue-600 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-11 h-11 rounded-full font-bold text-sm transition-all border ${
                    currentPage === i + 1
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-slate-200 text-slate-500 hover:border-blue-400"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-white border border-slate-200 disabled:opacity-40 hover:bg-blue-600 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPage;
