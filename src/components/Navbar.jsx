// import React, { useRef, useState } from "react";
// import { Link, useMatch } from "react-router-dom";
// import Welcome from "./Welcome";
// import "./Navbar.css";
// import NavbarDropdownMenu from "./NavbarDropdownMenu";

// const Navbar = () => {
//   const match = useMatch("/");
//   const [dropdownClicked, setDropdownClicked] = useState(false);

//   const dropdownHandler = () => {
//     setDropdownClicked(!dropdownClicked);
//     console.log("clicked");
//   };

//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive__nav");
//     console.log("clicked showNavbar");
//   };

//   return (
//     <>
//       <div>{Boolean(match) ? <Welcome /> : ""} </div>

//       <div className="navbar__wrapper is-active">
//         <nav className="navbar container">
//           <Link
//             to="/"
//             className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
//             onClick={dropdownClicked && dropdownHandler}
//           >
//             Home
//           </Link>
//           <Link
//             to="/nuwara"
//             className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
//             onClick={dropdownClicked && dropdownHandler}
//           >
//             Nuwara
//           </Link>
//           <Link
//             to="https://menu.nuwara.cafe/"
//             className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
//             onClick={dropdownClicked && dropdownHandler}
//           >
//             Menu
//           </Link>
//           <Link
//             to="/store"
//             className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
//             onClick={dropdownClicked && dropdownHandler}
//           >
//             Store
//           </Link>
//           <div
//             to="/et-cetra"
//             className={`navbar__link ${dropdownClicked ? "is-active" : ""} `}
//             id="et-cetra"
//             onClick={dropdownHandler}
//           >
//             Et Cetra
//           </div>
//           <div className="mobile__logo mobile__nav__item">
//             <h2>CAFÉ</h2>
//             <h2>NUWARA</h2>
//           </div>
//           {/* <button
//             onClick={showNavbar}
//             className="nav-btn nav__close__btn mobile__nav__item"
//           >
//             <img src="/public/assets/svg/menu-icon.svg" alt="" />
//           </button> */}
//           <button onClick={showNavbar} className="nav-btn mobile__nav__item">
//             <img src="/public/assets/svg/menu-icon.svg" alt="" />
//           </button>
//           <div className="navbar__responsive__items" ref={navRef}>
//             <div className="title__container__mobile">
//               <div className="mobile__logo">
//                 <h2>CAFÉ</h2>
//                 <h2>NUWARA</h2>
//               </div>
//               <img
//                 src="/public/assets/svg/close-icon.svg"
//                 onClick={showNavbar}
//                 alt="close-icon"
//               />
//             </div>
//             <div className="nav__items__container">
//               <Link to="/" className="mobile__grid__item__1">
//                 Home
//               </Link>
//               <Link to="/" className="mobile__grid__item__2">
//                 Nuwara
//               </Link>
//               <Link to="/" className="mobile__grid__item__3">
//                 Menu
//               </Link>
//               <Link to="/" className="mobile__grid__item__4">
//                 Gallery
//               </Link>
//               <Link to="/" className="mobile__grid__item__5">
//                 Store
//               </Link>
//               <Link to="/" className="mobile__grid__item__6">
//                 Order Foods
//               </Link>
//               <Link to="/" className="mobile__grid__item__7">
//                 Voucher
//               </Link>
//             </div>
//             <div className="about__us__mobile__nav">
//               <div className="title__mobile__about__us">
//                 <h2>About Us</h2>
//               </div>
//               <div className="content__mobile__about__us">
//                 <p>
//                   Our Story, Your Experience: Discover the heart behind our
//                   colonial-Kandyan cafe. Immerse yourself in our journey, where
//                   culture, tradition, and culinary passion converge to create an
//                   unforgettable experience.
//                 </p>
//               </div>
//               <div className="contact__us__btn__mobile__nav">
//                 <button>Contact Us</button>
//               </div>
//               <div className="mobile__flower">
//                 <img src="/public/assets/svg/flower1.svg" alt="flower" />
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {dropdownClicked && (
//         <NavbarDropdownMenu dropdownClicked={dropdownHandler} />
//       )}
//     </>
//   );
// };

// export default Navbar;

// import React, { useRef, useState } from "react";
// import { Link, useMatch } from "react-router-dom";
// import Welcome from "./Welcome";
// import "./Navbar.css";
// import NavbarDropdownMenu from "./NavbarDropdownMenu";

// const Navbar = () => {
//   const match = useMatch("/");
//   const [dropdownClicked, setDropdownClicked] = useState(false);

//   const dropdownHandler = () => {
//     setDropdownClicked(!dropdownClicked);
//     console.log("clicked");
//   };

//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive__nav");
//     console.log("clicked showNavbar");
//   };

//   return (
//     <>
//       <div>{Boolean(match) ? <Welcome /> : ""}</div>

//       <div className="navbar__wrapper is-active">
//         <nav className="navbar container">
//           <Link
//             to="/"
//             className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
//             onClick={dropdownClicked && dropdownHandler}
//           >
//             Home
//           </Link>
//           <Link
//             to="/nuwara"
//             className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
//             onClick={dropdownClicked && dropdownHandler}
//           >
//             Nuwara
//           </Link>
//           <Link
//             to="https://menu.nuwara.cafe/"
//             className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
//             onClick={dropdownClicked && dropdownHandler}
//           >
//             Menu
//           </Link>
//           <Link
//             to="/store"
//             className={`navbar__link ${dropdownClicked ? "inactive" : ""}`}
//             onClick={dropdownClicked && dropdownHandler}
//           >
//             Store
//           </Link>
//           <div
//             to="/et-cetra"
//             className={`navbar__link ${dropdownClicked ? "is-active" : ""} `}
//             id="et-cetra"
//             onClick={dropdownHandler}
//           >
//             Et Cetra
//           </div>
//           <div className="mobile__logo mobile__nav__item">
//             <h2>CAFÉ</h2>
//             <h2>NUWARA</h2>
//           </div>
//           <button onClick={showNavbar} className="nav-btn mobile__nav__item">
//             <img src="/public/assets/svg/menu-icon.svg" alt="" />
//           </button>
//           <div className="navbar__responsive__items" ref={navRef}>
//             <div className="title__container__mobile">
//               <div className="mobile__logo">
//                 <h2>CAFÉ</h2>
//                 <h2>NUWARA</h2>
//               </div>
//               <img
//                 src="/public/assets/svg/close-icon.svg"
//                 onClick={showNavbar}
//                 alt="close-icon"
//               />
//             </div>
//             <div className="nav__items__container">
//               <Link to="/" className="mobile__grid__item__1">
//                 Home
//               </Link>
//               <Link to="/" className="mobile__grid__item__2">
//                 Nuwara
//               </Link>
//               <Link to="/" className="mobile__grid__item__3">
//                 Menu
//               </Link>
//               <Link to="/" className="mobile__grid__item__4">
//                 Gallery
//               </Link>
//               <Link to="/" className="mobile__grid__item__5">
//                 Store
//               </Link>
//               <Link to="/" className="mobile__grid__item__6">
//                 Order Foods
//               </Link>
//               <Link to="/" className="mobile__grid__item__7">
//                 Voucher
//               </Link>
//             </div>
//             <div className="about__us__mobile__nav">
//               <div className="title__mobile__about__us">
//                 <h2>About Us</h2>
//               </div>
//               <div className="content__mobile__about__us">
//                 <p>
//                   Our Story, Your Experience: Discover the heart behind our
//                   colonial-Kandyan cafe. Immerse yourself in our journey, where
//                   culture, tradition, and culinary passion converge to create an
//                   unforgettable experience.
//                 </p>
//               </div>
//               <div className="contact__us__btn__mobile__nav">
//                 <button>Contact Us</button>
//               </div>
//               <div className="mobile__flower">
//                 <img src="/public/assets/svg/flower1.svg" alt="flower" />
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {dropdownClicked && (
//         <NavbarDropdownMenu dropdownClicked={dropdownHandler} />
//       )}
//     </>
//   );
// };

// export default Navbar;

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
              className={"navbar__link"}
              onClick={dropdownClicked && dropdownHandler}
            >
              Home
            </Link>
            <Link
              to="/nuwara"
              className={"navbar__link "}
              onClick={dropdownClicked && dropdownHandler}
            >
              Nuwara
            </Link>
            <Link
              to="https://menu.nuwara.cafe/"
              className={"navbar__link "}
              onClick={dropdownClicked && dropdownHandler}
            >
              Menu
            </Link>
            <Link
              to="/store"
              className={"navbar__link "}
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
              <h2>CAFE</h2>
              <h2>NUWARA</h2>
            </div>
            <div className="menu-icon" onClick={mobileNavbarHandler}>
              <img src="/public/assets/svg/menu-icon.svg" alt="close-icon" />
            </div>
          </div>
        </nav>
        {dropdownClicked && <NavbarDropdownMenu />}
      </div>
      {mobileNavToggle && (
        <MobileNavbar mobileNavbarHandler={mobileNavbarHandler} />
      )}
    </>
  );
}

export default Navbar;
