import React from "react";
import { Link } from "react-router-dom";

import "./NavigationBoxes.css";

const NavigationBoxes = () => {
  return (
    <div className="navigation__boxes container">
      <div className="boxes__wrapper">
        <Link>
          <img
            src="/public/assets/svg/banner-box.svg"
            alt="box"
            className="first__img__box"
          />
        </Link>
        <Link>
          <img
            src="/public/assets/svg/banner-box2.svg"
            alt="box2"
            className="third__img__box"
          />
        </Link>
        <Link>
          <img
            src="/public/assets/svg/banner-box1.svg"
            alt="box1"
            className="second__img__box"
          />
        </Link>
      </div>
    </div>
  );
};
export default NavigationBoxes;
