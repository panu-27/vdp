import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react"; // Optional: adds a nice indicator

function Navbar() {
  const [open, setOpen] = useState(false);
  const cartItems = 0;

  const closeMenu = () => setOpen(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-blue-700"
      : "hover:text-blue-500 transition-colors";

  const dropdownItemClass = ({ isActive }) =>
    `block px-4 py-3 text-sm font-bold uppercase tracking-widest hover:bg-slate-50 transition-all ${
      isActive ? "text-blue-600 border-l-4 border-blue-600" : "text-slate-600"
    }`;

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
              <span className="text-gray-500 text-[10px] font-bold uppercase tracking-tighter">
                Lets Learn… Do… Teach & Succeed
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8 font-medium">
              <NavLink to="/" end className={navClass}>Home</NavLink>
              <NavLink to="/about" className={navClass}>About Us</NavLink>
              <NavLink to="/store" className={navClass}>Store</NavLink>
              <NavLink to="/consultancy" className={navClass}>Consultancy</NavLink>
              
              {/* --- DROPDOWN START --- */}
              <div className="relative group h-20 flex items-center">
                <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                  Free Resources <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-20 left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-b-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                  <NavLink to="/blog" className={dropdownItemClass}>Blogs</NavLink>
                  <NavLink to="/products" className={dropdownItemClass}>Product Reviews</NavLink>
                  <NavLink to="/success-stories" className={dropdownItemClass}>Success Stories</NavLink>
                </div>
              </div>
              {/* --- DROPDOWN END --- */}

              <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
              <NavLink to="/event" className={navClass}>Events</NavLink>
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
                className="bg-blue-800 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
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

        {/* Mobile Menu (Updated for Dropdown Items) */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col px-6 py-4 space-y-4 font-medium">
              <NavLink to="/" end onClick={closeMenu} className={navClass}>Home</NavLink>
              <NavLink to="/about" onClick={closeMenu} className={navClass}>About Us</NavLink>
              <NavLink to="/store" onClick={closeMenu} className={navClass}>Store</NavLink>
              
              {/* Mobile Sub-Links (Simple list for better mobile UX) */}
              <div className=" flex flex-col pl-4 border-l-2 border-slate-100 space-y-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Resources</p>
                <NavLink to="/blog" onClick={closeMenu} className={navClass}>Blogs</NavLink>
                <NavLink to="/products" onClick={closeMenu} className={navClass}>Product Reviews</NavLink>
                <NavLink to="/success-stories" onClick={closeMenu} className={navClass}>Success Stories</NavLink>
              </div>

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