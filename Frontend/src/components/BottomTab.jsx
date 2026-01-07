import {
  FaHome,
  FaBookOpen,
  FaShoppingCart,
  FaEnvelope
} from "react-icons/fa";

const BottomTab = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1f1f1f] border-t border-gray-700 z-50 md:block lg:hidden">
      <div className="flex justify-around items-center py-3 text-white">

        {/* Home */}
        <a
          href="/"
          className="flex flex-col items-center text-xl hover:text-orange-500"
        >
          <FaHome />
          <span className="text-xs mt-1">Home</span>
        </a>

        {/* Courses */}
        <a
          href="/courses"
          className="flex flex-col items-center text-xl hover:text-orange-500"
        >
          <FaBookOpen />
          <span className="text-xs mt-1">Courses</span>
        </a>

        {/* Cart */}
        <a
          href="/cart"
          className="flex flex-col items-center text-xl hover:text-orange-500"
        >
          <FaShoppingCart />
          <span className="text-xs mt-1">Cart</span>
        </a>

        {/* Contact */}
        <a
          href="/contact"
          className="flex flex-col items-center text-xl hover:text-orange-500"
        >
          <FaEnvelope />
          <span className="text-xs mt-1">Contact</span>
        </a>

      </div>
    </div>
  );
};

export default BottomTab;
