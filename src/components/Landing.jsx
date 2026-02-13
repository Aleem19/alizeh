import React, { useState } from 'react';
import pepperVideo from '../assets/Pepper.mov';

const Landing = ({ onReady }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);

  const handleNoButtonHover = () => {
    // Generate random position within viewport bounds
    const maxX = window.innerWidth - 200; // button width buffer
    const maxY = window.innerHeight - 100; // button height buffer
    const newX = Math.random() * Math.max(maxX, 0);
    const newY = Math.random() * Math.max(maxY, 0);
    
    setNoButtonPosition({ x: newX, y: newY });
    setIsNoButtonMoved(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover md:object-contain z-0"
        style={{
          minWidth: '100%',
          minHeight: '100%'
        }}
        src={pepperVideo}
      >
        <source src={pepperVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white drop-shadow-lg animate-pulse">
          Are you ready?
        </h1>
        
        {/* No Button positioned below heading */}
        <div className="mb-8">
          <button
            onMouseEnter={handleNoButtonHover}
            onMouseDown={handleNoButtonHover}
            onClick={(e) => e.preventDefault()}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            style={isNoButtonMoved ? {
              position: 'fixed',
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
              transition: 'all 0.3s ease-out',
              zIndex: 30
            } : {}}
          >
            No 😢
          </button>
        </div>
        
        {/* Yes Button */}
        <div className="mt-8">
          <button
            onClick={onReady}
            className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold text-xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Yes, I'm Ready! 💝
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;