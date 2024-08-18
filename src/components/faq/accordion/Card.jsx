import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const AccordionCard = ({ x, type }) => {
  const [toggle, setToggle] = useState(false);
  if (type === "home") {
    return (
      <div className="w-full overflow-hidden">
        <div
          className={`py-6 border-b border-[rgba(255,255,255,.6)] cursor-pointer flex items-center gap-4`}
          onClick={() => setToggle(!toggle)}
        >
          <div className="w-8 h-8 flex items-center justify-center bg-[#f7cab0]">
            {toggle ? <BiPlus /> : <BiMinus />}
          </div>
          <h3 className="text-2xl text-white family2">{x.title}</h3>
        </div>
        <div
          style={{ transition: "all .8s" }}
          className={`${toggle ? "max-h-[20rem]" : "max-h-[0]"} `}
        >
          <div className="p-6">
            <p className="text-bold text-grey family3 leading-[1.7] text-base">
              {x.response}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full overflow-hidden">
      <div
        className={`py-6 border-b cursor-pointer flex items-center gap-4`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="w-8 h-8 flex items-center justify-center bg-[#f7cab0]">
          {toggle ? <BiPlus /> : <BiMinus />}
        </div>
        <h3 className="text-2xl family2">{x.title}</h3>
      </div>
      <div
        style={{ transition: "all .5s" }}
        className={`${toggle ? "max-h-[20rem]" : "max-h-[0]"} `}
      >
        <div className="p-6">
          <p className="text-bold family3 leading-[1.7] text-base">
            {x.response}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
