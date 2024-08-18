import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { AnimatePresence, motion } from "framer-motion";
import "locomotive-scroll/src/locomotive-scroll.scss";
import HomeIndex from "../components/home";
import Meta from "@/components/common/Meta";
import Sidebar from "@/components/common/sidebar";

const Home = () => {
  const elementRef = useRef(null);
    const [menu, setMenu] = useState(false);
  // useEffect(() => {
  //   const scrollEle = document.querySelector("#main-content");
  //   const locoScroll = new LocomotiveScroll({
  //     el: scrollEle,
  //     smooth: true,
  //     multiplier: 1,
  //     class: "is-reveal",
  //   });
  // }, []);
  return (
    <div ref={elementRef} id="main-content" data-scroll-container>
      <AnimatePresence>
        <Sidebar menu={menu} setMenu={setMenu} />
      </AnimatePresence>
      <Meta />
      <HomeIndex setMenu={setMenu} />
    </div>
  );
};

export default Home;
