import React from "react";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <div className="w-full mb-16">
      <Container>
        <section className="w-full h-[100px] flex items-center justify-between">
          <h1 className=" text-purple-300 font-[700] lg:text-2xl text-md">
            Mubarra Amjad
          </h1>

          <a href="#contact">
            <button className="text-white border-2 border-white lg:w-[150px] lg:h-[50px] w-[120px] h-[40px] text-xs lg:font-[400] font-[100] rounded-full">
              CONTACT ME
            </button>
          </a>
        </section>
      </Container>
    </div>
  );
};

export default Navbar;
