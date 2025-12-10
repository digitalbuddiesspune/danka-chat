import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667363/WhatsApp_Image_2025-10-24_at_17.18.24_f1d0aa6d_dc7roj.jpg",
    "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0013_jcj0hd.jpg",
    "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0011_rzx4wy.jpg",
    "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0014_zyqewc.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative w-full 
        h-[70vh]      /* mobile */
        md:h-[80vh]  /* tablet / small laptop */
        lg:h-screen  /* large laptop / desktop */
        flex items-center justify-center overflow-hidden
      "
    >
      {/* Animated Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              filter: "brightness(0.4)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Animated particles effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
            animate={{
              y: [-20, window.innerHeight + 20],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 md:py-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-6 md:mb-8"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
            <span className="relative px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs md:text-sm font-bold rounded-full shadow-2xl inline-flex items-center gap-2 backdrop-blur-sm border border-white/20">
              <span className="animate-pulse"></span>
              WELCOME TO DANKA
              <span className="animate-pulse"></span>
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight md:leading-none"
        >
          <span className="block text-white drop-shadow-2xl">
            Where Every
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 drop-shadow-2xl animate-pulse">
            Bite is Magic
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-xl lg:text-2xl text-white/90 max-w-3xl md:max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed font-light"
        >
          Experience the{" "}
          <span className="font-bold text-orange-400">tangiest, crunchiest</span>, and most{" "}
          <span className="font-bold text-red-400">irresistible</span> Panipuri & Chaat
          <br />
          <span className="text-sm md:text-lg text-white/70 mt-2 inline-block">
            Fresh • Hygienic • Made with Love ❤️
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="flex flex-wrap gap-4 md:gap-6 justify-center mb-10 md:mb-16"
>
  <motion.a
    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 211, 102, 0.4)" }}
    whileTap={{ scale: 0.95 }}
    className="px-4 md:px-5 py-2 md:py-2 text-white text-sm md:text-lg font-bold rounded-2xl shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 border-2 border-white/20 flex items-center gap-3"
    href="https://wa.me/917887882300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-6 h-6 md:w-7 md:h-7"
    />
    Whatsapp Us
  </motion.a>
</motion.div>


        {/* Premium Quality Banner */}
        {/* ... your existing banner + stats code stays same ... */}

        {/* Image indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex gap-2 justify-center mt-6 md:mt-10"
        >
          {backgroundImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentImageIndex
                  ? "w-10 md:w-12 bg-gradient-to-r from-orange-500 to-red-600"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 2, repeat: Infinity }
        }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 text-center"
      >
        <div className="text-xs md:text-sm mb-1 md:mb-2">Scroll to explore</div>
        <div className="text-xl md:text-2xl">↓</div>
      </motion.div>
    </section>
  );
};

export default WelcomeSection;
