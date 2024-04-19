import React from 'react'
import Hero from "./Hero";
import AboutUs from './AboutUs';
import GetFeatured from './GetFeatured';
import Webitorialsgallery from './Webitorialsgallery';
import MagazineSection from './MagazineSection';
import BlogSection from './BlogSection';
import FooterHeader from "../../Common/FooterCommon/FooterHeader"; 
import AdsComponent from '../../../Ads';

const Home = () => {
  return (
    <>
       <Hero />
       <MagazineSection />
       <Webitorialsgallery/>
       <AboutUs />
       <GetFeatured />
       <BlogSection/>
       <AdsComponent dataAdSlot='4631058118'/>
       <FooterHeader />
    </>
  )
}

export default Home