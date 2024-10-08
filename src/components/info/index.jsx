import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/Footer";
import Hero from "./Hero";
import About from "./About";
import Banners from "./Banners";
import News from "./News";
const HomeIndex = () => {
  return (
    <div className="overflow-hidden w-full flex flex-col">
      <Navbar />
      <div className="w-full relative">
        <Hero />
        <About />
        <Banners />
        <News />
      </div>
      <Footer />
    </div>
  );
};

export default HomeIndex;
