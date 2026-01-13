import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

/**
 * Premium header component with clean, minimal design
 * Features: Sticky header, active page highlighting, smooth transitions
 */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-sm shadow-sm' 
          : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200"
          >
            DigitalPro
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isActive={isActive('/')} label="Home" />
            <NavLink to="/services" isActive={isActive('/services')} label="Services" />
            <NavLink to="/about" isActive={isActive('/about')} label="About" />
            <NavLink to="/contact" isActive={isActive('/contact')} label="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1">
            <MobileNavLink to="/" isActive={isActive('/')} label="Home" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/services" isActive={isActive('/services')} label="Services" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/about" isActive={isActive('/about')} label="About" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/contact" isActive={isActive('/contact')} label="Contact" onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </nav>
    </header>
  );
}

// Desktop Navigation Link Component
function NavLink({ to, isActive, label }) {
  return (
    <Link
      to={to}
      className={`relative text-sm font-medium transition-colors duration-200 pb-1 ${
        isActive
          ? 'text-primary-600'
          : 'text-gray-700 hover:text-primary-600'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"></span>
      )}
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ to, isActive, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'text-primary-600 bg-primary-50'
          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
      }`}
    >
      {label}
    </Link>
  );
}

export default Header;
