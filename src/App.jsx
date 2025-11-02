import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link,} from "react-router-dom";
import Home from './Component/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
