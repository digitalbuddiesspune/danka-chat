import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  return (
    <nav className="flex justify-between items-center p-4 relative">
      <div>
        <NavLink 
          to={"/"} 
          exact="true" 
          className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
          onClick={closeMobileMenu}
        >
          Danka
        </NavLink>
      </div>
      
      {/* Mobile Menu Icon */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-2"
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
                className={({ isActive }) =>
                  `relative text-orange-600 font-medium transition-all duration-300 hover:text-orange-600 ${
                    isActive ? "text-orange-600" : ""
                  }`
                }
              >
                {item.label}
                {hoveredItem === item && (
                  <span className="absolute left-0 top-full mt-1 text-xs text-orange-500 font-normal whitespace-nowrap">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                )}
              </NavLink>
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
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
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block px-6 py-3 text-orange-600 font-medium transition-colors duration-300 hover:bg-orange-50 ${
                    isActive ? "bg-orange-50 text-orange-700" : ""
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
