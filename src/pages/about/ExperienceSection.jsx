/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ExperienceSection = () => {
  const cardRefs = useRef([]);

  // Function to animate text on hover
  useEffect(() => {
    cardRefs.current.forEach((card) => {
      const companyText = card.querySelector('.company-text span');
      gsap.set(companyText, { opacity: 0, y: 50 }); // Start with opacity 0 and below the view (y = 50)
    });
  }, []);

  // Helper function to split text into spans
  const splitTextToSpans = (text) => {
    return text.split('').map((char, index) => (
      <span key={index}>{char}</span>
    ));
  };

  const handleMouseEnter = (index) => {
    const characters = cardRefs.current[index].querySelectorAll('.company-text span');
    gsap.to(characters, {
      duration: 0.6,
      y: 0,
      opacity: 1,
      stagger: 0.05, // Delay between each character animation
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (index) => {
    const characters = cardRefs.current[index].querySelectorAll('.company-text span');
    gsap.to(characters, {
      duration: 0.3,
      y: 50,
      opacity: 0,
      stagger: 0.05,
      ease: 'power2.in'
    });
  };

  return (
    <section className='logo-section'>
      <div className="container-main">
        <div className="experience-main-section">
          <div className="experience-main-section-title">
            <h2>We create experiences and turn ideas into reality.</h2>
          </div>
          <div className="experience-main-section-cards">
            <div className="row">
              {[
                { id: 1, logo: 'assets/tes-1.png', company: 'www.nextbrain.com' },
                { id: 2, logo: 'assets/tes-2.png', company: 'www.nextbrain.com' },
                { id: 3, logo: 'assets/tes-3.png', company: 'www.nextbrain.com' },
                { id: 4, logo: 'assets/tes-4.png', company: 'www.nextbrain.com' },
                { id: 5, logo: 'assets/tes-5.png', company: 'www.nextbrain.com' },
                { id: 6, logo: 'assets/tes-7.png', company: 'www.nextbrain.com' }
              ].map((item, index) => (
                <div
                  key={item.id}
                  className="col-md-4"
                  ref={(el) => (cardRefs.current[index] = el)} // Assign ref to each card
                  onMouseEnter={() => handleMouseEnter(index)} // Trigger animation on hover
                  onMouseLeave={() => handleMouseLeave(index)} // Revert animation on mouse leave
                >
                  <div className="title-logo">
                    <h2 className="logo-text">
                      <img src={item.logo} alt="" />
                    </h2>
                    <h2 className="company-text">
                      {splitTextToSpans(item.company)}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
