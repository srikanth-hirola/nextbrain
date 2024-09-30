import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const SpecificationsTwoColumn = () => {
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
        scrub: true,
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
      <div className="section_specs">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-xlarge">
              <div className="specs_layout">
                <div className="specs_h2-wrapper">
                  <h2 className="specs_h2">The Specs (Two Columns)</h2>
                </div>
                <div className="specs_content two-columns">
                  <div className="column">
                    {/* Left Column Items */}
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div key={`left-${index}`} role="listitem" className="specs_item w-dyn-item">
                        <div className="specs_item-content">
                          <div className="specs_spec-text">Left Column {index + 1}</div>
                          <div className="text-size-small">Description for left column {index + 1}</div>
                        </div>
                        <div className="specs_line"></div>
                      </div>
                    ))}
                  </div>
                  <div className="column">
                    {/* Right Column Items */}
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div key={`right-${index}`} role="listitem" className="specs_item w-dyn-item">
                        <div className="specs_item-content">
                          <div className="specs_spec-text">Right Column {index + 1}</div>
                          <div className="text-size-small">Description for right column {index + 1}</div>
                        </div>
                        <div className="specs_line"></div>
                      </div>
                    ))}
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

export default SpecificationsTwoColumn;
