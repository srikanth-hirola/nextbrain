/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Header from '../../componnets/common/Header'
import Footer from '../../componnets/common/Footer'
const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  const isAnimating = useRef(false);

  const slides = [
    {
      title: '© 2024 NextBrain', 
      subtitle: 'E-bike Revolution', 
      description: 'Discover the Future of Electric Mobility', 
      imgSrc: 'assets/banner.png'
    },
    {
      title: '© 2024 NextBrain', 
      subtitle: 'NextGen E-bike', 
      description: 'Ride with Power and Style', 
      imgSrc: 'assets/banner.png'
    },
    {
      title: '© 2024 NextBrain', 
      subtitle: 'Sustainability on Wheels', 
      description: 'Go Green, Ride Clean', 
      imgSrc: 'assets/banner.png'
    },
    {
      title: '© 2024 NextBrain', 
      subtitle: 'Speed Meets Efficiency', 
      description: 'Experience the Ultimate Ride', 
      imgSrc: 'assets/banner.png'
    },
    {
      title: '© 2024 NextBrain', 
      subtitle: 'The E-bike Advantage', 
      description: 'Transform Your Commute', 
      imgSrc: 'assets/banner.png'
    }
  ];
  

  useEffect(() => {
    gsap.set(imageRefs.current, { clipPath: 'circle(100% at 50% 50%)' });
    gsap.set(textRefs.current, { opacity: 1, y: 0 });
  }, []);

  const handleNext = () => {
    if (isAnimating.current) return; // Prevent multiple animations at once
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      }
    });

    // Animate the current slide out
    if (window.innerWidth < 768) {
      // Apply animation for screens below 768px
      tl.to(imageRefs.current[currentSlide], {
        clipPath: 'circle(80px at 50% 50%)', // Adjusted clipPath for smaller screens
        duration: 1,
        ease: 'power2.out'
      })
      .to(imageRefs.current[currentSlide], {
        y: 0, 
        clipPath: 'circle(0px at 50% -300%)', // Adjusted clipPath position
        duration: 1.5,
        ease: 'power2.in'
      }, '-=0.5'); // Keep the early start for smooth transition
    
      tl.to(textRefs.current[currentSlide], {
        y: 0, // Adjust the text animation if necessary
        opacity: 0,
        duration: 0.8,
        ease: 'power2.in'
      }, '-=0.8');
    } else {
      // Original animation for larger screens
      tl.to(imageRefs.current[currentSlide], {
        clipPath: 'circle(100px at 70% 50%)',
        duration: 1,
        ease: 'power2.out'
      })
      .to(imageRefs.current[currentSlide], {
        y: 0, 
        clipPath: 'circle(0px at 50% -450%)',
        duration: 2,
        ease: 'power2.in'
      }, '-=0.5'); // Start shrinking the image earlier for smooth transition
    
      tl.to(textRefs.current[currentSlide], {
        y: 0, // Move text up and out
        opacity: 0,
        duration: 0.9,
        ease: 'power2.in'
      }, '-=1');
    }
    

    const nextSlide = (currentSlide + 1) % totalSlides;

    tl.add(() => setCurrentSlide(nextSlide), '-=0.3');

    tl.fromTo(imageRefs.current[nextSlide], {
      
      clipPath: 'circle(0px at 100% 100%)'
    }, {
      clipPath: 'circle(100% at 50% 50%)',
      duration: 1,
      ease: 'power2.out'
      
    });

    tl.fromTo(textRefs.current[nextSlide], {
      y: 0,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.8'); 
  };

  const handlePrev = () => {
    if (isAnimating.current) return; // Prevent multiple animations at once
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      }
    });

    if (window.innerWidth < 768) {
      // Apply animation for screens below 768px
      tl.to(imageRefs.current[currentSlide], {
        clipPath: 'circle(80px at 50% 50%)', // Adjusted clipPath for smaller screens
        duration: 1,
        ease: 'power2.out'
      })
      .to(imageRefs.current[currentSlide], {
        y: 0, 
        clipPath: 'circle(0px at 50% -300%)', // Adjusted clipPath position
        duration: 1.5,
        ease: 'power2.in'
      }, '-=0.5'); // Keep the early start for smooth transition
    
      tl.to(textRefs.current[currentSlide], {
        y: 0, // Adjust the text animation if necessary
        opacity: 0,
        duration: 0.8,
        ease: 'power2.in'
      }, '-=0.8');
    } else {
      // Original animation for larger screens
      tl.to(imageRefs.current[currentSlide], {
        clipPath: 'circle(100px at 70% 50%)',
        duration: 1,
        ease: 'power2.out'
      })
      .to(imageRefs.current[currentSlide], {
        y: 0, 
        clipPath: 'circle(0px at 50% -450%)',
        duration: 2,
        ease: 'power2.in'
      }, '-=0.5'); // Start shrinking the image earlier for smooth transition
    
      tl.to(textRefs.current[currentSlide], {
        y: 0, // Move text up and out
        opacity: 0,
        duration: 0.9,
        ease: 'power2.in'
      }, '-=1');
    }

    // Move to the previous slide (looping)
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;

    tl.add(() => setCurrentSlide(prevSlide), '-=0.3');

    // Animate the new slide image from a circle in the bottom-right
    tl.fromTo(imageRefs.current[prevSlide], {
      clipPath: 'circle(0px at 100% 100%)'
    }, {
      clipPath: 'circle(100% at 50% 50%)',
      duration: 1,
      ease: 'power2.out'
    });

    // Animate the next text sliding down and appearing
    tl.fromTo(textRefs.current[prevSlide], {
      y: 0,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.8');
  };

  return (
   <div>
    <div className="gallery-page-main">
      <Header/>
      <div className="gallery-page-sub">
        <div className="gallery-circle-slider">
          <div className="gallery-bg"></div>
          <div className="gallery-main-slider">
            <div className="gallery-main-slider-sub">
              {slides.map((slide, index) => (
                <div
                  className={`gallery-slide ${index === currentSlide ? 'active' : ''}`}
                  key={index}
                >
                  <div className="gallery-main-slider-sub-text" ref={el => (textRefs.current[index] = el)}>
                    <div className="gallery-main-text">
                      <h2>{slide.title}</h2>
                      <h3>{slide.subtitle}</h3>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                  <div className="gallery-main-slider-sub-image">
                    <div className="gallery-main-image">
                      <img
                        src={slide.imgSrc}
                        alt="slide"
                        ref={el => (imageRefs.current[index] = el)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery-controls">
            <button className="prev-button" onClick={handlePrev}>
              <HiOutlineArrowLeft />
            </button>
            <button className="next-button" onClick={handleNext}>
              <HiOutlineArrowSmallRight />
            </button>
          </div>
        </div>
      </div>
     
    </div>
     <Footer/>
   </div>
  );
};

export default Gallery;
