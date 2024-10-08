/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import BlogMain from "./pages/blogs/BlogMain";
import BlogDetails from "./pages/blogs/BlogDetails";
import './App.css';
import './sass/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Faq from "./pages/faq/Faq";
import Gallery from "./pages/gallery/Gallery";
import ScrollToTop from "./componnets/common/ScrollToTop";
import PageReveal from "./componnets/common/loading/Loading";

const App = () => {
  
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 3000);
  
      return () => clearTimeout(timer); 
    }, [loading]);
  
  return (
    <div>
      {loading ? (
       <PageReveal/>
      ) : (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/faq' exact element={<Faq/>}/>
        <Route path='/gallery' exact element={<Gallery/>}/>
        <Route path='/blog' exact element={<BlogMain/>}/>
        <Route path="/blog/:slug" exact element={<BlogDetails/>} />
      </Routes>
    </>
      )}
      </div>
  );
};

export default App;
