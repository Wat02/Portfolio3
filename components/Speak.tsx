import React from "react";
import Image from "next/image";
import Link from "next/link";
import BrainWave2 from "@/public/Brainwave.png";
import Agency from "@/public/Agency.png";
import Banking from "@/public/banking.png";
import Design from "@/public/design.png";
import HomeDecor from "@/public/homeDecor.png";

function Speak() {
  return (
    <section className=" pt-[3.3em]" id="projects">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-7 pb-[20px]">
            <Link href="https://horizon-five-theta.vercel.app/" target="_blank">
              <Image src={Banking} width={1000} height={1000} alt="HealtCare" />
            </Link>
          </div>
          <div className="col-span-12 md:col-span-5 text-white ml-[0] md:ml-[30px]">
            <h3 className="text-[2.2em] md:text-[3.3em] font-normal	leading-[1.15em] pt-[20px] md:pt-[0]">
              Horizon- Bankig app
            </h3>
            <div className="flex pt-[20px] pb-[30px]">
              <Link
                href="https://horizon-five-theta.vercel.app/"
                target="_blank"
              >
                {" "}
                <p className="text-[1.0rem] md:text-[1.5rem] mr-[20px]">Live</p>
              </Link>
              <Link href="https://github.com/Wat02/Horizon" target="_blank">
                {" "}
                <p className="text-[1.0rem] md:text-[1.5rem]">Code</p>
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <Link href="https://tetra-flow.vercel.app/" target="_blank">
              <Image src={Agency} width={1000} height={1000} alt="HealtCare" />
            </Link>
          </div>
          <div className="col-span-12 md:col-span-5 text-white ml-[0] md:ml-[30px]">
            <h3 className="text-[2.2em] md:text-[3.3em] font-normal	leading-[1.15em] pt-[20px] md:pt-[0]">
              TetraFlow-Agency
            </h3>
            <div className="flex  pt-[20px]">
              <Link href="https://tetra-flow.vercel.app/" target="_blank">
                {" "}
                <p className="text-[1.0rem] md:text-[1.5rem] mr-[20px]">Live</p>
              </Link>
              <Link href="https://github.com/Wat02/TetraFlow" target="_blank">
                {" "}
                <p className="text-[1.0rem] md:text-[1.5rem]">Code</p>
              </Link>
            </div>
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
            <h3 className="text-[2.2em] md:text-[3.3em] font-normal	leading-[1.15em] pt-[20px] md:pt-[0]">
              BrainWave-
              <br />
              AI Agency
            </h3>

            <div className="flex  pt-[20px]">
              <Link
                href="https://brainwave-teal-eight.vercel.app/"
                target="_blank"
              >
                {" "}
                <p className="text-[1.0rem] md:text-[1.5rem] mr-[20px]">Live</p>
              </Link>
              <Link href="https://github.com/Wat02/Brainwave" target="_blank">
                {" "}
                <p className="text-[1.0rem] md:text-[1.5rem]">Code</p>
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 pt-[30px]">
            <Link
              href="https://interior-design2-sigma.vercel.app/"
              target="_blank"
            >
              <Image src={Design} width={1000} height={1000} alt="HealtCare" />
            </Link>
          </div>
          <div className="col-span-12 md:col-span-5 text-white ml-[0] md:ml-[30px] pt-[30px]">
            <h3 className="text-[2.2em] md:text-[3.3em] font-normal	leading-[1.15em] pt-[20px] md:pt-[0]">
              DeCoreDesign-interior
            </h3>

            <div className="flex  pt-[20px]">
              <Link
                href="https://interior-design2-sigma.vercel.app/"
                target="_blank"
              >
                {" "}
                <p className="text-[1.0rem] md:text-[1.5rem] mr-[20px]">Live</p>
              </Link>
              <Link
                href="https://github.com/Wat02/Interior-Design2"
                target="_blank"
              >
                {" "}
                <p className="text-[1.0rem] md:text-[1.5rem]">Code</p>
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 pt-[30px]">
            <Link href="https://home-decor-psi.vercel.app/" target="_blank">
              <Image
                src={HomeDecor}
                width={1000}
                height={1000}
                alt="HealtCare"
              />
            </Link>
          </div>
          <div className="col-span-12 md:col-span-5 text-white ml-[0] md:ml-[30px]">
            <h3 className="text-[2.2em] md:text-[3.3em] font-normal	leading-[1.15em] pt-[20px] md:pt-[30px]">
              AluDoors-Premiun Doors
            </h3>
            <div className="flex pt-[20px] pb-[30px]">
              <Link href="https://home-decor-psi.vercel.app/" target="_blank">
                {" "}
                <p className="text-[1.0rem] md:text-[1.5rem] mr-[20px]">Live</p>
              </Link>
              <Link href="https://github.com/Wat02/HomeDecor" target="_blank">
                {" "}
                <p className="text-[1.0rem] md:text-[1.5rem]">Code</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speak;
