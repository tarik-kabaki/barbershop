import React from "react";
import Navbar from "../components/navbar";
import Intro from "../components/intro/intro";
import About from "../components/about/about";
import Services from "../components/services/services";
import Skills from "../components/skills/skills";
import Mdia from "../components/media/mdia";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Mdia />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
