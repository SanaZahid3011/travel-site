import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Mainpic from './Mainpic'
import Ashura from './Ashura'
import Footer from './Footer'

const Ashurapage = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
       <Mainpic>
        Reignite Your Spirit with the Eternal<br />  Light of Ashura
      </Mainpic>
      <Ashura/>
      <Footer/>
    </div>
  )
}

export default Ashurapage
