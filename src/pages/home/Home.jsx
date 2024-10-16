/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import Banner from '../../componnets/banner/Banner';
import FeatureSection from '../../componnets/home/FeatureSection';
import Features from '../../componnets/home/Features';
import BgVideo from '../../componnets/home/BgVideo';
import MyComponent from '../../componnets/home/MyComponent';
import FutureBrand from '../../componnets/home/FutureBrand';
import CtaSection from '../../componnets/home/CtaSection';
import Footer from '../../componnets/common/Footer';
import ScrollToTopButton from '../../componnets/common/ScrollToTopButton';

function Home() {
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>

        <div>
        <ScrollToTopButton />
          <Banner />
          <FeatureSection />
          <MyComponent />
          <Features />
           <BgVideo />
          <FutureBrand />
          <CtaSection/>
          <Footer/>
          {/* <Features />
          <BgVideo />
          <FutureBrand />
          <CtaSection/>
          <Footer/> */}
        </div>
    </div>
  );
}

export default Home;
