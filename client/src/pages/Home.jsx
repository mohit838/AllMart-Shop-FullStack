import React from "react";
import "./../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Helmate from "../components/helmate/Helmate";
import HeroImg from "./../assets/images/hero-img.png";

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
                  <h2>Create Minimalist and Modern</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum exercitationem quos laudantium, minus necessitatibus
                    quaerat praesentium eius ex, architecto magnam cumque! Cum
                    deleniti libero aspernatur provident reprehenderit
                    exercitationem, accusamus cumque.
                  </p>
                  <button className="buyBtn">Buy Now</button>
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
      </Helmate>
    </>
  );
};

export default Home;
