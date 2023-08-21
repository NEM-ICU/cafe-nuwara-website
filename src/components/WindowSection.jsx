import React from "react";

import "./WindowSection.css";
import { Link } from "react-router-dom";

const WindowSection = () => {
  return (
    <div className="window__section__wrapper">
      <div className="window__section ">
        <div className="first__box">
          <img src="/assets/img/window-img1.jpg" alt="" />
          <Link to="gallery" className="text__box">
            <h2>View The</h2>
            <h2>Gallery</h2>
          </Link>
        </div>
        <div className="second__box">
          <img src="/assets/img/window-img2.jpg" alt="" />
          <Link to="contact" className="text__box">
            <h2>Contact Us for</h2>
            <h2>Bookings and More</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WindowSection;
