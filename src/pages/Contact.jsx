console.log("🔥 NEW CONTACT JSX LOADED");

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 flex items-center justify-center px-4">
      
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* LEFT SIDE */}
        <div className="p-10 bg-purple-600 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-purple-100 mb-6">
            Tell us about your project and we’ll help you grow your business.
          </p>

          <ul className="space-y-3 text-sm">
            <li>📞 +91 98765 43210</li>
            <li>✉️ contact@digitalpro.com</li>
            <li>📍 Bangalore, India</li>
          </ul>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-10">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
