import { Container } from "@mui/material";
import { HiArrowLongRight } from "react-icons/hi2";
import aboutImage from "../intro/assets/intro.jpg";
import "./about.css";
import React from "react";

const About = () => {
  return (
    <div className="w-full pt-16">
      <Container>
        <div className="lg:flex mb-20">
          <section className="flex-1 lg:mb-0 mb-10 lg:text-start text-center">
            <h1 className="text-4xl font-[700] text-white mb-3">
              INTRODUCTION
            </h1>
            <h1 className="text-3xl font-[300] text-slate-300 lg:flex lg:items-center lg:justify-start flex justify-center gap-5">
              <span>TO OUR SERVICE</span>
              <div className="lg:flex lg:items-center relative hidden">
                <hr className="w-[140px] border-[1px] border-purple-300" />
                <HiArrowLongRight className=" text-purple-300 absolute left-[130px]" />
              </div>
            </h1>
          </section>
          <section className="flex-1 flex justify-center lg:text-start text-center">
            <p className="text-xs font-[500] text-gray-200 leading-5">
              Crafting visually appealing and user-friendly websites, web
              designers focus on aesthetics, layout, and graphic elements. They
              skillfully blend creativity with a keen understanding of user
              experience to produce engaging and responsive designs that
              captivate visitors
            </p>
          </section>
        </div>

        <div className="lg:flex mb-20">
          <section className="flex-1 lg:mb-0 mb-5 lg:flex lg:justify-start flex justify-center">
            <div className="lg:w-[450px] lg:h-[450px] w-[400px] h-[400px]  about-shape border-[10px] border-black border-opacity-40 overflow-hidden">
              <img src={aboutImage} />
            </div>
          </section>
          <section className="flex-1 p-5 lg:text-start text-center">
            <h1 className="text-4xl text-white font-[700] mb-3">ABOUT ME</h1>
            <h1 className="text-2xl text-gray-400 font-[500] mb-8">
              Web Designer & Web Developer
            </h1>
            <p className="text-[12px] text-white font-[300] leading-6 mb-10">
              I am mubarra amjad.I am an experienced web design and developer
              with 6 year of hands -on experience. skilled in Front - End
              Development, specialize in creating user-friendly web application
              using latest technologies such as Elementor,Woocommerce,Proficient
              in programming languages like HTML, CSS, and JavaScript, they
              create dynamic and interactive websites. Their expertise extends
              to backend development, ensuring seamless integration of databases
              and server-side technologies for a fully functional web
              experience.
            </p>
            <a href="#contact">
              <button className="btn-cl w-[230px] h-[50px] text-xs font-[600]">
                LET'S GET IN TOUCH
              </button>
            </a>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default About;
