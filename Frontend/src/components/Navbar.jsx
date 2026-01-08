import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const cartItems = 0;

  const closeMenu = () => setOpen(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-blue-700"
      : "hover:text-blue-500";

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Brand */}
            <NavLink to="/" className="flex flex-col leading-tight">
              <span className="text-3xl font-extrabold tracking-wide">
                <span className="text-black">VDPati</span>
                <span className="text-blue-500">I</span>
              </span>
              <span className="text-xs text-gray-500">
                Lets Learn… Do… Teach & Succeed
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8 font-medium">
              <NavLink to="/" end className={navClass}>Home</NavLink>
              <NavLink to="/about" className={navClass}>About Us</NavLink>
              <NavLink to="/store" className={navClass}>Store</NavLink>
              <NavLink to="/consultancy" className={navClass}>Consultancy</NavLink>
              <NavLink to="/resources" className={navClass}>Free Resources</NavLink>
              <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
              <NavLink to="/contact" className={navClass}>Contact Us</NavLink>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <NavLink to="/cart" className="relative cursor-pointer">
                <span className="text-xl">🛒</span>
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1.5 rounded-full">
                  {cartItems}
                </span>
              </NavLink>

              <NavLink
                to="/login"
                className="bg-blue-800 text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-600 transition"
              >
                Log In
              </NavLink>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-3xl"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col px-6 py-4 space-y-4 font-medium">
              <NavLink to="/" end onClick={closeMenu} className={navClass}>Home</NavLink>
              <NavLink to="/about" onClick={closeMenu} className={navClass}>About Us</NavLink>
              <NavLink to="/store" onClick={closeMenu} className={navClass}>Store</NavLink>
              <NavLink to="/consultancy" onClick={closeMenu} className={navClass}>Consultancy</NavLink>
              <NavLink to="/resources" onClick={closeMenu} className={navClass}>Free Resources</NavLink>
              <NavLink to="/gallery" onClick={closeMenu} className={navClass}>Gallery</NavLink>
              <NavLink to="/cart" onClick={closeMenu} className={navClass}>Cart</NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={navClass}>Contact Us</NavLink>

              <NavLink
                to="/login"
                onClick={closeMenu}
                className="bg-blue-800 text-white py-2 rounded-xl font-semibold text-center"
              >
                Log In
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
