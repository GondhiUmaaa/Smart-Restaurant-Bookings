import React from "react";

import "./Footer.scss";

import Logo from "../../assets/images/logos/logoDefault.png";


import { footerMenu } from "../../data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="content">
          <div className="menu">
            {footerMenu.map((item, index) => (
              <div className="menu-item" key={index}>
                <h3>{item.title}</h3>

                <ul>
                  {item.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
