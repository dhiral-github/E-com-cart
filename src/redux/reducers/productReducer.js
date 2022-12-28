const intialState = {
  products: [],
  productLoading: false,
  showProductModal: false,
  selectedProduct: {}
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
    case "SHOW_PRODUCT_MODAL": {
      return {
        ...state,
        showProductModal: payload,
      }
    }

    case "ADD_NEW_PRODUCT": {
      const productData = state.products.concat(payload);
      return {
        ...state,
        products: productData,
      }
    }
    case "SELECTED_PRODUCT": {
      return {
        ...state,
        selectedProduct: payload
      }
    }
    case "UPDATE_PRODUCT": {
      console.log("UPDATE_PRODUCT Reducer state=>>>>", state);
      console.log("UPDATE_PRODUCT Reducer payload=>>>>", payload);
      const { id } = payload;

      const proState = [...state.products];
      const findObject = proState.findIndex((item) => item.id === id)
      proState.splice(findObject, 1, payload)
      console.log("proState====.>>>>>", proState);
      return {
        ...state,
        products: proState,
      }
    }
    default:
      return state;
  }
};

export default productReducer;
