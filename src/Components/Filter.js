import { Button, FormCheck } from "react-bootstrap";
import { CartState } from "../Context/Context";
import Rating from "./Rating";
import "./styles.css";

const Filter = () => {
  //   const [rate, setRate] = useState(0);
  const rateChange = (changedRate) => {
    filterDispatch({
      type: "Filter_by_rating",
      payload: changedRate,
    });
  };
  const {
    filterState: { byStock, byFastDelivery, byRating, searchQuery, sort },
    filterDispatch,
  } = CartState();
  console.log(byStock, byFastDelivery, byRating, searchQuery, sort);
  return (
    <div className="filter">
      <span style={{ fontSize: 30 }}>Filters</span>
      <span>
        <FormCheck
          type="radio"
          id="Ascending"
          label="Ascending"
          name="Group1"
          onChange={() =>
            filterDispatch({
              type: "Sort",
              payload: "Ascending",
            })
          }
          checked={sort === "Ascending"}
        />
      </span>
      <span>
        <FormCheck
          type="radio"
          label="Descending"
          id="Descending"
          name="Group1"
          onChange={() =>
            filterDispatch({
              type: "Sort",
              payload: "Descending",
            })
          }
          checked={sort === "Descending"}
        />
      </span>
      <span>
        <FormCheck
          type="checkbox"
          label="Include out of Stock"
          id="Include out of Stock"
          name="Group1"
          onChange={() =>
            filterDispatch({
              type: "Filter_by_stock",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <FormCheck
          type="checkbox"
          label="Fast Delivery"
          id="Fast Delivery"
          name="Group1"
          onChange={() =>
            filterDispatch({
              type: "Filter_by_fast_delivery",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ marginRight: 5 }}>Rating: </label>
        <Rating
          rate={byRating}
          rateChange={rateChange}
          style={{ cursor: "pointer", margin: 2 }}
          fontSize="17"
          filter={true}
        />
      </span>

      <Button
        variant="light"
        bg="dark"
        onClick={() => {
          filterDispatch({
            type: "Clear",
          });
        }}
      >
        <span className="clearFilter">Clear Filter</span>
      </Button>
    </div>
  );
};

export default Filter;
