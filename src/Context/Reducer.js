export const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_to_cart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "Remove_from_cart":
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id),
      };
    case "Change_quantity":
      return {
        ...state,
        cart: state.cart.map((prod) =>
          prod.id === action.payload.id
            ? { ...prod, qty: action.payload.qty }
            : prod
        ),
      };
    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "Sort":
      return { ...state, sort: action.payload };
    case "Filter_by_stock":
      return { ...state, byStock: !state.byStock };
    case "Filter_by_fast_delivery":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "Filter_by_rating":
      return { ...state, byRating: action.payload };
    case "Filter_by_search":
      return { ...state, searchQuery: action.payload };
    case "Clear":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };
    default:
      return state;
  }
};
