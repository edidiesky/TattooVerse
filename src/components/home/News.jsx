import { TattooingData } from "@/data/accordiondata";
import Accordion from "../faq/accordion";

const News = () => {
  return (
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

        <Accordion type={'home'} data={TattooingData} />
      </div>
    </div>
  );
};

export default News;
