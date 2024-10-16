/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slideData } from "../../data/home";

gsap.registerPlugin(ScrollTrigger);

const MyComponent = () => {
  const listRef = useRef(null);
  const slidesRef = useRef([]);
  const listItemsRef = useRef([]);
  const videosRef = useRef([]); // Ref for video elements

  useEffect(() => {
    const list = listRef.current;
    const listItems = gsap.utils.toArray(".carousel__nav__item", list);
    const slides = gsap.utils.toArray(".carousel__item");
    const videos = gsap.utils.toArray(".carousel__video");
  
    const tl = gsap.timeline();
    const myST = ScrollTrigger.create({
      animation: tl,
      id: "st",
      trigger: ".our-work",
      start: "top top",
      end: "+=500%",
      pin: ".our-work",
      scrub: true,
      snap: {
        snapTo: 1 / (slides.length + videos.length),
      },
    });
  
    // Ensure first video is fully visible
    gsap.set(slides, { opacity: 0 });
    
    // First video visible, rest scroll in from yPercent: 30
    gsap.set(videos[0], { yPercent: 0, opacity: 1 });
    
    // Set the rest of the videos to scroll from yPercent: 30
    videos.slice(1).forEach((video) => {
      gsap.set(video, { yPercent: 50, opacity: 0 });
    });
  
    listItems.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const percent =
          tl.labels[e.target.getAttribute("data-target")] / tl.totalDuration();
        const scrollPos = myST.start + (myST.end - myST.start) * percent;
        gsap.to(window, { duration: 2, scrollTo: scrollPos });
      });
  
      const previousItem = listItems[i - 1];
      if (previousItem) {
        tl.to(item, { background: "#ff0000", boxShadow: "0 0 16px #ed3c3c" }, 0.5 * (i - 1))
          .to(slides[i], { opacity: 1, duration: 0.5 }, "<")
          .to(previousItem, { backgroundColor: "#ff0000", boxShadow: "0 0 16px transparent" }, "<")
          .to(slides[i - 1], { opacity: 0, duration: 0.5 }, "<")
          .add("our-work-" + (i + 1));
  
        if (videos[i]) {
          // Slide in the next video from yPercent: 30 and replace the previous one
          tl.to(videos[i], { yPercent: 0, opacity: 1, duration: 0.5 }, "<")
            .to(videos[i - 1], { yPercent: -30, opacity: 0, duration: 0.5 }, "<"); // Move previous video up out of view
        }
      } else {
        // First slide and video remain visible initially
        gsap.set(item, { background: "#ff0000", boxShadow: "0 0 16px #ed3c3c" });
        tl.to(slides[i], { opacity: 1, duration: 0 }, 0);
        tl.add("our-work-" + (i + 1), "+=0.5");
  
        if (videos[i]) {
          tl.to(videos[i], { yPercent: 0, opacity: 1, duration: 0.5 }, "<");
        }
      }
    });
  
    return () => {
      myST.kill();
      tl.kill();
    };
  }, []);
  
  return (
    <section className="our-work">
      <div className="container-main container sticky">
        <div
        className="ct-st"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            padding: "20px",
            flexDirection: "column",
          }}
        >
          <div className="col-12 col-md-12 slider">
            <div className="carousel__main__sec">
              <div className="carousel__slider__one">
                {slideData.map((slide, index) => (
                  <div
                    className="carousel__item"
                    id={`our-work-${slide.id}`}
                    key={index}
                    ref={(el) => (slidesRef.current[index] = el)}
                  >
                    <div className="main-sec">
                      <h2 className="blurred-box__title">{slide.title}</h2>
                      <div style={{ background: "#ff0000", width: "100%", height: "1px" }} />
                      <div className="blurred-box__footer">
                        <span className="blurred-box__footer-line"></span>
                        <p className="blurred-box__text">{slide.description}</p>
                      </div>
                    </div>
                    <div className="blurred-box__footer">
                      <button className="orderr-today-btn">Order Today</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel__slider__video">
                {slideData.map((slide, index) => (
                  <div
                    className="carousel__video"
                    id={`video-${slide.id}`}
                    key={index}
                    ref={(el) => (videosRef.current[index] = el)}
                  >
                    <video autoPlay loop muted>
                      <source src={slide.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </div>
            <ul style={{ visibility: "hidden" }} className="carousel__nav" ref={listRef}>
              {slideData.map((slide, index) => (
                <li
                  className="carousel__nav__item"
                  data-target={`our-work-${slide.id}`}
                  key={index}
                  ref={(el) => (listItemsRef.current[index] = el)}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
