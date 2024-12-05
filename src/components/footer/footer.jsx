import { Container } from "@mui/material";
import "./footer.css";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full pt-24">
      <Container>
        <div className="lg:flex lg:justify-between mb-5 h-auto">
          <div className="flex-1 w-full lg:mb-0 mb-10">
            <h1 className="font-bold text-white text-2xl mb-10 lg:flex lg:justify-start lg:text-start flex justify-center text-center">
              Mubarra Amjad
            </h1>
            <p className="text-gray-300 text-xs font-[500] mb-5 lg:flex lg:justify-start lg:text-start flex justify-center text-center">
              Mubarra Amjad is a Portfolio website built by Tarik Kabaki for
              showing Mubarra's Services and Expertise & technologies for
              creating websites .
            </p>
            <div className="text-xs text-gray-300 leading-5 lg:text-start text-center">
              If you have any questions, please email me at{" "}
              <span className="text-[#C0B7E8]">tarik.kabaki2000@gmail.com</span>{" "}
              Thank you for visiting my website
            </div>
          </div>
          <div className="flex-1 w-full  lg:mb-0 mb-10">
            <h1 className="font-bold text-sm text-white flex justify-center mb-10">
              LINKS
            </h1>
            <ul className="flex flex-col items-center">
              <li className="text-xs mb-5 text-gray-400 font-[500]">HOME</li>
              <li className="text-xs mb-5 text-gray-400 font-[500]">ABOUT</li>
              <li className="text-xs mb-5 text-gray-400 font-[500]">
                SERVICES
              </li>
              <li className="text-xs mb-5 text-gray-400 font-[500]">
                TECHNOLOGIES
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <h1 className="font-bold text-sm text-white mb-10  flex justify-center">
              SOCIALIZE WITH MUBARRA
            </h1>
            <ul className="flex  gap-5 items-center mb-10 justify-center">
              <div className="w-[35px] h-[35px]  rounded-full bg-[#C0B7E8] flex items-center justify-center">
                <FaFacebook className="text-[#302C42]" />
              </div>
              <div className="w-[35px] h-[35px]  rounded-full bg-[#C0B7E8] flex items-center justify-center">
                <FaXTwitter className="text-[#302C42]" />
              </div>
              <div className="w-[35px] h-[35px]  rounded-full bg-[#C0B7E8] flex items-center justify-center">
                <FaLinkedinIn className="text-[#302C42]" />
              </div>
              <div className="w-[35px] h-[35px] rounded-full bg-[#C0B7E8] flex items-center justify-center">
                <FaInstagram className="text-[#302C42]" />
              </div>
            </ul>
            <div className=" flex justify-center">
              <button className="welcome-btn h-[40px] rounded-full w-[200px] text-xs font-bold text-gray-800 ">
                BUILD YOUR WORLD
              </button>
            </div>
          </div>
        </div>
        <div className="mb-5 w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="auto"
            height="2"
            viewBox="0 0 1269 2"
            fill="none"
          >
            <path d="M0 1H1269" stroke="url(#paint0_linear_13_63)" />
            <defs>
              <linearGradient
                id="paint0_linear_13_63"
                x1="1269"
                y1="1.00238"
                x2="3.52735e-07"
                y2="0.980001"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#343045" />
                <stop offset="0.348958" stop-color="#C0B7E8" />
                <stop offset="0.6875" stop-color="#8176AF" />
                <stop offset="1" stop-color="#343045" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex justify-center items-center h-[80px] text-center lg:text-sm text-xs leading-normal text-slate-200 tracking-[1.80px]">
          2023 © MUBARRA PORTFOLIO PAGE - BY TARIK. KABAKI - ALL RIGHTS RESERVED{" "}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
