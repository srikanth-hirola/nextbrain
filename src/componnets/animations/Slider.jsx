/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const slides = [
  {
    id: 1,
    image: 'assets/banner.png',
    title: 'Slide 1',
  },
  {
    id: 2,
    image: 'assets/banner.png',
    title: 'Slide 2',
  },
  {
    id: 3,
    image: 'assets/banner.png',
    title: 'Slide 3',
  },
];

const ClipPathSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!isAnimating.current) {
      const activeSlide = slideRefs.current[currentSlide];

      // GSAP animation for Clip Path Reveal and Sliding Up
      gsap.fromTo(
        activeSlide,
        { 
          width: '70vw', // Start as a 70vw width image
          height: '100vh',
          clipPath: 'circle(100% at 50% 50%)',
        },
        {
          clipPath: 'circle(0% at calc(100% - 2px) calc(100% - 200px))', // Circle moves to bottom-right corner with offset
          duration: 1.5,
          ease: 'power2.inOut',
          onStart: () => (isAnimating.current = true),
          onComplete: () => {
            gsap.to(activeSlide, {
              y: '-100%', // Slide the image up after the circle animation
              duration: 0.8,
              ease: 'power2.in',
              onComplete: () => (isAnimating.current = false),
            });
          },
        }
      );
    }
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating.current) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating.current) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => (slideRefs.current[index] = el)}
          className={`slide main-slidee ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            display: index === currentSlide ? 'block' : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '70vw',
            height: '100vh',
          }}
        >
          <h2>{slide.title}</h2>
        </div>
      ))}

      {/* Navigation buttons */}
      <button className="prev-btn" onClick={prevSlide}>‹</button>
      <button className="next-btn" onClick={nextSlide}>›</button>
    </div>
  );
};

export default ClipPathSlider;

// import React, { useRef, useEffect, useState } from 'react';
// import { gsap } from 'gsap';

// const slides = [
//   {
//     id: 1,
//     image: 'assets/banner.png',
//     title: 'Slide 1',
//   },
//   {
//     id: 2,
//     image: 'assets/banner.png',
//     title: 'Slide 2',
//   },
//   {
//     id: 3,
//     image: 'assets/banner.png',
//     title: 'Slide 3',
//   },
// ];

// const ClipPathSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideRefs = useRef([]);
//   const isAnimating = useRef(false);

//   useEffect(() => {
//     if (!isAnimating.current) {
//       const activeSlide = slideRefs.current[currentSlide];

//       // GSAP Animation for Clip Path Reveal
//       gsap.fromTo(
//         activeSlide,
//         { clipPath: 'circle(0% at 50% 50%)' }, // Starts as a small circle at the center
//         {
//           clipPath: 'circle(150% at calc(100% - 100px) calc(100% - 100px))', // Circle grows and moves to bottom-right
//           duration: 1.5,
//           ease: 'power2.inOut',
//           onStart: () => (isAnimating.current = true),
//           onComplete: () => (isAnimating.current = false),
//         }
//       );
//     }
//   }, [currentSlide]);

//   const nextSlide = () => {
//     if (!isAnimating.current) {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating.current) {
//       setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     }
//   };

//   return (
//     <div className="slider-container">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           ref={(el) => (slideRefs.current[index] = el)}
//           className={`slide main-slidee ${index === currentSlide ? 'active' : ''}`}
//           style={{ 
//             backgroundImage: `url(${slide.image})`,
//             display: index === currentSlide ? 'block' : 'none',
//             height: '90vh',
//           }}
//         >
//           <h2>{slide.title}</h2>
//         </div>
//       ))}
//       {/* Navigation buttons */}
//       <button className="prev-btn" onClick={prevSlide}>‹</button>
//       <button className="next-btn" onClick={nextSlide}>›</button>
//     </div>
//   );
// };

// export default ClipPathSlider;

// // import React, { useRef, useEffect, useState } from 'react';
// // import { gsap } from 'gsap';

// // const slides = [
// //   {
// //     id: 1,
// //     image: 'assets/banner.png',
// //     title: 'Slide 1',
// //   },
// //   {
// //     id: 2,
// //     image: 'assets/banner.png',
// //     title: 'Slide 2',
// //   },
// //   {
// //     id: 3,
// //     image: 'assets/banner.png',
// //     title: 'Slide 3',
// //   },
// // ];

// // const ClipPathSlider = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const slideRefs = useRef([]);
// //   const isAnimating = useRef(false);

// //   useEffect(() => {
// //     if (!isAnimating.current) {
// //       const activeSlide = slideRefs.current[currentSlide];

// //       // GSAP Animation for Clip Path Reveal
// //       gsap.fromTo(
// //         activeSlide,
// //         { clipPath: 'circle(0% at 50% 50%)' },
// //         {
// //           clipPath: 'circle(150% at 50% 50%)',
// //           duration: 1.5,
// //           ease: 'power2.inOut',
// //           onStart: () => (isAnimating.current = true),
// //           onComplete: () => (isAnimating.current = false),
// //         }
// //       );
// //     }
// //   }, [currentSlide]);

// //   const nextSlide = () => {
// //     if (!isAnimating.current) {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }
// //   };

// //   const prevSlide = () => {
// //     if (!isAnimating.current) {
// //       setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
// //     }
// //   };

// //   return (
// //     <div className="slider-container">
// //       {slides.map((slide, index) => (
// //         <div
// //           key={slide.id}
// //           ref={(el) => (slideRefs.current[index] = el)}
// //           className={`slide main-slidee ${index === currentSlide ? 'active' : ''}`}
// //           style={{ backgroundImage: `url(${slide.image})`, display: index === currentSlide ? 'block' : 'none' ,height:'90vh'}}
// //         >
// //           <h2>{slide.title}</h2>
// //         </div>
// //       ))}
// //       {/* Navigation buttons */}
// //       <button className="prev-btn" onClick={prevSlide}>‹</button>
// //       <button className="next-btn" onClick={nextSlide}>›</button>
// //     </div>
// //   );
// // };

// // export default ClipPathSlider;
