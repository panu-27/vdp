import { useState } from "react";

/* =======================
   FILTER CONFIG
======================= */
const primaryFilters = ["All", "Personal Life", "Events", "Team"];

const secondaryFiltersMap = {
  "Personal Life": ["All", "Lifestyle", "Cars", "Home", "Family", "Trips"],
  Events: ["All", "Seminars", "Awards", "Meetings"],
  Team: ["All", "Team Building", "Training", "Celebrations"],
};

/* =======================
   GALLERY DATA (DUMMY)
======================= */
const galleryItems = [
  {
    id: 1,
    primary: "Personal Life",
    secondary: "Cars",
    image: "https://picsum.photos/500/400?random=1",
  },
  {
    id: 2,
    primary: "Personal Life",
    secondary: "Family",
    image: "https://picsum.photos/500/400?random=2",
  },
  {
    id: 3,
    primary: "Personal Life",
    secondary: "Trips",
    image: "https://picsum.photos/500/400?random=3",
  },
  {
    id: 4,
    primary: "Events",
    secondary: "Seminars",
    image: "https://picsum.photos/500/400?random=4",
  },
  {
    id: 5,
    primary: "Events",
    secondary: "Awards",
    image: "https://picsum.photos/500/400?random=5",
  },
  {
    id: 6,
    primary: "Team",
    secondary: "Training",
    image: "https://picsum.photos/500/400?random=6",
  },
  {
    id: 7,
    primary: "Team",
    secondary: "Celebrations",
    image: "https://picsum.photos/500/400?random=7",
  },
  {
    id: 8,
    primary: "Personal Life",
    secondary: "Lifestyle",
    image: "https://picsum.photos/500/400?random=8",
  },
];

/* =======================
   COMPONENT
======================= */
const Gallery = () => {
  const [primaryFilter, setPrimaryFilter] = useState("All");
  const [secondaryFilter, setSecondaryFilter] = useState("All");

  /* Reset secondary when primary changes */
  const handlePrimaryChange = (filter) => {
    setPrimaryFilter(filter);
    setSecondaryFilter("All");
  };

  /* Filtering logic */
  const filteredGallery = galleryItems.filter((item) => {
    if (primaryFilter !== "All" && item.primary !== primaryFilter) {
      return false;
    }
    if (secondaryFilter !== "All" && item.secondary !== secondaryFilter) {
      return false;
    }
    return true;
  });

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Gallery</h1>
          <p className="text-gray-600 text-sm">
            Moments from personal life, events, and team journeys
          </p>
        </div>

        {/* ================= PRIMARY FILTER ================= */}
        <div className="flex gap-4 overflow-x-auto pb-2 mb-6">
          {primaryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => handlePrimaryChange(filter)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium border
                ${
                  primaryFilter === filter
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white hover:bg-gray-100"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ================= SECONDARY FILTER ================= */}
        {primaryFilter !== "All" && (
          <div className="flex gap-3 overflow-x-auto pb-2 mb-10">
            {secondaryFiltersMap[primaryFilter].map((filter) => (
              <button
                key={filter}
                onClick={() => setSecondaryFilter(filter)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium border
                  ${
                    secondaryFilter === filter
                      ? "bg-gray-900 text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* ================= GALLERY GRID ================= */}
        {filteredGallery.length === 0 ? (
          <p className="text-gray-500">No images found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
