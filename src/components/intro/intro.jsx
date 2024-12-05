import { Container } from "@mui/material";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import imageIntro from "../intro/assets/intro.jpg";

import "./intro.css";

const Intro = () => {
  return (
    <div className="w-full">
      <Container maxWidth="lg">
        <div className="lg:flex lg:h-[550px] h-auto items-center mb-16">
          <section className="flex-1 lg:mb-0 mb-14 lg:text-start text-center">
            <h1 className="lg:text-[40px] text-[30px] font-[700] text-slate-200 mb-5">
              Hello There I'm Mubarr
              <br /> A Website Design & Developer
            </h1>
            <p className="text-purple-200 lg:w-[90%] w-full font-[300] mb-10 lg:text-sm text-xs lg:flex lg:justify-start flex justify-center">
              I am mubarra amjad.I am an experienced web design and developer
              with 6 year of hands -on experience. skilled in Front - End
              Development
            </p>
            <div className="lg:flex lg:items-center lg:justify-start flex justify-center gap-5">
              <button className="w-[200px] h-[50px] rounded-full  text-xs text-gray-800 font-[700] button-bg">
                BUILD YOUR WORLD
              </button>
              <FaArrowRightLong className="text-[45px] text-gray-300 lg:flex hidden" />
            </div>
          </section>
          <section className="flex-1 flex  justify-center lg:p-0 p-5">
            <div className="lg:w-[450px] lg:h-[450px] w-[350px] h-[350px]  border-[16px] border-opacity-30 border-black reds overflow-hidden">
              <img src={imageIntro} />
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
