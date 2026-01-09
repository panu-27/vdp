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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Exceptional opportunities
        </h2>

        {/* Cards */}
        <div className="grid gap-14 md:grid-cols-3 text-center">
          {items.map((item, index) => (
            <div key={index} className="max-w-sm mx-auto">
              
              {/* Icon */}
              <div className="flex justify-center mb-6 text-orange-500 text-6xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
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
