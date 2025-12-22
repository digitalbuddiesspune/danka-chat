import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const OurRestaurant = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  // Calculate items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

  const maxIndex = Math.max(0, franchiseLocations.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
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

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {franchiseLocations.map((location) => (
                <motion.div
                  key={location.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
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
          </div>

          {/* Navigation Buttons */}
          {franchiseLocations.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-yellow-500 hover:text-white transition-all duration-300 z-10"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-yellow-500 hover:text-white transition-all duration-300 z-10"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Carousel Indicators */}
          {franchiseLocations.length > itemsPerView && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-yellow-500 w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

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
