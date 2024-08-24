const initialState = {
  cart_data: null,
  error: null,
};

const cartSliceData = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_cart_success":
      return {
        ...state,
        cart_data: action.payload?.data,
        error: null,
      };
    case "fetch_cart_fail":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartSliceData;
