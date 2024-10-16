/* eslint-disable no-unused-vars */
import React from "react";

const AboutStory = () => {
  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
      <div className="container-about">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="bg-img radius-10 md-mb50"
              data-background="assets/imgs/about/sq1.jpg"
              style={{backgroundImage: 'url("assets/about/sq1.jpg")'}}
            ></div>
          </div>
          <div className="col-lg-8 bg-mmg">
            <div
              className="bg-img radius-10"
              data-background="assets/imgs/about/sq2.jpg"
              style={{backgroundImage: 'url("assets/about/sq2.jpg")'}}
            ></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title">Our Story.</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
              <h4>
                GeekFolio are digital marketing experts and can partner with you
                to implement tactical campaigns which engage and connect
                audiences whilst driving ROI for your brand. We are SEO and SEM
                professionals and have implemented successful search campaigns
                for clients which drive super-charge improvements in organic
                rankings, increase visits and grow revenue.{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutStory;
