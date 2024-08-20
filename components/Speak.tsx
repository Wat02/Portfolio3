import React from "react";
import Image from "next/image";
import Link from "next/link";
import BrainWave2 from "@/public/Brainwave.png";
import DoctorProject2 from "@/public/DoctorProject2.png";

function Speak() {
  return (
    <section className=" pt-[3.3em]">
      <div className="container  m-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-7">
            <Link href="https://doctor-sigma.vercel.app/" target="_blank">
              <Image
                src={DoctorProject2}
                width={1000}
                height={1000}
                alt="HealtCare"
              />
            </Link>
          </div>
          <div className="col-span-12 md:col-span-5 text-white ml-[0] md:ml-[30px]">
            <h3 className="text-[2.5em] md:text-[3.3em] font-normal	leading-[1.15em] pt-[20px] md:pt-[0]">
              CarePlus HealthCare
            </h3>
            <p className="pt-[30px] pb-[30px] w-max-[66.6667%] text-[1.0rem] md:text-[1.0rem]">
              Modern Healthcare platform, where patiens can view all specialties
              of doctor at HealhCare who take care of all there patiest, also
              they can do Form for appointment where they can choose there
              preferred doctor write about themeself and if they have some
              allergies.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 pt-[30px]">
            <Link
              href="https://brainwave-teal-eight.vercel.app/"
              target="_blank"
            >
              <Image
                src={BrainWave2}
                width={1000}
                height={1000}
                alt="Brainwave"
              />
            </Link>
          </div>
          <div className="col-span-12 md:col-span-5 text-white ml-[0] md:ml-[30px] pt-[30px]">
            <h3 className="text-[2.5em] md:text-[3.3em] font-normal	leading-[1.15em] pt-[20px] md:pt-[0]">
              BrainWave
            </h3>
            <p className="pt-[30px] pb-[30px] w-max-[66.6667%] text-[1.0rem] md:text-[1.0rem]">
              Brainwave AI platform for creating evertything. If you want Image
              generated, logo, Svg they can do it, you only need to create a
              BrainWave account or sign-up with Google or Apple account and you
              can start creating you own Sass bussines for scrach. If you want
              to get better Expirinse there is paid plan on website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speak;
