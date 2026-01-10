import { useState } from "react";

const Contact = () => {
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-gray-100">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">

        {/* ================= LEFT : FORM / SUCCESS ================= */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white flex items-center">
          <div className="w-full max-w-xl mx-auto px-4 py-8 sm:px-6 sm:py-10">

            {!submitted ? (
              <>
                <span className="text-xs uppercase tracking-widest text-blue-200">
                  Get in Touch
                </span>

                <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 mb-5 sm:mb-6">
                  Contact Us
                </h1>

                <p className="text-blue-100 text-sm sm:text-base mb-6 sm:mb-10 leading-relaxed">
                  Fill out the form and we’ll connect with you shortly.
                  Whether it’s guidance, collaboration, or support — we’re here.
                </p>

                <form
                  className="space-y-5 sm:space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <input
                      placeholder="First Name"
                      className="bg-white/10 border border-white/20 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <input
                      placeholder="Last Name"
                      className="bg-white/10 border border-white/20 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>

                  <input
                    placeholder="Email Address"
                    className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                  />

                  <textarea
                    rows="3"
                    placeholder="Ask us anything or share your thoughts..."
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                  />

                  {/* ================= CHECKBOX ================= */}
                  <label className="flex items-center gap-3 text-sm text-blue-200 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className="accent-white"
                    />
                    <span>Subscribe to our newsletter</span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-white text-blue-800 font-semibold py-2.5 sm:py-3 rounded-full hover:bg-blue-50 transition"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              /* ================= SUCCESS SCREEN ================= */
              <div className="text-center py-16 sm:py-20">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                  Thank You! 🎉
                </h2>

                <p className="text-blue-100 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  Your message has been sent successfully.
                  <br />
                  We’ll get back to you shortly.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setChecked(false);
                  }}
                  className="bg-white text-blue-800 font-semibold px-6 py-2.5 sm:py-3 rounded-full hover:bg-blue-50 transition"
                >
                  Send Another Message
                </button>
              </div>
            )}

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

          <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>

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
