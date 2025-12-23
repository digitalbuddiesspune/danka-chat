import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#fafaf9]">
      {/* --- PREMIUM DYNAMIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Large Organic Blob 1 */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-yellow-300/20 rounded-full blur-[100px]"
        />
        {/* Large Organic Blob 2 */}
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[120px]"
        />

        {/* Floating "Puri" shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i }}
            className="absolute hidden md:block border-2 border-yellow-400/20 rounded-full"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* --- HERO HEADER --- */}
        <div className="text-center mb-24">
          <motion.div {...fadeIn} className="inline-block">
            <span className="px-5 py-2 rounded-full bg-black text-yellow-400 text-xs font-body uppercase tracking-[0.2em] mb-6 inline-block">
              The Ultimate Chaat Experience
            </span>
          </motion.div>

          <motion.h1
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-center text-xl md:text-2xl lg:text-2xl  text-gray-900 tracking-tight mb-4 font-heading"
          >
            <span className="relative">
              <span className="relative font-bold text-xl lg:text-3xl z-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Welcome to Danka – Where Every Bite is a Burst of Flavor
              </span>
            
            </span>
            <p className="font-body font-semibold  text-gray-700">
              Get ready to experience the tangiest, crunchiest, and most
              irresistible Panipuri and Chaat in town. At Danka, we bring the
              true taste of Indian street food to your plate — fresh, hygienic,
              and made with love.
            </p>
          </motion.h1>
        </div>

        {/* --- BENTO PROMISE GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:mb-20 mb-10"
        >
          {/* Main Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mb-6">
                Our Promise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Authentic Flavors",
                  "Hygienic Kitchen",
                  "Refined Oil Only",
                  "RO Purified Water",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="font-semibold text-sm md:text-base font-body text-gray-700">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-yellow-50 rounded-full group-hover:scale-110 transition-transform duration-700" />
          </motion.div>

          {/* Experience Card */}
          <motion.div
            variants={itemVariants}
            className="bg-yellow-400 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center shadow-xl shadow-yellow-200"
          >
            <span className="text-4xl mb-4">💥</span>
            <h3 className="text-xl md:text-2xl font-heading text-gray-900 mb-2">
              DHAMAKA
            </h3>
            <p className="font-semibold text-sm md:text-base font-body text-yellow-900">
              Every bite feels like 'Wah! Kya Swad Hai!'
            </p>
          </motion.div>
        </motion.div>

        {/* --- WHY DANKA PILLS --- */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-24">
          {[
            "100% Fresh & Hygienic Ingredients",
            "Authentic Street-Style Flavours",
            "All products made in refined oil",
            "All products made with RO purified water",
           
          ].map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, backgroundColor: "#000", color: "#fff" }}
              className="px-6 py-3 rounded-2xl bg-white border border-gray-200 shadow-sm font-semibold text-sm md:text-base text-gray-800 cursor-default transition-colors"
            >
              {item}
            </motion.span>
          ))}
        </div> */}

        {/* --- CTA SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative bg-gray-900 rounded-[3rem] px-4 py-8 lg:p-12 overflow-hidden "
        >
          <h2 className="text-xl  lg:text-2xl font-heading text-white text-center">
            At Danka, every crunch of Panipuri and every spoonful of Chaat
            brings the dhamaka of authentic Indian flavors. We've taken the
            magic of the streets and wrapped it in freshness, hygiene, and
            happiness —{" "}
            <span className="font-semibold font-body text-yellow-200">
              Every bite feels like 'Wah! Kya Swad Hai!'
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
