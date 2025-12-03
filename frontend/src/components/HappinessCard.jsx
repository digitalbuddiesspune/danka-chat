import React from "react";
import { motion } from "framer-motion";

const HappinessCard = () => {
  const happinessFeatures = [
    {
      icon: "😊",
      title: "Fresh & Hygienic",
      description:
        "Every ingredient is carefully selected and prepared with utmost hygiene",
    },
    {
      icon: "🎉",
      title: "Authentic Flavors",
      description: "Experience the true taste of Indian street food",
    },
    {
      icon: "❤️",
      title: "Made with Love",
      description: "Every dish is prepared with passion and care",
    },
    {
      icon: "⭐",
      title: "Quality Assured",
      description: "We maintain the highest standards in every bite",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full border-t  border-gray-200 bg-linear-to-b from-[#ffb247b9] via-[#FF6B6B]">
      <div className="w-full lg:h-screen   overflow-hidden">
        <div className="px-5  max-w-7xl mx-auto">
          <section className="py-16 px-4 ">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-4 text-gray-800"
              >
                Your Happiness is Our Priority
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
              >
                At Danka, we believe that great food brings great happiness.
                That's why we're committed to delivering the best experience
                with every bite.
              </motion.p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {happinessFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="text-5xl mb-4"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HappinessCard;
