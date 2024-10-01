/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AboutHeader from './AboutHeader';
import AboutStory from './AboutStory';
import AboutServices from './AboutServices';
import AboutFeatures from './AboutFeatures';
import AboutMarquee from './AboutMarquee';
import AboutCreative from './AboutCreative';
import TestimonialSlider from './TestimonialSlider';
import TeamSection from './TeamMembers';
import ExperienceSection from './ExperienceSection';
import Footer from '../../componnets/common/Footer';
import CtaSection from '../../componnets/home/CtaSection';
import ScrollToTopButton from '../../componnets/common/ScrollToTopButton';

const About = () => {
  const sectionsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const addBlurEffect = (section) => {
    gsap.to(section, {
      filter: 'blur(0px)',
      ease: 'power1.inOut',
      duration: 0.4,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Horizontal scroll effect for certain sections
        

          // Add blur effect when overlapping
          if (top < windowHeight * 0.9 && top > 0) {
            addBlurEffect(section);
          } else if (top >= windowHeight || bottom <= 0) {
            // Remove blur when section is out of view
            gsap.to(section, {
              filter: 'blur(3px)',
              duration: 0.9,
            });
          }
        }
      });
    };

    // Set up event listener for scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up
    };
  }, []);

  return (
    <>
      <ScrollToTopButton />
      <div >
        <AboutHeader />
      </div>
      <div>
        <AboutMarquee />
      </div>
      <div className='about-story-main' ref={addToRefs} style={{ position: 'sticky', top: '0',background:'#fff' }}>
        <AboutStory />
      </div>
      <div className='about-services-main' ref={addToRefs} style={{ position: 'sticky', top: '0',background:'#fff' }}>
        <AboutServices />
      </div>
      <div className='about-creative-main' ref={addToRefs} style={{background:'#fff' }}>
        <AboutCreative />
      </div>
      <div className='about-team-main' ref={addToRefs} style={{ position: 'sticky', top: '-50vh',background:'#fff',zIndex:1000 }}>
        <TeamSection />
      </div>
      <div className='about-testimonals-main' ref={addToRefs} style={{ position: 'sticky', top: '0',background:'#fff',zIndex:1001 }}>
        <TestimonialSlider />
      </div  >
      <div className='about-logo-main' style={{ position: 'relative', top: '0',background:'#fff',zIndex:1001 }} >
        <ExperienceSection />
      </div>
      <div className='about-cta-main' style={{ position: 'relative', top: '0',background:'#fff',zIndex:1001 }} >
        <CtaSection />
      </div>
      <div  ref={addToRefs} style={{ position: 'sticky', top: '0',background:'#fff',zIndex:9999 }}>

      <Footer />
      </div>
    </>
  );
};

export default About;
