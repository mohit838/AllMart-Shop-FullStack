import React from "react";
import "./../styles/home.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import Helmate from "../components/helmate/Helmate";
import HeroImg from "./../assets/images/hero-img.png";
import Services from "../services/Services";

const Home = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Helmate title={"Home"}>
        <section className="heroSection">
          <Container>
            <Row>
              {/* Hero Content */}
              <Col lg="6" md="6">
                <div className="heroContent">
                  <p className="heroSubTitle">Trending in {year}</p>
                  <h2>
                    Create Minimalist and Modern Outlooks For Your Home
                    Decorations.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum exercitationem quos laudantium, minus necessitatibus
                    quaerat praesentium eius ex, architecto magnam cumque! Cum
                    deleniti libero aspernatur provident reprehenderit
                    exercitationem, accusamus cumque.
                  </p>
                  <motion.button
                    className="buyBtn"
                    whileTap={{
                      scale: 1.2,
                    }}
                  >
                    <Link to="/shop">Buy Now</Link>
                  </motion.button>
                </div>
              </Col>

              {/* Hero Image */}
              <Col lg="6" md="6">
                <div className="heroImg">
                  <img src={HeroImg} alt="hero/img" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Services Page */}
        <Services />
      </Helmate>
    </>
  );
};

export default Home;
