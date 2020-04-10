import React from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>
          Online Store <i className="fas fa-store-alt"></i>
        </h1>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/checkout">
              <i className="fas fa-shopping-cart"></i> View Cart / Checkout{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNavBar;
