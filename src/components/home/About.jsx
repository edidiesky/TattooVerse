import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "../common/Image";

const About = () => {
  const aboutData = [
    {
      image:
        "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/tattoo-aftercare-2-600x375.jpg",
      title: "tattoo aftercare",
      subTitle: "Leveraging Skin Durability",
    },
    {
      image:
        "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/tattoo-removal-2-600x375.jpg",
      title: "custom tattoos",
      subTitle: "Designing the Wearable Art",
    },
    {
      image:
        "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/custom-body-tattoos-1-600x375.jpg",
      title: "tattoo removal",
      subTitle: "Remove Unwanted Tattoo",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full grid sm:grid-cols-3">
        {aboutData?.map((data, index) => {
          return (
            <div
              key={index}
              className="w-full relative h-[300px] flex items-center justify-center"
            >
              <div className="absolute w-full h-full bg-[rgba(0,0,0,.5)] z-[30]"></div>
              <img
                src={data?.image}
                alt=""
                className="absolute h-full z-10 w-full object-cover"
              />
              <div className="h-full w-full z-[60] flex items-center justify-center gap-2 flex-col">
                <h4 className="text-3xl capitalize text-white family2">
                  {data?.title}
                </h4>

                <h5 className="text-lg capitalize text-grey family3">
                  {data?.title}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center relative min-h-[40vh] py-32">
        <div className="max-w-custom w-[93%] mx-auto grid md:grid-cols-2 gap-20">
          <div className="w-full grid md:grid-cols-2 gap-8 items-center">
            <div className=" md:w-[100%] md:mt-20 h-[380px] md:h-[450px]">
              <Image
                src={
                  "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/about-tattoo-1-400x757.jpg"
                }
                alt={"background_image_1"}
              />
            </div>
            <div className=" md:w-[100%] md:-mt-20 h-[380px] md:h-[450px]">
              <Image
                src={
                  "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/about-tattoo-2-400x757.jpg"
                }
                alt={"background_image_1"}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="family2 capitalize text-5xl md:text-6xl text-dark">
                The endless tattoo design possibilities
              </h2>
              <span className="block text-base md:text-lg family3 text-dark">
                Amet sed suscipit dui urna lectus. Sit at ipsum hendrerit port
                facilisis. Diam risus eget integer velit lorem elit nunc.
              </span>
            </div>

            <div className="w-full gap-4 flex flex-col py-4">
              <span className="flex items-center text-lg md:text-lg family3 gap-4">
                <MdOutlineKeyboardDoubleArrowRight color="var(--pink_dark)" />
                Bringing your imagination to life
              </span>

              <span className="flex items-center text-lg md:text-lg family3 gap-4">
                <MdOutlineKeyboardDoubleArrowRight color="var(--pink_dark)" />
                Great artistry behind tattoo studios
              </span>
              <span className="flex items-center text-lg md:text-lg family3 gap-4">
                <MdOutlineKeyboardDoubleArrowRight color="var(--pink_dark)" />A
                deep dive into the world of tattoo ink
              </span>
            </div>

            <h4 className="text-2xl py-6 family3 border-l-4 pl-8 border-[var(--pink)]">
              Get a personalized Avada tattoo design and feel proud of your
              style ♡ …
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
