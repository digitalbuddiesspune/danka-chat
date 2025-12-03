import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white relative z-50">
      <div>
        <NavLink to={"/"} exact="true" className="text-xl sm:text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
          Danka
        </NavLink>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex space-x-4 lg:space-x-8 justify-center items-center">
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
                  `relative text-sm lg:text-base text-gray-700 font-medium transition-all duration-300 hover:text-orange-600 ${
                    isActive ? "text-orange-600" : ""
                  }`
                }
              >
                {item.label}
                {hoveredItem === item && (
                  <span className="absolute left-0 top-full mt-1 text-xs text-orange-500 font-normal whitespace-nowrap hidden lg:block">
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

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden overflow-hidden"
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col p-4 space-y-4"
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-gray-700 font-medium transition-all duration-300 hover:text-orange-600 py-2 ${
                        isActive ? "text-orange-600" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
