const Contact = () => {
  return (
    <section className=" bg-gray-100">

      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">


        {/* ================= LEFT : FORM ================= */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white flex items-center">

          <div className="w-full max-w-xl mx-auto px-6 py-10">

            <span className="text-xs uppercase tracking-widest text-blue-200">
              Get in Touch
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6">
              Contact Us
            </h1>

            <p className="text-blue-100 text-sm sm:text-base mb-10 leading-relaxed">
              Fill out the form and we’ll connect with you shortly.
              Whether it’s guidance, collaboration, or support — we’re here.
            </p>

            <form className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  placeholder="First Name"
                  className="bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  placeholder="Last Name"
                  className="bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <input
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <textarea
                rows="4"
                placeholder="Ask us anything or share your thoughts..."
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              />

              <div className="flex items-center gap-3 text-sm text-blue-200">
                <input type="checkbox" className="accent-white" />
                <span>Subscribe to our newsletter</span>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-blue-800 font-semibold py-3 rounded-full hover:bg-blue-50 transition"
              >
                Submit
              </button>

            </form>
          </div>
        </div>

        {/* ================= RIGHT : MAP ================= */}
<div className="hidden lg:block relative">

  <iframe
    title="VDPatil Location"
    src="https://www.google.com/maps?q=18.5204,73.8567&z=13&output=embed"
    className="absolute inset-0 w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

  {/* Soft overlay for polish */}
  <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>

  {/* Floating Info Card */}
  <div className="absolute bottom-8 right-8 bg-white rounded-2xl shadow-xl p-5 max-w-xs">
    <h4 className="font-semibold text-gray-900 mb-1">
      VDPatil Consulting
    </h4>
    <p className="text-sm text-gray-600">
      Pune, Maharashtra, India
    </p>

    <a
      href="https://www.google.com/maps/dir/?api=1&destination=18.5204,73.8567"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-3 text-sm text-blue-600 font-medium"
    >
      Get Directions →
    </a>
  </div>

</div>

       
      </div>

    </section>
  );
};

export default Contact;
