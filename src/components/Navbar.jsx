import { useRef, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import Welcome from "./Welcome";
import "./Navbar.css";
import NavbarDropdownMenu from "./NavbarDropdownMenu";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const match = useMatch("/");

  const [dropdownClicked, setDropdownClicked] = useState(false);
  const [mobileNavToggle, setMobileNavToggle] = useState(false);

  const dropdownHandler = () => {
    setDropdownClicked(!dropdownClicked);
    console.log(" dropdown handler clicked");
  };

  const mobileNavbarHandler = () => {
    setMobileNavToggle(!mobileNavToggle);
    console.log(" mobile nav clicked");
  };

  return (
    <>
      <> {Boolean(match) ? <Welcome /> : undefined} </>
      <div className="navbar__wrapper">
        <nav className="navbar container">
          <div className="desktop__ver">
            <Link
              to="/"
              className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
              onClick={dropdownClicked && dropdownHandler}
            >
              Home
            </Link>
            <Link
              to="/nuwara"
              className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
              onClick={dropdownClicked && dropdownHandler}
            >
              Nuwara
            </Link>
            <Link
              to="https://menu.nuwara.cafe/"
              className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
              onClick={dropdownClicked && dropdownHandler}
            >
              Menu
            </Link>
            <Link
              to="construction"
              className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
              onClick={dropdownClicked && dropdownHandler}
            >
              Store
            </Link>
            <div
              to="/et-cetra"
              className={`navbar__link ${dropdownClicked ? "is-active" : ""} `}
              id="et-cetra"
              onClick={dropdownHandler}
            >
              et-cetra
            </div>
          </div>
          <div className="mobile__ver">
            <div className="mobile__logo">
              <h2>CAFÉ</h2>
              <h2>NUWARA</h2>
            </div>
            <div className="menu-icon" onClick={mobileNavbarHandler}>
              <img src="/assets/svg/menu-icon.svg" alt="close-icon" />
            </div>
          </div>
        </nav>
        {dropdownClicked && (
          <NavbarDropdownMenu dropdownClicked={dropdownClicked} />
        )}
      </div>
      {mobileNavToggle && (
        <MobileNavbar mobileNavbarHandler={mobileNavbarHandler} />
      )}
    </>
  );
}

export default Navbar;
