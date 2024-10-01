/* eslint-disable no-unused-vars */
// src/components/Loading.js

import React, { useEffect, useState } from "react";
import { TweenMax, Expo } from "gsap";
import anime from "animejs";

const PageReveal = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // TweenMax animation for overlay
    TweenMax.to(".overlay", 1.2, {
      top: "0%",
      ease: Expo.easeOut,
      delay: 0,
      onComplete: () => {
        // Hide the section after animation completes
        setTimeout(() => {
          TweenMax.to(".page-reveal", 1, { opacity: 0, ease: Expo.easeOut });
          setTimeout(() => {
            setIsVisible(false); // Finally hide the component
          }, 20); // Matches the duration of the opacity transition
        }, 2500);
      },
    });

    // AnimeJS for text animation
    anime.timeline().add({
      targets: ".header .letter",
      translateY: [100, 0],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4000 + 40 * i,
    });
  }, []);

  // If the component should not be visible, return null to remove it from the DOM
  if (!isVisible) return null;

  return (
    <div className="page-reveal">
      <div className="container">
        {/* Preloader */}
        <div className="preloader">
             <svg
               width="484"
               height="118"
               id="logo"
               data-name="Layer 1"
               xmlns="http: www.w3.org/2000/svg"
               viewBox="0 0 657.86 138.52"
             >
               <defs></defs>
               <path
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 d="M281,309.34l-33.28-35.42v36.71h-9.45v-48c0-3.25,2.21-4.77,5.43-4.77a5.91,5.91,0,0,1,4.75,1.9L282,296.32V259h9.64v48c0,3.41-2.07,4.77-5.09,4.77A7.12,7.12,0,0,1,281,309.34Z"
                 transform="translate(-77.67 -214.8)"
               />
               <path
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 d="M316.51,310.63c-13.46,0-17.41-4.7-17.41-17.71v-16.2c0-13,3.95-17.71,17.41-17.71h32.08v9.76H316.51c-5.89,0-7.3,2-7.3,8v3.48h38.92v9.16H309.21V293c0,6.21,1.34,7.87,7.3,7.87H348.4v9.77Z"
                 transform="translate(-77.67 -214.8)"
               />
               <path
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 d="M403.32,310.63,384.5,290.87l-18.76,19.76h-14.2l26.26-26.72L353,259h14.67l17.41,18.32L403.45,259h13.87l-24.85,24.82,25.65,26.8Z"
                 transform="translate(-77.67 -214.8)"
               />
               <path
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 d="M439,310.63V268.92H419.86V259h48.56v9.91H449.27v41.71Z"
                 transform="translate(-77.67 -214.8)"
               />
               <path
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 d="M473.65,259h38.51c10.38,0,14.4,3.1,14.4,11.73V275c0,6-2.08,8.25-5,9.16,3.28.75,5.56,3.1,5.56,10.74v4.55c0,8.17-3.95,11.2-14.33,11.2H473.65Zm10.18,9.38v11.89h28.53c3.55,0,4.69-1.14,4.69-4.54v-3.26c0-3.1-1.41-4.09-5.69-4.09Zm0,20.21v12.64h28.46c3.82,0,5.36-1,5.36-4.16V293.9c0-4.24-1.34-5.3-5-5.3Z"
                 transform="translate(-77.67 -214.8)"
               />
               <path
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 d="M570.56,310.63l-26.72-18.77v18.77H533.73V259h35.76c12.8,0,18,3.1,18,15.52v3.55c0,12-5.69,15.06-18.15,15.06h-8l26.79,17.49Zm6.77-35.5c0-5.52-1.81-6.43-8.51-6.43h-25v15.74h25c6.57,0,8.51-.91,8.51-6.51Z"
                 transform="translate(-77.67 -214.8)"
               />
               <path
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 d="M641,298.74H609.41l-6.49,11.89H591.19L617.72,263c1.61-3,3.55-5.08,7.7-5.08s6,2.12,7.64,5.08l26.39,47.68H647.66Zm-26.86-8.85h22.1l-11-20.36Z"
                 transform="translate(-77.67 -214.8)"
               />
               <path
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 d="M664,310.63V259h10.18v51.62Z"
                 transform="translate(-77.67 -214.8)"
               />
               <path
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 d="M724.88,309.34,691.6,273.92v36.71h-9.45v-48c0-3.25,2.21-4.77,5.43-4.77a5.93,5.93,0,0,1,4.75,1.9l33.56,36.55V259h9.64v48c0,3.41-2.07,4.77-5.09,4.77A7.12,7.12,0,0,1,724.88,309.34Z"
                 transform="translate(-77.67 -214.8)"
               />
               <circle
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 cx="69.26"
                 cy="69.26"
                 r="66.15"
               />
               <path
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 d="M111.14,263h0a43.21,43.21,0,0,1,17.39-14.91H108.25V268A43.65,43.65,0,0,1,111.14,263Z"
                 transform="translate(-77.67 -214.8)"
               />
               <path
                 stroke="#FF0000"
                 strokeWidth="2"
                 mask="url(#path-1-outside-1)"
                 className="cls-1"
                 d="M125.52,321.18v-34a21.25,21.25,0,0,1,1.68-8.33,21.55,21.55,0,0,1,7.76-9.43,21.29,21.29,0,0,1,12-3.65h0a21.25,21.25,0,0,1,8.33,1.68,21.48,21.48,0,0,1,9.43,7.76,21.29,21.29,0,0,1,3.65,12v34h17.48v-34a38.86,38.86,0,0,0-38.89-38.89h0A38.86,38.86,0,0,0,108,287.18v34Z"
                 transform="translate(-77.67 -214.8)"
               />
             </svg>
           </div>
      </div>
    </div>
  );
};

