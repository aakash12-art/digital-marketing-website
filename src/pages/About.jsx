import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

/**
 * About page with premium, minimal design
 * Features: Clean typography, strong visual hierarchy, no distracting icons
 */
function About() {
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

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Page Header */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Your trusted partner in digital marketing excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div 
              ref={(el) => (sectionRefs.current[0] = el)}
              className="bg-white mb-16 fade-in-on-scroll"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                At DigitalPro, our mission is to empower businesses of all sizes to achieve their 
                digital marketing goals through innovative strategies, cutting-edge technology, and 
                personalized service. We believe that every business deserves access to world-class 
                digital marketing solutions that drive real results and sustainable growth.
              </p>
            </div>

            {/* Vision Section */}
            <div 
              ref={(el) => (sectionRefs.current[1] = el)}
              className="bg-white mb-16 fade-in-on-scroll"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We envision a future where businesses seamlessly connect with their target audiences 
                through data-driven digital marketing strategies. Our vision is to be the leading 
                digital marketing agency that sets industry standards for innovation, transparency, 
                and client success. We strive to build long-term partnerships that transform businesses 
                and create lasting value.
              </p>
            </div>

            {/* Experience Section */}
            <div 
              ref={(el) => (sectionRefs.current[2] = el)}
              className="bg-white fade-in-on-scroll"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Experience
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
                With over a decade of experience in the digital marketing industry, DigitalPro has 
                helped hundreds of businesses achieve their online marketing objectives. Our team 
                of certified professionals brings expertise in SEO, social media marketing, Google 
                Ads, and web design.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { number: '500+', label: 'Happy Clients' },
                  { number: '1000+', label: 'Projects Completed' },
                  { number: '10+', label: 'Years Experience' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-8 bg-gray-50 rounded-xl"
                  >
                    <div className="text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                    <div className="text-gray-700 font-medium text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Values */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Transparency', desc: 'Clear communication and honest reporting' },
                    { title: 'Innovation', desc: 'Staying ahead with latest trends and technologies' },
                    { title: 'Results-Driven', desc: 'Focus on measurable outcomes and ROI' },
                    { title: 'Client-Centric', desc: 'Your success is our top priority' }
                  ].map((value, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-gray-50 rounded-xl"
                    >
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">{value.title}</h4>
                      <p className="text-gray-600">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section 
        ref={(el) => (sectionRefs.current[3] = el)}
        className="py-24 md:py-32 bg-primary-600 text-white fade-in-on-scroll"
      >
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-100 max-w-2xl mx-auto">
            Ready to take your business to the next level? Get in touch with us today!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
