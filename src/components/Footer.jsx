import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="first__row">
          <div className="first__container">
            <div className="address">
              <p>No: 146</p>
              <p>DS Senanayake Road</p>
              <p>kandy</p>
              <p>20000</p>
            </div>
            <div className="contact">
              <p>Hotline - +947612346789</p>
              <p>WhatsApp - +94213211354</p>
              <p>Email - info@nuwara.cafe</p>
            </div>
            <div className="review__container">
              <p>Review Us On TripAdvisor</p>
              <img
                src="/public/assets/svg/tripadvisor-review.svg"
                alt="tripadvisor-icon"
              />
            </div>
          </div>
          <div className="second__container">
            <div className="footer__nav__wrapper">
              <div className="footer__nav__column1">
                <div className="coloumn__wrapper">
                  <Link className="footer__nav__link">Trip Advisor</Link>
                  <Link className="footer__nav__link">Order Foods</Link>
                  <Link className="footer__nav__link">Menu</Link>
                  <Link className="footer__nav__link">Gallery</Link>
                </div>
              </div>
              <div className="footer__nav__column2">
                <div className="fab__logo">
                  <h2>Cafe Nuwara</h2>
                  <h2> By Fab Ceylon</h2>
                </div>

                <img src="/public/assets/img/fabceylon-logo.png" alt="" />
              </div>
              <div className="footer__nav__column3">
                <div className="coloumn__wrapper">
                  <Link className="footer__nav__link">Gift Vouchers</Link>
                  <Link className="footer__nav__link">Store</Link>
                  <Link className="footer__nav__link">Contact Us</Link>
                  <Link className="footer__nav__link">Feedback Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile__footer">
          <div className="mobile__footer__wrapper container">
            <div className="footer__nav__items__container">
              <div className="footer__nav__col1">
                <Link to="/" className="footer__nav__item__mobile">
                  Home
                </Link>
                <Link to="/" className="footer__nav__item__mobile">
                  Nuwara
                </Link>
                <Link to="/" className="footer__nav__item__mobile">
                  Menu
                </Link>
                <Link to="/" className="footer__nav__item__mobile">
                  Gallery
                </Link>
              </div>
              <div className="footer__nav__col2">
                <Link to="/" className="footer__nav__item__mobile">
                  Store
                </Link>
                <Link to="/" className="footer__nav__item__mobile">
                  Order Foods
                </Link>
                <Link to="/" className="footer__nav__item__mobile">
                  Voucher
                </Link>
                <Link to="/" className="footer__nav__item__mobile">
                  Feedback
                </Link>
              </div>
            </div>
            <div className="footer__nav__logo">
              <div className="fab__logo__footer">
                <h2>Cafe Nuwara</h2>
                <h2> By Fab Ceylon</h2>
              </div>
              <img src="/public/assets/img/fabceylon-logo.png" alt="" />
            </div>
            <div className="power__by__magicle"></div>
          </div>
        </div>
        <div className="third__container">
          <div className="first__box">
            <Link>Privacy Policy</Link>
          </div>
          <div className="second__box">
            <h2>Powerd By Magicle Labs</h2>
          </div>
          <div className="third__box">
            <div className="item1">Join Cafe Nuwara</div>
            <div className="item2">
              <img src="/public/assets/svg/facebook-logo.svg" alt="facebook" />
            </div>
            <div className="item3">
              <img src="/public/assets/svg/instagram.svg" alt="instagram" />
            </div>
            <div className="item4">
              <img src="/public/assets/svg/tripadvisor.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
