import React from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import Logo from "./../../assets/images/eco-logo.png";
import UserImg from "./../../assets/images/user-icon.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="navWrapper">
            {/* Logo */}
            <div className="logo">
              <img src={Logo} alt="logo/img" />
              <div>
                <h1>FurNish</h1>
                <p>Since 2001</p>
              </div>
            </div>

            {/* Nav Menu*/}
            <div className="navLinks">
              <ul className="navMenu">
                <li className="navItem">
                  <NavLink to="home">Home</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="shop">Shop</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="cart">Cart</NavLink>
                </li>
              </ul>
            </div>

            {/* Nav Icons of cart and user*/}
            <div className="navIcons">
              <span className="favIcon">
                <i className="ri-heart-line"></i>
              </span>
              <span className="cartIcon">
                <i className="ri-shopping-bag-line"></i>
              </span>
              <span className="userIcon">
                <img src={UserImg} alt="user/img" />
              </span>
            </div>

            {/* Mobile Menu */}
            <div className="mobileMenu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
