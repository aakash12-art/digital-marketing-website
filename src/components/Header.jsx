import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/80 backdrop-blur shadow-md" : "bg-white"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          DigitalPro
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          {["/", "/services", "/about", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              label={path === "/" ? "Home" : path.replace("/", "")}
              active={isActive(path)}
            />
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white px-6 pb-4 space-y-3">
          <MobileLink to="/" label="Home" onClick={() => setMenuOpen(false)} />
          <MobileLink to="/services" label="Services" onClick={() => setMenuOpen(false)} />
          <MobileLink to="/about" label="About" onClick={() => setMenuOpen(false)} />
          <MobileLink to="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, label, active }) {
  return (
    <Link
      to={to}
      className={`relative text-sm font-medium transition-colors
        ${active ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}
      `}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 transition-all duration-300
          ${active ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </Link>
  );
}

function MobileLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block py-2 text-gray-700 font-medium hover:text-indigo-600 transition"
    >
      {label}
    </Link>
  );
}
