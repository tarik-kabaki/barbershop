import { Container } from "@mui/material";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaHandsHelping } from "react-icons/fa";
import { LuBadgeHelp } from "react-icons/lu";
import { MdHomeRepairService } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";

import "./service.css";

const Services = () => {
  return (
    <div className="w-full">
      <Container>
        <div className="lg:flex mb-32">
          <section className="flex-1 lg:mb-0 mb-10 lg:text-start text-center">
            <h1 className="text-4xl font-[700] text-white mb-3">WHY MUBARRA</h1>
            <h1 className="text-3xl font-[300] text-slate-300 lg:flex lg:items-center lg:justify-start flex justify-center gap-5">
              <span>WHY AMJAD</span>
              <div className="lg:flex lg:items-center relative hidden">
                <hr className="w-[140px] border-[1px] border-purple-300" />
                <HiArrowLongRight className=" text-purple-300 absolute left-[130px]" />
              </div>
            </h1>
          </section>

          <section className="flex-1 flex justify-center lg:text-start text-center">
            <p className="text-xs font-[300] text-gray-200 leading-5">
              Choose our web design services for a unique blend of creativity
              and functionality. We prioritize your brand identity, crafting
              visually stunning and user-centric websites that leave a lasting
              impression. With a focus on responsive design, we ensure your site
              looks impeccable on all devices
            </p>
          </section>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="w-[450px] h-[300px] border-2 border-purple-500 border-opacity-10 card-bg p-5">
            <div className="w-[50px] h-[50px] bg-indigo-700 rounded-md flex items-center justify-center mb-5">
              <FaHandsHelping className="text-[30px] text-slate-200" />
            </div>
            <h1 className="text-xl text-white font-[700] mb-5">Assistante</h1>
            <p className="text-gray-400 text-[12px] w-full h-[110px]  mb-2">
              I support and enhance the creative process by aiding in various
              aspects of design projects. From conducting research on current
              design trends to organizing project files and assets
            </p>
          </div>
          <div className="w-[450px] h-[300px] border-2 border-purple-500 border-opacity-10 card-bg p-5">
            <div className="w-[50px] h-[50px] bg-indigo-700 rounded-md flex items-center justify-center mb-5">
              <LuBadgeHelp className="text-[30px] text-slate-200" />
            </div>
            <h1 className="text-xl text-white font-[700] mb-5">
              Consultation{" "}
            </h1>
            <p className="text-gray-400 text-[12px] w-full h-[110px]  mb-2">
              ensuring a clear alignment of design expertise with client
              expectations. This crucial phase lays the foundation for a
              customized and successful web design project.
            </p>
          </div>
          <div className="w-[450px] h-[300px] border-2 border-purple-500 border-opacity-10 card-bg p-5">
            <div className="w-[50px] h-[50px] bg-indigo-700 rounded-md flex items-center justify-center mb-5">
              <MdHomeRepairService className="text-[30px] text-slate-200" />
            </div>
            <h1 className="text-xl text-white font-[700] mb-5">Services</h1>
            <p className="text-gray-400 text-[12px] w-full h-[110px] mb-2">
              Crafting visually appealing and user-friendly websites, web
              designers focus on aesthetics, layout, and graphic elements. They
              skillfully blend creativity with a keen understanding of user
              experience to produce engaging and responsive designs that
              captivate visitors
            </p>
          </div>
          <div className="w-[450px] h-[300px] border-2 border-purple-500 border-opacity-10 card-bg p-5">
            <div className="w-[50px] h-[50px] bg-indigo-700 rounded-md flex items-center justify-center mb-5">
              <FaLightbulb className="text-[30px] text-slate-200" />
            </div>
            <h1 className="text-xl text-white font-[700] mb-5">Solutions</h1>
            <p className="text-gray-400 text-[12px] w-full h-[110px]  mb-2">
              Web design solutions involve creating websites that effectively
              meet the needs of the client or target audience. This encompasses
              various elements, such as user experience (UX) design
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
