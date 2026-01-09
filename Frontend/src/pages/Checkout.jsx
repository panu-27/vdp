import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  // Dummy subtotal (replace later with real cart total)
  const subtotal = 13997;

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* ================= LEFT SIDE : FORM ================= */}
      <div className="flex-1 p-8 md:p-20 lg:p-32">
        <div className="max-w-md mx-auto">
          
          <button
            onClick={() => navigate(-1)}
            className="text-sm font-bold text-gray-400 mb-12 flex items-center gap-2"
          >
            ← Back to Bag
          </button>

          <h2 className="text-3xl font-black mb-10 tracking-tight">
            Express Checkout
          </h2>

          <div className="space-y-8">

            {/* CONTACT */}
            <section>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">
                1. Contact
              </h3>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-black transition"
              />
            </section>

            {/* SHIPPING */}
            <section>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">
                2. Shipping
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="First Name"
                  className="bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-black"
                />
                <input
                  placeholder="Last Name"
                  className="bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-black"
                />
              </div>
              <input
                placeholder="Address"
                className="w-full bg-gray-50 border-none rounded-2xl p-4 mt-4 focus:ring-2 focus:ring-black"
              />
            </section>

            {/* PAYMENT */}
            <section>
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">
                3. Payment
              </h3>

              <div className="border-2 border-black rounded-2xl p-4 flex justify-between items-center cursor-pointer">
                <span className="font-bold text-sm">
                  Apple Pay / Google Pay
                </span>
                <div className="w-4 h-4 rounded-full bg-black"></div>
              </div>

              <div className="border border-gray-100 rounded-2xl p-4 flex justify-between items-center mt-3 cursor-pointer text-gray-400">
                <span className="font-medium text-sm">
                  Credit Card
                </span>
                <div className="w-4 h-4 rounded-full border border-gray-300"></div>
              </div>
            </section>

            <button className="w-full bg-black text-white py-5 rounded-3xl font-bold mt-10 shadow-2xl hover:bg-zinc-800 transition">
              Pay Now
            </button>

          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE : ORDER SUMMARY ================= */}
      <div className="hidden md:block w-full md:w-[450px] bg-gray-50 border-l border-gray-100 p-20">
        <h3 className="text-xl font-bold mb-8">
          Order Summary
        </h3>

        <div className="flex justify-between text-gray-500 mb-2">
          <span>Subtotal</span>
          <span className="text-black font-semibold">
            ₹{subtotal}
          </span>
        </div>

        <div className="flex justify-between text-2xl font-black mt-10 pt-6 border-t border-gray-200">
          <span>Total</span>
          <span>₹{subtotal}</span>
        </div>
      </div>

    </div>
  );
};

export default Checkout;
