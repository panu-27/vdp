const VisionMissionSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600">
            Our Direction
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
            Vision & Mission
          </h2>
        </div>

        {/* IMAGE + TEXT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="order-1 lg:order-1">
            <img
              src="https://picsum.photos/900/600?random=103"
              alt="Vision and Mission"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="order-2 lg:order-2 space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-1">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To provide simple, practical, and structured learning resources
                that empower individuals to build real skills and confidence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-1">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To become a trusted learning platform that bridges education,
                technology, and real-world problem solving.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMissionSection;
