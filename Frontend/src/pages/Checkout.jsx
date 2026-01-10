import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const subtotal = 13997;

  // step: 1 = address, 2 = payment, 3 = review
  const [step, setStep] = useState(1);

  const [selectedAddress, setSelectedAddress] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const addresses = [
    {
      name: "Pranav Zinjad",
      address: "Flat 203, ABC Apartments, Pune, Maharashtra - 411001",
      phone: "8956456522",
    },
    {
      name: "Home",
      address: "Village XYZ, Pune - 410000",
      phone: "8956456522",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-4">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-blue-600"
          >
            ← Back to Cart
          </button>
          <h1 className="text-lg font-semibold">Checkout</h1>
        </div>

        {/* STEP INDICATOR */}
        <div className="flex items-center gap-2 text-xs font-medium mb-4">
          <span className={step >= 1 ? "text-black" : "text-gray-400"}>1 Address</span>
          <span>›</span>
          <span className={step >= 2 ? "text-black" : "text-gray-400"}>2 Payment</span>
          <span>›</span>
          <span className={step >= 3 ? "text-black" : "text-gray-400"}>3 Review</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT */}
          <div className="flex-1 space-y-4">

            {/* STEP 1 : ADDRESS */}
            <div className="bg-white border rounded-md">
              <div className="flex justify-between items-center px-4 py-3 border-b">
                <h2 className="text-sm font-semibold">1. Delivery Address</h2>
                {step > 1 && (
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-blue-600"
                  >
                    Change
                  </button>
                )}
              </div>

              {step === 1 ? (
                <div className="p-4 space-y-3">
                  {addresses.map((addr, i) => (
                    <label
                      key={i}
                      className={`flex gap-3 border rounded-md p-3 cursor-pointer ${
                        selectedAddress === i
                          ? "border-blue-500 bg-blue-50"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        checked={selectedAddress === i}
                        onChange={() => setSelectedAddress(i)}
                      />
                      <div>
                        <p className="text-sm font-medium">{addr.name}</p>
                        <p className="text-xs text-gray-600">{addr.address}</p>
                        <p className="text-xs text-gray-600">
                          Phone: {addr.phone}
                        </p>
                      </div>
                    </label>
                  ))}

                  <button
                    onClick={() => setStep(2)}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-md text-sm font-medium"
                  >
                    Use this address
                  </button>
                </div>
              ) : (
                <div className="px-4 py-3 text-sm text-gray-700">
                  {addresses[selectedAddress].address}
                </div>
              )}
            </div>

            {/* STEP 2 : PAYMENT */}
            {step >= 2 && (
              <div className="bg-white border rounded-md">
                <div className="flex justify-between items-center px-4 py-3 border-b">
                  <h2 className="text-sm font-semibold">2. Payment Method</h2>
                  {step > 2 && (
                    <button
                      onClick={() => setStep(2)}
                      className="text-xs text-blue-600"
                    >
                      Change
                    </button>
                  )}
                </div>

                {step === 2 ? (
                  <div className="p-4 space-y-3">
                    {[
                      { id: "upi", label: "UPI / Google Pay / PhonePe" },
                      { id: "card", label: "Credit / Debit Card" },
                      { id: "cod", label: "Cash on Delivery" },
                    ].map((method) => (
                      <label
                        key={method.id}
                        className={`flex items-center gap-3 border rounded-md p-3 cursor-pointer ${
                          paymentMethod === method.id
                            ? "border-blue-500 bg-blue-50"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          checked={paymentMethod === method.id}
                          onChange={() => setPaymentMethod(method.id)}
                        />
                        <span className="text-sm">{method.label}</span>
                      </label>
                    ))}

                    <button
                      disabled={!paymentMethod}
                      onClick={() => setStep(3)}
                      className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-md text-sm font-medium disabled:opacity-50"
                    >
                      Continue
                    </button>
                  </div>
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-700">
                    Payment method selected
                  </div>
                )}
              </div>
            )}

            {/* STEP 3 : REVIEW */}
            {step === 3 && (
              <div className="bg-white border rounded-md">
                <div className="px-4 py-3 border-b">
                  <h2 className="text-sm font-semibold">3. Review & Pay</h2>
                </div>

                <div className="p-4">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium">
                    Pay ₹{subtotal}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SUMMARY */}
          <div className="lg:w-[300px]">
            <div className="bg-white border rounded-md p-4 sticky top-4">
              <p className="text-sm mb-2">
                Order Total:
                <span className="font-semibold float-right">
                  ₹{subtotal}
                </span>
              </p>
              <p className="text-xs text-gray-500">
                Final amount calculated at payment
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
