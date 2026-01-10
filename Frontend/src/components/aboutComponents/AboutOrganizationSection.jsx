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
          
          {/* IMAGE – LEFT */}
          <div>
            <img
              src="https://picsum.photos/900/600?random=102"
              alt="About VDPatil"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* TEXT – RIGHT */}
          <div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Vinayak Dabhade is an entrepreneur, life coach, and business mentor
              dedicated to helping individuals and organizations unlock clarity,
              confidence, and sustainable growth.
              <br /><br />
              With real-world entrepreneurial experience, he works closely with
              founders, professionals, and aspiring leaders to build strong
              mindsets, practical decision-making skills, and scalable business
              systems.
              <br /><br />
              His coaching philosophy focuses on clarity-first thinking,
              disciplined execution, and long-term impact, enabling people to
              bridge the gap between ambition and action in both personal and
              professional life.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutOrganizationSection;
