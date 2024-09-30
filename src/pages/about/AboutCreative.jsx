/* eslint-disable no-unused-vars */
import React from "react";
import ProductDetail from "./AboutAccordian";

const AboutCreative = () => {
  return (
    <div>
      <section className="intro-corp section-padding pt-0">
        <div className="container-main">
          <div className="row justify-content-around align-items-center w-100">
            <div className="col-lg-5 valign md-mb50">
              <div className="imgs mb-80">
                <div
                  className="img1 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <img
                    src="/assets/about/sq1.jpg"
                    alt=""
                    className="radius-10"
                  />
                </div>
                <div
                  className="img2 wow fadeInLeft"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <img
                    src="/assets/about/sq2.jpg"
                    alt=""
                    className="radius-10"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 valign">
              <ProductDetail />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCreative;
