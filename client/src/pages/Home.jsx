import React from "react";
import "./../styles/home.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import Helmate from "../components/helmate/Helmate";
import HeroImg from "./../assets/images/hero-img.png";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "./../assets/data/products.js";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [bestSales, setBestSales] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const fiterProducts = products.filter((item) => item.category === "chair");
    const fiterBestProducts = products.filter(
      (item) => item.category === "sofa"
    );

    setData(fiterProducts);
    setBestSales(fiterBestProducts);
  }, []);

  return (
    <>
      <Helmate title={"Home"}>
        <section className="heroSection">
          <Container>
            <Row>
              {/* Hero Content */}
              <Col lg="6" md="6" mb-2>
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
              <Col lg="6" md="6" mb-2>
                <div className="heroImg">
                  <img src={HeroImg} alt="hero/img" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Services Page */}
        <Services />

        {/* Treanding Products */}
        <section className="trendingProducts">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="sectionTitle">Trending Products</h2>
              </Col>

              {/* Products Lists */}
              <ProductList data={data} />
            </Row>
          </Container>
        </section>

        {/* Best Sales */}
        <section className="bestSales">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="sectionTitle">Best Sales</h2>
              </Col>

              {/* Products Lists */}
              <ProductList data={bestSales} />
            </Row>
          </Container>
        </section>
      </Helmate>
    </>
  );
};

export default Home;
