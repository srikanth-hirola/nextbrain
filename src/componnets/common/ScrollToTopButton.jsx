/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Update the scroll progress (0-100)
    const progress = (scrollTop / scrollTotal) * 100;
    setScrollProgress(progress);
    
    // Show button after scrolling down 150vh
    if (scrollTop > window.innerHeight * 1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener on component mount and clean up on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
      <svg className="progress-circle" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" />
        <circle
          cx="50"
          cy="50"
          r="45"
          style={{
            strokeDashoffset: 283 - (283 * scrollProgress) / 100, // Progress in a circular path
          }}
        />
      </svg>
      <span className="arrow">↑</span>
    </div>
  );
};

export default ScrollToTopButton;
