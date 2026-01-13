import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

/**
 * Home page with premium split-layout hero section
 * Features: Clean typography, minimal design, no distracting icons
 */
function Home() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const services = [
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website with our comprehensive SEO strategies.',
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage with your audience and build brand awareness across all social platforms with strategic content and campaigns.',
    },
    {
      title: 'Google Ads',
      description: 'Maximize ROI with data-driven Google Ads campaigns that convert visitors into customers and drive measurable results.',
    },
    {
      title: 'Web Design',
      description: 'Create stunning, responsive websites that captivate visitors and drive conversions with modern, user-focused design.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Split Layout */}
      <section className="relative bg-white py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Grow Your Business with{' '}
                <span className="text-primary-600">Digital Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                We help businesses reach their full potential through strategic SEO, 
                social media marketing, Google Ads, and stunning web design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-sm hover:shadow-md text-center"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary-600 hover:text-primary-600 transition-all duration-200 text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right Side - Abstract Design */}
            <div className="relative h-[400px] lg:h-[500px] fade-in-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div 
            ref={(el) => (sectionRefs.current[0] = el)}
            className="text-center mb-16 fade-in-on-scroll"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index + 1] = el)}
                className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 fade-in-on-scroll"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div 
            ref={(el) => (sectionRefs.current[5] = el)}
            className="text-center mt-16 fade-in-on-scroll"
          >
            <Link
              to="/services"
              className="inline-block bg-primary-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section 
        ref={(el) => (sectionRefs.current[6] = el)}
        className="py-24 md:py-32 bg-primary-600 text-white fade-in-on-scroll"
      >
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-100 max-w-3xl mx-auto">
            Let's work together to achieve your business goals. Get a free consultation today!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
