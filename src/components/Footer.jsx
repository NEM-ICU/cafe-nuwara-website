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
                src="/assets/svg/tripadvisor-review.svg"
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

                <img src="/assets/img/fabceylon-logo.png" alt="" />
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
                <Link to="nuwara" className="footer__nav__item__mobile">
                  Nuwara
                </Link>
                <Link to="menu" className="footer__nav__item__mobile">
                  Menu
                </Link>
                <Link to="gallery" className="footer__nav__item__mobile">
                  Gallery
                </Link>
              </div>
              <div className="footer__nav__col2">
                <Link to="construction" className="footer__nav__item__mobile">
                  Store
                </Link>
                <Link to="construction" className="footer__nav__item__mobile">
                  Order Foods
                </Link>
                <Link to="construction" className="footer__nav__item__mobile">
                  Voucher
                </Link>
                <Link to="construction" className="footer__nav__item__mobile">
                  Feedback
                </Link>
              </div>
            </div>
            <div className="footer__nav__logo">
              <img src="/assets/img/fabceylon-logo.png" alt="" />
              <div className="fab__logo__footer">
                <h2>Cafe Nuwara</h2>
                <h2> By Fab Ceylon</h2>
              </div>
            </div>
            <div className="cafe__nuwara__contact__container">
              <div className="box__contact__1">
                <p>No: 146</p>
                <p>DS Senanayake Road</p>
                <p>Kandy 20000</p>
              </div>
              <div className="box__contact__2">
                <p>Review Us On</p>
                <p>TripAdvisor</p>
              </div>
              <div className="box__contact__3">
                <p>+947612346789</p>
                <p>+94213211354</p>
                <p>Info@Nuwara.Cafe</p>
              </div>
            </div>
            <div className="tripadvisor__logo">
              <img
                src="/assets/svg/tripadvisor-review.svg"
                alt="tripAdvisor-logo"
              />
            </div>
            <div className="powered__by__magicle">
              <h2>Powerd by magicle labs</h2>
            </div>
          </div>
        </div>
        <div className="third__container">
          <div className="first__box" id="privacy-policy">
            <Link>Privacy Policy</Link>
          </div>
          <div className="second__box">
            <h2>Powerd By Magicle Labs</h2>
          </div>
          <div className="third__box">
            <div className="item1">Join Cafe Nuwara</div>
            <Link
              to="https://www.facebook.com/profile.php?id=100092030667404"
              className="item2"
            >
              <img src="/assets/svg/facebook-logo.svg" alt="facebook" />
            </Link>
            <Link to="https://www.instagram.com/cafenuwara/" className="item3">
              <img src="/assets/svg/instagram.svg" alt="instagram" />
            </Link>
            <Link
              to="https://www.tripadvisor.com/Restaurant_Review-g304138-d26326255-Reviews-Cafe_Nuwara-Kandy_Kandy_District_Central_Province.html?m=19905"
              className="item4"
            >
              <img src="/assets/svg/tripadvisor.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
