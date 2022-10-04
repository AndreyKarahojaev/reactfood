import React from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import ContentPages from './pages/ContentPages';
import ContentFloor from './pages/ContentFloor';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Testimonial from './pages/Testimonial';
import News from './pages/News';
import NotFound from './pages/NotFound';


function App() {
  return (
  <div className="container">
    <Header />
      <Routes>
        <Route path="/" element={<ContentPages />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/News" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContentFloor />
      
    <Footer/>
  </div>
  );
}

export default App;

    /* <Routes>
      <Route path="/" element={<App />} />
    </Routes> */