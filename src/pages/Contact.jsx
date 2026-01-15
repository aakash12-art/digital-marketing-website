console.log("🔥 NEW CONTACT JSX LOADED");

import { useState } from "react";
import emailjs from "emailjs-com";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };
  emailjs.send(
  "service_mbqlsrs",
  "template_7m4kj1z",
  {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
  },
  "Bgxh2C5_428Tpxd2b"
)
.then(() => {
  setSubmitted(true);
})
.catch((error) => {
  console.error("Email error:", error);
});


  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8">

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="mb-6 rounded-lg bg-green-100 border border-green-400 text-green-800 px-4 py-3 text-sm">
            ✅ Thank you! Your enquiry has been sent successfully.
          </div>
        )}

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-500 mb-6">
          We usually respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 
                ${errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-500"}`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 
                ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-500"}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 
                ${errors.phone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-500"}`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 resize-none focus:outline-none focus:ring-2 
                ${errors.message ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-500"}`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold 
                       hover:bg-indigo-700 transition duration-300 shadow-lg"
          >
            Send Enquiry
          </button>

        </form>
      </div>
    </section>
  );
}
