import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [cart_items , setCart_items] = useState(0);
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Left: Brand (Always Visible) */}
            <div className="flex flex-col leading-tight">
              <span className="text-3xl font-extrabold tracking-wide">
                <span className="text-black">VDPati</span>
                <span className="text-blue-500">I</span>
              </span>
              <span className="text-xs text-gray-500">
                Lets Learn… Do… Teach & Succeed
              </span>
            </div>

            {/* Center: Nav links (Desktop only) */}
            <div className="hidden lg:flex items-center gap-8 font-medium">
              <a href="#" className="text-orange-500">Home</a>
              <a href="#" className="hover:text-orange-500">About Us</a>
              <a href="#" className="hover:text-orange-500">Store</a>
              <a href="#" className="hover:text-orange-500">Consultancy</a>
              <a href="#" className="hover:text-orange-500">Free Resources</a>
              <a href="#" className="hover:text-orange-500">Gallery</a>
              <a href="#" className="hover:text-orange-500">Contact Us</a>
            </div>

            {/* Right: Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="relative cursor-pointer">
                <span className="text-xl ">🛒</span>
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1.5 rounded-full">
                  {cart_items}
                </span>
              </div>

              <button className="bg-blue-800 text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-600 transition">
                Log In
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-3xl"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </button>

          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col px-6 py-4 space-y-4 font-medium">
              <a href="#" className="text-orange-500">Home</a>
              <a href="#" className="hover:text-orange-500">About Us</a>
              <a href="#" className="hover:text-orange-500">Store</a>
              <a href="#" className="hover:text-orange-500">Consultancy</a>
              <a href="#" className="hover:text-orange-500">Free Resources</a>
              <a href="#" className="hover:text-orange-500">Gallery</a>
              <a href="#" className="hover:text-orange-500">Cart</a>
              <a href="#" className="hover:text-orange-500">Contact Us</a>

              <button className="bg-blue-800 text-white py-2 rounded-xl font-semibold">
                Log In
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
