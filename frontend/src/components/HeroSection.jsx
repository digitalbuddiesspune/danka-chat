import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import newBanner from "../assets/newBanner.jpeg";
import edit2 from "../assets/edit2.jpeg";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [newBanner, edit2];

  // Switch images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Generate random droplet positions
  const droplets = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="Danka Chaat Hero Banner"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Yellow Droplets */}
      <div className="absolute inset-0 pointer-events-none">
        {droplets.map((droplet) => (
          <motion.div
            key={droplet.id}
            className="absolute w-3 h-3 bg-yellow-400 rounded-full opacity-60"
            style={{
              left: `${droplet.left}%`,
              top: `${droplet.top}%`,
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: droplet.duration,
              repeat: Infinity,
              delay: droplet.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              Where Every Bite is a
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Burst of Flavor!
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Forget basic street food. Danka serves the{" "}
            <span className="font-bold text-yellow-400">tangiest, crunchiest</span> Panipuri made with RO water and pure love.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

