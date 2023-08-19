import React from "react";

import "./WindowSection.css";

const WindowSection = () => {
  return (
    <div className="window__section__wrapper">
      <div className="window__section ">
        <div className="first__box">
          <img src="/public/assets/img/window-img1.jpg" alt="" />
          <div className="text__box">
            <h2>View The</h2>
            <h2>Gallery</h2>
          </div>
        </div>
        <div className="second__box">
          <img src="/public/assets/img/window-img2.jpg" alt="" />
          <div className="text__box">
            <h2>Contact Us for</h2>
            <h2>Bookings and More</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowSection;
