import React from "react";
import "./../../styles/productsCard.css";
import ProductImg from "./../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { Col } from "reactstrap";

const ProductCard = () => {
  return (
    <>
      <Col lg="3" md="4">
        <div className="productItems">
          <div className="productsImg">
            <img src={ProductImg} alt="product/img" />
          </div>
          <div className="p-2 productInfo">
            <h3 className="productsName">Modern Arm Chair</h3>
            <span className="text-center d-block">Chair</span>
          </div>
          <div className="productCardBottom d-flex align-items-center justify-content-between p-2">
            <span className="price">$123</span>
            <span>
              <i className="ri-add-line"></i>
            </span>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProductCard;
