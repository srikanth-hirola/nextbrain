/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation'; // Import Swiper navigation styles

// import required modules
import { EffectCards, Navigation } from 'swiper/modules'; // Import Navigation module

// Import React Icons (Font Awesome icons for left and right arrows)
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function TestimonalCards() {
  return (
    <div>
      <div className="swiper-container">
      <Swiper
      effect={'cards'}
      grabCursor={true}
      slidesPerView={1.2} // This makes a portion of the next and previous cards visible
      spaceBetween={-30}  // Control spacing between slides (negative for overlap)
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[EffectCards, Navigation]}
      className="mySwiper"
    >
          <SwiperSlide>
          <div
                          role="listitem"
                          className="swiper-slide is-card w-dyn-item"
                        >
                          <div className="testimonial_card">
                            <div className="testimonial_card-top">
                              <div className="testimonial_stars-wrapper">
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="text-size-medium w-richtext">
                                <p>
                                  "Perfect for urban trips. It's easy, agile,
                                  and fun! What else could you want?"<br />‍
                                </p>
                                <p>‍</p>
                              </div>
                            </div>
                            <div className="testimonial_card-bottom">
                              <div className="testimonial_person-info">
                                <p
                                  id="w-node-bf8b8737-a7a5-2a2e-3c66-4ddd6f9d6eb3-45432047"
                                  className=""
                                  style={{fontWeight:'500',color:'#000000'}}
                                >
                                  Robin
                                </p>
                                <p
                                  id="w-node-_1cb86312-26e5-075a-eda5-2cab014d63b0-45432047"
                                  className="text-size-tiny"
                                  style={{color:'#000000'}}
                                >
                                  Founder, Tech.eu
                                </p>
                              </div>
                              <img
                                alt
                                loading="lazy"
                                src="assets/tes-1.png"
                                sizes="(max-width: 479px) 64px, 96px"
                                srcSet="
                                  assets/tes-1.png 500w,
                                  assets/tes-1.png 520w
                                "
                                className="testimonial_logo-image"
                              />
                            </div>
                          </div>
                        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
                          role="listitem"
                          className="swiper-slide is-card w-dyn-item"
                        >
                          <div className="testimonial_card">
                            <div className="testimonial_card-top">
                              <div className="testimonial_stars-wrapper">
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="text-size-medium w-richtext">
                                <p>
                                  "Perfect for urban trips. It's easy, agile,
                                  and fun! What else could you want?"<br />‍
                                </p>
                                <p>‍</p>
                              </div>
                            </div>
                            <div className="testimonial_card-bottom">
                              <div className="testimonial_person-info">
                                <p
                                  id="w-node-bf8b8737-a7a5-2a2e-3c66-4ddd6f9d6eb3-45432047"
                                  className=""
                                  style={{fontWeight:'500',color:'#000000'}}
                                >
                                  Robin
                                </p>
                                <p
                                  id="w-node-_1cb86312-26e5-075a-eda5-2cab014d63b0-45432047"
                                  className="text-size-tiny"
                                  style={{color:'#000000'}}
                                >
                                  Founder, Tech.eu
                                </p>
                              </div>
                              <img
                                alt
                                loading="lazy"
                                src="assets/tes-2.png"
                                sizes="(max-width: 479px) 64px, 96px"
                                srcSet="
                                  assets/tes-2.png 500w,
                                  assets/tes-2.png 520w
                                "
                                className="testimonial_logo-image"
                              />
                            </div>
                          </div>
                        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
                          role="listitem"
                          className="swiper-slide is-card w-dyn-item"
                        >
                          <div className="testimonial_card">
                            <div className="testimonial_card-top">
                              <div className="testimonial_stars-wrapper">
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="text-size-medium w-richtext">
                                <p>
                                  "Perfect for urban trips. It's easy, agile,
                                  and fun! What else could you want?"<br />‍
                                </p>
                                <p>‍</p>
                              </div>
                            </div>
                            <div className="testimonial_card-bottom">
                              <div className="testimonial_person-info">
                                <p
                                  id="w-node-bf8b8737-a7a5-2a2e-3c66-4ddd6f9d6eb3-45432047"
                                  className=""
                                  style={{fontWeight:'500',color:'#000000'}}
                                >
                                  Robin
                                </p>
                                <p
                                  id="w-node-_1cb86312-26e5-075a-eda5-2cab014d63b0-45432047"
                                  className="text-size-tiny"
                                  style={{color:'#000000'}}
                                >
                                  Founder, Tech.eu
                                </p>
                              </div>
                              <img
                                alt
                                loading="lazy"
                                src="assets/tes-3.png"
                                sizes="(max-width: 479px) 64px, 96px"
                                srcSet="
                                  assets/tes-3.png 500w,
                                  assets/tes-3.png 520w
                                "
                                className="testimonial_logo-image"
                              />
                            </div>
                          </div>
                        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
                          role="listitem"
                          className="swiper-slide is-card w-dyn-item"
                        >
                          <div className="testimonial_card">
                            <div className="testimonial_card-top">
                              <div className="testimonial_stars-wrapper">
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="text-size-medium w-richtext">
                                <p>
                                  "Perfect for urban trips. It's easy, agile,
                                  and fun! What else could you want?"<br />‍
                                </p>
                                <p>‍</p>
                              </div>
                            </div>
                            <div className="testimonial_card-bottom">
                              <div className="testimonial_person-info">
                                <p
                                  id="w-node-bf8b8737-a7a5-2a2e-3c66-4ddd6f9d6eb3-45432047"
                                  className=""
                                  style={{fontWeight:'500',color:'#000000'}}
                                >
                                  Robin
                                </p>
                                <p
                                  id="w-node-_1cb86312-26e5-075a-eda5-2cab014d63b0-45432047"
                                  className="text-size-tiny"
                                  style={{color:'#000000'}}
                                >
                                  Founder, Tech.eu
                                </p>
                              </div>
                              <img
                                alt
                                loading="lazy"
                                src="assets/tes-4.png"
                                sizes="(max-width: 479px) 64px, 96px"
                                srcSet="
                                  assets/tes-4.png 500w,
                                  assets/tes-4.png 520w
                                "
                                className="testimonial_logo-image"
                              />
                            </div>
                          </div>
                        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
                          role="listitem"
                          className="swiper-slide is-card w-dyn-item"
                        >
                          <div className="testimonial_card">
                            <div className="testimonial_card-top">
                              <div className="testimonial_stars-wrapper">
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="text-size-medium w-richtext">
                                <p>
                                  "Perfect for urban trips. It's easy, agile,
                                  and fun! What else could you want?"<br />‍
                                </p>
                                <p>‍</p>
                              </div>
                            </div>
                            <div className="testimonial_card-bottom">
                              <div className="testimonial_person-info">
                                <p
                                  id="w-node-bf8b8737-a7a5-2a2e-3c66-4ddd6f9d6eb3-45432047"
                                  className=""
                                  style={{fontWeight:'500',color:'#000000'}}
                                >
                                  Robin
                                </p>
                                <p
                                  id="w-node-_1cb86312-26e5-075a-eda5-2cab014d63b0-45432047"
                                  className="text-size-tiny"
                                  style={{color:'#000000'}}
                                >
                                  Founder, Tech.eu
                                </p>
                              </div>
                              <img
                                alt
                                loading="lazy"
                                src="assets/tes-5.png"
                                sizes="(max-width: 479px) 64px, 96px"
                                srcSet="
                                  assets/tes-5.png 500w,
                                  assets/tes-5.png 520w
                                "
                                className="testimonial_logo-image"
                              />
                            </div>
                          </div>
                        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
                          role="listitem"
                          className="swiper-slide is-card w-dyn-item"
                        >
                          <div className="testimonial_card">
                            <div className="testimonial_card-top">
                              <div className="testimonial_stars-wrapper">
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="text-size-medium w-richtext">
                                <p>
                                  "Perfect for urban trips. It's easy, agile,
                                  and fun! What else could you want?"<br />‍
                                </p>
                                <p>‍</p>
                              </div>
                            </div>
                            <div className="testimonial_card-bottom">
                              <div className="testimonial_person-info">
                                <p
                                  id="w-node-bf8b8737-a7a5-2a2e-3c66-4ddd6f9d6eb3-45432047"
                                  className=""
                                  style={{fontWeight:'500',color:'#000000'}}
                                >
                                  Robin
                                </p>
                                <p
                                  id="w-node-_1cb86312-26e5-075a-eda5-2cab014d63b0-45432047"
                                  className="text-size-tiny"
                                  style={{color:'#000000'}}
                                >
                                  Founder, Tech.eu
                                </p>
                              </div>
                              <img
                                alt
                                loading="lazy"
                                src="assets/tes-6.svg"
                                sizes="(max-width: 479px) 64px, 96px"
                                srcSet="
                                  assets/tes-6.svg 500w,
                                  assets/tes-6.svg 520w
                                "
                                className="testimonial_logo-image"
                              />
                            </div>
                          </div>
                        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
                          role="listitem"
                          className="swiper-slide is-card w-dyn-item"
                        >
                          <div className="testimonial_card">
                            <div className="testimonial_card-top">
                              <div className="testimonial_stars-wrapper">
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="text-size-medium w-richtext">
                                <p>
                                  "Perfect for urban trips. It's easy, agile,
                                  and fun! What else could you want?"<br />‍
                                </p>
                                <p>‍</p>
                              </div>
                            </div>
                            <div className="testimonial_card-bottom">
                              <div className="testimonial_person-info">
                                <p
                                  id="w-node-bf8b8737-a7a5-2a2e-3c66-4ddd6f9d6eb3-45432047"
                                  className=""
                                  style={{fontWeight:'500',color:'#000000'}}
                                >
                                  Robin
                                </p>
                                <p
                                  id="w-node-_1cb86312-26e5-075a-eda5-2cab014d63b0-45432047"
                                  className="text-size-tiny"
                                  style={{color:'#000000'}}
                                >
                                  Founder, Tech.eu
                                </p>
                              </div>
                              <img
                                alt
                                loading="lazy"
                                src="assets/tes-7.png"
                                sizes="(max-width: 479px) 64px, 96px"
                                srcSet="
                                  assets/tes-7.png 500w,
                                  assets/tes-7.png 520w
                                "
                                className="testimonial_logo-image"
                              />
                            </div>
                          </div>
                        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
                          role="listitem"
                          className="swiper-slide is-card w-dyn-item"
                        >
                          <div className="testimonial_card">
                            <div className="testimonial_card-top">
                              <div className="testimonial_stars-wrapper">
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="text-size-medium w-richtext">
                                <p>
                                  "Perfect for urban trips. It's easy, agile,
                                  and fun! What else could you want?"<br />‍
                                </p>
                                <p>‍</p>
                              </div>
                            </div>
                            <div className="testimonial_card-bottom">
                              <div className="testimonial_person-info">
                                <p
                                  id="w-node-bf8b8737-a7a5-2a2e-3c66-4ddd6f9d6eb3-45432047"
                                  className=""
                                  style={{fontWeight:'500',color:'#000000'}}
                                >
                                  Robin
                                </p>
                                <p
                                  id="w-node-_1cb86312-26e5-075a-eda5-2cab014d63b0-45432047"
                                  className="text-size-tiny"
                                  style={{color:'#000000'}}
                                >
                                  Founder, Tech.eu
                                </p>
                              </div>
                              <img
                                alt
                                loading="lazy"
                                src="assets/tes-8.png"
                                sizes="(max-width: 479px) 64px, 96px"
                                srcSet="
                                  assets/tes-8.png 500w,
                                  assets/tes-8.png 520w
                                "
                                className="testimonial_logo-image"
                              />
                            </div>
                          </div>
                        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
                          role="listitem"
                          className="swiper-slide is-card w-dyn-item"
                        >
                          <div className="testimonial_card">
                            <div className="testimonial_card-top">
                              <div className="testimonial_stars-wrapper">
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="text-size-medium w-richtext">
                                <p>
                                  "Perfect for urban trips. It's easy, agile,
                                  and fun! What else could you want?"<br />‍
                                </p>
                                <p>‍</p>
                              </div>
                            </div>
                            <div className="testimonial_card-bottom">
                              <div className="testimonial_person-info">
                                <p
                                  id="w-node-bf8b8737-a7a5-2a2e-3c66-4ddd6f9d6eb3-45432047"
                                  className=""
                                  style={{fontWeight:'500',color:'#000000'}}
                                >
                                  Robin
                                </p>
                                <p
                                  id="w-node-_1cb86312-26e5-075a-eda5-2cab014d63b0-45432047"
                                  className="text-size-tiny"
                                  style={{color:'#000000'}}
                                >
                                  Founder, Tech.eu
                                </p>
                              </div>
                              <img
                                alt
                                loading="lazy"
                                src="assets/tes-4.png"
                                sizes="(max-width: 479px) 64px, 96px"
                                srcSet="
                                  assets/tes-4.png 500w,
                                  assets/tes-4.png 520w
                                "
                                className="testimonial_logo-image"
                              />
                            </div>
                          </div>
                        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
                          role="listitem"
                          className="swiper-slide is-card w-dyn-item"
                        >
                          <div className="testimonial_card">
                            <div className="testimonial_card-top">
                              <div className="testimonial_stars-wrapper">
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                                <div className="icon-embed-xxsmall w-embed">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid meet"
                                    aria-hidden="true"
                                    role="img"
                                  >
                                    <path
                                      d="M9.4908 1.12016C9.83454 0.303697 11.0053 0.303698 11.349 1.12016L13.3778 5.93905C13.5228 6.28325 13.8505 6.51842 14.2266 6.54821L19.4926 6.96529C20.3848 7.03596 20.7466 8.13595 20.0668 8.71121L16.0547 12.1065C15.7681 12.349 15.6429 12.7296 15.7305 13.0921L16.9563 18.1688C17.1639 19.0289 16.2168 19.7088 15.4529 19.2479L10.9445 16.5274C10.6224 16.333 10.2174 16.333 9.8954 16.5274L5.38691 19.2479C4.62303 19.7088 3.67588 19.0289 3.88355 18.1688L5.10934 13.0921C5.1969 12.7296 5.07174 12.349 4.78518 12.1065L0.772984 8.71121C0.0932041 8.13595 0.45499 7.03596 1.34721 6.96529L6.61328 6.54821C6.98942 6.51842 7.31708 6.28325 7.46199 5.93905L9.4908 1.12016Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="text-size-medium w-richtext">
                                <p>
                                  "Perfect for urban trips. It's easy, agile,
                                  and fun! What else could you want?"<br />‍
                                </p>
                                <p>‍</p>
                              </div>
                            </div>
                            <div className="testimonial_card-bottom">
                              <div className="testimonial_person-info">
                                <p
                                  id="w-node-bf8b8737-a7a5-2a2e-3c66-4ddd6f9d6eb3-45432047"
                                  className=""
                                  style={{fontWeight:'500',color:'#000000'}}
                                >
                                  Robin
                                </p>
                                <p
                                  id="w-node-_1cb86312-26e5-075a-eda5-2cab014d63b0-45432047"
                                  className="text-size-tiny"
                                  style={{color:'#000000'}}
                                >
                                  Founder, Tech.eu
                                </p>
                              </div>
                              <img
                                alt
                                loading="lazy"
                                src="assets/tes-6.svg"
                                sizes="(max-width: 479px) 64px, 96px"
                                srcSet="
                                  assets/tes-6.svg 500w,
                                  assets/tes-6.svg 520w
                                "
                                className="testimonial_logo-image"
                              />
                            </div>
                          </div>
                        </div>
          </SwiperSlide>
           <div className="swiper-main-">
            {/* Custom Previous and Next buttons */}
        <div className="swiper-button-prev">
          <FaArrowLeft style={{ fontSize: '24px' }} />
        </div>
        <div className="swiper-button-next">
          <FaArrowRight style={{ fontSize: '24px' }} />
        </div>
           </div>
        </Swiper>

       
      </div>
    </div>
  );
}
