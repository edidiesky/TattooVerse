import Image from "../common/Image";

const Banners = () => {
  const imagelist = [
    "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/gallery-image-02-800x875.jpg",
    "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/gallery-image-01-800x875.jpg",
    "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/gallery-image-04-800x875.jpg",
    "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/gallery-image-03.jpg",
    "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/gallery-image-05-800x875.jpg",
  ];
  return (
    <div className="w-full">
      <div className="py-28 background_dark_2 w-full">
        <div className="w-[95%] mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-8">
            <h4 className="text-3xl md:text-4xl capitalize family2 text-white">
              we follow top cleaning & safety measures
            </h4>
            <h5 className="text-base leading-[1.6] family3 text-grey">
              Aempus fringilla augue tempor ipsum. Sceler exercitation que nunc
              pretium amet velit integ porta sed ipsum facilisus.
            </h5>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-3xl md:text-4xl capitalize family2 text-white">
              Comfortable & relaxing studio environment
            </h4>
            <h5 className="text-base leading-[1.6] family3 text-grey">
              Aempus fringilla augue tempor ipsum. Sceler exercitation que nunc
              pretium amet velit integ porta sed ipsum facilisus.
            </h5>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-3xl md:text-4xl capitalize family2 text-white">
              signup for consultation & customized plans
            </h4>
            <h5 className="text-base leading-[1.6] family3 text-grey">
              Aempus fringilla augue tempor ipsum. Sceler exercitation que nunc
              pretium amet velit integ porta sed ipsum facilisus.
            </h5>
          </div>
        </div>
      </div>
      <div
        className="w-full flex items-center justify-center
   gap-8"
      >
        <div className="w-full grid md:grid-cols-5">
          {imagelist?.map((image, index) => {
            return (
              <div
                key={index}
                className="w-full h-[300px] md:h-[350px] overflow-hidden cursor-pointer group"
              >
                <div
                  style={{ transition: "all .6s" }}
                  className="w-full group-hover:scale-[1.1] h-full"
                >
                  <Image src={image} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="w-full py-40 relative background_dark flex items-center justify-center
   gap-8"
      >
        <div className="max-w-custom mx-auto w-[95%] grid md:grid-cols-custom gap-8">
          <h2 className="text-4xl md:text-6xl capitalize text-white family2">
            are you ready for a personal tattooing & body piercing
          </h2>
          <div className="md:w-[400px] md:justify-end flex items-center">
            <button className="btn py-4 px-8 text-lg family1 text-white">
              SCHEDULE AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
