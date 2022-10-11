import React from "react";
import { NavLink } from "react-router-dom";
import "./Workcard.css";

    
        
        const Workcard = ({imgsrc ,title,text,view,source}) => {
  return (
        <div className="project-card">
          <img src={imgsrc} alt="img" />
          <h2 className="project-title">{title}</h2>
          <div className="pro-details">
            <p>{text}</p>
            <div className="pro-btns">
              <NavLink to={view} className="btn">
                view
              </NavLink>
              <NavLink to={source} className="btn">
                source
              </NavLink>
            </div>
          </div>
        </div>
       );
};

export default Workcard;
