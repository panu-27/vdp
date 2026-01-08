import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBookOpen,
  FaShoppingCart,
  FaEnvelope,
} from "react-icons/fa";

const BottomTab = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const base =
    "flex flex-col items-center justify-center gap-0.5 transition-all duration-200";

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-[#0b1220]/95 backdrop-blur border border-blue-900/40 rounded-2xl shadow-lg z-50 md:block lg:hidden">
      <div className="flex justify-between px-3 py-2">

        {/* Home */}
        <Link
          to="/"
          className={`${base} ${
            isActive("/")
              ? "text-blue-400"
              : "text-gray-400 hover:text-blue-400"
          }`}
        >
          <div
            className={`p-1.5 rounded-lg ${
              isActive("/") ? "bg-blue-900/40" : ""
            }`}
          >
            <FaHome size={16} />
          </div>
          <span className="text-[10px] font-medium">Home</span>
        </Link>

        {/* Courses */}
        <Link
          to="/courses"
          className={`${base} ${
            isActive("/courses")
              ? "text-blue-400"
              : "text-gray-400 hover:text-blue-400"
          }`}
        >
          <div
            className={`p-1.5 rounded-lg ${
              isActive("/courses") ? "bg-blue-900/40" : ""
            }`}
          >
            <FaBookOpen size={16} />
          </div>
          <span className="text-[10px] font-medium">Courses</span>
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className={`${base} ${
            isActive("/cart")
              ? "text-blue-400"
              : "text-gray-400 hover:text-blue-400"
          }`}
        >
          <div
            className={`p-1.5 rounded-lg ${
              isActive("/cart") ? "bg-blue-900/40" : ""
            }`}
          >
            <FaShoppingCart size={16} />
          </div>
          <span className="text-[10px] font-medium">Cart</span>
        </Link>

        {/* Contact */}
        <Link
          to="/contact"
          className={`${base} ${
            isActive("/contact")
              ? "text-blue-400"
              : "text-gray-400 hover:text-blue-400"
          }`}
        >
          <div
            className={`p-1.5 rounded-lg ${
              isActive("/contact") ? "bg-blue-900/40" : ""
            }`}
          >
            <FaEnvelope size={16} />
          </div>
          <span className="text-[10px] font-medium">Contact</span>
        </Link>

      </div>
    </div>
  );
};

export default BottomTab;
