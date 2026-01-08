import { Link } from "react-router-dom";

const FounderSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600">
            Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
            Founder – Vinayak Dabahde
          </h2>
        </div>

        {/* IMAGE + TEXT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="order-1 lg:order-1">
            <img
              src="https://picsum.photos/900/600?random=101"
              alt="Founder Vinayak Dabahde"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="order-2 lg:order-2">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
              Vinayak Dabahde is the founder of VDPatil, a platform built with the
              vision of simplifying learning, technology, and digital growth for
              students and professionals.
              <br /><br />
              With a strong focus on practical skills, clarity of concepts, and
              real-world implementation, he believes education should be simple,
              accessible, and outcome-driven.
              <br /><br />
              VDPatil reflects his commitment to building a learning ecosystem
              where consistency, discipline, and skill development lead to
              long-term success.
            </p>

            <Link
              to="/founder"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Read Full Story
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FounderSection;
