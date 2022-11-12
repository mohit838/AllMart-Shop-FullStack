import React, { useState, useEffect } from "react";
import "./../styles/home.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import Helmate from "../components/helmate/Helmate";
import HeroImg from "./../assets/images/hero-img.png";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "./../assets/data/products.js";
import CounterImg from "./../assets//images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trandingProd, setTrandingProd] = useState([]);
  const [bestSales, setBestSales] = useState([]);
  const [mobileProd, setMobileProd] = useState([]);
  const [wirelessProd, setWirelessProd] = useState([]);
  const [watchProd, setWatchProd] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const fiterTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const fiterBestProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const fiterMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const fiterWatchProducts = products.filter(
      (item) => item.category === "watch"
    );
    const fiterWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    setTrandingProd(fiterTrendingProducts);
    setBestSales(fiterBestProducts);
    setMobileProd(fiterMobileProducts);
    setWatchProd(fiterWatchProducts);
    setWirelessProd(fiterWirelessProducts);
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
                    quaerat praesentium eius ex, architecto magnam cumque!
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
              <ProductList data={trandingProd} />
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

        {/* Timer Section */}
        <section className="timerCount">
          <Container>
            <Row
              className="d-flex justify-content-center
            "
            >
              <Col lg="6" md="12" className="countCol">
                <div className="clockTopContent">
                  <h1 className="text-white fs-6 mb-2">Limited Offers</h1>
                  <h3 className="text-white fs-5 mb-2">Quality Armchair</h3>
                </div>

                {/* Clock */}
                <Clock />

                <motion.button
                  whileTap={{
                    scale: "1.2",
                  }}
                  className="buyBtn storeBtn"
                >
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </Col>
              <Col lg="6" md="12" className="text-end counterImg">
                <img src={CounterImg} alt="spcial/product/img" />
              </Col>
            </Row>
          </Container>
        </section>

        {/* New Arrival Section */}
        <section className="newArrivals">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="sectionTitle">New Arrivals</h2>
              </Col>

              {/* Products Lists */}
              <ProductList data={mobileProd} />
              <ProductList data={wirelessProd} />
            </Row>
          </Container>
        </section>

        {/* Popular Section */}
        <section className="popularSection">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2 className="sectionTitle">Popular Products</h2>
              </Col>

              {/* Products Lists */}
              <ProductList data={watchProd} />
            </Row>
          </Container>
        </section>
      </Helmate>
    </>
  );
};

export default Home;
