import { artistslists } from "@/data/artists";
import Image from "../common/Image";
import Accordion from "./accordion";
import { TattooingData } from "@/data/accordiondata";

const About = () => {
  return (
    <div className="w-full py-20">
      <div className="max-w-custom w-[90%] mx-auto grid grid-cols-2 gap-12">
        <div className="w-full flex flex-col gap-12">
          <h3 className="family2 text-3xl md:text-4xl text-dark capitalize">
            tattooing questions
          </h3>
          <Accordion data={TattooingData} />
        </div>

        <div className="w-full flex flex-col gap-12">
          <h3 className="family2 text-3xl md:text-4xl text-dark capitalize">
            body piercing questions
          </h3>
          <Accordion data={TattooingData} />
        </div>
      </div>
    </div>
  );
};

export default About;
