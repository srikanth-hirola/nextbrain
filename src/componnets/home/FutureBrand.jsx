/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import Lenis from '@studio-freight/lenis';
import Specifications from './Specifications';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FutureBrand = () => {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const newSectionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Check if screen is mobile size

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 3,
      smooth: true,
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // If on mobile, skip the circle animation
    if (!isMobile) {
      // GSAP ScrollTrigger for circle expansion/shrink on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100vh',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          // Dynamically calculate sizes for desktop only
          const maxSize = 2000;
          const maxBorder = 200;

          // Circle expansion
          const newSize = 30 + progress * (maxSize - 30);
          const newBorder = 4 + progress * (maxBorder - 4);
          const backgroundColor = progress > 0.1 ? '#fff' : 'red';

          gsap.to(circleRef.current, {
            width: `${newSize}px`,
            height: `${newSize}px`,
            borderWidth: `${newBorder}px`,
            backgroundColor: backgroundColor,
            duration: 0,
            ease: 'power3.inOut',
          });

          // Fade out the circle and the FutureBrand section
          gsap.to(circleRef.current, { opacity: progress < 1 ? 1 : 1.5, duration: 1.9 });

          if (progress === 1) {
            gsap.to(sectionRef.current, {
              opacity: 0,
              duration: 0.9,
              onComplete: () => {
                // Scroll to new section on complete
                gsap.to(window, { scrollTo: newSectionRef.current, duration: 1 });
              },
            });
            gsap.to(newSectionRef.current, { opacity: 1, duration: 0.9 });
          } else {
            gsap.to(sectionRef.current, { opacity: 1, duration: 0 });
          }
        },
      });
    } else {
      // If mobile, hide the circle directly
      gsap.set(circleRef.current, { display: 'none' });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section className="future-brand" ref={sectionRef}>
        <div className="column-row">
          <div className="column-text">
            <h3>Stress-free service</h3>
            <p>Unlock effortless mobility - from seamless registration to all-inclusive maintenance, we handle the details so you can enjoy the ride.</p>
          </div>
        </div>
        <div className="column-row">
          <div className="column-text">
            <h3>Stress-free service</h3>
            <p>Unlock effortless mobility - from seamless registration to all-inclusive maintenance, we handle the details so you can enjoy the ride.</p>
          </div>
        </div>
        <div className="column-row">
          <div className="column-text">
            <h3>Stress-free service</h3>
            <p>Unlock effortless mobility - from seamless registration to all-inclusive maintenance, we handle the details so you can enjoy the ride.</p>
          </div>
        </div>
        <div className="column-row column-row-4">
          <div className="column-text">
            <h3>Stress-free service</h3>
            <p>Unlock effortless mobility - from seamless registration to all-inclusive maintenance, we handle the details so you can enjoy the ride.</p>
          </div>
        </div>

        <div className="center-circle" ref={circleRef}></div>
      </section>
      <section className="new-section" ref={newSectionRef} >
        <Specifications />
      </section>
    </div>
  );
};

export default FutureBrand;

// /* eslint-disable no-unused-vars */
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
// import Lenis from '@studio-freight/lenis';
// import Specifications from './Specifications';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const FutureBrand = () => {
//   const circleRef = useRef(null);
//   const sectionRef = useRef(null);
//   const newSectionRef = useRef(null);

//   useEffect(() => {
//     // Initialize Lenis for smooth scrolling
//     const lenis = new Lenis({
//       duration: 3,
//       smooth: true,
//     });

//     const animate = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(animate);
//     };

//     requestAnimationFrame(animate);

//     // GSAP ScrollTrigger for circle expansion/shrink on scroll
//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: 'top top',
//       end: '+=100vh',
//       scrub: true,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const isMobile = window.innerWidth <= 768; // Check if screen is mobile size

//         // Dynamically calculate sizes for desktop and mobile
//         const maxSize = isMobile ? window.innerWidth : 2000; // For mobile, circle grows to full width
//         const maxBorder = isMobile ? 50 : 200; // Reduce border size for mobile

//         // Circle expansion
//         const newSize = 30 + progress * (maxSize - 30);
//         const newBorder = 4 + progress * (maxBorder - 4);
//         const backgroundColor = progress > 0.1 ? '#fff' : 'red';

//         gsap.to(circleRef.current, {
//           width: `${newSize}px`,
//           height: `${newSize}px`,
//           borderWidth: `${newBorder}px`,
//           backgroundColor: backgroundColor,
//           duration: 0,
//           ease: 'power3.inOut',
//         });

//         // Fade out the circle and the FutureBrand section
//         gsap.to(circleRef.current, { opacity: progress < 1 ? 1 : 1.5, duration: 1.9 });

//         if (progress === 1) {
//           gsap.to(sectionRef.current, {
//             opacity: 0,
//             duration: 0.9,
//             onComplete: () => {
//               // Scroll to new section on complete
//               gsap.to(window, { scrollTo: newSectionRef.current, duration: 1 });
//             },
//           });
//           gsap.to(newSectionRef.current, { opacity: 1, duration: 0.9 });
//         } else {
//           gsap.to(sectionRef.current, { opacity: 1, duration: 0 });
//         }
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div>
//       <section className="future-brand" ref={sectionRef}>
//         <div className="column-row">
//           <div className="column-text">
//             <h3>Stress-free service</h3>
//             <p>Unlock effortless mobility - from seamless registration to all-inclusive maintenance, we handle the details so you can enjoy the ride.</p>
//           </div>
//         </div>
//         <div className="column-row">
//           <div className="column-text">
//             <h3>Stress-free service</h3>
//             <p>Unlock effortless mobility - from seamless registration to all-inclusive maintenance, we handle the details so you can enjoy the ride.</p>
//           </div>
//         </div>
//         <div className="column-row">
//           <div className="column-text">
//             <h3>Stress-free service</h3>
//             <p>Unlock effortless mobility - from seamless registration to all-inclusive maintenance, we handle the details so you can enjoy the ride.</p>
//           </div>
//         </div>
//         <div className="column-row column-row-4">
//           <div className="column-text">
//             <h3>Stress-free service</h3>
//             <p>Unlock effortless mobility - from seamless registration to all-inclusive maintenance, we handle the details so you can enjoy the ride.</p>
//           </div>
//         </div>

//         <div className="center-circle" ref={circleRef}></div>
//       </section>
//       <section className="new-section" ref={newSectionRef} style={{ opacity: 0 }}>
//         <Specifications />
//       </section>
//     </div>
//   );
// };

// export default FutureBrand;
