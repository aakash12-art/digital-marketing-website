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
      <section className="min-h-screen flex items-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Grow Your Business <br />
        With <span className="text-yellow-300">DigitalPro</span>
      </h1>

      <p className="text-lg md:text-xl text-purple-100 mb-8">
        We help startups and businesses increase their online presence,
        generate quality leads, and boost revenue through smart digital
        marketing strategies.
      </p>

      <div className="flex gap-4">
        <a
          href="/contact"
          className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition"
        >
          Get Free Consultation
        </a>

        <a
          href="/about"
          className="border border-white/40 px-8 py-4 rounded-xl hover:bg-white/10 transition"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* RIGHT VISUAL */}
    <div className="hidden md:flex justify-center">
      <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
        <span className="text-6xl">🚀</span>
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
              className="inline-block bg-primary-600 text-black px-10 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-sm hover:shadow-md"
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
            className="inline-block bg-black text-primary-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
