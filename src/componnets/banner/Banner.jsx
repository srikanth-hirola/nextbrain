/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Banner = () => {
  useEffect(() => {
    const animateText = () => {
      const texts = ['Fun', 'Green', 'Fast']; // Texts to animate
      let headlineElement = document.querySelector(".headline_text.tricks");

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      texts.forEach((text) => {
        tl.to(headlineElement, {
          textContent: text,     // Update the text content inside span
          opacity: 1,            // Fade in the text
          y: 0,                  // Move into view
          duration: 1.5,         // Duration of entering animation
          ease: "elastic.out(1, 0.75)", // Smooth elastic effect
        })
        .to(headlineElement, {
          opacity: 0,            // Fade out the text
          y: -50,                // Move out of view
          duration: 1,           // Duration of exiting animation
          ease: "power1.in",     // Smooth fade-out effect
          delay: 1,              // Delay before switching to the next word
        });
      });
    };

    animateText(); // Start the animation

    return () => {
      gsap.killTweensOf(".headline_text.tricks"); // Clean up the animation on unmount
    };
  }, []);

  return (
    <div className="banner-main">
      <header className="section_home-hero">
      <div
          data-w-id="df617927-7f5d-a8fb-83a8-1e1f31b37ac2"
          class="navbar_container"
        >
          <a
            href="/"
            id="w-node-df617927-7f5d-a8fb-83a8-1e1f31b37ac3-31b37ac1"
            aria-current="page"
            class="navbar_logo-link w-nav-brand w--current"
            ><div
              data-w-id="6f1f58fe-b831-0724-30c1-8a1c51c44599"
              class="navbar_logo is-full w-embed"
            >
            <img src="assets/logo.svg" alt=""/>
            </div>
            <div class="navbar_logo is-mark w-embed">
              <img src="assets/logo.svg" alt=""/>
              </div
          ></a>
          <nav
            role="navigation"
            id="w-node-df617927-7f5d-a8fb-83a8-1e1f31b37ac5-31b37ac1"
            class="navbar_menu w-nav-menu"
          >
             <div className="navbar_menu-link-wrapper">
          <Link to="/about" className="navbar_link w-nav-link">
              About
            </Link>
            <Link
              to="/blog"
              data-w-id="df617927-7f5d-a8fb-83a8-1e1f31b37ac7"
              className="navbar_link w-nav-link"
            >
              Blogs
            </Link>
            <Link to="/gallery" className="navbar_link w-nav-link">
              Gallery
            </Link>
            <Link to="/faq" className="navbar_link w-nav-link">
              FAqs
            </Link>
         
          </div>
          </nav>
          <div
            id="w-node-df617927-7f5d-a8fb-83a8-1e1f31b37acf-31b37ac1"
            class="navbar_button-wrapper"
          >
            <div>
              <div
                data-w-id="c70c4579-6e48-f314-6c9d-3eab596fc8e2"
                class="button is-nav"
              >
                <div class="button-text">Order now</div>
              </div>
            </div>
            <div class="navbar_menu-button w-nav-button">
              <div class="menu-icon">
                <div class="menu-icon_line-top"></div>
                <div class="menu-icon_line-middle">
                  <div class="menu-icon_line-middle-inner"></div>
                </div>
                <div class="menu-icon_line-bottom"></div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="home-hero_height">
          <div className="home-hero_wrapper">
            <div className="container-large">
              <div className="home-hero_h1-wrapper main-new">
                <h1 className="home-hero_h1 headline_text_wrapper">
                  {/* Static text with animated text inside the span */}
                 <div className="span-text-info">
                 <span className="headline_text tricks" style={{ position: 'relative', display: 'inline-block' }}>
                    Fun
                  </span>
                 </div>
                  mobility for professionals {/* This part remains static */}
                </h1>
                <div className="margin-top margin-small">
                  <div className="max-width-small">
                    <p>
                      Nextbrain is an e-mobylette that weighs 28 kilos and goes up to 45 km/h with a range of 80 km. From €149/month, we register, insure, provide, and maintain your fleet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-hero_background-image-wrapper">
              <div className="home-hero_background-overlay"></div>
              <img
                src="assets/banner.png"
                loading="eager"
                style={{ opacity: 1, filter: 'blur(0px)' }}
                sizes="100vw"
                alt="Side view of the Yoda bike."
                srcSet="
                  /assets/banner.png 500w,
                  /assets/banner.png 800w,
                  /assets/banner.png 1080w,
                  /assets/banner.png 1600w,
                  /assets/banner.png 2000w,
                  /assets/banner.png 2600w,
                  /assets/banner.png 3200w,
                  /assets/banner.png 4000w
                "
                className="home-hero_background-image"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;

