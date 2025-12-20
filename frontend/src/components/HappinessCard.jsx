import React from "react";
import { motion } from "framer-motion";

const HappinessCard = () => {
  const happinessFeatures = [
    {
      icon: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764747369/fresh_tktpdl.png",
      title: "Fresh & Hygienic",
      description:
        "Every ingredient is carefully selected and prepared with utmost hygiene",
    },
    {
      icon: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764747268/tag_ssaet0.png",
      title: "Authentic Flavors",
      description: "Experience the true taste of Indian street food",
    },
    {
      icon: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764747269/heart_ehonac.png",
      title: "Made with Love",
      description: "Every dish is prepared with passion and care",
    },
    {
      icon: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764747268/high-quality_fny5tv.png",
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
    <div className="w-full bg-gradient-to-b from-white to-yellow-50">
      <div className="w-full max-w-7xl mx-auto lg:h-screen   overflow-hidden">
        <div className="flex flex-col items-center justify-center px-4 py-12 lg:py-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold font-heading text-center mb-4 text-gray-800"
            >
              Your Happiness is Our Priority
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-lg font-body text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              At Danka, we believe that great food brings great happiness.
              That's why we're committed to delivering the best experience with
              every bite.
            </motion.p>
          </div>
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
                  className="h-16 w-16 mx-auto mb-4 flex items-center justify-center"
                >
                
                <img src={feature.icon} alt={feature.title} />
                </motion.div>
                <h3 className="text-xl font-bold font-heading mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-body">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HappinessCard;