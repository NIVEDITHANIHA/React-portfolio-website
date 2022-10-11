import React from "react";
import "./Form.css";

const form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="Email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="6" placeholder="Tye your message here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default form;
