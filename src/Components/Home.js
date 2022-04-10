import React, { useEffect, useState } from "react";
import { CartState } from "../Context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import "./styles.css";
const Home = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const {
    state: { products },
    filterState,
  } = CartState();
  useEffect(() => {
    console.log(products);
    var newProducts = products;
    newProducts = newProducts.filter((prod) =>
      !filterState.byStock ? prod.inStock !== filterState.byStock : prod
    );

    newProducts = newProducts.filter((prod) =>
      filterState.byFastDelivery
        ? prod.fastDelivery === filterState.byFastDelivery
        : prod
    );

    newProducts = newProducts.filter(
      (prod) => prod.rating >= filterState.byRating
    );
    newProducts = newProducts.filter((prod) =>
      filterState.searchQuery
        ? prod.name
            .toLowerCase()
            .includes(filterState.searchQuery.toLowerCase())
        : prod
    );
    if (filterState.sort) {
      newProducts = newProducts.sort((a, b) =>
        filterState.sort === "Ascending" ? a.price - b.price : b.price - a.price
      );
    }

    setFilterProducts(newProducts);
    console.log(newProducts);
  }, [products, filterState]);

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {filterProducts.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
