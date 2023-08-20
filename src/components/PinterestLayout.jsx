import React from "react";

import "./PinterestLayout.css";
import Pin from "./Pin";

const PinterestLayout = () => {
  return (
    <>
      <div className="title__gallery container">
        <h1>Gallery</h1>
      </div>
      <div className="pinterest__container container">
        <Pin size="small" imgUrl="/public/assets/img/owr-offerings-img-1.jpg" />
        <Pin
          size="medium"
          imgUrl="/public/assets/img/owr-offerings-img-2.jpg"
        />

        <Pin size="small" imgUrl="/public/assets/img/barista 1.jpg" />

        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="landscape" />

        {/* <Pin size="landscape" />
        <Pin size="landscape" />
        <Pin size="landscape" />
        <Pin size="landscape" />
        <Pin size="landscape" /> */}
      </div>
    </>
  );
};

export default PinterestLayout;
