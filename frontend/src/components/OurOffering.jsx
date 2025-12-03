import React from 'react'
import { motion } from 'framer-motion'

const OurOffering = () => {
  const franchiseCards = [
    {
      id: 1,
      name: "Premium Chat Center",
      description: "Full-service chat center with complete menu and seating area",
      features: ["Full Menu", "Seating Area", "Premium Location", "Marketing Support"],
      investment: "Starting from ₹5 Lakhs"
    },
    {
      id: 2,
      name: "Standard Chat Center",
      description: "Compact chat center perfect for high-traffic areas",
      features: ["Popular Items", "Takeaway Focus", "Prime Location", "Training Provided"],
      investment: "Starting from ₹3 Lakhs"
    },
    {
      id: 3,
      name: "Express Chat Center",
      description: "Quick-service kiosk for malls and food courts",
      features: ["Quick Service", "Limited Menu", "High Volume", "Low Investment"],
      investment: "Starting from ₹2 Lakhs"
    },
    {
      id: 4,
      name: "Mobile Chat Cart",
      description: "Portable cart for events and festivals",
      features: ["Portable", "Event Ready", "Flexible Location", "Low Maintenance"],
      investment: "Starting from ₹1.5 Lakhs"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Franchise Offerings</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join the Danka family and bring authentic Indian street food to your community. Choose from our range of franchise options designed to suit different locations and investment levels.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {franchiseCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-500"
            >
              <div className="p-6">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {card.id}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 text-center">{card.name}</h3>
                <p className="text-gray-600 mb-4 text-center">{card.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                  <ul className="space-y-2">
                    {card.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-500 text-white rounded-lg p-3 text-center font-bold">
                  {card.investment}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-4">
            Interested in starting your own Danka franchise?
          </p>
          <motion.a
            href="#inquiry"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default OurOffering

