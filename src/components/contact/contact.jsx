import { Container } from "@mui/material";
import { HiArrowLongRight } from "react-icons/hi2";
import { PiPhoneFill } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import "./contact.css";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full pt-24 mb-10" id="contact">
      <Container>
        <div className="lg:flex mb-20">
          <section className="flex-1 lg:mb-0 mb-10 lg:text-start text-center">
            <h1 className="text-4xl font-[700] text-white mb-3">CONTACT ME</h1>
            <h1 className="text-3xl font-[300] text-slate-300 flex items-center gap-5">
              <div className="lg:w-auto w-full lg:flex lg:justify-start flex justify-center">
                <span className="lg:text-3xl text-[20px]">
                  FOR A NEW PROJECT
                </span>
              </div>

              <div className="lg:flex  lg:items-center relative hidden">
                <hr className="w-[140px] border-[1px] border-purple-300" />
                <HiArrowLongRight className=" text-purple-300 absolute left-[130px]" />
              </div>
            </h1>
          </section>

          <section className="flex-1 flex justify-center">
            <ul className="text-white">
              <li className="lg:w-[350px] w-[300px] h-[50px] rounded-full bg-[#211e2e] mb-3 flex items-center gap-3">
                <div className="h-[50px] bg-white w-[50px] rounded-full flex items-center justify-center">
                  <PiPhoneFill className="text-purple-800" />
                </div>
                <span className="lg:text-sm text-xs">
                  mubarraamjad506@gmail.com
                </span>
              </li>
              <li className="lg:w-[350px] w-[300px] h-[50px] rounded-full bg-[#211e2e] mb-3 flex items-center gap-3">
                <div className="h-[50px] bg-white w-[50px] rounded-full flex items-center justify-center">
                  <IoMail className="text-purple-800" />
                </div>
                <span className="lg:text-sm text-xs">03185232720</span>
              </li>
              <li className="lg:w-[350px] w-[300px] h-[50px] rounded-full bg-[#211e2e] flex items-center gap-3">
                <div className="h-[50px] bg-white w-[50px] rounded-full flex items-center justify-center">
                  <MdLocationPin className="text-purple-800" />
                </div>

                <span className="lg:text-sm text-xs">Ellah Abad</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="w-full lg:h-[850px] h-auto card-info flex justify-center">
          <div className="w-full">
            <section className="pt-14 flex flex-col items-center mb-14">
              <h1 className="text-white lg:text-4xl text-2xl font-bold mb-5">
                Get in Touch
              </h1>
              <hr className="border-[1px] lg:w-[350px] w-[50%] border-gray-500 rounded-full mb-5" />
              <h1 className="lg:text-3xl text-xl text-gray-400 font-[300]">
                Let's Build Your Next Project
              </h1>
            </section>

            <div className="w-full flex flex-col items-center">
              <section className="lg:w-[80%] w-full lg:flex items-center gap-5 mb-8">
                <input
                  placeholder="Firstname"
                  className="w-full lg:mb-0 mb-5 h-[60px] text-white pl-5 rounded-full bg-transparent placeholder:text-gray-300 border-2 border-white focus:outline-none"
                />
                <input
                  placeholder="Lastname"
                  className="w-full h-[60px] text-white pl-5 rounded-full bg-transparent placeholder:text-gray-300 border-2 border-white focus:outline-none"
                />
              </section>
              <section className="lg:w-[80%] w-full lg:flex items-center gap-5 mb-8">
                <input
                  placeholder="Firstname"
                  className="w-full lg:mb-0 mb-5 h-[60px] text-white pl-5 rounded-full bg-transparent placeholder:text-gray-300 border-2 border-white focus:outline-none"
                />
                <input
                  placeholder="Lastname"
                  className="w-full h-[60px] text-white pl-5 rounded-full bg-transparent placeholder:text-gray-300 border-2 border-white focus:outline-none"
                />
              </section>
              <section className="lg:w-[80%] w-full flex items-center gap-5 mb-8">
                <input
                  placeholder="Subject"
                  className="w-full h-[60px] text-white pl-5 rounded-full bg-transparent placeholder:text-gray-300 border-2 border-white focus:outline-none"
                />
              </section>
              <section className="lg:w-[80%] w-full flex items-center gap-5 mb-10">
                <textarea
                  placeholder="Tell Us Something..."
                  className="w-full h-[180px] text-white p-5 resize-none rounded-[40px] bg-transparent placeholder:text-gray-300 border-2 border-white focus:outline-none"
                />
              </section>
              <section className="flex justify-center">
                <button className="button-bg w-[250px] h-[50px] rounded-full text-sm font-[500]">
                  Send to Mubarra
                </button>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
