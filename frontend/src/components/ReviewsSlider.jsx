import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsSlider = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  // Helper function to generate thumbnail from Cloudinary video URL
  const generateThumbnail = (videoUrl) => {
    // Cloudinary transformation: extract frame at start (so_0) and convert to jpg
    // Original: https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/opening_mp5al4.mov
    // Thumbnail: https://res.cloudinary.com/dtaitsw4r/video/upload/so_0/v1765607049/opening_mp5al4.jpg
    try {
      // Replace /video/upload/ with /video/upload/so_0/ and change extension to jpg
      return videoUrl
        .replace('/video/upload/', '/video/upload/so_0/')
        .replace(/\.(mov|mp4)$/i, '.jpg');
    } catch (error) {
      console.error('Error generating thumbnail:', error);
      return videoUrl;
    }
  };

  const reviewVideos = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/opening_mp5al4.mov",
      thumbnail: generateThumbnail("https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/opening_mp5al4.mov"),
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607050/First_vaapy4.mov",
      thumbnail: generateThumbnail("https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607050/First_vaapy4.mov"),
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/second_y26sja.mov",
      thumbnail: generateThumbnail("https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/second_y26sja.mov"),
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/third_aczond.mov",
      thumbnail: generateThumbnail("https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607049/third_aczond.mov"),
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607051/fourth_t4jthe.mov",
      thumbnail: generateThumbnail("https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607051/fourth_t4jthe.mov"),
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607455/fifth_afmkvs.mov",
      thumbnail: generateThumbnail("https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607455/fifth_afmkvs.mov"),
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607454/six_ldqa9q.mov",
      thumbnail: generateThumbnail("https://res.cloudinary.com/dtaitsw4r/video/upload/v1765607454/six_ldqa9q.mov"),
    },
  ];

  // Pause all videos except the one that should be playing
  useEffect(() => {
    // Find all video elements in the DOM (including duplicates from slider)
    const allVideos = document.querySelectorAll('.reviews-carousel video');
    
    allVideos.forEach((videoElement) => {
      const videoId = parseInt(videoElement.getAttribute('data-video-id'));
      if (videoId === playingVideo) {
        // Allow this video to play
        return;
      } else {
        // Pause and mute all other videos
        videoElement.pause();
        videoElement.currentTime = 0; // Reset to beginning
        videoElement.muted = true;
      }
    });

    // Also update refs
    Object.keys(videoRefs.current).forEach((videoId) => {
      const videoElement = videoRefs.current[videoId];
      if (videoElement) {
        if (parseInt(videoId) === playingVideo) {
          // Allow this video to play
          videoElement.muted = false;
          return;
        } else {
          // Pause all other videos
          videoElement.pause();
          videoElement.currentTime = 0;
          videoElement.muted = true;
        }
      }
    });
  }, [playingVideo]);

  // Cleanup: pause all videos when component unmounts
  useEffect(() => {
    return () => {
      const allVideos = document.querySelectorAll('.reviews-carousel video');
      allVideos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
    };
  }, []);

  const handleVideoClick = (videoId) => {
    // Pause all videos first
    const allVideos = document.querySelectorAll('.reviews-carousel video');
    allVideos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
    });

    // If clicking the same video, toggle it off
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      // Set the new playing video
      setPlayingVideo(videoId);
    }
  };

  const handleVideoPlay = (videoId) => {
    // When a video starts playing, ensure all others are paused
    const allVideos = document.querySelectorAll('.reviews-carousel video');
    allVideos.forEach((video) => {
      const vidId = parseInt(video.getAttribute('data-video-id'));
      if (vidId !== videoId) {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      } else {
        video.muted = false;
      }
    });
  };

  const handleVideoPause = (videoId) => {
    // Update state when video is paused via controls
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    }
  };

  const handleVideoEnded = (videoId) => {
    // Reset when video ends
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
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
        <div className="reviews-carousel hidden md:block">
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
                  onClick={() => handleVideoClick(video.id)}
                >
                  <div className="relative w-full max-w-[280px] mx-auto aspect-[9/16] overflow-hidden bg-gray-900">
                    {playingVideo === video.id ? (
                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[video.id] = el;
                            el.setAttribute('data-video-id', video.id);
                          }
                        }}
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                        playsInline
                        muted={false}
                        onPlay={() => handleVideoPlay(video.id)}
                        onPause={() => handleVideoPause(video.id)}
                        onEnded={() => handleVideoEnded(video.id)}
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
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback: Try alternative Cloudinary thumbnail format
                            const altThumbnail = video.url
                              .replace('/video/upload/', '/image/upload/so_0/')
                              .replace(/\.(mov|mp4)$/i, '.jpg');
                            
                            if (e.target.src !== altThumbnail) {
                              e.target.src = altThumbnail;
                            } else {
                              // Final fallback: show gray background with play icon
                              e.target.style.display = 'none';
                              e.target.parentElement.style.backgroundColor = '#1f2937';
                            }
                          }}
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
        <div className="reviews-carousel md:hidden">
          <Slider {...settingsMobile}>
            {reviewVideos.map((video, index) => (
              <div key={video.id} className="px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => handleVideoClick(video.id)}
                >
                  <div className="relative w-full max-w-[280px] mx-auto aspect-[9/16] overflow-hidden bg-gray-900">
                    {playingVideo === video.id ? (
                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[video.id] = el;
                            el.setAttribute('data-video-id', video.id);
                          }
                        }}
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                        playsInline
                        muted={false}
                        onPlay={() => handleVideoPlay(video.id)}
                        onPause={() => handleVideoPause(video.id)}
                        onEnded={() => handleVideoEnded(video.id)}
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
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback: Try alternative Cloudinary thumbnail format
                            const altThumbnail = video.url
                              .replace('/video/upload/', '/image/upload/so_0/')
                              .replace(/\.(mov|mp4)$/i, '.jpg');
                            
                            if (e.target.src !== altThumbnail) {
                              e.target.src = altThumbnail;
                            } else {
                              // Final fallback: show gray background with play icon
                              e.target.style.display = 'none';
                              e.target.parentElement.style.backgroundColor = '#1f2937';
                            }
                          }}
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

