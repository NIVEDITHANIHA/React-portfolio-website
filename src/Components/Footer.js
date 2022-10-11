import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

function footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <div>
                <p>Palghat,kerala </p>
                <p>Kerala</p>
              </div>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                +919605362742
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                nivedha.niha@gmail.Com
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>About the developer</h4>
            <p>
              Iam Niveditha Aravind .V , an autdidact developer proficient in
              programs javascipt and reactjs
            </p>
            <div className="social">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
              <FaInstagram
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
