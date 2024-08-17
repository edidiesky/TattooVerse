import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className="w-full flex items-center min-h-[100vh] justify-center relative hero_background py-32">
      {/* <img
        src="data:image/svg+xml;utf8,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1.488%2030c0%2015.747%2012.765%2028.512%2028.512%2028.512S58.512%2045.747%2058.512%2030%2045.747%201.488%2030%201.488%201.488%2014.253%201.488%2030zM30%2060C13.431%2060%200%2046.569%200%2030%200%2013.431%2013.431%200%2030%200c16.569%200%2030%2013.431%2030%2030%200%2016.569-13.431%2030-30%2030z%22%20fill%3D%22rgba%28245%2C185%2C151%2C1%29%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.47%2030c0%2010.234%208.296%2018.53%2018.53%2018.53%2010.234%200%2018.53-8.296%2018.53-18.53%200-10.234-8.296-18.53-18.53-18.53-10.234%200-18.53%208.296-18.53%2018.53zM30%2050c-11.046%200-20-8.954-20-20s8.954-20%2020-20%2020%208.954%2020%2020-8.954%2020-20%2020zM1.488%2090c0%2015.747%2012.765%2028.512%2028.512%2028.512S58.512%20105.747%2058.512%2090%2045.747%2061.488%2030%2061.488%201.488%2074.253%201.488%2090zM30%20120c-16.569%200-30-13.431-30-30%200-16.569%2013.431-30%2030-30%2016.569%200%2030%2013.431%2030%2030%200%2016.569-13.431%2030-30%2030z%22%20fill%3D%22rgba%28245%2C185%2C151%2C1%29%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.47%2090c0%2010.234%208.296%2018.531%2018.53%2018.531%2010.234%200%2018.53-8.297%2018.53-18.531%200-10.234-8.296-18.53-18.53-18.53-10.234%200-18.53%208.296-18.53%2018.53zM30%20110c-11.046%200-20-8.954-20-20s8.954-20%2020-20%2020%208.954%2020%2020-8.954%2020-20%2020zM61.488%2030c0%2015.747%2012.765%2028.512%2028.512%2028.512S118.512%2045.747%20118.512%2030%20105.747%201.488%2090%201.488%2061.488%2014.253%2061.488%2030zM90%2060c-16.569%200-30-13.431-30-30C60%2013.431%2073.431%200%2090%200c16.569%200%2030%2013.431%2030%2030%200%2016.569-13.431%2030-30%2030z%22%20fill%3D%22rgba%28245%2C185%2C151%2C1%29%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M71.47%2030c0%2010.234%208.296%2018.53%2018.53%2018.53%2010.234%200%2018.531-8.296%2018.531-18.53%200-10.234-8.297-18.53-18.531-18.53-10.234%200-18.53%208.296-18.53%2018.53zM90%2050c-11.046%200-20-8.954-20-20s8.954-20%2020-20%2020%208.954%2020%2020-8.954%2020-20%2020zM61.488%2090c0%2015.747%2012.765%2028.512%2028.512%2028.512S118.512%20105.747%20118.512%2090%20105.747%2061.488%2090%2061.488%2061.488%2074.253%2061.488%2090zM90%20120c-16.569%200-30-13.431-30-30%200-16.569%2013.431-30%2030-30%2016.569%200%2030%2013.431%2030%2030%200%2016.569-13.431%2030-30%2030z%22%20fill%3D%22rgba%28245%2C185%2C151%2C1%29%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M71.47%2090c0%2010.234%208.296%2018.531%2018.53%2018.531%2010.234%200%2018.531-8.297%2018.531-18.531%200-10.234-8.297-18.53-18.531-18.53-10.234%200-18.53%208.296-18.53%2018.53zM90%20110c-11.046%200-20-8.954-20-20s8.954-20%2020-20%2020%208.954%2020%2020-8.954%2020-20%2020z%22%20fill%3D%22rgba%28245%2C185%2C151%2C1%29%22%2F%3E%3C%2Fsvg%3E"
        className="absolute w-full h-full"
      /> */}
      <div
        style={{
          background: "rgba(0,0,0,.5)",
        }}
        className="absolute z-20 h-full w-full"
      ></div>
      <img
        src="https://avada.website/tattoo/wp-content/uploads/sites/180/2023/07/hero-image-avada-tattoo-2.jpg"
        alt=""
        className="w-full z-10 absolute h-full object-cover"
      />
      <div className="absolute z-20 top-8 left-0 w-full">
        <div className="max-w-custom flex w-[90%] mx-auto items-center justify-between gap-4">
          <h2 className="text-4xl family2 text-white">TattooVerse</h2>
          <div className="flex items-center justify-end gap-6">
            <div className="btn w-[190px] text-white h-[66px] flex items-center justify-center">
              Get A Tattoo
            </div>
            <HiBars3BottomRight fontSize={"40px"} color={"#fff"} />
          </div>
        </div>
      </div>
      <div className="max-w-custom z-40 flex w-[90%] mx-auto md:items-center justify-center flex-col gap-8">
        <span className="block text-lg pb-4 md:text-center md:text-2xl family3 text-grey">
          Tattoos with a Touch of Magic
        </span>
        <h1 className="family2 md:text-center capitalize text-5xl md:text-7xl text-white">
          transforming bodies into <br /> living masterpieces
        </h1>
        <div className="flex">
          <Link
            to={"/tattoo/artists"}
            className="btn family1 mt-4 px-10 py-5 text-sm md:text-base text-white"
          >
            MEET THE ARTISTS
          </Link>
        </div>
      </div>
      <div className="absolute z-20 bottom-8 left-0 w-full">
        <div className="max-w-custom flex w-[90%] mx-auto items-center justify-between gap-4">
          <span className="px-4 md:px-8 py-4 bg-[#0F0F0F] family3 rounded-[40px] text-xs md:text-base text-[var(--pink)]">
            Monday to Saturday ... 09:30 to 18:00
          </span>
          <span className="px-4 md:px-8 py-4 bg-[#0F0F0F] family3 rounded-[40px] text-xs md:text-base text-[var(--pink)]">
            For Appointment call ... (08127107270)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
