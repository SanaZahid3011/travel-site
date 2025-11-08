import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact.jsx";
import ZiyaratPackages from "./Component/ziyaratpage.jsx";
import Ashurapage from "./Component/Ashurapage.jsx";
import ArbyennPage from "./Component/ArbyennPage.jsx";
import Umrahpage from "./Component/Umrahpage.jsx";
import About from "../src/Component/About.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Zayaratpakage" element={<ZiyaratPackages />} />
      <Route path="/Ashura" element={<Ashurapage />} />
      <Route path="/Arbyenn" element={<ArbyennPage />} />
      <Route path="/Umrah" element={<Umrahpage />} />
      <Route path="/about" element={<About />} />
    </Routes>

  );
};

export default App;
