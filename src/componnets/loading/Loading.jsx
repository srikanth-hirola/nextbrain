import React, { useEffect, useState, useRef } from 'react';
import { FaCircleNotch } from 'react-icons/fa'; // Import React Icon
import gsap from 'gsap';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const lineRef = useRef(null);
  const loadingRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // Animate the loading progress
    const progressTween = gsap.to(loadingRef.current, {
      duration: 30,
      width: '100%', // Change width instead of x position
      ease: 'power1.out',
    });

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        const nextProgress = prev + 1;
        if (nextProgress >= 100) {
          clearInterval(progressInterval);
          progressTween.kill();

          // Split the screen vertically after loading
          gsap.to('.top-half', { y: '-50vh', duration: 1 });
          gsap.to('.bottom-half', { y: '50vh', duration: 1, onComplete: onLoadingComplete });

          return 100;
        }
        return nextProgress;
      });
    }, 30);

    return () => {
      clearInterval(progressInterval);
      progressTween.kill();
    };
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      {/* Loading Circle Icon */}
      <div className="loading-container">
        <FaCircleNotch className="loading-icon" size={80} />
        <div className="progress-line" ref={loadingRef} />
      </div>

      {/* Splitting screen sections */}
      <div className="screen-split top-half" />
      <div className="screen-split bottom-half" />
    </div>
  );
};

export default LoadingScreen;
