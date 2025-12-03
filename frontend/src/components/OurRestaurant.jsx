import React from 'react'
import { motion } from 'framer-motion'

const OurRestaurant = () => {
  const franchiseLocations = [
    {
      id: 1,
      name: "Danka Downtown",
      location: "City Center, Main Street",
      type: "Premium Chat Center",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      rating: 4.8,
      reviews: 250
    },
    {
      id: 2,
      name: "Danka Express",
      location: "Mall Food Court, Level 2",
      type: "Express Chat Center",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      rating: 4.6,
      reviews: 180
    },
    {
      id: 3,
      name: "Danka Central",
      location: "Business District, Tower Plaza",
      type: "Standard Chat Center",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      rating: 4.9,
      reviews: 320
    },
    {
      id: 4,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Mobile Chat Cart",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      rating: 4.7,
      reviews: 150
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
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Franchise Locations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our growing network of Danka franchises. Each location brings authentic Indian street food flavors to communities across the region.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {franchiseLocations.map((location) => (
            <motion.div
              key={location.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {location.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{location.name}</h3>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {location.location}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-gray-800">{location.rating}</span>
                  </div>
                  <span className="text-gray-600 text-sm">({location.reviews} reviews)</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-8 border border-orange-200"
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Join Our Growing Network</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Be part of the Danka success story. We're expanding and looking for passionate entrepreneurs to bring authentic Indian street food to new communities.
            </p>
            <motion.a
              href="#inquiry"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Become a Franchise Partner
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurRestaurant

