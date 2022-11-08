import React from "react";
import "./../../styles/productsCard.css";
import ProductImg from "./../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <Col lg="3" md="4">
        <div className="productItems">
          <div className="productsImg">
            <motion.img
              whileHover={{ scale: "0.9" }}
              src={ProductImg}
              alt="product/img"
            />
          </div>
          <div className="p-2 productInfo">
            <h3 className="productsName">
              <Link to="/shop/:id">Modern Arm Chair</Link>
            </h3>
            <span>Chair</span>
          </div>
          <div className="productCardBottom d-flex align-items-center justify-content-between p-2">
            <span className="price">$123</span>
            <motion.span
              whileTap={{
                scale: "1.2",
              }}
            >
              <i className="ri-add-line"></i>
            </motion.span>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProductCard;
