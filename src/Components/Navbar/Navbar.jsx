import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);
  
  const location = useLocation();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    setIsNavbarOpen(false);
  }, [location.pathname]);

  const toggleNavbar = () => {
    console.log("Before toggle:", isNavbarOpen);
    setIsNavbarOpen(!isNavbarOpen);
    console.log("After toggle:", !isNavbarOpen);
  };

  return (
    <>
      <div className="nav-hide">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>E-shop</p>
        </div>

        <button
          id="toggleButton"
          className="nav-dropdown"
          onClick={toggleNavbar}
        >
          {isNavbarOpen ? "X" : "☰"}
        </button>
      </div>

      <nav
        className={`navbar ${isNavbarOpen ? "open" : "closed"}`}
      >
        
        <div className="navbar">
          <div className="nav-logo nav-reveal">
            <img src={logo} alt="logo" />
            <p>E-Shop</p>
          </div>

          <ul className="nav-menu">
            <li
              onClick={() => {
                setMenu("shop");
                setIsNavbarOpen(false);
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/">
                Shop
              </Link>
              {menu === "shop" ? <hr /> : <></>}
            </li>

            <li
              onClick={() => {
                setMenu("mens");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/mens">
                Men
              </Link>
              {menu === "mens" ? <hr /> : <></>}
            </li>

            <li
              onClick={() => {
                setMenu("womens");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/womens">
                Women
              </Link>
              {menu === "womens" ? <hr /> : <></>}
            </li>

            <li
              onClick={() => {
                setMenu("kids");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/kids">
                Kids
              </Link>
              {menu === "kids" ? <hr /> : <></>}
            </li>
          </ul>

          <div className="nav-login-cart">
          {localStorage.getItem('auth-token')
          ? <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace("/")}}>Log out</button> :
            <Link style={{ textDecoration: "none" }} to="/login">
              <button>Login</button>
            </Link>
            }

            <Link style={{ textDecoration: "none" }} to="/cart">
              <img src={cart_icon} alt="cart-icon" />
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
