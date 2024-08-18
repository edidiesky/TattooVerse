import { TattooingData } from "@/data/accordiondata";
import Accordion from "../faq/accordion";
import Image from "../common/Image";

const News = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <div className="w-full py-28 flex items-center justify-center background_grey relative ">
        <div className="max-w-custom mx-auto w-[95%] md:w-[80%] gap-20 flex items-center justify-center flex-col">
          <div className="flex flex-col gap-4">
            <h1 className="family2 md:text-center capitalize text-5xl md:text-6xl text-white">
              read our FAQs
            </h1>
            <span className="block md:text-center text-xl md:text-2xl family3 text-grey">
              Have a question in mind?
            </span>
          </div>

          <Accordion type={"home"} data={TattooingData} />
        </div>
      </div>
      <div className="w-full py-28 flex items-center justify-center relative ">
        <div className="max-w-custom mx-auto w-[90%] md:w-[90%] gap-20 grid md:grid-cols-custom">
          <div className="w-full flex flex-col gap-4 md:gap-8">
            <h2 className="family2 text-4xl md:text-5xl text-dark">
              Do You Have A Tattoo In Mind? Bring your vision to life with us
            </h2>
            <span className="block text-base md:text-lg family3 text-dark">
              Visit us or send a message to consult with our artists for a
              tattoo.
            </span>

            <div className="w-full pt-8 grid sm:grid-cols-2 gap-12">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-b family3 pb-4 px-4 border-[rgba(0,0,0,.5)] text-lg outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full border-b family3 pb-4 px-4 border-[rgba(0,0,0,.5)] text-lg outline-none"
              />
              <input
                type="text"
                placeholder="Phone Address"
                className="w-full border-b family3 pb-4 px-4 border-[rgba(0,0,0,.5)] text-lg outline-none"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border-b family3 pb-4 px-4 border-[rgba(0,0,0,.5)] text-lg outline-none"
              />
            </div>
            <textarea
              type="text"
              placeholder="Address"
              className="w-full border-b family3 pb-4 px-4 border-[rgba(0,0,0,.5)] text-lg outline-none"
            />
          </div>
          <div className=" md:w-[500px]">
            <Image
              src={
                "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/avada-tattoo-hero-1.jpg"
              }
              alt={"background_image_1"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
