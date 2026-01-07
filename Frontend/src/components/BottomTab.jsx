import { FaHome, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const BottomTab = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1f1f1f] border-t border-gray-700 z-50 md:block lg:hidden">
      <div className="flex justify-around items-center py-3 text-white">
        
        {/* Home */}
        <a href="/" className="flex flex-col items-center text-xl hover:text-orange-500">
          <FaHome />
        </a>

        {/* Call */}
        <a href="tel:+919999999999" className="flex flex-col items-center text-xl hover:text-orange-500">
          <FaPhoneAlt />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-xl hover:text-green-500"
        >
          <FaWhatsapp />
        </a>

        {/* Contact */}
        <a href="#contact" className="flex flex-col items-center text-xl hover:text-orange-500">
          <FaEnvelope />
        </a>

      </div>
    </div>
  );
};

export default BottomTab;
