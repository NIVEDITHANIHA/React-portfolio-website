import "./Heroimage.css";
import React from "react";
import { Link } from "react-router-dom";
import photo from "../Assets/photo.jpg"

function Heroimage() {
  return (
    <div>
      <div className="hero">
        <div className="mask">
          <img className="into-img" src={photo} alt="photo" />
        </div>
        <div className="content">
          <p>Hi, Iam NIVEDITHA</p>
          <h1>React Developer</h1>

          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimage;
