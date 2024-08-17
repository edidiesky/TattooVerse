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
  );
};

export default About;
