/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Footer from '../../componnets/common/Footer';
import Header from '../../componnets/common/Header';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TermsAndConditions = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const sections = textRefs.current;

    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          y: 50, // Starts 50px down
          opacity: 0, // Starts invisible
          filter: 'blur(10px)', // Starts blurred
        },
        {
          y: 0, // Moves to original position
          opacity: 1, // Becomes fully visible
          filter: 'blur(0px)', // Blur effect removed
          duration: 1.5, // Animation duration
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%', // Start animation when section hits 80% of viewport
            end: 'bottom 20%',
            scrub: true, // Smooth scrubbing during scroll
            toggleActions: 'play none none reverse', // Plays when scrolling forward, reverses when scrolling back
            markers: false, // Remove if you don't want to see markers on the screen
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Header />
      <div className="terms-banner">
        <div className="container">
        <div className="terms-banner-main">
            <h2>Terms And Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eius eum provident perferendis quae culpa.</p>
        </div>
        </div>
      </div>
   <div className="terms-main">
    <div className="container">
    <div className="terms-container" ref={containerRef}>
        <h1 ref={(el) => (textRefs.current[0] = el)}>Terms and Conditions</h1>
        <p ref={(el) => (textRefs.current[1] = el)}>
          Welcome to NextBrain, your trusted electric scooter company. Please read our terms and conditions carefully before using our services:
        </p>

        <div className="terms-content">
          <h2 ref={(el) => (textRefs.current[2] = el)}>1. Agreement to Terms</h2>
          <p ref={(el) => (textRefs.current[3] = el)}>
            By using our website or services, you agree to be bound by these terms and conditions. If you do not agree, please do not use our platform.
          </p>

          <h2 ref={(el) => (textRefs.current[4] = el)}>2. Scooter Usage</h2>
          <p ref={(el) => (textRefs.current[5] = el)}>
            All NextBrain scooters must be used in compliance with local traffic laws. Users must wear helmets and ensure safety for themselves and others while riding.
          </p>

          <h2 ref={(el) => (textRefs.current[6] = el)}>3. Payment and Charges</h2>
          <p ref={(el) => (textRefs.current[7] = el)}>
            Users must ensure that all payments are made promptly. Any late payments may incur additional fees as outlined in our pricing policy.
          </p>

          <h2 ref={(el) => (textRefs.current[8] = el)}>4. Account Responsibility</h2>
          <p ref={(el) => (textRefs.current[9] = el)}>
            You are responsible for maintaining the confidentiality of your account information. Any unauthorized usage of your account should be reported immediately.
          </p>

          <h2 ref={(el) => (textRefs.current[10] = el)}>5. Cancellation and Refund Policy</h2>
          <p ref={(el) => (textRefs.current[11] = el)}>
            If you wish to cancel your ride or service, refunds will be issued in accordance with our refund policy. Please contact support for more information.
          </p>

          {/* Adding 15 more sections below */}
          <h2 ref={(el) => (textRefs.current[12] = el)}>6. Liability</h2>
          <p ref={(el) => (textRefs.current[13] = el)}>
            Users are responsible for any damages incurred during the usage of scooters. NextBrain holds no liability for personal injuries resulting from reckless behavior.
          </p>

          <h2 ref={(el) => (textRefs.current[14] = el)}>7. Governing Law</h2>
          <p ref={(el) => (textRefs.current[15] = el)}>
            These terms are governed by the laws of the jurisdiction in which NextBrain operates. Users agree to comply with all local laws.
          </p>

          <h2 ref={(el) => (textRefs.current[16] = el)}>8. User Accounts</h2>
          <p ref={(el) => (textRefs.current[17] = el)}>
            Each user must create an account before using our services. Accounts are non-transferable, and misuse may result in suspension or termination.
          </p>

          <h2 ref={(el) => (textRefs.current[18] = el)}>9. Privacy Policy</h2>
          <p ref={(el) => (textRefs.current[19] = el)}>
            Your personal data is protected under our privacy policy. We ensure that your data will not be shared without consent.
          </p>

          <h2 ref={(el) => (textRefs.current[20] = el)}>10. Modifications to Terms</h2>
          <p ref={(el) => (textRefs.current[21] = el)}>
            NextBrain reserves the right to modify these terms at any time. Users will be notified of any significant changes via email.
          </p>

          <h2 ref={(el) => (textRefs.current[22] = el)}>11. Dispute Resolution</h2>
          <p ref={(el) => (textRefs.current[23] = el)}>
            In case of a dispute, we recommend resolving matters amicably. If not, disputes will be handled by the appropriate legal authorities.
          </p>

          <h2 ref={(el) => (textRefs.current[24] = el)}>12. Scooter Safety</h2>
          <p ref={(el) => (textRefs.current[25] = el)}>
            Always ride safely and follow traffic regulations. Failure to comply may result in restrictions or penalties.
          </p>

          <h2 ref={(el) => (textRefs.current[26] = el)}>13. Service Availability</h2>
          <p ref={(el) => (textRefs.current[27] = el)}>
            Our services are subject to availability. We do not guarantee uninterrupted access to scooters during peak times or unforeseen circumstances.
          </p>

          <h2 ref={(el) => (textRefs.current[28] = el)}>14. Termination of Account</h2>
          <p ref={(el) => (textRefs.current[29] = el)}>
            We reserve the right to terminate any account if the user violates our terms of service or engages in fraudulent activities.
          </p>

          <h2 ref={(el) => (textRefs.current[30] = el)}>15. Age Requirements</h2>
          <p ref={(el) => (textRefs.current[31] = el)}>
            You must be at least 18 years of age to use our services. Parental consent is required for individuals under 18.
          </p>

          <h2 ref={(el) => (textRefs.current[32] = el)}>16. Contact Us</h2>
          <p ref={(el) => (textRefs.current[33] = el)}>
            For any questions regarding our terms, you can contact our support team via email at support@nextbrain.com.
          </p>
        </div>
      </div>
    </div>
   </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
