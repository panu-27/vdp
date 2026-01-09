import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

const consultancyBlocks = [
  {
    title: "Wealth Creation & Money Management",
    description:
      "VDPatil provides practical guidance on building long-term wealth through the right financial mindset, disciplined money management, and smart business decisions. You will gain clarity on market approaches, income growth strategies, and sustainable profitability. Failures are treated as learning milestones, helping you move closer to lasting success.",
    image: "https://picsum.photos/900/600?random=301",
  },
  {
    title: "Personal & Relationship Consultancy",
    description:
      "Personal and relationship challenges can deeply impact professional growth. Our one-on-one consultancy focuses on improving emotional clarity, family harmony, and personal decision-making. Through structured conversations and proven counseling approaches, you gain tools to strengthen relationships and restore balance in your life.",
    image: "https://picsum.photos/900/600?random=302",
  },
  {
    title: "Spiritual Consultancy",
    description:
      "This consultancy helps you integrate spiritual principles into your daily life without disconnecting from material responsibilities. Learn about karma, forgiveness, emotional detachment, and inner balance. These teachings support better decision-making, stress management, and long-term personal peace.",
    image: "https://picsum.photos/900/600?random=303",
  },
  {
    title: "Corporate Consultancy",
    description:
      "VDPatil supports entrepreneurs and organizations with leadership development, team building, sales strategy, and brand positioning. The consultancy focuses on practical execution, market understanding, and people management to help businesses grow confidently and sustainably.",
    image: "https://picsum.photos/900/600?random=304",
  },
  {
    title: "Product Development & Launching",
    description:
      "From idea to execution, this consultancy guides you through product creation, team formation, marketing strategy, and launch planning. You gain insights into building market-ready products, positioning them correctly, and achieving measurable growth through disciplined execution.",
    image: "https://picsum.photos/900/600?random=305",
  },
];


const Consultancy = () => {
  return (
    <section className="bg-gray-50">
      <HeroSlider/>
      {/* ================= HERO ================= */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600">
              Consultancy
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-5">
              Professional Guidance for Real Growth
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              VDPatil provides structured consultancy services for individuals,
              entrepreneurs, and organizations seeking clarity, growth, and
              balance across financial, personal, spiritual, and professional
              dimensions.
            </p>

            {/* CTA */}
            <Link
              to="/bookappointment"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-xl transition"
            >
              Book Your Appointment
            </Link>
          </div>

          <img
            src="https://picsum.photos/900/600?random=201"
            alt="Consultancy"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* ================= CONSULTANCY TYPES ================= */}
      {/* ================= OUR CONSULTANCY AREAS ================= */}
<div className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        Our Consultancy Areas
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
        Each consultancy area is designed to address real-life challenges with
        clarity, structure, and a practical growth-oriented approach.
      </p>
    </div>

    <div className="space-y-20">
      {consultancyBlocks.map((item, index) => (
        <div
          key={index}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text */}
          <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {item.description}
            </p>
          </div>

          {/* Image */}
          <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
            <img
              src={item.image}
              alt={item.title}
              className="rounded-2xl shadow-lg w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>

  </div>
</div>


     {/* ================= COMPACT ACTION CTA ================= */}
{/* ================= STRONG ACTION CTA ================= */}
<div className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="rounded-2xl bg-blue-600 px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">

      {/* Text */}
      <div className="text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Ready to Take Action?
        </h3>
        <p className="text-sm sm:text-base text-blue-100 mt-2 max-w-xl">
          Take the next step with a focused consultation session designed to
          bring clarity, direction, and measurable progress.
        </p>
      </div>

      {/* CTA Button */}
      <Link
        to="/bookappointment"
        className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold px-7 py-3 rounded-xl hover:bg-blue-50 transition text-sm sm:text-base"
      >
        Book Your Appointment →
      </Link>

    </div>
  </div>
</div>


    </section>
  );
};

export default Consultancy;
