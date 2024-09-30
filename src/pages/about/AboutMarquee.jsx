/* eslint-disable no-unused-vars */
import React from 'react';

const AboutMarquee = () => {
  const tags = [
    "NextBrain", "NextBrain", "NextBrain", "NextBrain", "NextBrain",
    "NextBrain", "NextBrain", "NextBrain", "NextBrain", "NextBrain"
  ];

  return (
    <div className="marquee-container">
    <div className="marquee-content">
      {/* Duplicate the content to create a seamless infinite scrolling effect */}
      {tags.map((tag, index) => (
        <span
          key={`solid-${index}`}
          className={index % 2 === 0 ? 'solid-text' : 'outline-text'}
        >
          {tag}
        </span>
      ))}
      {tags.map((tag, index) => (
        <span
          key={`outline-${index}`}
          className={index % 2 === 0 ? 'solid-text' : 'outline-text'}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
  );
};

export default AboutMarquee;
