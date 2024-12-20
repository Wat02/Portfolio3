import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FlipWords } from "./ui/flip-words";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";

function Hero() {
  return (
    <section>
      <div className="container mx-auto text-[#FFFFFF] pt-[3.3em] p-[3.3em 1rem 3em] w-lvw	pl-container md:pl-[200px] ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <h1 className="text-[3.3em] font-normal	leading-[1.15em]">
              <FlipWords
                words={[
                  "Grüetzi",
                  "Hi",
                  "Bonjour",
                  "Ahoj",
                  "أهلاً",
                  "你好",
                  "こんにちは",
                  "Здраво",
                  "Привет",
                  "Hola",
                  "Ciao",
                  "Servus",
                  "Merhaba",
                ]}
              />{" "}
              <br />
              i'm <br />
              Jovan
            </h1>
            <p className="pt-[30px] pb-[30px] w-max-[66.6667%] text-[1.0rem] md:text-[1.1rem]">
              I'm a Front-end Developer working on Next.js projects, <br />
              Who is passionate about designing and developing software <br />
              that is both attractive and user-friendly. I always strive <br />
              to achieve the highest quality standards and to keep up with{" "}
              <br />
              the latest trends and technologies in the industry.
            </p>
            <div className="pt-[40px]">
              <Link
                href="http://linkedin.com/in/jovan-jeremic-1252b3286"
                target="__blank"
              >
                <button className="rounded-[3em] p-[1.1em] leading-[1em] border-2 text-[18px] hover:bg-[#303134] hover:border-[#303134] transition-all ease-out hover:text-[#EBE9E3]">
                  Say Hi
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
