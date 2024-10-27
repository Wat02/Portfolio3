import React from "react";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";

function Footer() {
  return (
    <footer id="footer" className="pt-[100px] pb-[50px]">
      <div className=" w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] font-medium text-4xl md:text-5xl text-center text-white">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {" "}
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="http://linkedin.com/in/jovan-jeremic-1252b3286"
          target="__blank"
        >
          <MagicButton
            title="Let's get in touch"
            icon={undefined}
            position={""}
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          {" "}
          Copyright © 2024 Jovan Jeremic <br />
        </p>
        <div className="flex items-center md:gap-3 gap-6 pt-[20px] md:pt-[0]">
          <p className="md:text-base text-sm md:font-normal font-light text-white">
            Made in Belgrade
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
