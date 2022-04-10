import React from "react";
import {
  Col,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { CartState } from "../Context/Context";
import Checkout from "./Checkout";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="home">
      <div className="cartContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroupItem key={prod.id}>
              <Row>
                <Col md={2} style={{ marginRight: "20px" }}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>{prod.name}</Col>
                <Col>Rs. {prod.price}</Col>
                <Col md={2}>
                  <Rating
                    rate={prod.rating}
                    style={{ margin: 2 }}
                    fontSize="24"
                  />
                </Col>
                <Col md={2} style={{ display: "flex" }}>
                  <span md={2}>Quantity:</span>
                  <Form.Control
                    as="select"
                    onChange={(e) => {
                      dispatch({
                        type: "Change_quantity",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      });
                      console.log(e.target.value);
                    }}
                    value={prod.qty}
                    style={{
                      marginLeft: "10px",
                      width: "50px",
                      height: "35px",
                    }}
                  >
                    {[...Array(5).keys()].map((i) => (
                      <option key={i}>{i + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <span
                    className="deleteButton"
                    style={{ cursor: "pointer", marginLeft: "60px" }}
                  >
                    <MdDelete
                      fontSize="25px"
                      onClick={() => {
                        dispatch({
                          type: "Remove_from_cart",
                          payload: prod,
                        });
                      }}
                    />
                  </span>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <Checkout />
    </div>
  );
};

export default Cart;
