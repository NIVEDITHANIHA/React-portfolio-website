import React from "react";
import Navbar from "../Components/Navbar";
import Heroimg2 from "../Components/Heroimg2";
import Footer from "../Components/Footer";
import Pricingcard from "../Components/Pricingcard";
import Work from "../Components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="some of the recent works" />
      <Work />
      <Pricingcard />
      <Footer />
    </div>
  );
};

export default Project;
