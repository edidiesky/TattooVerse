import { artistslists } from "@/data/artists";
import Image from "../common/Image";

const Artists = () => {
  return (
    <div className="w-full py-32">
      <div className="max-w-custom w-[95%] md:px-4 md:w-[80%] mx-auto flex flex-col gap-24">
        <div className="w-full flex flex-col gap-4 items-center justify-center">
          <span className="text-base md:text-lg md:text-center text-dark family3">
            Certified Tattoo Experts
          </span>
          <h2 className="family2 md:text-center text-4xl md:text-6xl capitalize">
            Meet The Artists
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {artistslists?.map((artist, index) => {
            return (
              <div
                key={index}
                className="w-full gap-4 grid md:grid-cols-custom_2"
              >
                <div className="md:w-[400px] min-h-[350px] md:min-h-[440px]">
                  <Image src={artist?.image} />
                </div>
                <div className="w-[100%] shadows flex flex-col gap-8 py-8 md:py-20 px-12 md:px-20">
                  <div className="pb-4 md:pb-12 flex flex-col gap-4 w-full border-b border-dotted">
                    <h5 className="family3 text-lg">{artist?.role}</h5>
                    <h3 className="family2 text-4xl md:text-5xl">
                      {artist?.name}
                    </h3>
                  </div>
                  <p className="family3 py-4 text-base md:text-lg leading-[1.6]">
                    {artist?.description}
                  </p>
                  <div className="flex">
                    <button className="btn text-[#fff] py-4 md:py-6 px-8 md:px-12 text-lg family3 capitalize">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Artists;
