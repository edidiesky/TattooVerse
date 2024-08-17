import { galleryLists, pricingLists } from "@/data/pricing";
import Image from "../common/Image";

const Pricing = () => {
  return (
    <div className="w-full py-32 flex gap-40 flex-col">
      <div className="max-w-custom w-[90%] mx-auto flex flex-col gap-24">
        <div className="w-full flex flex-col gap-4 items-center justify-center">
          <span className="text-base md:text-lg md:text-center text-dark family3">
            Timeless Tattoos, Suitable Prices
          </span>
          <h2 className="family2 md:text-center text-5xl md:text-6xl capitalize">
            tattoo pricing
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {pricingLists?.map((artist, index) => {
            return (
              <div
                key={index}
                className="w-full py-8 border-b border-dotted gap-8 flex md:items-center md:flex-row flex-col justify-between"
              >
                <h1
                  style={{
                    WebkitTextStroke: "1px #eee",
                  }}
                  className="family3 text-6xl text-white"
                >
                  0{index + 1}
                </h1>
                <h5 className="family2 capitalize text-3xl">
                  {artist?.title}
                  <span className="block text-base family3 pt-4 text-grey">
                    Complex, detailed, & unlimited shading
                  </span>
                </h5>
                <p className="family3 text-3xl leading-[1.6]">
                  ${artist?.price} / hour
                </p>
                <div className="flex">
                  <button className="btn text-[#fff] py-6 px-8 text-sm md:text-lg family3 capitalize">
                    View Portfolio
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-custom w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryLists?.map((image, index) => {
          return (
            <div className="w-full cursor-pointer group overflow-hidden">
              <div
                style={{ transition: "all .5s" }}
                key={index}
                className="w-full group-hover:scale-[1.3] h-[300px]"
              >
                <Image src={image} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
