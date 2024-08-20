import React from "react";

function Play() {
  return (
    <section className=" pt-[3.3em] pb-[3.3em] w-lvw pl-container md:pl-[200px]">
      <div className="container m-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <h1 className="text-[3.3em] font-semibold	leading-[1.15em] text-white ">
              Play
            </h1>
            <p className="pt-[30px] pb-[30px] w-max-[66.6667%] text-[1.1rem] text-white">
              I'm driven by curiosity, mixing analog <br />
              and digital media to develop novel <br />
              visual expressions for wallpapers and <br />
              my work on AI based systems.
            </p>
            <div className="pt-[40px]">
              <button className="rounded-[3em] p-[1.1em] leading-[1em] border-2 text-[18px] text-white">
                Say Hi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Play;
