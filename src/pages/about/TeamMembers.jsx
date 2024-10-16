/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';

const teamMembers = [
  { name: 'John Doe', position: 'Developer', image: 'assets/about/1.jpg' },
  { name: 'Jane Smith', position: 'Designer', image: 'assets/about/1.jpg' },
  { name: 'Michael Johnson', position: 'Manager', image: 'assets/about/1.jpg' },
  { name: 'Emma Brown', position: 'Product Owner', image: 'assets/about/1.jpg' },
  { name: 'John Doe', position: 'Developer', image: 'assets/about/1.jpg' },
  { name: 'Jane Smith', position: 'Designer', image: 'assets/about/1.jpg' },
  { name: 'Michael Johnson', position: 'Manager', image: 'assets/about/1.jpg' },
  { name: 'Emma Brown', position: 'Product Owner', image: 'assets/about/1.jpg' },
  { name: 'John Doe', position: 'Developer', image: 'assets/about/1.jpg' },
  { name: 'Jane Smith', position: 'Designer', image: 'assets/about/1.jpg' },
  { name: 'Michael Johnson', position: 'Manager', image: 'assets/about/1.jpg' },
  { name: 'Emma Brown', position: 'Product Owner', image: 'assets/about/1.jpg' },
  { name: 'John Doe', position: 'Developer', image: 'assets/about/1.jpg' },
  { name: 'Jane Smith', position: 'Designer', image: 'assets/about/1.jpg' },
  { name: 'Michael Johnson', position: 'Manager', image: 'assets/about/1.jpg' },
  { name: 'Emma Brown', position: 'Product Owner', image: 'assets/about/1.jpg' },
  { name: 'John Doe', position: 'Developer', image: 'assets/about/1.jpg' },
  { name: 'Jane Smith', position: 'Designer', image: 'assets/about/1.jpg' },
  { name: 'Michael Johnson', position: 'Manager', image: 'assets/about/1.jpg' },
  { name: 'Emma Brown', position: 'Product Owner', image: 'assets/about/1.jpg' },
  // Add more team members as needed
];

const TeamSection = () => {
  const mainSectionRef = useRef(null);
  const scrollSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const mainSection = mainSectionRef.current;
      const scrollSection = scrollSectionRef.current;

      if (mainSection && scrollSection) {
        const { top, height } = scrollSection.getBoundingClientRect();

        // Calculate opacity based on scroll position
        if (top < height && top > 0) {
          const opacity = 1 - (1 - top / height);
          gsap.to(mainSection, { opacity: opacity });
        } else {
          // Reset opacity when out of scrollSection
          gsap.to(mainSection, { opacity: 1 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section
        ref={mainSectionRef}
        className='main-team-mem-sec'
        style={{ position: 'sticky', top: '10vh', zIndex: 1 }} // Make it sticky
      >
        <div className="main-team-section">
          <div className="team-section">
            <h1 className="team-title">Team</h1>
          </div>
        </div>
      </section>
      <section
        ref={scrollSectionRef}
        style={{ alignItems: 'start', minHeight: '100vh' }}
      >
        <div className="main-team-section">
          <div className="team-section">
            <Swiper
              spaceBetween={30} // Adjust spacing between slides
              slidesPerView={5} // Number of slides to show at once
              breakpoints={{
                // When window width is >= 320px
                320: {
                  slidesPerView: 1, // 1 slide on mobile
                },
                // When window width is >= 768px (Tablet)
                768: {
                  slidesPerView: 2, // 2 slides on tablet
                },
                // When window width is >= 1024px (Small Desktop)
                1024: {
                  slidesPerView: 3, // 3 slides on small desktop
                },
                // When window width is >= 1280px (Large Desktop)
                1280: {
                  slidesPerView: 5, // 5 slides on large desktop
                },
              }}
              className="team-slider" // Add a class for custom styling
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index} className="team-card">
                  <img src={member.image} alt={member.name} className="team-card-image" />
                  <div className="team-info">
                    <div className="marquee">
                      <h3>{member.name}</h3>
                    </div>
                  </div>
                  <div className="team-info1">
                    <div className="marquee">
                      <p>{member.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
