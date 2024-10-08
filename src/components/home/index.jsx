import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/Footer";
import Hero from "./Hero";
import About from "./About";
import Banners from "./Banners";
import Artists from "./Artists";
import Choosing from "./Choosing";
import News from "./News";
import Pricing from "./Pricing";
const HomeIndex = ({ setMenu }) => {
  return (
    <div className="overflow-hidden w-full flex flex-col">
      {/* <Navbar /> */}
      <div className="w-full relative">
        <Hero setMenu={setMenu} />
        <About />
        <Banners />
        <Artists />
        <Choosing />
        <Pricing />
        <News />
      </div>
      <Footer />
    </div>
  );
};

export default HomeIndex;
