import React, { useEffect } from "react";
import "./Welcome.css";

const Welcome = () => {
  useEffect(() => {
    const calculateAddressBarHeight = () => {
      const addressBarHeight =
        window.innerHeight - document.documentElement.clientHeight;
      document.documentElement.style.setProperty(
        "--address-bar-height",
        `${addressBarHeight}px`
      );
      console.log(addressBarHeight + "HERE IS YOUR ADDRESS BAR SIZE");
    };

    calculateAddressBarHeight();
    window.addEventListener("resize", calculateAddressBarHeight);

    return () => {
      window.removeEventListener("resize", calculateAddressBarHeight);
    };
  }, []);
  return (
    <section className="container welcome__page">
      <div className="ayubowan__container">
        <span className="ayubowan__separator">~</span>
        <span className="ayubowan__heading">ආයුබෝවන්</span>
      </div>
      <div className="main__title__container">
        <h1 className="main__title">CAFÉ NUWARA</h1>
        <h1 className="slogan">CAFÉ & RESTAURANT</h1>
        <img className="main__logo" src="/assets/svg/logo.svg" alt="logo" />
      </div>
      <div className="welcome__container">
        <h3>All Welcome</h3>
        <img src="/assets/svg/arrow-1-down.svg" alt="" />
      </div>
    </section>
  );
};

export default Welcome;
