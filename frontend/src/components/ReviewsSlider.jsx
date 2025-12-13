import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsSlider = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const reviewVideos = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/opening_mp5al4.mov",
      // thumbnail: "https://via.placeholder.com/300x400/f97316/ffffff?text=Review+1",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607050/First_vaapy4.mov",
      thumbnail: "https://via.placeholder.com/300x400/fb923c/ffffff?text=Review+2",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/second_y26sja.mov",
      thumbnail: "https://via.placeholder.com/300x400/ea580c/ffffff?text=Review+3",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/third_aczond.mov",
      thumbnail: "https://via.placeholder.com/300x400/c2410c/ffffff?text=Review+4",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607051/fourth_t4jthe.mov",
      thumbnail: "https://via.placeholder.com/300x400/9a3412/ffffff?text=Review+5",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607455/fifth_afmkvs.mov",
      thumbnail: "https://via.placeholder.com/300x400/7c2d12/ffffff?text=Review+6",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607454/six_ldqa9q.mov",
      thumbnail: "https://via.placeholder.com/300x400/431407/ffffff?text=Review+7",
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

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-heading mb-4 text-gray-800">
            What Our Customers Says
          </h2>
          <p className="text-base md:text-lg font-body text-gray-600 max-w-2xl mx-auto">
            Hear from our happy customers about their Danka experience
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="reviews-carousel">
          <Slider {...settings}>
            {reviewVideos.map((video, index) => (
              <div key={video.id} className="px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => setPlayingVideo(playingVideo === video.id ? null : video.id)}
                >
                  <div className="relative w-full max-w-[280px] mx-auto aspect-[9/16] overflow-hidden bg-gray-900">
                    {playingVideo === video.id ? (
                      <video
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                        playsInline
                      >
                        <source src={video.url} type="video/quicktime" />
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        <img
                          src={video.thumbnail}
                          alt={`Review ${video.id}`}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 bg-orange-500/90 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                            <svg
                              className="w-8 h-8 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom CSS for slick carousel */}
        <style>{`
          .reviews-carousel .slick-dots {
            bottom: -40px;
          }
          .reviews-carousel .slick-dots li button:before {
            color: #fb923c;
            font-size: 10px;
            opacity: 0.5;
          }
          .reviews-carousel .slick-dots li.slick-active button:before {
            color: #f97316;
            opacity: 1;
          }
          .reviews-carousel .slick-prev,
          .reviews-carousel .slick-next {
            z-index: 10;
          }
          .reviews-carousel .slick-prev {
            left: -24px;
          }
          .reviews-carousel .slick-next {
            right: -24px;
          }
          .reviews-carousel .slick-prev:before,
          .reviews-carousel .slick-next:before {
            color: #f97316;
            font-size: 26px;
          }

          @media (max-width: 768px) {
            .reviews-carousel .slick-prev {
              left: -12px;
            }
            .reviews-carousel .slick-next {
              right: -12px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ReviewsSlider;

