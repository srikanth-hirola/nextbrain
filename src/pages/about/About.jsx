/* eslint-disable no-unused-vars */
import React from 'react'
import AboutHeader from './AboutHeader';
import AboutStory from './AboutStory';
import AboutServices from './AboutServices';
import AboutFeatures from './AboutFeatures';
import AboutMarquee from './AboutMarquee';
import AboutCreative from './AboutCreative';
import TestimonialSlider from './TestimonialSlider';
import TeamSection from './TeamMembers';
import ExperienceSection from './ExperienceSection';
import Footer from '../../componnets/common/Footer'
import CtaSection from '../../componnets/home/CtaSection'
import ScrollToTopButton from '../../componnets/common/ScrollToTopButton';
const About = () => {
  return (
   <>
    <ScrollToTopButton />
    <AboutHeader/>
    <AboutMarquee/>
    <AboutStory/>
    <AboutServices/>
    <AboutCreative/>
    <TestimonialSlider/>
    <TeamSection/>
    <ExperienceSection/>
    <CtaSection/>
    <Footer/>
    {/* <AboutFeatures/>  */}
   </>
  )
}

export default About
