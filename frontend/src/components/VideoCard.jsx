import React, { useRef, useEffect } from 'react';

const VideoCard = ({ videoUrl, title, videoId, isPlaying, onPlay, videoRef }) => {
  const iframeRef = useRef(null);

  // Extract video ID from YouTube Shorts URL
  const getVideoId = (url) => {
    const match = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const youtubeVideoId = getVideoId(videoUrl);
  
  if (!youtubeVideoId) {
    return null;
  }

  // Convert to embed URL format with enablejsapi for control
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&origin=${window.location.origin}`;

  // Pass iframe ref to parent
  useEffect(() => {
    if (videoRef && iframeRef.current) {
      videoRef(iframeRef.current);
    }
  }, [videoRef]);

  // Handle iframe click to detect when video starts playing
  const handleIframeClick = () => {
    if (onPlay) {
      onPlay();
    }
  };

  // Pause video when another video is playing
  useEffect(() => {
    if (!isPlaying && iframeRef.current) {
      try {
        // Send pause command to YouTube iframe
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'pauseVideo',
            args: '',
          }),
          'https://www.youtube.com'
        );
      } catch (error) {
        // If postMessage fails, reload iframe to stop video
        const currentSrc = iframeRef.current.src;
        if (currentSrc.includes('autoplay=1')) {
          iframeRef.current.src = currentSrc.replace('autoplay=1', 'autoplay=0');
        }
      }
    }
  }, [isPlaying]);

  return (
    <div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div 
        className="relative pb-[177.78%] h-0 overflow-hidden rounded-lg"
        onClick={handleIframeClick}
      >
        <iframe
          ref={iframeRef}
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
