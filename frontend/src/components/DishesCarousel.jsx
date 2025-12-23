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
      name: "Delicious Bhel",
      description: "Crispy, spicy & full of flavor – a must-try from our street food menu.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0011_rzx4wy.jpg",
      name: "All In One Chaat",
      description: "A perfect mix of crunchy, tangy & spicy flavors topped with fresh chutneys and masalas.",

    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0012_loitgs.jpg",
      name: "Aloo Tikki Chaat",
      description: "A perfect mix of crunchy, tangy & spicy flavors topped with fresh chutneys and masalas.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0013_jcj0hd.jpg",
      name: "Sev Puri",
      description: "Crispy puris loaded with potatoes, chutneys, and topped with crunchy sev for extra zing.",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0014_zyqewc.jpg",
      name: "Dahi Wada",
      description: "Soft lentil dumplings soaked in creamy yogurt, finished with sweet & spicy chutneys.",
    },
    
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0007_d5ljhp.jpg",
      name: "Samosa Chaat",
      description: "Crispy samosas crushed and topped with spicy chana, yogurt, and bold desi chutneys.",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0006_wyosue.jpg",
      name: "Mumbaiya Bhel",
      description: "Crunchy papdi layered with potatoes, yogurt, and sweet-tangy chutneys in every bite.",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0009_ttx3nb.jpg",
      name: "Paani Puri",
      description: "Dry-style chaat made with crisp puris, flavorful masalas, and perfectly balanced spices.",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0005_c6spj0.jpg",
      name: "Tokri Chaat",
      description: "Crisp puris filled with potatoes, chilled yogurt, and rich chutneys for a creamy crunch.",
    },
  ];

  // Custom arrow components
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
          arrows: false,
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
  return (
    <section className="py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="inline-flex items-center px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium font-body mb-3">
            Taste the TestoBites Experience
          </p>
          <h2 className="text-4xl font-bold font-heading mb-4 text-gray-800">
            Our Signature Street Food Dishes
          </h2>

          <p className="text-base md:text-lg font-body text-gray-600 max-w-2xl mx-auto">
            Handcrafted with love, hygiene and authentic Indian flavors that
            bring the streets to your plate.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="dishes-carousel">
          <div className="hidden lg:block px-8 lg:px-12 xl:px-16 overflow-visible">
            <Slider {...settings}>
              {dishes.map((dish, index) => (
                <div key={dish.id} className="px-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group rounded-2xl border border-yellow-100 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/90 text-white text-xs font-semibold font-body shadow-sm">
                          Danka Special
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg md:text-xl font-bold font-heading text-white drop-shadow-sm">
                          {dish.name}
                        </h3>
                        {/* <p className="mt-1 text-xs md:text-sm font-body text-yellow-100/90">
                          {dish.description}
                         
                        </p> */}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
            <div className="block lg:hidden">
            <Slider {...settingsMobile}>
              {dishes.map((dish, index) => (
                <div key={dish.id} className="px-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl border border-yellow-100 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/90 text-white text-xs font-semibold font-body shadow-sm">
                          Danka Special
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg md:text-xl font-bold font-heading text-white drop-shadow-sm">
                          {dish.name}
                        </h3>
                        <p className="mt-1 text-xs md:text-sm font-body text-yellow-100/90">
                          Crispy, spicy & full of flavor – a must-try from our
                          street food menu.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Custom CSS for slick carousel */}
        <style>{`
          .dishes-carousel .slick-dots {
            bottom: -35px;
          }
          .dishes-carousel .slick-dots li button:before {
            color: #d1d5db;
            font-size: 12px;
          }
          .dishes-carousel .slick-dots li.slick-active button:before {
            color: #eab308;
          }
          .dishes-carousel .slick-dots li button {
            width: 12px;
            height: 12px;
          }
          .dishes-carousel .slick-dots li {
            margin: 0 4px;
          }
          .dishes-carousel .slick-arrow {
            display: block !important;
            width: 48px;
            height: 48px;
          }
          .dishes-carousel .slick-arrow::before {
            display: none;
          }
          @media (max-width: 1024px) {
            .dishes-carousel .slick-arrow {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default DishesCarousel;
