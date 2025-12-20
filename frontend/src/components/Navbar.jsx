import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo1.svg";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const intervalRef = useRef(null);
  const hoveredItemRef = useRef(null);

  const navItems = [
    { path: "/about-us", label: "About Us", hoverText: "Our Story" },
    { path: "/contact-us", label: "Contact Us", hoverText: "Get in Touch" },
    { path: "/franchise", label: "Franchise", hoverText: "Join Us" },
  ];

  useEffect(() => {
    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (item, hoverText) => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    hoveredItemRef.current = item;
    setHoveredItem(item);
    setTypedText("");
    
    // Typing animation
    let currentIndex = 0;
    intervalRef.current = setInterval(() => {
      // Check if we're still hovering over the same item
      if (hoveredItemRef.current !== item) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        return;
      }
      
      if (currentIndex < hoverText.length) {
        setTypedText(hoverText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, 50); // Typing speed
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    hoveredItemRef.current = null;
    setHoveredItem(null);
    setTypedText("");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = () => {
    scrollToTop();
    closeMobileMenu();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-3 lg:px-10 transition-all duration-300 ${
      scrolled 
        ? "backdrop-blur-md bg-white/80 shadow-lg" 
        : "bg-transparent"
    }`}>
      <div>
        <NavLink 
          to={"/"} 
          exact="true" 
          className="text-2xl font-bold transition-colors"
          onClick={handleNavClick}
        >
          <img 
            src={Logo} 
            alt="Danka Logo" 
            className={`w-16 h-16 lg:w-20 lg:h-20 transition-all duration-300 ${
              scrolled ? "" : "drop-shadow-lg"
            }`} 
          />
        </NavLink>
      </div>
      
      {/* Mobile Menu Icon */}
      <button
        onClick={toggleMobileMenu}
        className={`md:hidden ${scrolled ? "text-gray-900" : "text-white"} focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded p-2 transition-colors`}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex space-x-8 justify-center items-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item, item.hoverText)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={item.path}
                onClick={scrollToTop}
                className={({ isActive }) =>
                  `relative ${scrolled ? "text-gray-900" : "text-white"} font-medium transition-all duration-300 hover:text-yellow-500 ${
                    isActive ? "text-yellow-500" : ""
                  }`
                }
              >
                {item.label}
                {hoveredItem === item && (
                  <span className={`absolute left-0 top-full mt-1 text-xs ${scrolled ? "text-gray-600" : "text-yellow-300"} font-normal whitespace-nowrap`}>
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                )}
              </NavLink>
              {/* Hover underline effect */}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled ? "bg-gray-900" : "bg-yellow-400"} transition-all duration-300 group-hover:w-full`}></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible max-h-screen"
            : "opacity-0 invisible max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col py-4">
          {navItems.map((item, index) => (
            <li key={index} className="border-b border-gray-200 last:border-b-0">
              <NavLink
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `block px-6 py-3 text-gray-900 font-medium transition-colors duration-300 hover:bg-gray-100 ${
                    isActive ? "bg-gray-100 text-yellow-600" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
