import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="container welcome__page">
      <div className="ayubowan__container">
        <span className="ayubowan__separator">~</span>
        <span className="ayubowan__heading">ආයුබෝවන්</span>
      </div>
      <div className="main__title__container">
        <h1 className="main__title">CAFÉ NUWARA</h1>
        <h1 className="slogan">CAFÉ & RESTAURANT</h1>
        <img
          className="main__logo"
          src="/public/assets/svg/logo.svg"
          alt="logo"
        />
      </div>
      <div className="welcome__container">
        <h3>All Welcome</h3>
        <img src="/public/assets/svg/arrow-1-down.svg" alt="" />
      </div>
    </section>
  );
};

export default Welcome;
