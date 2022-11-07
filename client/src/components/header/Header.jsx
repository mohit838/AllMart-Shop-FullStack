import React from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./../../assets/images/eco-logo.png";
import UserImg from "./../../assets/images/user-icon.png";

const navLinks = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

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
              </div>
            </div>

            {/* Nav Menu*/}
            <div className="navLinks">
              <ul className="navMenu">
                {navLinks.map((item, i) => (
                  <li className="navItem" key={i}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "navActive" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav Icons of cart and user*/}
            <div className="navIcons">
              <span className="favIcon">
                <i className="ri-heart-line"></i>
                <span className="badge">5</span>
              </span>
              <span className="cartIcon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">5</span>
              </span>
              <span className="userIcon">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={UserImg}
                  alt="user/img"
                />
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
