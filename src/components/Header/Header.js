import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="head">
      <header className="header">
        <nav>
          <img src={logo} alt="" className="logo" />
          <div className="nav-ber">
            <a href="/Order">Order</a>
            <a href="/Order-Review">Order Review</a>
            <a href="/Manage-Inventory">Manage Inventory</a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
