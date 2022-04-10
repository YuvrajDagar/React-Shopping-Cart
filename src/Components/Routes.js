import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Error from "./Error";
import Home from "./Home";

const LoadingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default LoadingRoutes;
