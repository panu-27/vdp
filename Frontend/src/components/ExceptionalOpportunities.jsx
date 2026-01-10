import { FaMoneyBillWave, FaFlag, FaUsers } from "react-icons/fa";

const ExceptionalOpportunities = () => {
  const items = [
    {
      icon: <FaMoneyBillWave />,
      title: "Earn Money",
      description:
        "Joining ESESI is all about learning to grow your business and earning wealth through it. Earning money by doing a successful business is highly possible when you take a decision to join ESESI education system.",
    },
    {
      icon: <FaFlag />,
      title: "Become Leader",
      description:
        "Everyone can be a leader. It is just that you should be guided by a right coach. And ESESI can identify all your qualities within you to become leader.",
    },
    {
      icon: <FaUsers />,
      title: "Join Community",
      description:
        "Join our vast community of entrepreneurs and leaders who successfully grow and run their business. With our practical learning and user friendly platform you will always identify and grab new opportunities that make you build yourself as a successful entrepreneur.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl
            font-bold text-center text-gray-900
            mb-10 sm:mb-12 md:mb-16
          "
        >
          Exceptional Opportunities
        </h2>

        {/* Cards */}
        <div className="grid gap-10 sm:gap-12 md:gap-14 md:grid-cols-3 text-center">
          {items.map((item, index) => (
            <div key={index} className="max-w-sm mx-auto">

              {/* Icon */}
              <div
                className="
                  flex justify-center mb-4 sm:mb-5 md:mb-6
                  text-green-700
                  text-4xl sm:text-5xl md:text-6xl
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-lg sm:text-xl
                  font-semibold text-gray-900
                  mb-3 sm:mb-4
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExceptionalOpportunities;
