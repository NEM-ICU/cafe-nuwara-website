import React from "react";
import { Link } from "react-router-dom";

import "./NavbarDropdownMenu.css";

function NavbarDropdownMenu({ dropdownClicked }) {
  return (
    <div className="dropdown">
      <div className="dropdown__wrapper">
        <span className="dropdown__overlay__span"></span>
        <div className="dropdown__menu container">
          <li className="dropdown__item">
            <Link
              className="dropdown__link"
              to="gallery"
              onClick={dropdownClicked}
            >
              Gallery
              <span className="dropdown__item-desc">
                Journey Through Visuals: Immerse yourself in the captivating
                blend of colonial and Kandyan ambiance through our gallery,
                capturing moments that echo the heart of our cultural fusion.
              </span>
            </Link>
          </li>
          <li className="dropdown__item">
            <Link
              to="construction"
              className="dropdown__link"
              onClick={dropdownClicked}
            >
              Vouchers
              <span className="dropdown__item-desc">
                Gift the Experience: Delight your loved ones with the essence of
                colonial-Kandyan charm. Explore our vouchers, offering the joy
                of culinary and cultural fusion, a perfect present for any
                occasion.
              </span>
            </Link>
          </li>
          <li to="construction" className="dropdown__item">
            <Link
              className="dropdown__link"
              onClick={dropdownClicked}
              to="https://www.ubereats.com/lk/store/cafe-nuwara-kandy/JpxuTioeXCK628_NQEWQew"
            >
              Order Foods
              <span className="dropdown__item-desc">
                Savor the flavors of Café Nuwara from home. Explore our menu and
                enjoy with easy online ordering for pickup or delivery.
              </span>
            </Link>
          </li>
          <li to="contact" className="dropdown__item">
            <Link
              className="dropdown__link"
              onClick={dropdownClicked}
              to="contact"
            >
              Contact us
              <span className="dropdown__item-desc">
                Reach Out and Connect: Have questions or want to experience our
                colonial-Kandyan haven? Contact us for inquiries, reservations,
                and to embark on a journey of flavors and culture.
              </span>
            </Link>
          </li>
          <img src="/assets/svg/flower1.svg" alt="" />
          <li to="construction" className="dropdown__item">
            <Link
              className="dropdown__link"
              onClick={dropdownClicked}
              to="nuwara"
            >
              About us
              <span className="dropdown__item-desc">
                Our Story, Your Experience: Discover the heart behind our
                colonial-Kandyan cafe. Immerse yourself in our journey, where
                culture, tradition, and culinary passion converge to create an
                unforgettable experience.
              </span>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default NavbarDropdownMenu;
