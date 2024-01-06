import React from 'react'
import SearchSlider from './SearchSlider';
import AboutPlatform from './AboutPlatform';
import HouseProvider from './HouseProvider';
import CaseReview from './CaseReview';
import CareJourney from './CareJourney';

const Home = () => {
  return (
    <>
    <SearchSlider />
    <HouseProvider />
    <AboutPlatform />
    <CaseReview />
    <CareJourney />
    </>
   
  )
}

export default Home