import React from "react";

import "./Pin.css";

const Pin = ({ size, imgUrl }) => {
  return (
    <div className={`pin ${size}`}>
      <img src={imgUrl} alt="gallery-image" />
    </div>
  );
};

export default Pin;
