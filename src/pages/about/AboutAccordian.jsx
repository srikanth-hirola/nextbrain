/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    gsap.set(contentRef.current, { height: 'auto' });
    const height = contentRef.current.offsetHeight;
    gsap.set(contentRef.current, { height: 0 });

    animation.current = gsap.to(contentRef.current, {
      height,
      paused: true,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      animation.current.play();
    } else {
      animation.current.reverse();
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{ overflow: 'hidden' }}
      >
        <div className="accordion-inner">{content}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: 'Accordion Item 1',
      content: 'This is the content of the first accordion item.',
    },
    {
      title: 'Accordion Item 2',
      content: 'This is the content of the second accordion item.',
    },
    {
      title: 'Accordion Item 3',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 4',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
  ];

  const handleAccordionClick = (index) => {
    // Toggle the current accordion if it's already open, or open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
