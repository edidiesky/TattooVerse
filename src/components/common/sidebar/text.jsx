import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimateText from "@/animations/AnimateText";

const textvariants = {
  initial: {
    opacity: "0",
    y: 100,
    transition: { duration: 1.7, ease: [0.76, 0, 0.24, 1] },
  },
  enter: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.7,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.8 + index * 0.1,
    },
  }),
  exit: (index) => ({
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1 + index * 0.07,
    },
  }),
};

const Text = ({ x, index }) => {
  return (
    <div className="h-full overflow-hidden flex items-center justify-center">
      <motion.h1
        variants={textvariants}
        initial={"initial"}
        animate={"enter"}
        exit={"exit"}
        custom={index}
        key={index}
        className="text-5xl lg:text-7xl border-b text-start border-[rgba(255,255,255,.05)] h-20 overflow-hidden w-full z-20 
      relative font-normal text-white uppercase family2"
      >
        <h1 className="text-5xl lg:text-7xl w-full z-20 font-normal text-white uppercase family2">
          <Link to={`${x?.path}`}>
            <AnimateText color={x?.color} children={x?.title} />
          </Link>
        </h1>
      </motion.h1>
    </div>
  );
};
export default Text;
