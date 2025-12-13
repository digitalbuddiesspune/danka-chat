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
      name: "Katori Chaat",
      description: "A perfect mix of crunchy, tangy & spicy flavors topped with fresh chutneys and masalas.",

    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0012_loitgs.jpg",
      name: "Street Food Special",
      description: "A perfect mix of crunchy, tangy & spicy flavors topped with fresh chutneys and masalas.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0013_jcj0hd.jpg",
      name: "Masala Papdi Chaat",
      description: "Crispy puris loaded with potatoes, chutneys, and topped with crunchy sev for extra zing.",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667362/IMG-20251016-WA0014_zyqewc.jpg",
      name: "Fresh & Crispy",
      description: "Soft lentil dumplings soaked in creamy yogurt, finished with sweet & spicy chutneys.",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0010_lwamfi.jpg",
      name: "Sukhi Bhel",
      description:"Light, crunchy & tangy puffed-rice chaat mixed with fresh veggies and chutneys."
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0007_d5ljhp.jpg",
      name: "Samosa Chaat",
      description: "Crispy samosas crushed and topped with spicy chana, yogurt, and bold desi chutneys.",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0006_wyosue.jpg",
      name: "Ragda Chaat",
      description: "Crunchy papdi layered with potatoes, yogurt, and sweet-tangy chutneys in every bite.",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0009_ttx3nb.jpg",
      name: "Paani Puri",
      description: "Dry-style chaat made with crisp puris, flavorful masalas, and perfectly balanced spices.",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dtaitsw4r/image/upload/v1764667361/IMG-20251016-WA0005_c6spj0.jpg",
      name: "Dahi Puri",
      description: "Crisp puris filled with potatoes, chilled yogurt, and rich chutneys for a creamy crunch.",
    },
  ];

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
          <p className="inline-flex items-center px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium font-body mb-3">
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
        <div
         
          className="dishes-carousel"
        >
          <div className="hidden lg:block">
            <Slider {...settings}>
              {dishes.map((dish, index) => (
                <div key={dish.id} className="px-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl border border-orange-100 transition-all duration-300 overflow-hidden"
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
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-semibold font-body shadow-sm">
                          Danka Special
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg md:text-xl font-bold font-heading text-white drop-shadow-sm">
                          {dish.name}
                        </h3>
                        <p className="mt-1 text-xs md:text-sm font-body text-orange-100/90">
                          {dish.description}
                         
                        </p>
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
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl border border-orange-100 transition-all duration-300 overflow-hidden"
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
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-semibold font-body shadow-sm">
                          TestoBites Special
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg md:text-xl font-bold font-heading text-white drop-shadow-sm">
                          {dish.name}
                        </h3>
                        <p className="mt-1 text-xs md:text-sm font-body text-orange-100/90">
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
            color: #fb923c;
            font-size: 10px;
            opacity: 0.5;
          }
          .dishes-carousel .slick-dots li.slick-active button:before {
            color: #f97316;
            opacity: 1;
          }
          .dishes-carousel .slick-prev,
          .dishes-carousel .slick-next {
            z-index: 10;
          }
          .dishes-carousel .slick-prev {
            left: -24px;
          }
          .dishes-carousel .slick-next {
            right: -24px;
          }
          .dishes-carousel .slick-prev:before,
          .dishes-carousel .slick-next:before {
            color: #f97316;
            font-size: 26px;
          }

          @media (max-width: 768px) {
            .dishes-carousel .slick-prev {
              left: -12px;
            }
            .dishes-carousel .slick-next {
              right: -12px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default DishesCarousel;
