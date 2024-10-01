/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const AboutSection = () => {
  const [inView, setInView] = useState(false);
  const [resetCounter, setResetCounter] = useState(0); // To trigger reset on scroll back
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setResetCounter((prev) => prev + 1); // Increase the counter to reset animation
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Formatter function to format the numbers
  const formatNumber = (value) => {
    return value >= 2000 ? `${(value / 1000).toFixed(1)}k` : value;
  };

  return (
    <div className="about-test-two" ref={sectionRef}>
      <div className="about-test-two-one">
        <h2>
          {inView && (
            <CountUp
              key={resetCounter} // This key forces re-render to animate every time it enters view
              start={0}
              end={12000}
              duration={8}
              separator=","
              formattingFn={formatNumber} // Apply formatting
            />
          )}
        </h2>
        <p>Sales around the world</p>
      </div>
      <div className="about-test-two-two">
        <h2>
        {inView && (
            <CountUp
              key={resetCounter} // Re-trigger animation on view change
              start={0}
              end={1120000}
              duration={8}
              separator=","
              formattingFn={formatNumber} // Apply formatting
            />
          )}
        </h2>
        <p>Happy Users Around the World</p>
      </div>
    </div>
  );
};

export default AboutSection;

