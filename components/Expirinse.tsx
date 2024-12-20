import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/moving-border";

function Expirinse() {
  return (
    <div className="py-20 w-full" id="testamonila">
      <h1 className="font-bold text-4xl md:text-5xl text-center text-white">
        My
        <span className="text-purple"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.72rem"
            className="flex-1 text-white"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt="nesto"
                className="lg:w-32 md:w-20 w-16"
              />
            </div>
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                {card.title}
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold">
                {card.desc}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Expirinse;
