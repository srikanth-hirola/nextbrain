/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../../componnets/common/Header';
import Footer from '../../componnets/common/Footer';

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

const Faq = () => {
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
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
      content: 'This is the content of the third accordion item.',
    },
    {
      title: 'Accordion Item 5',
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
<div>
  <Header/>
<div className="terms-banner">
        <div className="container">
        <div className="terms-banner-main">
            <h2>Faq</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eius eum provident perferendis quae culpa.</p>
        </div>
        </div>
      </div>
<div className="faq-main">
  <div className="container">
    <div className="faq-main">
      <div className="faq-title-sec">
        <h2>Service</h2>
      </div>
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
    </div>
  </div>
 </div>
 <div className="faq-main-two">
  <div className="container">
    <div className="faq-main">
      <div className="faq-title-sec">
        <h2>Service</h2>
      </div>
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
    </div>
  </div>
 </div>
<Footer/>
</div>
  );
};

export default Faq;
