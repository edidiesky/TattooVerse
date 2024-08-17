import Banner1 from "@/assets/svg/banner1";
import Image from "../common/Image";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Choosing = () => {
  return (
    <div className="w-full">
      <div className="relative  py-40 flex flex-col gap-24 bg-[#111111]">
        {/* <Banner1 /> */}
        <div className="z-40 max-w-custom md:items-center w-[90%] mx-auto bg-[#111111] gap-20 grid lg:grid-cols-custom_2">
          <div className="w-full md:w-[450px] gap-8 relative items-center">
            <div className="h-[500px] md:h-[600px]">
              <Image
                src={
                  "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/avada-tattoo-hero-1.jpg"
                }
                alt={"background_image_1"}
              />
              <div
                style={{ borderWidth: "16px" }}
                className="absolute -bottom-10 -right-5 w-[300px] border-[#111111] h-[200px] md:h-[250px]"
              >
                <Image
                  src={
                    "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/tattoo-reviews-1-600x367.jpg"
                  }
                  alt={"background_image_1"}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-8">
            <h2 className="text-5xl lg:text-7xl capitalize text-white family2">
              embrace the ink, <br /> embrace the individual
            </h2>
            <p className="text-lg text-grey family3">
              Amet sed suscipit dui urna lectus. Sit at ipsum hendrerit port
              nonuma facilisis. Diam risus eget integer velit lorem elit nunc.
            </p>

            <div className="w-full gap-4 flex flex-col py-4">
              <span className="flex items-center text-lg md:text-lg family3 text-grey gap-4">
                <MdOutlineKeyboardDoubleArrowRight
                  color="var(--pink)"
                  fontSize={"30px"}
                />
                Bringing your imagination to life
              </span>

              <span className="flex items-center text-lg md:text-lg family3 text-grey gap-4">
                <MdOutlineKeyboardDoubleArrowRight
                  color="var(--pink)"
                  fontSize={"30px"}
                />
                Great artistry behind tattoo studios
              </span>
              <span className="flex items-center text-lg md:text-lg family3 text-grey gap-4">
                <MdOutlineKeyboardDoubleArrowRight
                  color="var(--pink)"
                  fontSize={"30px"}
                />
                A deep dive into the world of tattoo ink
              </span>
            </div>
            <div className="flex mt-4">
              <div className="btn px-10 py-6 text-base capitalize text-white">
                GET YOUR STYLE
              </div>
            </div>
          </div>
        </div>
        <div className="absolute filter z-40 bottom-0 w-full">
          <img
            style={{ boxShadow: "none !important" }}
            src="https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/floral-section-separator-3.png"
            alt=""
            className="w-full brightness-105 h-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Choosing;
