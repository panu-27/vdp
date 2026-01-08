import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import CourseCard from "../components/CourseCard";

/* =======================
   COURSES DATA
======================= */
const courses = [
  {
    id: 1,
    title: "Business Growth Mastery",
    description: "Learn proven strategies to scale your business ethically.",
    price: 1999,
    topic: "Business",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 2,
    title: "Leadership Mindset",
    description: "Build leadership skills to manage teams effectively.",
    price: 1499,
    topic: "Leadership",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    id: 3,
    title: "Financial Freedom Blueprint",
    description: "Master personal and business finance fundamentals.",
    price: 2499,
    topic: "Finance",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
  {
    id: 4,
    title: "Startup Fundamentals",
    description: "Understand how to start, validate, and grow a startup.",
    price: 1799,
    topic: "Startup",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    id: 5,
    title: "Digital Marketing Essentials",
    description: "Learn SEO, social media, and performance marketing basics.",
    price: 1999,
    topic: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: 6,
    title: "Personal Productivity System",
    description: "Build habits and systems to maximize daily productivity.",
    price: 999,
    topic: "Productivity",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
  },
  {
    id: 7,
    title: "Sales Psychology & Closing",
    description: "Understand buyer psychology and close more deals.",
    price: 1899,
    topic: "Sales",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
  {
    id: 8,
    title: "Entrepreneurial Mindset",
    description: "Develop thinking patterns of successful entrepreneurs.",
    price: 1299,
    topic: "Entrepreneurship",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    id: 9,
    title: "Basics of Investing",
    description: "Learn stocks, mutual funds, and long-term investing.",
    price: 2199,
    topic: "Finance",
    image: "https://images.unsplash.com/photo-1565373679109-4c5e9b16d2b8",
  },
  {
    id: 10,
    title: "Time Management for Professionals",
    description: "Control your time and focus on high-impact work.",
    price: 1099,
    topic: "Productivity",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
  },
  {
    id: 11,
    title: "Brand Building Bootcamp",
    description: "Create a strong and memorable brand.",
    price: 1699,
    topic: "Marketing",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    id: 12,
    title: "Communication Skills Mastery",
    description: "Improve confidence, clarity, and persuasion skills.",
    price: 1199,
    topic: "Communication",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 13,
    title: "Customer Relationship Management",
    description: "Build long-term customer trust and retention.",
    price: 1399,
    topic: "Business",
    image: "https://images.unsplash.com/photo-1556741533-f6acd647d2fb",
  },
  {
    id: 14,
    title: "Business Ethics & Decision Making",
    description: "Make ethical and sustainable decisions.",
    price: 899,
    topic: "Business",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },
  {
    id: 15,
    title: "Freelancing Success Guide",
    description: "Build a profitable freelancing career.",
    price: 1599,
    topic: "Freelancing",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    id: 16,
    title: "Negotiation Skills Workshop",
    description: "Negotiate confidently in business and life.",
    price: 1299,
    topic: "Leadership",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    id: 17,
    title: "Money Management for Beginners",
    description: "Manage income, expenses, and savings.",
    price: 799,
    topic: "Finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    id: 18,
    title: "Goal Setting & Achievement",
    description: "Set goals and build systems to achieve them.",
    price: 999,
    topic: "Self Growth",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
  },
  {
    id: 19,
    title: "Team Building Strategies",
    description: "Build high-performing teams.",
    price: 1799,
    topic: "Leadership",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
  },
  {
    id: 20,
    title: "Online Business Blueprint",
    description: "Launch and scale online businesses.",
    price: 2299,
    topic: "Business",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const topics = ["All", "Business", "Leadership", "Finance", "Marketing", "Productivity"];

/* =======================
   COMPONENT
======================= */
const Courses = () => {
  const COURSES_PER_PAGE = 9;

  const [selectedTopic, setSelectedTopic] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  /* Filter */
  const filteredCourses =
    selectedTopic === "All"
      ? courses
      : courses.filter((c) => c.topic === selectedTopic);

  /* Pagination logic */
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + COURSES_PER_PAGE
  );

  return (
    <>
      <HeroSlider />

      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Our Courses</h2>
            <p className="text-gray-600">
              Choose courses designed for growth and success
            </p>
          </div>

          <div className="flex gap-8">

            {/* Sidebar Filter */}
            <aside className="hidden lg:block w-64 bg-white rounded-xl p-6 shadow-sm h-fit">
              <h3 className="font-semibold mb-4">Filter by Topic</h3>

              <div className="space-y-2">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => {
                      setSelectedTopic(topic);
                      setCurrentPage(1);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm
                      ${
                        selectedTopic === topic
                          ? "bg-blue-100 text-blue-600 font-medium"
                          : "hover:bg-gray-100"
                      }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1">

              {/* Mobile Filter */}
              <div className="lg:hidden mb-6">
                <select
                  value={selectedTopic}
                  onChange={(e) => {
                    setSelectedTopic(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full border rounded-lg px-4 py-2"
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              {/* Course Grid */}
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {paginatedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">

                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-lg border text-sm disabled:opacity-40"
                  >
                    ←
                  </button>

                  {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium
                          ${
                            currentPage === page
                              ? "bg-blue-600 text-white"
                              : "border hover:bg-gray-100"
                          }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded-lg border text-sm disabled:opacity-40"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
