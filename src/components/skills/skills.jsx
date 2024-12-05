import { Container } from "@mui/material";
import wrk from "./assets/wrk.jpg";
import React from "react";
import { MdHomeRepairService } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { BsWordpress } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa";
import { SiWoo } from "react-icons/si";
import { TbBrandEnvato } from "react-icons/tb";
import { SiElementor } from "react-icons/si";
import "./skills.css";

const Skills = () => {
  return (
    <div className="w-full pt-24">
      <Container>
        <div className="w-full lg:h-[250px] md:h-[200px] h-[150px] rounded-full relative overflow-hidden  border-[10px] border-black border-opacity-40 mb-24">
          <img
            src={wrk}
            className="w-full h-full object-cover opacity-20 absolute -z-10"
          />
          <div className="flex justify-center w-full h-full items-center text-center">
            <section>
              <h1 className="text-white z-10 lg:text-[38px] text-xl font-[700]">
                SKILLS & EXPERTISE
              </h1>
              <h1 className="text-slate-400 z-10 lg:text-[24px] text-md font-[500]">
                Used by Mubarra Amjad
              </h1>
            </section>
          </div>
        </div>

        <div className="w-full h-auto border-2 border-purple-500 border-opacity-10 card-bg lg:p-10 p-5 lg:flex lg:items-center">
          <section className="flex-1 lg:mb-0 mb-10">
            {" "}
            <div className="w-[50px] h-[50px] bg-indigo-700 rounded-md flex items-center justify-center mb-5">
              <MdHomeRepairService className="text-[30px] text-slate-200" />
            </div>
            <h1 className="text-xl text-white font-[700] mb-5">
              My Expertise & Services
            </h1>
            <p className="text-slate-400 text-sm lg:h-[110px] h-auto lg:mb-0 mb-5 lg:w-[80%] w-full ">
              im a Elementor and Elementor pro Expert & Woo commerce Expert
              ,Forminator expert and i can make a Landing page Design expert
              also an Expert to Design and develop any type of Websites
            </p>
          </section>
          <section className="flex-1">
            <div>
              <section className="w-full flex items-center gap-5">
                <div className="w-[40px] h-[40px] rounded-xl flex items-center justify-center">
                  <TbBrandEnvato className="text-gray-400 text-2xl" />
                </div>
                <div className="w-[70%] h-[5px] rounded-full bg-gray-500 overflow-hidden">
                  <div className="w-[70%] h-[5px] bg-purple-600"></div>
                </div>
                <div className="text-gray-400 text-sm">70%</div>
              </section>
              <section className="w-full flex items-center gap-5">
                <div className="w-[40px] h-[40px] rounded-xl flex items-center justify-center">
                  <SiWoo className="text-gray-400 text-2xl" />
                </div>
                <div className="w-[70%] h-[5px] rounded-full bg-gray-500 overflow-hidden">
                  <div className="w-[40%] h-[5px] bg-purple-600"></div>
                </div>
                <div className="text-gray-400 text-sm">40%</div>
              </section>

              <section className="w-full flex items-center gap-5">
                <div className="w-[40px] h-[40px] rounded-xl flex items-center justify-center">
                  <BsWordpress className="text-gray-400 text-2xl" />
                </div>
                <div className="w-[70%] h-[5px] rounded-full bg-gray-500 overflow-hidden">
                  <div className="w-[80%] h-[5px] bg-purple-600"></div>
                </div>
                <div className="text-gray-400 text-sm">80%</div>
              </section>
              <section className="w-full flex items-center gap-5">
                <div className="w-[40px] h-[40px] rounded-xl flex items-center justify-center">
                  <SiElementor className="text-gray-400 text-2xl" />
                </div>
                <div className="w-[70%] h-[5px] rounded-full bg-gray-500 overflow-hidden">
                  <div className="w-[70%] h-[5px] bg-purple-600"></div>
                </div>
                <div className="text-gray-400 text-sm">70%</div>
              </section>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
