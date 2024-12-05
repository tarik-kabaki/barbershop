import { Container } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import "./mdia.css";
import React from "react";


const Mdia = () => {
  return (
    <div className="w-full lg:h-[180px] h-auto bg-black bg-opacity-50">
      <Container>
        <div className="w-full lg:h-[180px] h-auto flex items-center">
          <ul className="lg:flex lg:justify-between w-full">
            <a
              href="https://www.linkedin.com/in/tarik-kabaki-90a595233/"
              className="lg:flex lg:items-center flex justify-center lg:mb-0 mb-16 lg:mt-0 mt-10 text-slate-300 font-[700] gap-2 hover:text-[#0077b5] duration-300 cursor-pointer"
            >
              <span className="text-3xl">Linked</span>
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/kabaki_tarik/"
              className="lg:flex lg:items-center flex justify-center lg:mb-0 mb-16 text-slate-300 font-[700] gap-2 hover:insta duration-300 hover:text-pink-600 cursor-pointer"
            >
              <span className="text-3xl">Instagram </span>
              <FaInstagram className="text-4xl" />
            </a>
            <a
              href="https://x.com/KabakiTari38458"
              className="lg:flex lg:items-center flex justify-center lg:mb-0 mb-16 text-slate-300 font-[700] gap-2 hover:text-gray-600 duration-300 cursor-pointer"
            >
              <span className="text-3xl">Twitter</span>
              <RiTwitterXFill className="text-4xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100008277849885"
              className="lg:flex lg:items-center flex justify-center lg:mb-0 mb-10 text-slate-300 font-[700] gap-2 hover:text-[#1877F2] duration-300 cursor-pointer "
            >
              <span className="text-3xl">Facebook</span>
              <FaFacebookF className="text-4xl" />
            </a>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Mdia;
