import { Link } from 'react-router-dom';

/**
 * Premium footer with minimal design and subtle contact icons
 * Features: Clean layout, subtle icons, professional appearance
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              DigitalPro
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses with cutting-edge digital marketing solutions.
              We help you grow your online presence and reach your target audience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info with Subtle Icons */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@digitalpro.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@digitalpro.com
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-sm">123 Marketing St, Business City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} DigitalPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
