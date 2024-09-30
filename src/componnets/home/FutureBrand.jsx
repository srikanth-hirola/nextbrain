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
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // GSAP ScrollTrigger for circle expansion/shrink on scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top', // Start when the section's top hits the top of the viewport
      end: '+=100vh', // End after 100vh scroll
      scrub: true, // Allow forward and backward scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // Get scroll progress (0 to 1)

        // Circle expansion
        const newSize = 30 + progress * (2000 - 30); // Expand size (up to 1800px)
        const newBorder = 4 + progress * (200 - 4); // Expand border size (up to 140px)
        const backgroundColor = progress > 0.1 ? '#fff' : 'red'; // Change background color at 30% progress

        gsap.to(circleRef.current, {
          width: `${newSize}px`,
          height: `${newSize}px`,
          borderWidth: `${newBorder}px`,
          backgroundColor: backgroundColor,
          duration: 0, // No animation duration, controlled by scrolling
          ease: 'power3.inOut', // No easing for smooth scrolling control
        });

        // Fade out the circle and the FutureBrand section
        gsap.to(circleRef.current, { opacity: progress < 1 ? 1 : 0, duration: 0.5 });
        
        // After fading out the circle, hide the FutureBrand section
        if (progress === 1) {
          gsap.to(sectionRef.current, { opacity: 0, duration: 0.5, onComplete: () => {
            // After FutureBrand fades out, scroll to new section
            gsap.to(window, { scrollTo: newSectionRef.current, duration: 1 });
          }});
          gsap.to(newSectionRef.current, { opacity: 1, duration: 0.5 });
        } else {
          // Ensure FutureBrand section remains visible until animation complete
          gsap.to(sectionRef.current, { opacity: 1, duration: 0 });
        }
      },
    });

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
        <div className="column-row ">
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
      <section className="new-section" ref={newSectionRef} style={{ opacity: 0 }}>
        <Specifications />
      </section>
    </div>
  );
};

export default FutureBrand;
