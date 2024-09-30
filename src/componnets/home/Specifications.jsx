import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const Specifications = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });

    // GSAP setup
    const specsItems = document.querySelectorAll('.specs_item');

    // Set up individual animations based on scroll position
    specsItems.forEach((item) => {
      // Set initial state
      gsap.set(item, { autoAlpha: 0, filter: 'blur(10px)', scale: 0.8, yPercent: 20 });

      // Create a ScrollTrigger instance for each item
      ScrollTrigger.create({
        trigger: item,
        start: 'top 80%', // Trigger animation when item comes into view
        end: 'top 50%', // End the animation when item is near the center
        onEnter: () => {
          // Animation for entering the view
          gsap.to(item, {
            autoAlpha: 1,
            filter: 'blur(0px)',
            scale: 1,
            yPercent: 0,
            duration: 1,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          // Animation for leaving the view upward
          gsap.to(item, {
            autoAlpha: 1, // Keep it visible
            filter: 'blur(10px)', // Apply blur
            scale: 0.8,
            yPercent: 20,
            duration: 1,
            ease: 'power2.out',
          });
        },
      });
    });

    // Smooth scroll on scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Clean up Lenis
      lenis.destroy();
      // Kill all ScrollTriggers to avoid memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
          <section className="section_home-app section_home-app-main">
          <div
            data-w-id="26ba0201-b041-76de-2258-54f249db56b9"
            className="home-app_height"
          >
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-large">
                  <div className="w-layout-grid home-app_component">
                    <div
                      id="w-node-_5efb5fe9-1f42-8a3b-d40b-f62102a06249-45432047"
                      className="w-layout-grid home-app_row"
                    >
                      <div
                        id="w-node-_5efb5fe9-1f42-8a3b-d40b-f62102a0624a-45432047"
                        className="home-app_card-large"
                      >
                        <div className="home-app_card-large-content">
                          <div className="home-app_card-large-content-top">
                            <div className="margin-bottom margin-small">
                              <h3>Manage brainstorm with our easy-to-use app</h3>
                            </div>
                            <p>
                              Control your fleet, locate your nextbrain and monitor
                              maintenance, all from the convenience of your
                              smartphone.
                            </p>
                          </div>
                        </div>
                        <div
                          id="w-node-_5efb5fe9-1f42-8a3b-d40b-f62102a0624b-45432047"
                          className="home-app_card-large-image-wrapper"
                        >
                          <img
                            src="assets/wh-img.webp"
                            loading="lazy"
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 74vw, 78vw"
                            srcSet="
                              assets/wh-img.webp 500w,
                              assets/wh-img.webp 800w,
                              assets/wh-img.webp 1080w,
                              assets/wh-img.webp 1600w,
                              assets/wh-img.webp 2000w,
                              assets/wh-img.webp 2733w
                            "
                            alt="Phone on the Yoda bike."
                            className="home-app_card-large-image"
                          />
                        </div>
                      </div>
                      <div
                        data-w-id="5efb5fe9-1f42-8a3b-d40b-f62102a0625f"
                        className="home-app_card-small"
                      >
                        <div className="home-app_card-small-content">
                          <div className="margin-bottom margin-xxsmall">
                            <h3 className="heading-style-h5">
                              Lock &amp; Unlock from the app
                            </h3>
                          </div>
                          <p className="text-size-small">
                            Activate or deactivate your bike, unlock the battery
                            for easy removal, and secure or retrieve your
                            helmet, all through our app.
                          </p>
                        </div>
                        <div
                          id="w-node-_5efb5fe9-1f42-8a3b-d40b-f62102a06260-45432047"
                          className="home-app_card-small-image-wrapper"
                        >
                        <img
                        src="assets/lock-img-2.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 56vw, 194.7734375px"
                        srcSet="
                        assets/lock-img-2.png 500w,
                        assets/lock-img-2.png 800w,
                        assets/lock-img-2.png    970w
                        "
                        alt="iPhone mockup of the Yoda app."
                        className="home-app_card-small-image"
                      />
                        </div>
                      </div>
                      <div
                        data-w-id="5efb5fe9-1f42-8a3b-d40b-f62102a06272"
                        className="home-app_card-small"
                      >
                        <div className="home-app_card-small-content">
                          <div className="margin-bottom margin-xxsmall">
                            <h3 className="heading-style-h5">
                              Share &amp; control access easily
                            </h3>
                          </div>
                          <p className="text-size-small">
                            At the office or home, nextbrain can be shared with QR
                            code or a unique access link. Give access to your
                            colleagues or family members and retrieve when
                            necessary.
                          </p>
                        </div>
                        <div
                          id="w-node-_5efb5fe9-1f42-8a3b-d40b-f62102a06273-45432047"
                          className="home-app_card-small-image-wrapper"
                        >
                          <img
                            src="assets/lock-img-1.png"
                            loading="lazy"
                            sizes="(max-width: 479px) 56vw, 194.7734375px"
                            srcSet="
                            assets/lock-img-1.png 500w,
                            assets/lock-img-1.png 800w,
                            assets/lock-img-1.png    970w
                            "
                            alt="iPhone mockup of the Yoda app."
                            className="home-app_card-small-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="padding-top padding-xlarge"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      <div className="section_specs">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-xlarge">
              <div className="specs_layout">
                <div className="specs_h2-wrapper">
                  <h2 className="specs_h2">The Specs</h2>
                </div>
                <div className="specs_content">
                    <div className="specs_list-wrapper w-dyn-list">
                      <div role="list" className="specs_list w-dyn-items">
                        <div
                          data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
                          role="listitem"
                          className="specs_item w-dyn-item"
                        >
                          <div className="specs_item-content">
                            <div
                              id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
                              className="specs_spec-text"
                            >
                              Maximum speed
                            </div>
                            <div
                              id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
                              className="text-size-small"
                            >
                              45km/h (Boost mode), 40km/h (Regular mode) or
                              30km/h (Eco mode)
                            </div>
                          </div>
                          <div className="specs_line"></div>
                        </div>
                        <div
                          data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
                          role="listitem"
                          className="specs_item w-dyn-item"
                        >
                          <div className="specs_item-content">
                            <div
                              id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
                              className="specs_spec-text"
                            >
                              Battery Range
                            </div>
                            <div
                              id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
                              className="text-size-small"
                            >
                              50km (Regular mode) or 80km (Eco mode)
                            </div>
                          </div>
                          <div className="specs_line"></div>
                        </div>
                        <div
                          data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
                          role="listitem"
                          className="specs_item w-dyn-item"
                        >
                          <div className="specs_item-content">
                            <div
                              id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
                              className="specs_spec-text"
                            >
                              Removable battery
                            </div>
                            <div
                              id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
                              className="text-size-small"
                            >
                              Lithium-ion 24Ah, 52V, 5kg
                            </div>
                          </div>
                          <div className="specs_line"></div>
                        </div>
                        <div
                          data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
                          role="listitem"
                          className="specs_item w-dyn-item"
                        >
                          <div className="specs_item-content">
                            <div
                              id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
                              className="specs_spec-text"
                            >
                              Charging time
                            </div>
                            <div
                              id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
                              className="text-size-small"
                            >
                              100% recharged in 4 hours
                            </div>
                          </div>
                          <div className="specs_line"></div>
                        </div>
                        <div
                          data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
                          role="listitem"
                          className="specs_item w-dyn-item"
                        >
                          <div className="specs_item-content">
                            <div
                              id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
                              className="specs_spec-text"
                            >
                              Weight
                            </div>
                            <div
                              id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
                              className="text-size-small"
                            >
                              Lightest motorcycle on the market, 28kg
                            </div>
                          </div>
                          <div className="specs_line"></div>
                        </div>
                        <div
                          data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
                          role="listitem"
                          className="specs_item w-dyn-item"
                        >
                          <div className="specs_item-content">
                            <div
                              id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
                              className="specs_spec-text"
                            >
                              Connectivity
                            </div>
                            <div
                              id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
                              className="text-size-small"
                            >
                              NFC/Bluetooth low energy
                            </div>
                          </div>
                          <div className="specs_line"></div>
                        </div>
                        <div
                          data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
                          role="listitem"
                          className="specs_item w-dyn-item"
                        >
                          <div className="specs_item-content">
                            <div
                              id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
                              className="specs_spec-text"
                            >
                              Rider height
                            </div>
                            <div
                              id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
                              className="text-size-small"
                            >
                              Fits people between 155-200 cm tall
                            </div>
                          </div>
                          <div className="specs_line"></div>
                        </div>
                        <div
                          data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
                          role="listitem"
                          className="specs_item w-dyn-item"
                        >
                          <div className="specs_item-content">
                            <div
                              id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
                              className="specs_spec-text"
                            >
                              Maximum Load 🏋️
                            </div>
                            <div
                              id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
                              className="text-size-small"
                            >
                              115 Kg
                            </div>
                          </div>
                          <div className="specs_line"></div>
                        </div>
                        <div
                          data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
                          role="listitem"
                          className="specs_item w-dyn-item"
                        >
                          <div className="specs_item-content">
                            <div
                              id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
                              className="specs_spec-text"
                            >
                              Price
                            </div>
                            <div
                              id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
                              className="text-size-small"
                            >
                              Subscribe to our all-inclusive service for
                              €149/month
                            </div>
                          </div>
                          <div className="specs_line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;

// /* eslint-disable no-unused-vars */
// import React from 'react'

// const Specifications = () => {
//   return (
//     <div>
//        <div className="section_specs">
//           <div className="padding-global">
//             <div className="container-large">
//               <div className="padding-section-xlarge">
//                 <div className="specs_layout">
//                   <div className="specs_h2-wrapper">
//                     <h2
//                       data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5b4"
//                       className="specs_h2"
//                     >
//                       The Specs
//                     </h2>
//                   </div>
//                   <div className="specs_content">
//                     <div className="specs_list-wrapper w-dyn-list">
//                       <div role="list" className="specs_list w-dyn-items">
//                         <div
//                           data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
//                           role="listitem"
//                           className="specs_item w-dyn-item"
//                         >
//                           <div className="specs_item-content">
//                             <div
//                               id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
//                               className="specs_spec-text"
//                             >
//                               Maximum speed
//                             </div>
//                             <div
//                               id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
//                               className="text-size-small"
//                             >
//                               45km/h (Boost mode), 40km/h (Regular mode) or
//                               30km/h (Eco mode)
//                             </div>
//                           </div>
//                           <div className="specs_line"></div>
//                         </div>
//                         <div
//                           data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
//                           role="listitem"
//                           className="specs_item w-dyn-item"
//                         >
//                           <div className="specs_item-content">
//                             <div
//                               id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
//                               className="specs_spec-text"
//                             >
//                               Battery Range
//                             </div>
//                             <div
//                               id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
//                               className="text-size-small"
//                             >
//                               50km (Regular mode) or 80km (Eco mode)
//                             </div>
//                           </div>
//                           <div className="specs_line"></div>
//                         </div>
//                         <div
//                           data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
//                           role="listitem"
//                           className="specs_item w-dyn-item"
//                         >
//                           <div className="specs_item-content">
//                             <div
//                               id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
//                               className="specs_spec-text"
//                             >
//                               Removable battery
//                             </div>
//                             <div
//                               id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
//                               className="text-size-small"
//                             >
//                               Lithium-ion 24Ah, 52V, 5kg
//                             </div>
//                           </div>
//                           <div className="specs_line"></div>
//                         </div>
//                         <div
//                           data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
//                           role="listitem"
//                           className="specs_item w-dyn-item"
//                         >
//                           <div className="specs_item-content">
//                             <div
//                               id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
//                               className="specs_spec-text"
//                             >
//                               Charging time
//                             </div>
//                             <div
//                               id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
//                               className="text-size-small"
//                             >
//                               100% recharged in 4 hours
//                             </div>
//                           </div>
//                           <div className="specs_line"></div>
//                         </div>
//                         <div
//                           data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
//                           role="listitem"
//                           className="specs_item w-dyn-item"
//                         >
//                           <div className="specs_item-content">
//                             <div
//                               id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
//                               className="specs_spec-text"
//                             >
//                               Weight
//                             </div>
//                             <div
//                               id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
//                               className="text-size-small"
//                             >
//                               Lightest motorcycle on the market, 28kg
//                             </div>
//                           </div>
//                           <div className="specs_line"></div>
//                         </div>
//                         <div
//                           data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
//                           role="listitem"
//                           className="specs_item w-dyn-item"
//                         >
//                           <div className="specs_item-content">
//                             <div
//                               id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
//                               className="specs_spec-text"
//                             >
//                               Connectivity
//                             </div>
//                             <div
//                               id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
//                               className="text-size-small"
//                             >
//                               NFC/Bluetooth low energy
//                             </div>
//                           </div>
//                           <div className="specs_line"></div>
//                         </div>
//                         <div
//                           data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
//                           role="listitem"
//                           className="specs_item w-dyn-item"
//                         >
//                           <div className="specs_item-content">
//                             <div
//                               id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
//                               className="specs_spec-text"
//                             >
//                               Rider height
//                             </div>
//                             <div
//                               id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
//                               className="text-size-small"
//                             >
//                               Fits people between 155-200 cm tall
//                             </div>
//                           </div>
//                           <div className="specs_line"></div>
//                         </div>
//                         <div
//                           data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
//                           role="listitem"
//                           className="specs_item w-dyn-item"
//                         >
//                           <div className="specs_item-content">
//                             <div
//                               id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
//                               className="specs_spec-text"
//                             >
//                               Maximum Load 🏋️
//                             </div>
//                             <div
//                               id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
//                               className="text-size-small"
//                             >
//                               115 Kg
//                             </div>
//                           </div>
//                           <div className="specs_line"></div>
//                         </div>
//                         <div
//                           data-w-id="d5b7d6a0-c3f7-a8e1-bd7b-bd0f4593a5ba"
//                           role="listitem"
//                           className="specs_item w-dyn-item"
//                         >
//                           <div className="specs_item-content">
//                             <div
//                               id="w-node-bbb8374d-12da-7430-80e4-c1503f12f2ff-45432047"
//                               className="specs_spec-text"
//                             >
//                               Price
//                             </div>
//                             <div
//                               id="w-node-e13dbbef-b19f-eee6-a731-54f265c83291-45432047"
//                               className="text-size-small"
//                             >
//                               Subscribe to our all-inclusive service for
//                               €149/month
//                             </div>
//                           </div>
//                           <div className="specs_line"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Specifications
