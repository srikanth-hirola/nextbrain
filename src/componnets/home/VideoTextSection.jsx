import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const VideoTextSection = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const sections = document.querySelectorAll('.text_section');

    // Set initial styles for all sections
    sections.forEach((section, index) => {
      gsap.set(section, { autoAlpha: index === 0 ? 1 : 0.5, y: index === 0 ? 0 : 50, filter: index === 0 ? 'blur(0px)' : 'blur(5px)' });
    });

    sections.forEach((section, index) => {
      const nextSection = sections[index + 1];

      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%', // Start animation when section is about to come into view
        end: nextSection ? 'bottom 80%' : 'bottom top',
        scrub: true,
        onEnter: () => {
          // Animate the current section into view
          gsap.to(section, {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power2.out',
          });

          // Blur and reduce opacity of the previous section
          if (index > 0) {
            gsap.to(sections[index - 1], {
              autoAlpha: 0.5,
              y: -50,
              filter: 'blur(5px)',
              duration: 1,
              ease: 'power2.out',
            });
          }
        },
        onLeave: () => {
          // When the section leaves, move it up and blur again
          gsap.to(section, {
            autoAlpha: 0.5,
            y: 50,
            filter: 'blur(5px)',
            duration: 1,
            ease: 'power2.out',
          });
        },
        onEnterBack: () => {
          // When scrolling back, re-animate the previous section into view
          gsap.to(section, {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power2.out',
          });

          // Hide and blur the next section
          if (index < sections.length - 1) {
            gsap.to(sections[index + 1], {
              autoAlpha: 0.5,
              y: 50,
              filter: 'blur(5px)',
              duration: 1,
              ease: 'power2.out',
            });
          }
        },
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="video-section-container">
      <div className="background-video-wrapper">
        {/* Background Video */}
        <video className="background-video" autoPlay muted loop>
          <source src="assets/video-5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Sections */}
      <div className="text-sections-wrapper">
        {Array.from({ length: 50 }).map((_, index) => (
          <div key={index} className="text_section">
            <h2 className="section_title">Section {index + 1}</h2>
            <p className="section_content">
              This is content for section {index + 1}. It will reveal with blur effect while scrolling.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTextSection;
