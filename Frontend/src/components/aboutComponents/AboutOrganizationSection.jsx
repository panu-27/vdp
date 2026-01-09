const AboutOrganizationSection = () => {
  return (
    <section className="bg-gray-50 pb-18 pt-15">
      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-violet-500">
            Who We Are
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
            About VDPatil
          </h2>
        </div>

        {/* IMAGE + TEXT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="order-1 lg:order-2">
            <img
              src="https://picsum.photos/900/600?random=102"
              alt="About VDPatil"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="order-2 lg:order-1">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              VDPatil is a modern education and technology-focused platform
              designed to help learners build strong fundamentals, industry-ready
              skills, and practical confidence.
              <br /><br />
              The platform focuses on structured learning paths, hands-on
              projects, and clarity-first teaching, making it suitable for
              students, developers, and professionals at different stages of
              their careers.
              <br /><br />
              VDPatil aims to bridge the gap between academic learning and real
              industry requirements through focused, easy-to-understand content.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutOrganizationSection;
