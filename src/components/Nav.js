import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

function Nav() {
  const [isShown, setisShown] = useState(false);
  console.log(isShown);
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
          <Link className="nav__menu__item" to="/">
            00 HOME
          </Link>
          <Link className="nav__menu__item" to="/destination">
            01 DESTIONATION
          </Link>
          <Link className="nav__menu__item" to="/crew">
            02 CREW
          </Link>
          <Link className="nav__menu__item" to="/technology">
            03 TECHNOLOGY
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
