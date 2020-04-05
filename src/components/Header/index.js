import React, { Component } from "react";

import "./style.css";

import logo from "../../assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <div id="nav-container">
        <div className="nav_primary_placeholder">
          <div className="nav nav_primary">
            <div className="container nav__container">
              <div className="brand .brand__logo">
                <img width="150px" src={logo} alt="" />
              </div>
              <div className="userInfo">
                <span>Meu perfil</span>
                <span className="material-icons">account_circle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
