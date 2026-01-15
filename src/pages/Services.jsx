import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

/**
 * Services page with premium, minimal design
 * Features: Clean typography, no distracting icons, professional layout
 */
function Services() {
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
      id: 1,
      title: 'SEO Optimization',
      description: 'Boost your search engine rankings and drive organic traffic with our comprehensive SEO strategies.',
      features: [
        'Keyword research and optimization',
        'On-page and off-page SEO',
        'Technical SEO audits',
        'Content optimization',
        'Link building strategies',
        'Local SEO services'
      ]
    },
    {
      id: 2,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience across all major social media platforms.',
      features: [
        'Content strategy and creation',
        'Social media management',
        'Community engagement',
        'Paid social advertising',
        'Influencer partnerships',
        'Analytics and reporting'
      ]
    },
    {
      id: 3,
      title: 'Google Ads',
      description: 'Maximize your ROI with data-driven Google Ads campaigns that convert visitors into customers.',
      features: [
        'Campaign strategy and setup',
        'Keyword research and bidding',
        'Ad copy creation',
        'Landing page optimization',
        'Conversion tracking',
        'Performance optimization'
      ]
    },
    {
      id: 4,
      title: 'Web Design',
      description: 'Create stunning, responsive websites that captivate visitors and drive conversions.',
      features: [
        'Responsive design',
        'User experience (UX) optimization',
        'Custom website development',
        'E-commerce solutions',
        'Website maintenance',
        'Performance optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Page Header */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Comprehensive digital marketing solutions to help your business thrive online
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-start gap-12 lg:gap-16 fade-in-on-scroll`}
              >
                {/* Service Content */}
                <div className="flex-1 w-full">
                  <div className="bg-white">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Service Features */}
                <div className="flex-1 w-full">
                  <div className="bg-gray-50 p-8 md:p-10 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-2.5 mr-4"></span>
                          <span className="text-gray-700 text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section 
        ref={(el) => (sectionRefs.current[4] = el)}
        className="py-24 md:py-32 bg-primary-600 text-white fade-in-on-scroll"
      >
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote
          </p>
          <Link
            to="/contact"
            className="inline-block bg-black text-primary-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