export default PageReveal;

// /* eslint-disable no-unused-vars */
// // src/components/Loading.js

// import React, { useEffect } from "react";
// import { TweenMax, Expo } from "gsap";
// import anime from "animejs";

// const PageReveal = () => {
//   useEffect(() => {
//     // TweenMax animation for overlay
//     TweenMax.to(".overlay", 1.2, {
//       top: "-120%",
//       ease: Expo.easeOut,
//       delay: 5,
//     });

//     // AnimeJS for text animation
   

//     anime.timeline().add({
//       targets: ".header .letter",
//       translateY: [100, 0],
//       translateZ: 0,
//       easing: "easeOutExpo",
//       duration: 2000,
//       delay: (el, i) => 4800 + 40 * i,
//     });
//   }, []);

//   return (
//     <div className="page-reveal">
//       <div className="container">
        

//         {/* Preloader */}
//         <div className="preloader">
//           <svg
//             width="484"
//             height="118"
//             id="logo"
//             data-name="Layer 1"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 657.86 138.52"
//           >
//             <defs></defs>
//             <path
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               d="M281,309.34l-33.28-35.42v36.71h-9.45v-48c0-3.25,2.21-4.77,5.43-4.77a5.91,5.91,0,0,1,4.75,1.9L282,296.32V259h9.64v48c0,3.41-2.07,4.77-5.09,4.77A7.12,7.12,0,0,1,281,309.34Z"
//               transform="translate(-77.67 -214.8)"
//             />
//             <path
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               d="M316.51,310.63c-13.46,0-17.41-4.7-17.41-17.71v-16.2c0-13,3.95-17.71,17.41-17.71h32.08v9.76H316.51c-5.89,0-7.3,2-7.3,8v3.48h38.92v9.16H309.21V293c0,6.21,1.34,7.87,7.3,7.87H348.4v9.77Z"
//               transform="translate(-77.67 -214.8)"
//             />
//             <path
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               d="M403.32,310.63,384.5,290.87l-18.76,19.76h-14.2l26.26-26.72L353,259h14.67l17.41,18.32L403.45,259h13.87l-24.85,24.82,25.65,26.8Z"
//               transform="translate(-77.67 -214.8)"
//             />
//             <path
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               d="M439,310.63V268.92H419.86V259h48.56v9.91H449.27v41.71Z"
//               transform="translate(-77.67 -214.8)"
//             />
//             <path
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               d="M473.65,259h38.51c10.38,0,14.4,3.1,14.4,11.73V275c0,6-2.08,8.25-5,9.16,3.28.75,5.56,3.1,5.56,10.74v4.55c0,8.17-3.95,11.2-14.33,11.2H473.65Zm10.18,9.38v11.89h28.53c3.55,0,4.69-1.14,4.69-4.54v-3.26c0-3.1-1.41-4.09-5.69-4.09Zm0,20.21v12.64h28.46c3.82,0,5.36-1,5.36-4.16V293.9c0-4.24-1.34-5.3-5-5.3Z"
//               transform="translate(-77.67 -214.8)"
//             />
//             <path
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               d="M570.56,310.63l-26.72-18.77v18.77H533.73V259h35.76c12.8,0,18,3.1,18,15.52v3.55c0,12-5.69,15.06-18.15,15.06h-8l26.79,17.49Zm6.77-35.5c0-5.52-1.81-6.43-8.51-6.43h-25v15.74h25c6.57,0,8.51-.91,8.51-6.51Z"
//               transform="translate(-77.67 -214.8)"
//             />
//             <path
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               d="M641,298.74H609.41l-6.49,11.89H591.19L617.72,263c1.61-3,3.55-5.08,7.7-5.08s6,2.12,7.64,5.08l26.39,47.68H647.66Zm-26.86-8.85h22.1l-11-20.36Z"
//               transform="translate(-77.67 -214.8)"
//             />
//             <path
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               d="M664,310.63V259h10.18v51.62Z"
//               transform="translate(-77.67 -214.8)"
//             />
//             <path
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               d="M724.88,309.34,691.6,273.92v36.71h-9.45v-48c0-3.25,2.21-4.77,5.43-4.77a5.93,5.93,0,0,1,4.75,1.9l33.56,36.55V259h9.64v48c0,3.41-2.07,4.77-5.09,4.77A7.12,7.12,0,0,1,724.88,309.34Z"
//               transform="translate(-77.67 -214.8)"
//             />
//             <circle
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               cx="69.26"
//               cy="69.26"
//               r="66.15"
//             />
//             <path
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               d="M111.14,263h0a43.21,43.21,0,0,1,17.39-14.91H108.25V268A43.65,43.65,0,0,1,111.14,263Z"
//               transform="translate(-77.67 -214.8)"
//             />
//             <path
//               stroke="#FF0000"
//               strokeWidth="2"
//               mask="url(#path-1-outside-1)"
//               className="cls-1"
//               d="M125.52,321.18v-34a21.25,21.25,0,0,1,1.68-8.33,21.55,21.55,0,0,1,7.76-9.43,21.29,21.29,0,0,1,12-3.65h0a21.25,21.25,0,0,1,8.33,1.68,21.48,21.48,0,0,1,9.43,7.76,21.29,21.29,0,0,1,3.65,12v34h17.48v-34a38.86,38.86,0,0,0-38.89-38.89h0A38.86,38.86,0,0,0,108,287.18v34Z"
//               transform="translate(-77.67 -214.8)"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageReveal;
