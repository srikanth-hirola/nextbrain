import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureTabs = () => {
  const sectionsRef = useRef([]);
  
  // Your data defined here
  const data = [
    {
      title: "Sustainability Solutions for maximum efficiency",
      description: "Our mission is to close the gap between a scooter and a bike.",
      videoSrc: "assets/video-1.mp4",
    },
    {
      title: "Best in class energy management for optimal autonomy",
      description: "3 riding modes: eco, normal & boost - that offer up to 80 km range.",
      videoSrc: "assets/video-2.mp4",
    },
    {
      title: "Durable and effortless, all the way",
      description: "We spent years crafting a simple and efficient mobility experience.",
      videoSrc: "assets/video-3.mp4",
    },
    {
      title: "Innovative design for seamless commuting",
      description: "Experience comfort and style like never before.",
      videoSrc: "assets/video-4.mp4",
    },
  ];

 

  return (
    <div>
     
        <div
        
          className="section_tabs"
        >
          <div className="padding-section-large">
            <div className="tabs_height">
              <div className="tabs_sticky-wrapper">
                <div className="tabs_container">
                  <div className="tabs_component">
                    <div className="tabs_left">
                     {
                      data.map((item, index) => (
                        <div
                          key={index}
                          className={` is-${index + 1}`}
                        >
                          <h2 className="heading-style-h4 text-color-gray100">
                            {item.title}
                          </h2>
                          <p className="text-color-gray500">{item.description}</p>
                        </div>
                      ))
                     }
                    </div>

                    <div className="tabs_right">
                    {
                      data.map((item, index) => (
                        <div
                          key={index}
                          className={`tabs_right-content is-${index + 1}`}
                        >
                          <video
                            className="video_tab"
                            autoPlay
                            loop
                            muted
                            playsInline
                            data-gsap-duration="1"
                            data-gsap-ease="elastic.out(1, 0.3)"
                          >
                            <source src={item.videoSrc} type="video/mp4" />
                          </video>
                        </div>
                      ))
 
                    }
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

export default FeatureTabs;
