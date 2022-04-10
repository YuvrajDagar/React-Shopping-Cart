import React, { useState } from "react";
import {
  Container,
  Form,
  Nav,
  Navbar,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { CgShoppingCart } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const {
    state: { cart },
    dispatch,
    filterState: { searchQuery },
    filterDispatch,
  } = CartState();
  console.log(cart);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <h4>Flippkart</h4>
            </Link>
          </Navbar.Brand>
          <nav className="searchBar">
            <Form.Control
              type="text"
              placeholder="Enter Search Query"
              style={{ width: 500 }}
              value={searchQuery}
              onChange={(e) => {
                filterDispatch({
                  type: "Filter_by_search",
                  payload: e.target.value,
                });
                console.log(e.target.value);
              }}
            />
          </nav>
          <Nav>
            <Dropdown show={showDropdown}>
              <Dropdown.Toggle
                id="dropdown-button-dark"
                variant="dark"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <CgShoppingCart fontSize="25px" />
                <Badge bg="dark">{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu
                variant="light"
                align="end"
                style={{ minWidth: "340px" }}
              >
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <Dropdown.Item key={prod.id}>
                        <span className="itemsHeader">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="imagesmall"
                          />
                          <div className="items">
                            <span>{prod.name}</span>
                            <span>Rs. {prod.price.split(".")[0]}</span>
                          </div>
                          <MdDelete
                            onClick={() => {
                              dispatch({
                                type: "Remove_from_cart",
                                payload: prod,
                              });
                            }}
                          />
                        </span>
                        <Dropdown.Divider />
                      </Dropdown.Item>
                    ))}
                    <Link to="/cart" style={{ margin: "20px" }}>
                      <Button
                        variant="dark"
                        style={{ width: "89%" }}
                        onClick={() => {
                          setShowDropdown(false);
                        }}
                      >
                        Go to Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <Dropdown.Item>Cart is Empty!</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
