import { useState } from "react";

const BookAppointmentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    age: "",
    urgency: "",
    plan: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-5">

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Book Your Appointment
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            For Wealth Creation, Money Management, Personal, Spiritual,
            Corporate Consultancy & Product Development.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10">
          <form className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                name="name"
                placeholder="Enter Your Full Name"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                name="email"
                placeholder="Enter Your Email Address"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                name="mobile"
                placeholder="Enter Your Mobile"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                name="city"
                placeholder="Enter Your City"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                name="age"
                placeholder="Age"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meeting Reason & Urgency *
              </label>
              <input
                name="urgency"
                placeholder="Please genuinely tell us meeting reason & urgency"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            {/* Plan Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Consultation Plan *
              </label>
              <select
                name="plan"
                className="w-full rounded-xl border px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>1 Hour ONLINE – ₹5000</option>
                <option>1 Hour OFFLINE – ₹10000</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Important Message *
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Please share a short message that will help us prepare for the meeting"
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentForm;
