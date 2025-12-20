import React from 'react'
import { motion } from 'framer-motion'

const OurRestaurant = () => {
  const franchiseLocations = [
    {
      id: 1,
      name: "Danka Downtown",
      location: "City Center, Main Street",
      type: "Mumbai",
      image: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192062/mumbai0_omdtji.webp",
      rating: 4.8,
      reviews: 250
    },
    {
      id: 2,
      name: "Danka Express",
      location: "Mall Food Court, Level 2",
      type: "Pune",
      image: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192063/Pune_ta31zv.jpg",
      rating: 4.6,
      reviews: 180
    },
    {
      id: 3,
      name: "Danka Central",
      location: "Business District, Tower Plaza",
      type: "Indore",
      image: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192061/Indore_qzcikd.jpg",
      rating: 4.9,
      reviews: 320
    },
    {
      id: 4,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Goa",
      image: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192061/Goa_j6q81l.jpg",
      rating: 4.7,
      reviews: 150
    },
     {
      id: 5,
      name: "Danka Mobile",
      location: "Events & Festiva",
      type: "Jabalpur",
      image: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192839/Jabalpur_nmduyj.jpg",
      rating: 4.7,
      reviews: 150
    },
     {
      id: 6,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Mahabaleshwar",
      image: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192062/Mahabaleshawar_hap0b1.jpg",
      rating: 4.7,
      reviews: 150
    },
     {
      id: 7,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Satara",
      image: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192063/Satara_zodvau.jpg",
      rating: 4.7,
      reviews: 150
    },
     {
      id: 8,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Panchgani",
      image: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192062/panchgani_hala3w.jpg",
      rating: 4.7,
      reviews: 150
    },
     {
      id: 9,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Satna",
      image: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192065/Satna_ibnyfk.png",
      rating: 4.7,
      reviews: 150
    },
     {
      id: 10,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Vita",
      image: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192064/Vita_h2c7af.avif",
      rating: 4.7,
      reviews: 150
    },
     {
      id: 11,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Mandsaur",
      image: "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192062/mandsaur_nyv9cf.webp",
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
          <h2 className="text-4xl font-bold font-heading mb-4 text-gray-800">Now Serving in These Cities</h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
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
                <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {location.type}
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
            className="bg-gradient-to-r from-gray-50 to-yellow-50 rounded-lg p-8 border border-yellow-200"
          >
            <h3 className="text-3xl font-bold font-heading mb-4 text-gray-800">Join Our Growing Network</h3>
            <p className="text-lg font-body text-gray-700 mb-6 max-w-2xl mx-auto">
              Be part of the Danka success story. We're expanding and looking for passionate entrepreneurs to bring authentic Indian street food to new communities.
            </p>
            <motion.a
              href="#inquiry"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
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
