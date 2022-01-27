import React from 'react';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import { Route, Routes, Navigate } from 'react-router-dom';



const Body = () => {
      return (
            <div style={{ marginTop: "70px" }}>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/home" element={<Navigate to="/" />} />
                  </Routes>
            </div>
      );
}
export default Body;