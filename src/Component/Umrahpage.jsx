import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Mainpic from './Mainpic'
import Footer from './Footer'
import UmrahPackage from './Umrahpackage'
const Umrahpage = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Mainpic>
        Umrah Where Every Step Brings<br /> You Closer to Allah
      </Mainpic>
      <UmrahPackage/>
      <Footer/>
    </div>
  )
}

export default Umrahpage


