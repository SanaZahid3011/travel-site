import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import ZiyaratPackages from './ziyarat';
import Footer from './Footer';
import Mainpic from './Mainpic';

const ziyaratpage = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Mainpic/>
      <ZiyaratPackages />
      <Footer/>
    </div>
  )
}

export default ziyaratpage
