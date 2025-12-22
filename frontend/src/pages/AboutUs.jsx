import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const values = [
    {
      icon: "🌱",
      title: "Freshness First",
      description:
        "We source the finest ingredients daily and prepare everything fresh to order",
    },
    {
      icon: "🧼",
      title: "Hygiene Matters",
      description:
        "Strict hygiene protocols and RO purified water in every preparation",
    },
    {
      icon: "❤️",
      title: "Made with Love",
      description:
        "Every dish is crafted with passion, care, and authentic recipes",
    },
    {
      icon: "🎯",
      title: "Quality Promise",
      description:
        "100% refined oil, premium ingredients, and consistent taste",
    },
    {
      icon: "😊",
      title: "Customer Happiness",
      description:
        "Your smile is our success - we go the extra mile for every customer",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "Blending traditional flavors with modern techniques and presentation",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "Danka was born from a simple dream to bring authentic, hygienic street food to everyone",
    },
    {
      year: "2021",
      title: "First Location",
      description:
        "Opened our first chaat center, serving fresh Panipuri and Chaat to delighted customers",
    },
    {
      year: "2022",
      title: "Expansion",
      description:
        "Launched multiple locations and introduced our franchise model",
    },
    {
      year: "2023",
      title: "Recognition",
      description:
        "Became a trusted name in street food, known for quality and hygiene",
    },
    {
      year: "2024",
      title: "Growing Network",
      description: "Expanded our franchise network across multiple cities",
    },
    {
      year: "2025",
      title: "Future Vision",
      description:
        "Continuing to spread the joy of authentic Indian street food nationwide",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative text-white py-20 px-4 overflow-hidden">
      
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/crop-plate-with-salad.jpg')`,
            filter: "blur(3px)",
            transform: "scale(1.1)",
          }}
        />
     
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-yellow-900/10"></div>
        <div className="relative max-w-6xl mx-auto text-center z-10">
        
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-body max-w-3xl mx-auto px-2"
          >
            Discover the story behind Danka and our passion for bringing
            authentic Indian street food to your plate
          </motion.p>
        </div>
      </section> */}

      {/* Our Story Section */}
      <section className="py-24 px-4 bg-black/80 text-white"
       style={{ background: 'linear-gradient(to bottom, #000000, #1a0e06, #2b1205)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 sm:mb-6 text-gray-200 px-2">
              Our Story —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-50 to-yellow-200">
                From a Street Food Dream to a Flavor Revolution
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-4xl mx-auto text-gray-300"
          >
            <p className="text-base sm:text-lg md:text-xl font-body mb-4 sm:mb-6 leading-relaxed px-2">
              Danka was born out of one simple idea:{" "}
              <strong className="text-yellow-600 font-body">
                "Street food should be fun, flavorful, and clean!"
              </strong>
            </p>
            <p className="text-sm sm:text-base md:text-lg font-body mb-4 sm:mb-6 leading-relaxed px-2">
              We started our journey to serve the best Panipuri and Chaat that
              captures the real essence of India's street corners, but with a
              modern, hygienic twist.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-body mb-4 sm:mb-6 leading-relaxed px-2">
              At Danka, every puri is puffed to perfection, every pani is
              freshly mixed, and every plate tells a story of spice, crunch, and
              joy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="bg-gradient-to-br from-gray-50 to-yellow-50 rounded-lg p-4 sm:p-6 md:p-8 border-l-4 border-yellow-500"
            >
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3 sm:mb-4 text-gray-800">
                Our Vision
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg font-body">
                To make Danka the go-to spot for every chaat lover across India
                and beyond.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, x: -10 }}
              className="bg-gradient-to-br from-gray-50 to-yellow-50 rounded-lg p-4 sm:p-6 md:p-8 border-l-4 border-yellow-500"
            >
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3 sm:mb-4 text-gray-800">
                Our Vibe
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg font-semibold font-body">
                Desi. Delicious. Dynamic.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
       <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to revolutionizing street food by combining authentic flavors with uncompromising hygiene and quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Authentic Taste</h3>
              <p className="text-gray-600">
                Preserving traditional recipes while ensuring every bite delivers the authentic street food experience
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hygiene First</h3>
              <p className="text-gray-600">
                Maintaining the highest standards of cleanliness and food safety in every preparation
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Wide Reach</h3>
              <p className="text-gray-600">
                Expanding our network to bring Danka's flavors to communities everywhere
              </p>
            </div>
          </div>
        </div>
      </section> 

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold font-heading mb-4 text-gray-800">
              Our Core Values
            </h2>
            <p className="text-xl font-body text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Danka
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-yellow-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-yellow-100"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold font-heading mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-700 font-body">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 px-4 text-white" style={{ background: 'linear-gradient(to bottom, #000000, #1a0e06, #2b1205)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4 text-white">
              Our Journey
            </h2>
            <p className="text-xl font-body text-white/90 max-w-3xl mx-auto">
              From a simple idea to a growing network of flavor enthusiasts
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 sm:w-1 h-full bg-yellow-500"></div>

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                    }}
                    className="absolute left-4 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full border-2 sm:border-4 border-white shadow-lg z-10"
                  ></motion.div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ml-8 sm:ml-16 md:ml-0 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-4 lg:pr-8"
                        : "md:ml-auto md:pl-4 lg:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border-l-4 border-yellow-500"
                    >
                      <div className="text-yellow-600 font-bold text-base sm:text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2 sm:mb-3 text-gray-800">
                        {milestone.title}
                      </h3>
                      <p className="text-sm sm:text-base font-body text-gray-700">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section
      <section className="py-16 px-4 text-white" style={{ background: 'linear-gradient(to bottom, #000000, #1a0e06, #2b1205)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">
              Why Choose Danka?
            </h2>
            <p className="text-xl font-body max-w-3xl mx-auto opacity-90">
              We're not just another street food vendor - we're a movement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold font-heading mb-4">
                 Quality Assurance
              </h3>
              <ul className="space-y-2 text-lg font-body">
                <li>• All products made in refined oil</li>
                <li>• RO purified water in every preparation</li>
                <li>• Fresh ingredients sourced daily</li>
                <li>• Central kitchen with strict quality control</li>
              </ul>
            </div>
            <div className="bg-white/10 bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold font-heading mb-4">
                Authentic Experience
              </h3>
              <ul className="space-y-2 text-lg font-body">
                <li>• Traditional recipes with modern hygiene</li>
                <li>• Street-style flavors, restaurant quality</li>
                <li>• Consistent taste across all locations</li>
                <li>• Passionate team dedicated to excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 px-4 text-white" 
      style={{ background: 'linear-gradient(to bottom, #000000, #1a0e06, #2b1205)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-6 text-white">
            Join Us on This Flavorful Journey
          </h2>
          <p className="text-xl font-body text-white/90 mb-8">
            Whether you're a customer looking for the best chaat in town or an
            entrepreneur interested in our franchise opportunity, we'd love to
            have you be part of the Danka family!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="/#inquiry"
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Franchise Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
