import React from 'react';

const ContinuousVideo = ({ videoName, width = 400, height = 320 }) => {
  const videoSrc = `/${videoName}`;
  return (
    <div className="video-container" style={{ width, height }}>
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ContinuousVideo;