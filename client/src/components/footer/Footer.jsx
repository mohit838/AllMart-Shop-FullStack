import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4" className="mb-4">
              {/* Logo */}
              <div className="logo">
                <div>
                  <h1 className="text-white">AllMart</h1>
                </div>
              </div>
              {/* Footer Text */}
              <p className="footerText mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptatem eius asperiores quas deserunt voluptas
                enim odit doloribus? Quae, doloremque.
              </p>
            </Col>
            <Col lg="3">
              <div className="footerQuickLinks">
                <h4 className="quickLinkTitle">Top Categories</h4>

                <ListGroup className="mb-3">
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Mobile Items</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Watch Items</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Wireless Items</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="2">
              <div className="footerQuickLinks">
                <h4 className="quickLinkTitle">Useful Links</h4>

                <ListGroup className="mb-3">
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/shop">Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/cart">Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="/login">LogIn</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    <Link to="#">Privecy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="3">
              <div className="footerQuickLinks footerContact">
                <h4 className="quickLinkTitle">Contact</h4>

                <ListGroup className="mb-3">
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 text-white">
                    <span>
                      <i className="ri-map-pin-line"></i>
                    </span>
                    <p>123, Harbor Street, NY</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 text-white">
                    <span>
                      <i class="ri-phone-line"></i>
                    </span>
                    <p>+01 213 456 985</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 text-white">
                    <span>
                      <i class="ri-mail-line"></i>
                    </span>
                    <p>mail@example.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg="12">
              <p className="footerCopyright"> Copyright {year} AllMart.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
