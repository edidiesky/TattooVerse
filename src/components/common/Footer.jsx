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
      <div className="w-full background py-40 flex flex-col gap-20 pb-20">
        <div className="w-[90%] max-w-custom mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-8">
            <h4 className="text-start family2 text-3xl capitalize font-normal  text-[#fff]">
              subscribe to our newsletter
            </h4>
            <div className="flex items-center gap-4">
              <Link
                style={{ transition: "all .5s" }}
                href={"github.com/edidiesky"}
                className="w-16 md:w-18 h-16 md:h-18 hover:-translate-y-10 bg-[#363636] flex text-5xl cursor-pointer md:text-6xl items-center rounded-full text-white justify-center"
              >
                <Github />
              </Link>
              <Link
                style={{ transition: "all .5s" }}
                href={"https://twitter.com/edidiesky"}
                className="w-16 md:w-18 h-16 md:h-18 hover:-translate-y-10 bg-[#363636] flex text-5xl cursor-pointer md:text-6xl items-center rounded-full text-white justify-center"
              >
                <Twitter />
              </Link>{" "}
              <Link
                style={{ transition: "all .5s" }}
                href={"https://www.linkedin.com/in/victor-essien-379b03319/"}
                className="w-16 md:w-18 h-16 md:h-18 hover:-translate-y-10 bg-[#363636] flex text-5xl cursor-pointer md:text-6xl items-center rounded-full text-white justify-center"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-start family2 text-3xl capitalize font-normal  text-[#fff]">
              reach our location
            </h4>
            <div className="flex flex-col gap-3">
              <h5 className="text-start family3 text-xl capitalize font-normal  text-grey">
                12 Main Street, Queens, NY 11435
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-start family2 text-3xl capitalize font-normal  text-[#fff]">
              connect with us
            </h4>

            <div className="flex flex-col gap-3">
              <h5 className="text-start family3 text-lg capitalize font-normal  text-grey">
                For Appointments Call •• (800) 555 5555
              </h5>
              <h5 className="text-start family3 text-lg capitalize font-normal  text-grey">
                Monday To Saturday •• 09:30 to 18:00
              </h5>
            </div>
          </div>
        </div>
        <div className="w-[90%] max-w-custom mx-auto grid md:grid-cols-custom gap-16 md:gap-8">
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
          <div className=" md:w-[500px] flex flex-col gap-4">
            <h4 className="text-start family2 text-3xl capitalize font-normal  text-[#fff]">
              subscribe to our newsletter
            </h4>
            <div
              className="flex-1 border-b flex items-center gap-4 family3 bg-transparent
             px-4 pb-2 border-[rgba(255,255,255,.5)] text-lg outline-none"
            >
              <input
                className="bg-transparent border-none outline-none text-white flex-1 px-4"
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
