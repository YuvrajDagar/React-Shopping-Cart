import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../Context/Context";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="product">
      {/* style={{ width: "23rem", marginBottom: 20 }} */}
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            <span>Rs. {product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery available</div>
            ) : (
              <div style={{ color: "red" }}>Fast Delivery is not available</div>
            )}
            <Rating rate={product.rating} style={{ margin: 1 }} fontSize="20" />
          </Card.Subtitle>
          {cart.some((prod) => prod.id === product.id) ? (
            <Button
              className="buttonProduct"
              onClick={() => {
                dispatch({
                  type: "Remove_from_cart",
                  payload: product,
                });
              }}
              variant="danger"
              style={{
                marginTop: "10px",
                height: "30px",
                fontSize: 15,
                lineHeight: 1,
                width: "10rem",
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "Add_to_cart",
                  payload: product,
                });
              }}
              variant="info"
              style={{
                margin: "10px",
                height: "30px",
                fontSize: 15,
                lineHeight: 1,
                marginBottom: "0",
                width: "90%",
              }}
              disabled={!product.inStock}
            >
              {product.inStock ? "Add to cart" : "Out of Stock"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
