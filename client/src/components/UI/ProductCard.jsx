import React from "react";
import "./../../styles/productsCard.css";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <>
      <Col lg="3" md="4">
        <div className="productItems">
          <div className="productsImg">
            <motion.img
              whileHover={{ scale: "0.9" }}
              src={item.imgUrl}
              alt="product/img"
            />
          </div>
          <div className="p-2 productInfo">
            <h3 className="productsName">
              <Link to={`/shop/${item.id}`}>{item.productName}</Link>
            </h3>
            <span>{item.category}</span>
          </div>
          <div className="productCardBottom d-flex align-items-center justify-content-between p-2">
            <span className="price">${item.price}</span>
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
