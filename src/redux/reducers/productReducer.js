const intialState = {
  products: [],
  productLoading: false
};

const productReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_PRODUCT_LOADING":
      return {
        ...state,
        productLoading: true,
      };
    case "SET_PRODUCTS": {
      return {
        ...state,
        products: payload,
        productLoading: false,
      };
    }
    case "SELECTED_PRODUCTS": {
      return {
        ...state,
        products: payload,
        productLoading: false,
      };
    }
    default:

      return state;
  }
};

export default productReducer;
