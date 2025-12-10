import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [typedText, setTypedText] = useState("");
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
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <div>
        <NavLink to={"/"} exact="true" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
          Danka
        </NavLink>
      </div>
      <div>
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
                  `relative text-gray-700 font-medium transition-all duration-300 hover:text-orange-600 ${
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
    </nav>
  );
};

export default Navbar;
