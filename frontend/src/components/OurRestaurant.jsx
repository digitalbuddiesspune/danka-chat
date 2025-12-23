import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurRestaurant = () => {
  const franchiseLocations = [
    {
      id: 1,
      name: "Danka Downtown",
      location: "City Center, Main Street",
      type: "Mumbai",
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192062/mumbai0_omdtji.webp",
      rating: 4.8,
      reviews: 250,
    },
    {
      id: 2,
      name: "Danka Express",
      location: "Mall Food Court, Level 2",
      type: "Pune",
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192063/Pune_ta31zv.jpg",
      rating: 4.6,
      reviews: 180,
    },
    {
      id: 3,
      name: "Danka Central",
      location: "Business District, Tower Plaza",
      type: "Indore",
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192061/Indore_qzcikd.jpg",
      rating: 4.9,
      reviews: 320,
    },
    {
      id: 4,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Goa",
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192061/Goa_j6q81l.jpg",
      rating: 4.7,
      reviews: 150,
    },
    {
      id: 5,
      name: "Danka Mobile",
      location: "Events & Festiva",
      type: "Jabalpur",
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192839/Jabalpur_nmduyj.jpg",
      rating: 4.7,
      reviews: 150,
    },
    {
      id: 6,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Mahabaleshwar",
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192062/Mahabaleshawar_hap0b1.jpg",
      rating: 4.7,
      reviews: 150,
    },
    {
      id: 7,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Satara",
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192063/Satara_zodvau.jpg",
      rating: 4.7,
      reviews: 150,
    },
    {
      id: 8,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Panchgani",
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192062/panchgani_hala3w.jpg",
      rating: 4.7,
      reviews: 150,
    },
    {
      id: 9,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Satna",
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192065/Satna_ibnyfk.png",
      rating: 4.7,
      reviews: 150,
    },
    {
      id: 10,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Vita",
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192064/Vita_h2c7af.avif",
      rating: 4.7,
      reviews: 150,
    },
    {
      id: 11,
      name: "Danka Mobile",
      location: "Events & Festivals",
      type: "Mandsaur",
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1765192062/mandsaur_nyv9cf.webp",
      rating: 4.7,
      reviews: 150,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "ease-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow`}
        style={{
          ...style,
          display: "block",
          right: "-45px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        onClick={onClick}
      >
        <div className="bg-yellow-500 rounded-full p-3 shadow-lg hover:bg-yellow-600 transition-all duration-300 cursor-pointer flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow`}
        style={{
          ...style,
          display: "block",
          left: "-45px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        onClick={onClick}
      >
        <div className="bg-yellow-500 rounded-full p-3 shadow-lg hover:bg-yellow-600 transition-all duration-300 cursor-pointer flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <section className="px-4  py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-heading mb-4 text-gray-800">
            Now Serving in These Cities
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Discover our growing network of Danka franchises. Each location
            brings authentic Indian street food flavors to communities across
            the region.
          </p>
        </motion.div>

        <div className="relative lg:px-12 xl:px-16 overflow-visible">
          <style>{`
            .slick-dots li button:before {
              color: #d1d5db;
              font-size: 12px;
            }
            .slick-dots li.slick-active button:before {
              color: #eab308;
            }
            .slick-dots li button {
              width: 12px;
              height: 12px;
            }
            .slick-dots li {
              margin: 0 4px;
            }
            .slick-arrow {
              display: block !important;
              width: 48px;
              height: 48px;
            }
            .slick-arrow::before {
              display: none;
            }
            @media (max-width: 1024px) {
              .slick-arrow {
                display: none !important;
              }
            }
          `}</style>
          <Slider {...(window.innerWidth < 1024 ? settingsMobile : settings)}>
            {franchiseLocations.map((location) => (
              <div key={location.id} className="px-3">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-lg  overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold font-body">
                      {location.type}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
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
            <h3 className="text-3xl font-bold font-heading mb-4 text-gray-800">
              Join Our Growing Network
            </h3>
            <p className="text-lg font-body text-gray-700 mb-6 max-w-2xl mx-auto">
              Be part of the Danka success story. We're expanding and looking
              for passionate entrepreneurs to bring authentic Indian street food
              to new communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#inquiry"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold font-body hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Become a Franchise Partner
            </motion.a>
            <a
             href="https://wa.me/917887882300"
             target="_blank"
             rel="noopener noreferrer"
             className="group px-10 py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 font-body"
           >
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
             </svg>
             WhatsApp Us
             <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
           </a>
          

         
         </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurRestaurant;
