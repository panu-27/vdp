import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <h2 className="text-2xl font-bold mb-4">
            VD<span className="text-blue-500">Patil</span>
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Mr. Vinayak Dabhade is a visionary entrepreneur and business mentor who
            believes in ethical growth and sustainable success. This platform
            is created to help individuals gain knowledge and skills required
            to grow their businesses.
          </p>

          <h4 className="font-semibold mb-3">Connect with Us</h4>
          <div className="flex gap-3 text-lg">
            <a className="hover:text-red-500" href="#"><FaYoutube /></a>
            <a className="hover:text-blue-500" href="#"><FaFacebookF /></a>
            <a className="hover:text-sky-400" href="#"><FaTwitter /></a>
            <a className="hover:text-blue-600" href="#"><FaLinkedinIn /></a>
            <a className="hover:text-pink-500" href="#"><FaInstagram /></a>
            <a className="hover:text-green-500" href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "VDPatil",
              "Gallery",
              "Downloads",
              "Courses",
              "Books",
              "Business Tools",
              "FAQ's",
              "Upcoming Events",
              "Success Story",
            ].map((item) => (
              <li key={item} className="hover:text-blue-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              "Order Tracking",
              "Shipping Policy",
              "Payments Links",
              "Terms & Conditions",
              "Privacy Policy",
              "Refund / Exchange Policy",
              "Disclaimer",
              "Rules And Regulations",
            ].map((item) => (
              <li key={item} className="hover:text-blue-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile"
              className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <textarea
              rows="3"
              placeholder="Message"
              className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-blue-100 text-center py-4 text-sm font-medium">
        © 2026 All Rights Reserved VDPatil (Ethical Success Education System India)
      </div>
    </footer>
  );
};

export default Footer;
