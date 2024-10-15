import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Malki</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Qulification
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/malki-madhubhashini-0683b623b/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/Malkimadhu"
            className="footer__social-link"
            target="_blank"
          >
            <i class='bx bxl-github'></i>
          </a>

          <a
            href="https://www.instagram.com/m_madhubhashini/profilecard/?igsh=cGFva2k4MHV6OGps"
            className="footer__social-link"
            target="_blank"
          >
            <i class='bx bxl-instagram-alt'></i>
          </a>
        </div>

        <span className="footer__copy">Malki Madhubhashini. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
