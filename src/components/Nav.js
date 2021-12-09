import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

function Nav() {
  const [isShown, setisShown] = useState(false);
  // if (navigator.userAgent.indexOf("Firefox") != -1) {
  //   console.log("Firefox");
  // } else {
  //   console.log("not");
  // }

  return (
    <header className="header">
      <div className="logoWrapper">
        <img src={logo} />
      </div>
      <button
        onClick={() => setisShown((prevState) => !prevState)}
        className="toggler"
      >
        <img src={isShown ? close : hamburger} />
      </button>
      <nav className={isShown ? "nav nav--open" : "nav"}>
        <div className="nav__menu">
          <NavLink className="nav__menu__item" to="/home">
            <span>00</span>HOME
          </NavLink>
          <NavLink className="nav__menu__item" to="/destination">
            <span>01</span> DESTIONATION
          </NavLink>
          <NavLink className="nav__menu__item" to="/crew">
            <span>02</span> CREW
          </NavLink>
          <NavLink className="nav__menu__item" to="/technology">
            <span>03</span> TECHNOLOGY
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
