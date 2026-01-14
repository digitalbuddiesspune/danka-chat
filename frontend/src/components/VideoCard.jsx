import React from 'react';

const VideoCard = ({ videoUrl, title }) => {
  // Extract video ID from YouTube Shorts URL
  const getVideoId = (url) => {
    const match = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);
  
  if (!videoId) {
    return null;
  }

  // Convert to embed URL format
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative pb-[177.78%] h-0 overflow-hidden rounded-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title={title || 'YouTube Short'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;
