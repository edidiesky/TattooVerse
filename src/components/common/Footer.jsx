import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Github, Linkedin, Twitter } from "lucide-react";

const list = [
  "full body piercing",
  "traditional tattoos",
  "tiny or micro tattoos",
  "realism tattoos",
  "geometric tattoos",
  "laser tattoo removal",
];

const navbarCenterList = [
  {
    title: "Home",
    path: "",
  },
  {
    title: "Search",
    path: "search",
  },
  {
    title: "My Favourites",
    path: "savedhomes",
  },
  {
    title: "My Trips",
    path: "trips",
  },
  {
    title: "About & FAQ",
    path: "about",
  },
];
const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full background py-40 pb-20">
        <div className="w-[90%] max-w-custom mx-auto grid md:grid-cols-custom gap-8">
          <div className="w-full grid md:grid-cols-2 gap-6">
            {list?.map((data, index) => {
              return (
                <span
                  key={index}
                  className="text-3xl md:text-4xl cursor-pointer capitalize family2 text-[var(--pink)] hover:text-[var(--primary)]"
                >
                  {data}
                </span>
              );
            })}
          </div>
          <div className="w-[500px] flex flex-col gap-4">
            <h4 className="text-center family2 text-3xl capitalize font-normal  text-[#fff]">
              subscribe to our newsletter
            </h4>
            <div
              className="flex-1 border-b flex items-center gap-4 family3 bg-transparent
             px-4 border-[rgba(255,255,255,.5)] text-lg outline-none"
            >
              <input
                className="bg-transparent flex-1 px-4"
                type="text"
                placeholder="Full Name"
              />
              <div className="btn px-8 py-4 text-white capitalize text-base">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full background_grey py-8">
        <h4 className="text-center family3 text-sm font-normal  text-[#fff]">
          <span className="text-[var(--primary)]">© 2024</span> • All Rights
          Reserved •{" "}
          <span className="text-[var(--primary)]">Tattoverse is a </span> tattoo
          conceptualization •{" "}
          <span className="text-[var(--primary)]">
            Developed By Victor Essien
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
