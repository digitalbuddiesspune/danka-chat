import React from "react";
import { motion } from "framer-motion";

const Reviews = () => {
  const reviewVideos = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/opening_mp5al4.mov",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607050/First_vaapy4.mov",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/second_y26sja.mov",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/third_aczond.mov",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607455/fifth_afmkvs.mov",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607454/six_ldqa9q.mov",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/crop-plate-with-salad.jpg')`,
            filter: "blur(3px)",
            transform: "scale(1.1)",
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-yellow-900/10"></div>
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6"
          >
            What Our Customers Says
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-body max-w-3xl mx-auto px-2"
          >
            Hear from our happy customers about their Danka experience
          </motion.p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 sm:mb-6 text-gray-800 px-2">
              Customer Testimonials
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-body text-gray-600 max-w-3xl mx-auto px-2">
              Real stories from real customers who love Danka
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviewVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-yellow-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100"
              >
                <div className="relative w-full aspect-video bg-gray-900">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={video.url} type="video/quicktime" />
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold font-heading mb-2 text-gray-800">
                    {video.title}
                  </h3>
                  <p className="text-sm sm:text-base font-body text-gray-600">
                    Customer testimonial video
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 px-4 text-white"
        style={{
          background: "linear-gradient(to bottom, #000000, #1a0e06, #2b1205)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold font-heading mb-6 text-white"
          >
            Share Your Danka Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl font-body text-white/90 mb-8"
          >
            Loved your visit? We'd love to hear from you! Share your feedback
            and help us continue to serve you better.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact-us"
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-xl font-body"
            >
              Contact Us
            </a>
            <a
              href="/#inquiry"
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-xl font-body"
            >
              Leave Feedback
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
