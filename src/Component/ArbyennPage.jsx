import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Mainpic from './Mainpic'
import Arbaeen from './Arbaeen'
import Footer from './Footer'

const ArbyennPage = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
       <Mainpic>
         Your Spiritual Companion for the<br /> Arbyenn Pilgrimage
      </Mainpic>
      <Arbaeen/>
      <Footer/>
    </div>
  )
}

export default ArbyennPage
