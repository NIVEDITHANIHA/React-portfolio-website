import React from "react";
import { Link } from "react-router-dom";
import "./Aboutcontent.css";
import image1 from "../Assets/react.jpg";
import image from "../Assets/react-1.png"


const Aboutcontent = () => {
  return (
    <div>
      <div className="about">
        <div className="left">
          <h1>Who Am I</h1>
          <p>
            Iam React Front-end Developer . I create website responsive secured
            for my clents
          </p>
          <Link className="btn" to="/contact">
            Contact
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={image1} alt="true" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={image} alt="true" className="img" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
