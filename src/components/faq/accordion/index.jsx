import React from "react";
import AccordionCard from "./Card";
import { TattooingData } from "@/data/accordiondata";
export default function Accordion({ data }) {
  return (
    <div className="w-full flex flex-col gap-4">
      {data.map((x, index) => {
        return <AccordionCard key={index} x={x} />;
      })}
    </div>
  );
}

