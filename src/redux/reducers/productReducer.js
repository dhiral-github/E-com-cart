const intialState = {
  products: [],
  productLoading: false,
  showProductModal: false,
  selectedProduct: {},
  toastMessage: '',
  toastDetails: {
    showToast: false,
    type: 'success',
    message: '',
  }
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
      const productData = [...state.products];
      productData.splice(0, 0, payload);
      // productData.unshift(payload);
      // const productData = [payload].concat(state.products);
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
      const { id } = payload;

      const proState = [...state.products];
      const findObject = proState.findIndex((item) => item.id === id)
      proState.splice(findObject, 1, payload)
      return {
        ...state,
        products: proState,
      }
    }
    case "TOAST_PRODUCT_MESSAGE": {
      return {
        ...state,
        toastDetails: payload
      }
    }
    default:
      return state;
  }
};

export default productReducer;
