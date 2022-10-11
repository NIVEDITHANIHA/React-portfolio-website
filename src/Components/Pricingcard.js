import React from "react";
import { Link } from "react-router-dom";
import "./Pricingcard.css";

const Pricingcard = () => {
  return (
    <div className="pricing">
      <div className="cardcontainer">
        <div className="card">
          <h3>-Basic-</h3>
          <span className="bar"></span>
          <p className="btc">RS 10,000</p>
          <p>-3 Days-</p>
          <p>-3 Pages-</p>
          <p>-Featured-</p>
          <p>-Responsive Design-</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>-Premium-</h3>
          <span className="bar"></span>
          <p className="btc">RS 25,000</p>
          <p>-4 Days-</p>
          <p>-5 Pages-</p>
          <p>-Featured-</p>
          <p>-Responsive Design-</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>-Business-</h3>
          <span className="bar"></span>
          <p className="btc">RS 45,000</p>
          <p>-6 Days-</p>
          <p>-8 Pages-</p>
          <p>-Featured-</p>
          <p>-Responsive Design-</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricingcard;
