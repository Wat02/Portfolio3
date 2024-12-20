"use client";

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/pin";

function ResentProjects() {
  return (
    <div id="Resent" className="py-20">
      <h1 className="font-bold text-4xl md:text-5xl text-center text-white">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] text-white"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10]">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-amg" />
                </div>
                <img className="z-10 absolute bottom-8" src={img} />
              </div>
              <div className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                <h1> {title}</h1>
              </div>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-centar justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon) => (
                    <div
                      key={icon}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center  style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}"
                    >
                      {" "}
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href="https://agency-one-theta.vercel.app/"
                    target="_blank"
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                  >
                    Check Live Site
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResentProjects;
