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
          <div className="mobile__grid__item__1" onClick={mobileNavbarHandler}>
            <Link to="/" className="link-item">
              Home
            </Link>
          </div>
          <div className="mobile__grid__item__2" onClick={mobileNavbarHandler}>
            <Link to="nuwara" className="link-item">
              Nuwara
            </Link>
          </div>
          <div className="mobile__grid__item__3" onClick={mobileNavbarHandler}>
            <Link to="menu" className="link-item">
              Menu
            </Link>
          </div>
          <div className="mobile__grid__item__4" onClick={mobileNavbarHandler}>
            <Link to="gallery" className="link-item">
              Gallery
            </Link>
          </div>
          <div className="mobile__grid__item__5" onClick={mobileNavbarHandler}>
            <Link to="construction" className="link-item">
              Store
            </Link>
          </div>
          <div className="mobile__grid__item__6" onClick={mobileNavbarHandler}>
            <Link to="construction" className="link-item">
              Order Foods
            </Link>
          </div>
          <div className="mobile__grid__item__7" onClick={mobileNavbarHandler}>
            <Link to="construction" className="link-item">
              Voucher
            </Link>
          </div>
        </div>
        <div
          className="about__us__mobile__nav container"
          onClick={mobileNavbarHandler}
        >
          <div className="title__mobile__about__us">
            <h2>About Us</h2>
          </div>
          <div
            className="content__mobile__about__us"
            onClick={mobileNavbarHandler}
          >
            <p>
              Our Story, Your Experience: Discover the heart behind our
              colonial-Kandyan cafe. Immerse yourself in our journey, where
              culture, tradition, and culinary passion converge to create an
              unforgettable experience.
            </p>
          </div>
          <div
            className="contact__us__btn__mobile__nav"
            onClick={mobileNavbarHandler}
          >
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
