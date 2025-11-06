import React from 'react'
import Topbar from './Topbar';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Experience from './Experience';
import ZiyaratPackages from './ziyarat';
import Stats from './stats';
import Ashura from './Ashura';
import Booking from './Booking';
import Arbaeen from './Arbaeen';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <HeroSection/>
        <Experience/>
        <ZiyaratPackages/>
        <Stats/>
        <Ashura/>
        <Booking/>
        <Arbaeen/>
        <WhyChooseUs/>
    </div>
  )
}

export default Home
