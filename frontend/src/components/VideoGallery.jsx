import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import VideoCard from './VideoCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoGallery = () => {
  // YouTube Shorts URLs
  const videos = [
    {
      id: 1,
      url: 'https://youtube.com/shorts/IBx3KdR1L20?feature=share',
      title: 'Video 1'
    },
    {
      id: 2,
      url: 'https://youtube.com/shorts/22Zh-86CMS0?feature=share',
      title: 'Video 2'
    },
    {
      id: 3,
      url: 'https://youtube.com/shorts/64t3eyzaUlQ?feature=share',
      title: 'Video 3'
    },
    {
      id: 4,
      url: 'https://youtube.com/shorts/PBOMCYVgX4c?feature=share',
      title: 'Video 4'
    }
  ];

  // Custom arrow components
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow`}
        style={{
          ...style,
          display: 'block',
          right: '-45px',
          top: '50%',
          transform: 'translateY(-50%)',
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
          display: 'block',
          left: '-45px',
          top: '50%',
          transform: 'translateY(-50%)',
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
    cssEase: 'ease-out',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slick-dots',
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
    cssEase: 'ease-out',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: 'slick-dots',
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
    <section className="py-8 px-2 sm:px-4 lg:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Gallery</h2>
          <p className="text-lg text-gray-600">Watch our collection of videos</p>
        </motion.div>
        
        <div className="video-gallery-carousel lg:px-6 xl:px-8 overflow-visible">
          <Slider {...(window.innerWidth > 768 ? settings : settingsMobile)}>
            {videos.map((video, index) => (
              <div key={video.id} className="px-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VideoCard
                    videoUrl={video.url}
                    title={video.title}
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom CSS for slick carousel */}
        <style>{`
          .video-gallery-carousel .slick-dots {
            bottom: -40px;
          }
          .video-gallery-carousel .slick-dots li button:before {
            color: #d1d5db;
            font-size: 12px;
          }
          .video-gallery-carousel .slick-dots li.slick-active button:before {
            color: #eab308;
          }
          .video-gallery-carousel .slick-dots li button {
            width: 12px;
            height: 12px;
          }
          .video-gallery-carousel .slick-dots li {
            margin: 0 4px;
          }
          .video-gallery-carousel .slick-arrow {
            display: block !important;
            width: 48px;
            height: 48px;
          }
          .video-gallery-carousel .slick-arrow::before {
            display: none;
          }
          @media (max-width: 1024px) {
            .video-gallery-carousel .slick-arrow {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default VideoGallery;
