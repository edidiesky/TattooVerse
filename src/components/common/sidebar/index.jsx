import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import Text from "./text";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
const linklist = [
  {
    title: "Home",
    path: "",
    color: "#FF00B0",
  },
  {
    title: "Artists",
    path: "tattoo/artists",
    color: "#FFC700",
  },
  {
    title: "FAQ",
    path: "tattoo/faq",
    color: "#00FAFF",
  },

  {
    title: "Our Information",
    path: "tattoo/about",
    color: "#0433FF",
  },
  {
    title: "Contact Us",
    path: "contact",
    color: "#FF00B0",
  },
];
const variants = {
  open: {
    width: "100vw",
    left: 0,
    transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.9 },
    left: "-100%",
  },
};

const locationvariants = {
  initial: {
    opacity: "0",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] },
  },
  enter: (index) => ({
    opacity: 1,
    transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const Sidebar = ({ menu, setMenu }) => {
  const menuref = useRef(null);
  return (
    <motion.div
      variants={variants}
      initial={"close"}
      animate={menu ? "open" : "close"}
      style={{ width: "100vw", zIndex: 200 }}
      ref={menuref}
      className="bg-[#000] fixed top-0 w-full h-[100vh] left-0 right-0 flex items-center justify-center"
    >
      <div
        onClick={() => setMenu(!menu)}
        className="h-16 absolute top-10 right-10 z-[5000] cursor-pointer text-2xl text-white bg-[rgba(255,255,255,.1)]
         w-16 rounded-full flex items-center justify-center"
      >
        <RxCross1 />
      </div>

      <div className="h-full z-20 w-[90%] max-w-custom_1 py-20 mx-auto flex items-start justify-center flex-col gap-12">
        <AnimatePresence mode="wait">
          {menu && (
            <div className="flex flex-col gap-1">
              {linklist?.map((x, index) => {
                return (
                  <Text
                    index={index}
                    key={index}
                    x={x}
                    menu={menu}
                    setMenu={setMenu}
                  />
                );
              })}
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {menu && (
            <motion.div
              initial={"initial"}
              animate={"enter"}
              exit={"exit"}
              variants={locationvariants}
              className="w-full flex items-center"
            >
              <Link 
                style={{ transition: "all .5s" }}
                href={"github.com/edidiesky"}
                className="w-16 md:w-18 h-16 md:h-18 hover:-translate-y-4 hover:bg-[#363636] flex text-5xl cursor-pointer md:text-6xl items-center rounded-full text-white justify-center"
              >
                <Github />
              </Link>
              <Link
                style={{ transition: "all .5s" }}
                href={"https://twitter.com/edidiesky"}
                className="w-16 md:w-18 h-16 md:h-18 hover:-translate-y-4 hover:bg-[#363636] flex text-5xl cursor-pointer md:text-6xl items-center rounded-full text-white justify-center"
              >
                <Twitter />
              </Link>{" "}
              <Link
                style={{ transition: "all .5s" }}
                href={"https://www.linkedin.com/in/victor-essien-379b03319/"}
                className="w-16 md:w-18 h-16 md:h-18 hover:-translate-y-4 hover:bg-[#363636] flex text-5xl cursor-pointer md:text-6xl items-center rounded-full text-white justify-center"
              >
                <Linkedin />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
export default Sidebar;
