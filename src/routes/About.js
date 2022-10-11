import React from "react";
import Navbar from "../Components/Navbar";
import Heroimg2 from "../Components/Heroimg2";
import Footer from "../Components/Footer";
import Aboutcontent from "../Components/Aboutcontent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT" text="Iam a friendly front-end developer" />
      <Aboutcontent/>
      <Footer />
    </div>
  );
};

export default About;
