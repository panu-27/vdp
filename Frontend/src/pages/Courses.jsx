import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import CourseCard from "../components/CourseCard";

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
];

const topics = ["All", "Business", "Leadership", "Finance"];

const Courses = () => {
  const [selectedTopic, setSelectedTopic] = useState("All");

  const filteredCourses =
    selectedTopic === "All"
      ? courses
      : courses.filter((c) => c.topic === selectedTopic);

  return (
    <>
      {/* Hero */}
      <HeroSlider />

      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Our Courses</h2>
            <p className="text-gray-600">
              Choose courses designed for growth and success
            </p>
          </div>

          <div className="flex gap-8">

            {/* FILTER SIDEBAR (Desktop) */}
            <aside className="hidden lg:block w-64 bg-white rounded-xl p-6 shadow-sm h-fit">
              <h3 className="font-semibold mb-4 text-lg">Filter by Topic</h3>

              <div className="space-y-3">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm
                      ${
                        selectedTopic === topic
                          ? "bg-orange-100 text-orange-600 font-medium"
                          : "hover:bg-gray-100"
                      }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </aside>

            {/* CONTENT */}
            <div className="flex-1">

              {/* Mobile Filter */}
              <div className="lg:hidden mb-6">
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 bg-white"
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              {/* Course Grid */}
              {filteredCourses.length === 0 ? (
                <p className="text-gray-500">No courses found.</p>
              ) : (
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
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
