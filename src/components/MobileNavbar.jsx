import { Link } from "react-router-dom";

import "./MobileNavbar.css";

const MobileNavbar = ({ mobileNavbarHandler }) => {
  return (
    <div>
      <div className="navbar__responsive__items">
        <div className="title__container__mobile">
          <div className="mobile__logo">
            <h2>CAFÉ</h2>
            <h2>NUWARA</h2>
          </div>
          <img
            src="/public/assets/svg/close-icon.svg"
            onClick={mobileNavbarHandler}
            alt="close-icon"
          />
        </div>
        <div className="nav__items__container">
          <div to="/" className="mobile__grid__item__1">
            <Link className="link-item">Home</Link>
          </div>
          <div to="/" className="mobile__grid__item__2">
            <Link className="link-item">Nuwara</Link>
          </div>
          <div to="/" className="mobile__grid__item__3">
            <Link className="link-item">Menu</Link>
          </div>
          <div to="/" className="mobile__grid__item__4">
            <Link className="link-item">Gallery</Link>
          </div>
          <div to="/" className="mobile__grid__item__5">
            <Link className="link-item">Store</Link>
          </div>
          <div to="/" className="mobile__grid__item__6">
            <Link className="link-item">Order Foods</Link>
          </div>
          <div to="/" className="mobile__grid__item__7">
            <Link className="link-item">Voucher</Link>
          </div>
        </div>
        <div className="about__us__mobile__nav container">
          <div className="title__mobile__about__us">
            <h2>About Us</h2>
          </div>
          <div className="content__mobile__about__us">
            <p>
              Our Story, Your Experience: Discover the heart behind our
              colonial-Kandyan cafe. Immerse yourself in our journey, where
              culture, tradition, and culinary passion converge to create an
              unforgettable experience.
            </p>
          </div>
          <div className="contact__us__btn__mobile__nav">
            <button className="contact__nav__btn">Contact Us</button>
          </div>
          <div className="mobile__flower">
            <img src="/assets/svg/flower1.svg" alt="flower" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
