import Banner1 from "@/assets/svg/banner1";
import Image from "../common/Image";

const Banners = () => {
  const bannerData = [
    {
      image:
        "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/micro-tattoos-1-600x625.jpg",
      title: "traditional tattoos",
      subtitle: "The World of Photorealistic Tattoos",
    },
    {
      image:
        "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/geomatric-tattoos-1.jpg",
      title: "tiny or micro tattoos",
      subtitle: "Aesthetically Pleasing with a Delicate Look",
    },
    {
      image:
        "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/traditional-tattoos-1-600x625.jpg",
      title: "geometric tattoos",
      subtitle: "Clean, Vivid Colors & Iconic Tattoo Style",
    },
    {
      image:
        "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/realism-tattoos-1-800x833.jpg",
      title: "realism tattoos",
      subtitle: "Get a Fresh, Modern & Colorful Twister",
    },
  ];
  return (
    <div className="w-full">
      <div className="relative  py-20 flex flex-col gap-24 bg-[#111111]">
        <Banner1 />
        <div className="w-full z-20 relative px-4 md:text-center">
          <h2 className="text-4xl md:text-6xl capitalize text-white family2">
            <span className="block family3 text-xl md:text-2xl pb-6 text-[var(--pink)]">
              Traditional to Modern Tattoos
            </span>
            get a stylish tattoo
          </h2>
        </div>
        <div className="w-full bg-[#111111] grid md:grid-cols-2">
          {bannerData?.map((data, index) => {
            return (
              <div
                key={index}
                className=" md:h-[450px] w-full relative grid sm:grid-cols-2 items-center justify-center"
              >
                <div className="w-full object-cover h-[300px] md:h-full z-10">
                  <Image src={data?.image} alt="" />
                </div>
                <div className="w-full bg-[#111111] hover:bg-[#0e0e0e] p-8 flex flex-col gap-4 md:items-center justify-center h-full">
                  <h3 className="text-4xl capitalize md:text-center text-white family2">
                    {data?.title}
                  </h3>
                  <h3 className="text-lg capitalize md:text-center text-grey family3">
                    {data?.subtitle}
                  </h3>

                  <div className="flex items-center mt-8 md:justify-end">
                    <button className="btn_2 family1 px-10 py-6 text-sm md:text-sm text-white">
                      GET TATTOOED
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

export default Banners;
