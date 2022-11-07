import React from "react";
import "./services.css";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import serviceData from "./../assets/data/serviceData.js";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((item, i) => (
            <Col lg="3" md="4" key={i}>
              <motion.div
                whileHover={{
                  scale: "1.1",
                }}
                className="serviceItems"
                style={{
                  background: `${item.bg}`,
                }}
              >
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
