/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray('.h-sub_dot-wrapper');
    const fillLine = document.querySelector('.h-sub_fill-line');
    const totalSections = sections.length;

    // Function to manage blur and line animation based on screen width
    const animateOnScroll = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      if (isMobile) {
        // On mobile screens, no blur, but animate the line
        gsap.set(sections, { filter: 'none' });
        gsap.set(fillLine, { width: '0%' });

        sections.forEach((section, index) => {
          const startScroll = `${index * 100}vh top`; // Start when section enters the viewport
          const endScroll = `${(index + 1) * 100}vh top`; // End when the next section comes in

          ScrollTrigger.create({
            trigger: section,
            start: startScroll,
            end: endScroll,
            scrub: true,
            onUpdate: (self) => {
              const progress = ((index + self.progress) / totalSections) * 100;
              gsap.to(fillLine, { width: `${progress}%`, duration: 0.5 });
            },
          });
        });
      } else {
        // On larger screens, apply blur and animate the line as well
        gsap.set(sections, { filter: 'blur(10px)' });
        
        sections.forEach((section, index) => {
          const startScroll = `${index * 100}vh top`; // Start unblurring as each section enters
          const endScroll = `${(index + 1) * 100}vh top`; // End when the next section comes into view

          ScrollTrigger.create({
            trigger: section,
            start: startScroll,
            end: endScroll,
            scrub: true,
            onEnter: () => {
              // Unblur the current section
              gsap.to(section, { filter: 'blur(0px)', duration: 0.5 });
              // Sync the fill line width based on the current index
              syncFillLine(index);
            },
            onLeaveBack: () => {
              // Blur the section again when leaving
              gsap.to(section, { filter: 'blur(10px)', duration: 0.5 });
              // Sync the fill line width for the previous index
              if (index > 0) syncFillLine(index - 1);
            },
          });
        });
      }
    };

    // Function to sync fill line width
    const syncFillLine = (index) => {
      const fillWidth = `${((index + 1) / totalSections) * 100}%`; // Calculate the fill width
      gsap.to(fillLine, { width: fillWidth, duration: 0.5 }); // Animate the width of the fill line
    };

    // Initial call to set up scroll animations and blur
    animateOnScroll();

    // Listen for resize to adapt to screen size changes
    window.addEventListener('resize', animateOnScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', animateOnScroll);
    };
  }, []);

  return (
    <div>
      <section className="section_h-sub">
        <div className="padding-global">
          <div className="container-large">
            <div className="h-sub_height">
              <div className="h-sub_sticky-wrapper">
                <div className="h-sub_component">
                  <div className="text-align-center">
                    <div className="max-width-small align-center">
                      <div className="margin-bottom margin-small">
                        <h2 className="heading-style-h3">
                          <span className="light-green-underline">149€/month</span> & not a single worry
                        </h2>
                      </div>
                      <p className="text-size-medium">
                        We take care of registration, insurance, and maintenance to ensure you have a hassle-free ride!
                        <sup>*including theft coverage under certain conditions.</sup>
                      </p>
                    </div>
                  </div>
                  <div className="h-sub_bottom">
                    <div className="h-sub_bottom-component">
                      <div className="h-sub_line-wrapper">
                        <div className="h-sub_fill-line"></div>
                      </div>
                      {/* Feature sections */}
                      <div className="h-sub_dot-wrapper is-1">
                        <div className="h-sub_dot is-1">
                          <div className="h-sub_item-wrapper">
                            <div className="margin-bottom margin-xxsmall">
                              <h3 className="heading-style-h5">We register</h3>
                            </div>
                            <p className="text-size-small">
                              We manage the registration process at the fleet level, eliminating administrative tasks for our customers.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-sub_dot-wrapper is-2">
                        <div className="h-sub_dot is-2">
                          <div className="h-sub_item-wrapper">
                            <div className="margin-bottom margin-xxsmall">
                              <h3 className="heading-style-h5">We insure</h3>
                            </div>
                            <p className="text-size-small">
                              We insure all our vehicles against theft and provide RC insurance coverage for every rider's trip to support you in any situation.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-sub_dot-wrapper is-3">
                        <div className="h-sub_dot is-3">
                          <div className="h-sub_item-wrapper">
                            <div className="margin-bottom margin-xxsmall">
                              <h3 className="heading-style-h5">We maintain</h3>
                            </div>
                            <p className="text-size-small">
                              Annual vehicle maintenance and swift assistance within 48 hours. Non-working vehicles are immediately replaced, no questions asked.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className="h-sub_trigger"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;

// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable no-unused-vars */
// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const FeatureSection = () => {
//   useEffect(() => {
//     const sections = gsap.utils.toArray('.h-sub_dot-wrapper');
//     const fillLine = document.querySelector('.h-sub_fill-line');
//     const totalSections = sections.length;

//     // Function to set or remove blur based on screen width
//     const applyBlurEffect = () => {
//       const isMobile = window.matchMedia('(max-width: 768px)').matches;

//       // If it's mobile, remove blur, otherwise set it
//       if (isMobile) {
//         gsap.set(sections, { filter: 'blur(0px)' });
//       } else {
//         gsap.set(sections, { filter: 'blur(10px)' });
//       }
//     };

//     // Call the function initially and on window resize
//     applyBlurEffect();
//     window.addEventListener('resize', applyBlurEffect);

//     // Set up the ScrollTrigger for each section only if not on mobile
//     sections.forEach((section, index) => {
//       const startScroll = `${index * 100}vh top`; // Start unblurring as each section enters
//       const endScroll = `${(index + 1) * 100}vh top`; // End when the next section comes into view

//       ScrollTrigger.create({
//         trigger: section,
//         start: startScroll, // Starts when the top of the section hits the viewport
//         end: endScroll, // Ends when the top of the next section comes into view
//         scrub: true, // Smooth scrubbing
//         onEnter: () => {
//           // Only apply the blur/unblur animation if not on mobile
//           if (!window.matchMedia('(max-width: 768px)').matches) {
//             gsap.to(section, { filter: 'blur(0px)', duration: 0.5 });
//           }
//           syncFillLine(index);
//         },
//         onLeaveBack: () => {
//           if (!window.matchMedia('(max-width: 768px)').matches) {
//             gsap.to(section, { filter: 'blur(10px)', duration: 0.5 });
//           }
//           if (index > 0) syncFillLine(index - 1);
//         },
//       });
//     });

//     // Function to sync fill line width
//     const syncFillLine = (index) => {
//       const fillWidth = `${((index + 1) / totalSections) * 100}%`;
//       gsap.to(fillLine, { width: fillWidth, duration: 0.5 });
//     };

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', applyBlurEffect);
//     };
//   }, []);

//   return (
//     <div>
//       <section className="section_h-sub">
//         <div className="padding-global">
//           <div className="container-large">
//             <div className="h-sub_height">
//               <div className="h-sub_sticky-wrapper">
//                 <div className="h-sub_component">
//                   <div className="text-align-center">
//                     <div className="max-width-small align-center">
//                       <div className="margin-bottom margin-small">
//                         <h2 className="heading-style-h3">
//                           <span className="light-green-underline">149€/month</span> & not a single worry
//                         </h2>
//                       </div>
//                       <p className="text-size-medium">
//                         We take care of registration, insurance, and maintenance to ensure you have a hassle-free ride!
//                         <sup>*including theft coverage under certain conditions.</sup>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="h-sub_bottom">
//                     <div className="h-sub_bottom-component">
//                       <div className="h-sub_line-wrapper">
//                         <div className="h-sub_fill-line"></div>
//                       </div>
//                       {/* Feature sections */}
//                       <div className="h-sub_dot-wrapper is-1">
//                         <div className="h-sub_dot is-1">
//                           <div className="h-sub_item-wrapper">
//                             <div className="margin-bottom margin-xxsmall">
//                               <h3 className="heading-style-h5">We register</h3>
//                             </div>
//                             <p className="text-size-small">
//                               We manage the registration process at the fleet level, eliminating administrative tasks for our customers.
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="h-sub_dot-wrapper is-2">
//                         <div className="h-sub_dot is-2">
//                           <div className="h-sub_item-wrapper">
//                             <div className="margin-bottom margin-xxsmall">
//                               <h3 className="heading-style-h5">We insure</h3>
//                             </div>
//                             <p className="text-size-small">
//                               We insure all our vehicles against theft and provide RC insurance coverage for every rider's trip to support you in any situation.
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="h-sub_dot-wrapper is-3">
//                         <div className="h-sub_dot is-3">
//                           <div className="h-sub_item-wrapper">
//                             <div className="margin-bottom margin-xxsmall">
//                               <h3 className="heading-style-h5">We maintain</h3>
//                             </div>
//                             <p className="text-size-small">
//                               Annual vehicle maintenance and swift assistance within 48 hours. Non-working vehicles are immediately replaced, no questions asked.
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                  
//                   </div>
//                 </div>
//               </div>
//               <div className="h-sub_trigger"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FeatureSection;
