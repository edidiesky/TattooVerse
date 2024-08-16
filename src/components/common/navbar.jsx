"use client";
import React from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import AnimateText from "@/animations/AnimateText";
const linkData = [
  {
    title: "Home",
    path: "",
  },
  {
    title: "Artists",
    path: "tattoo/artists",
  },
  {
    title: "FAQ",
    path: "tattoo/faq",
  },
  {
    title: "Our Information",
    path: "tattoo/about",
  },
  {
    title: "Contact Us",
    path: "contact",
  },
];

const Navbar = () => {
  const [bar, setBar] = React.useState(false);
  const handleLogOut = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="p-3 z-[50] bg-[#111111] px-2 md:px-8 min-h-[100px] fixed w-full top-0 left-0 flex items-center justify-center">
        <div className="w-full flex items-center gap-2 justify-between">
          <Link to={"/"} className=" flex items-center gap-1 justify-start">
            <img
              alt="Cotion"
              width={0}
              sizes="100vw"
              height={0}
              loading="lazy"
              src="https://www.hopper.com/assets/treasure-D-5S8iOp.svg"
              className="w-14 h-14 rounded-full object-cover"
            />
            <h4 className="flex font-bold flex-col text-base font-booking_font4 text-[#fff]">
              TattooVerse{" "}
              <span className="block text-grey text-xs font-normal family1 font-booking_font">
                {" "}
                Home of Tattoos
              </span>
            </h4>
          </Link>
          <div className="items-center justify-start hidden lg:flex gap-4">
            {linkData?.map((list, index) => {
              return (
                <Link
                  to={`/${list.path}`}
                  key={index}
                  className={`text-sm md:text-base hover:text-grey uppercase text-[#fff] family3 flex items-center gap-2 p-3 px-3 rounded-[40px]`}
                >
                  {/* <img src={list?.icon} className="w-4" alt="" /> */}
                  <AnimateText children={list?.title} />
                </Link>
              );
            })}
          </div>
          <div className="flex items-center justify-end">
            <button className="btn family1 px-8 py-4 md:px-10 md:py-6 text-sm md:text-base text-white">
              GET TATTOOED
            </button>
          </div>
        </div>
      </div>
      {/* <div
        style={{ zIndex: "200" }}
        className={`${bar ? "left-0" : "-left-[100%]"
          } w-[300px] h-full transition-all ease duration-700 fixed flex lg:hidden top-0 bg-[#fff] shadow-2xl column gap-2`}
      >
        <div
          onClick={() => setBar(!bar)}
          style={{ zIndex: "200" }}
          className={`${bar ? "left-0" : "-left-[100%]"
            } w-full h-full transition-all ease duration-300 fixed flex lg:hidden top-0 bg-[#42424227] column gap-2`}
        ></div>

        <div
          style={{ zIndex: "200" }}
          className="w-full Header_wrapper h-full bg-white flex item-center flex-col gap-4"
        >
          {currentUser && (
            <div className="flex p-4 items-center gap-2">
              {currentUser?.image ? (
                <img
                  src={currentUser?.image}
                  alt=""
                  className="w-12 lg:w-12 h-12 lg:h-12 rounded-full"
                />
              ) : currentUser?.username ? (
                // <div className="w-12 h-12 text-white rounded-full bg-[#000] text-2xl flex items-center justify-center ">
                //   {currentUser?.username[0]}{" "}
                // </div>
                <img
                  src="https://fundednext.fra1.digitaloceanspaces.com/dashboard/demo-avatar.jpg"
                  alt=""
                  className="w-12 lg:w-12 h-12 lg:h-12 rounded-full"
                />
              ) : (
                <img
                  src="https://fundednext.fra1.digitaloceanspaces.com/dashboard/demo-avatar.jpg"
                  alt=""
                  className="w-12 lg:w-12 h-12 lg:h-12 rounded-full"
                />
              )}
              {currentUser && (
                <h4 className="text-base font-booking_font4 text-dark family1">
                  {currentUser?.name}
                  <span className="block font-normal font-booking_font text-sm text-grey">
                    {currentUser?.email}
                  </span>
                </h4>
              )}
            </div>
          )}
          <ul className="flex flex-col w-full">
            {currentUser
              ? linkData?.slice(0, 6)?.map((x, index) => {
                return (
                  <Link
                    to={`/${x.path}`}
                    key={index}
                    className="text-dark font-booking_font4
                        hover:bg-[rgba(0,0,0,.1)] py-[20px] border-b text-sm px-8"
                  >
                    {x.title}
                  </Link>
                );
              })
              : linkData?.map((x, index) => {
                return (
                  <Link
                    to={`/${x.path}`}
                    key={index}
                    className="text-dark font-booking_font4  hover:bg-[rgba(0,0,0,.1)] py-[20px] border-b text-sm px-8"
                  >
                    {x.title}
                  </Link>
                );
              })}
          </ul>
        </div>
      </div> */}
    </>
  );
};


export default Navbar;
