import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

function Footer() {

  const date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="logo" />
        <p>E-Shop</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/sammuaks/">
            <img src={instagram_icon} alt="IG" />
          </a>
        </div>

        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="Pinterest" />
        </div>

        <div className="footer-icons-container">
          <a href="https://wa.me/+2348085145419">
            <img src={whatsapp_icon} alt="Whatsapp" />
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Sam-Muaks ©️ {year} 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
