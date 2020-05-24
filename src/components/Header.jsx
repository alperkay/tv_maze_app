import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h4 className="header__logo">videoland</h4>
      </Link>
      <h4 className="header__title">Your Favorites</h4>
    </div>
  );
}

export default Header;
