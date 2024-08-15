import Image from "../common/Image";

const News = () => {
  return (
    <div className="w-full bg-[#fff] py-32">
      <div className="w-full flex flex-col gap-12 md:gap-20">
        <div className="w-[95%] mx-auto flex flex-col gap-4">
          <span className="text-xl md:text-center family3 text-grey">
            Celebrating Life’s Experiences
          </span>
          <h2 className="family2 capitalize md:text-center text-5xl md:text-6xl text-dark">
            tattoo studio history
          </h2>
        </div>
        <div className="max-w-custom mx-auto w-[95%] grid md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="w-full py-8 border-b border-dotted flex flex-col gap-4">
              <h2 className="family2 capitalize text-start text-4xl md:text-5xl text-dark">
                2015
              </h2>
              <span className="text-xl text-start family3 text-[var(--pink_dark)]">
                Founding & Beginnings
              </span>

              <span className="text-base text-start family3 text-dark">
                Vitae dictum tincidunt diam. Ut enim veniuay quis nostrud
                exercitation sit amet.
              </span>
            </div>
            <div className="w-full py-8 flex flex-col gap-4">
              <h2 className="family2 capitalize text-start text-4xl md:text-5xl text-dark">
                2011
              </h2>
              <span className="text-xl text-start family3 text-[var(--pink_dark)]">
                Expansion & Recognition
              </span>

              <span className="text-base text-start family3 text-dark">
                Etiam commodo dui eget wis. Etiam ligula ped gitisy quis
                interdum ultricies sclerisque.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full h-[500px] md:h-[30rem]">
              <Image
                src={
                  "https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/tattoo-blog-3.jpg"
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full py-8 border-b border-dotted flex flex-col gap-4">
              <h2 className="family2 capitalize text-end text-4xl md:text-5xl text-dark">
                2009
              </h2>
              <span className="text-xl text-end family3 text-[var(--pink_dark)]">
                Launch of Second Location
              </span>

              <span className="text-base text-end family3 text-dark">
                Vitae dictum tincidunt diam. Ut enim veniuay quis nostrud
                exercitation sit amet.
              </span>
            </div>
            <div className="w-full py-8 flex flex-col gap-4">
              <h2 className="family2 capitalize text-end text-4xl md:text-5xl text-dark">
                2024
              </h2>
              <span className="text-xl text-end family3 text-[var(--pink_dark)]">
                13 Years of Experience
              </span>

              <span className="text-base text-end family3 text-dark">
                Etiam commodo dui eget wis. Etiam ligula ped gitisy quis
                interdum ultricies sclerisque.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
