import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Login, Register, Shop, Cart, CheckOut } from "../pages";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkOut" element={<CheckOut />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routers;
