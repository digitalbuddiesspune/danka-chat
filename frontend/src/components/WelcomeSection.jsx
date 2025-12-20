import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
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
              opacity: [0.2, 0.4, 0.2] 
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
            <span className="px-5 py-2 rounded-full bg-black text-yellow-400 text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block">
              The Ultimate Chaat Experience
            </span>
          </motion.div>

          <motion.h1 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-8"
          >
            Where Every Bite is a <br />
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Burst of Flavor!
              </span>
              <motion.svg 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                className="absolute -bottom-2 left-0 h-3 text-yellow-200 -z-10" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Forget basic street food. Danka serves the <span className="text-gray-900  decoration-yellow-400 decoration-4">tangiest, crunchiest</span> Panipuri made with RO water and pure love.
          </motion.p>
        </div>

        {/* --- BENTO PROMISE GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {/* Main Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Our Promise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Authentic Flavors", "Hygienic Kitchen", "Refined Oil Only", "RO Purified Water"].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-semibold text-sm md:text-base text-gray-700">{text}</span>
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
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2">DHAMAKA</h3>
            <p className="font-semibold text-sm md:text-base text-yellow-900">Every bite feels like 'Wah! Kya Swad Hai!'</p>
          </motion.div>
        </motion.div>

        {/* --- WHY DANKA PILLS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {[
            "100% Fresh", "Street-Style", "Premium Oil", "Hygiene First", "Fast Service"
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
        </div>

        {/* --- CTA SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative bg-gray-900 rounded-[3rem] p-12 overflow-hidden text-center"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6">Ready for a Flavor Blast?</h2>
          <p className="text-gray-400 mb-10 text-base md:text-lg">Hygiene & Quality is our top priority. Visit our central kitchen!</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/917887882300"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-colors shadow-xl shadow-green-900/20"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6" alt="WA" />
              WhatsApp Us
            </motion.a>
           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;