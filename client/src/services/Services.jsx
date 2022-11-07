import React from "react";
import "./services.css";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          <Col lg="3" md="4">
            <div className="serviceItems">
              <span>
                <i className="ri-truck-line"></i>
              </span>
              <div>
                <h3>Free Shipping</h3>
                <p>Upto 10k Purchases. EMI not Included.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
