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
// import LoadingScreen from './componnets/loading/Loading';
// import VideoSection from './componnets/home/BgVideoTwo';

function Home() {
  const [loading, setLoading] = useState(true); // Add loading state

  // Simulate a loading delay (e.g., API call or assets loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <>
      {/* {loading ? (
        <LoadingScreen onLoadingComplete={() => setLoading(false)} /> // Show loading screen
      ) : ( */}
        <>
        <ScrollToTopButton />
          <Banner />
          <FeatureSection />
          <MyComponent />
          <Features />
          <BgVideo />
          <FutureBrand />
          <CtaSection/>
          <Footer/>
          {/* <VideoSection/> */}
        </>
      {/* )} */}
    </>
  );
}

export default Home;
