import React from 'react';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import ContentPages from './pages/ContentPages';
import ContentFloor from './pages/ContentFloor';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Testimonial from './pages/Testimonial';
import OtherProduct from './pages/OtherProduct';
import News from './pages/News';


function App() {
  return (
  <div className="container">
    <Header />
      <ContentPages />
      <ContentFloor />
      <AboutUs />
      <Shop />
      <Testimonial />
      <OtherProduct />
      <News />
    <Footer/>
  </div>
  );
}

export default App;

    /* <Routes>
      <Route path="/" element={<App />} />
    </Routes> */