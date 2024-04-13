import React, { useState, useEffect } from "react";

import "./Header.scss";

import DefaultLogo from "../../assets/images/logos/logoDefault.png";
import classNames from "classnames";
import { Modal } from "../Modals/Modal";

const Header = () => {
  const [active, setActive] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const isActive = (e) => {
    window.scrollY >= 50 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  return (
    <header
      className={classNames({
        "active-header": active,
      })}
    >
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}

      <div className="container">
        <a href="#Slider">
          <div className="logo">
            <img src={DefaultLogo} alt="default-logo" />
          </div>
        </a>
        <div className="menu">
          <nav>
            <ul>
              <li><a href="#About">About Us</a></li>
              <li><a href="#Populardishes">Popular dishes</a></li>
              <li><a href="#Menu">Menu</a></li>
              <li><a href="#Testimonials">Testimonials</a></li>
            </ul>
          </nav>
          <div className="buttons">
            <button className="button-primary" onClick={() => setShowModal(true)}>
              Reserve Table
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
