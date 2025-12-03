import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DishesCarousel = () => {
  const dishes = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667363/WhatsApp_Image_2025-10-24_at_17.18.24_f1d0aa6d_dc7roj.jpg",
      name: "Delicious Panipuri",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0011_rzx4wy.jpg",
      name: "Tasty Chaat",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0012_loitgs.jpg",
      name: "Street Food Special",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0013_jcj0hd.jpg",
      name: "Authentic Flavors",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0014_zyqewc.jpg",
      name: "Fresh & Crispy",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0010_lwamfi.jpg",
      name: "Spicy Delights",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0007_d5ljhp.jpg",
      name: "Flavorful Treats",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0006_wyosue.jpg",
      name: "Traditional Taste",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0009_ttx3nb.jpg",
      name: "Irresistible Chaat",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0005_c6spj0.jpg",
      name: "Danka Special",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-orange-50 lg:h-screen">
      <div className="max-w-7xl mx-auto flex flex-col justify-between my-auto ">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our Delicious Dishes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our mouth-watering collection of authentic Indian street
            food
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="dishes-carousel"
        >
          <div className="lg:hidden">
              <Slider {...settingsMobile}>
            {dishes.map((dish) => (
              <div key={dish.id} className="px-3">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-bold">{dish.name}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
          </div>
          <div className="hidden lg:block">
            <Slider {...settings}>
              {dishes.map((dish) => (
                <div key={dish.id} className="px-3">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-bold">{dish.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* Custom CSS for slick carousel */}
        <style>{`
          .dishes-carousel .slick-dots {
            bottom: -50px;
          }
          .dishes-carousel .slick-dots li button:before {
            color: #f97316;
            font-size: 12px;
          }
          .dishes-carousel .slick-dots li.slick-active button:before {
            color: #f97316;
          }
          .dishes-carousel .slick-prev,
          .dishes-carousel .slick-next {
            z-index: 1;
          }
          .dishes-carousel .slick-prev {
            left: -40px;
          }
          .dishes-carousel .slick-next {
            right: -40px;
          }
          .dishes-carousel .slick-prev:before,
          .dishes-carousel .slick-next:before {
            color: #f97316;
            font-size: 30px;
          }
          @media (max-width: 768px) {
            .dishes-carousel .slick-prev {
              left: -20px;
            }
            .dishes-carousel .slick-next {
              right: -20px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default DishesCarousel;
