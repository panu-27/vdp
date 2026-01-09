const milestones = [
  { value: "10K", label: "Lifes Impacted" },
  { value: "150+", label: "Events Conducted" },
  { value: "1000+", label: "Learners Impacted" },
  { value: "14+", label: "Years of experience" },
];

const MilestonesSection = () => {
  return (
    <section className="bg-gray-50 py-15">
      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-violet-500">
            Our Impact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
            Milestones Achieved
          </h2>
        </div>

        {/* IMAGE + TEXT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="order-1 lg:order-2">
            <img
              src="https://picsum.photos/900/600?random=104"
              alt="VDPatil Milestones"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="text-violet-500 font-extrabold text-xl">
                    {m.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MilestonesSection;
