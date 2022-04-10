import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CartState } from "../Context/Context";

const Checkout = () => {
  const [total, setTotal] = useState();

  const {
    state: { cart },
  } = CartState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div className="filter" style={{ width: "23%", padding: "10px" }}>
      <span style={{ fontSize: 25, textAlign: "center" }}>
        Total({cart.length}) Items
      </span>
      <span style={{ textAlign: "center" }}>Total: Rs.{total}</span>
      <Button>Proceed to Checkout</Button>
    </div>
  );
};

export default Checkout;
