const intialState = {
  products: [],
  productLoading: false,
  showProductModal: false,
  selectedProduct: {},
  selectedBuyNowProduct: {},
  toastMessage: '',
  toastDetails: {
    showToast: false,
    type: 'success',
    message: '',
  },
  carts: {
    cartsItem: [],
    cartsDetail: {
      totalPrice: 0,
      totalCartItem: 0
    },
  },

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
        // products: [],
        productLoading: false,
      };
    }
    case "SELECTED_PRODUCTS": {
      return {
        ...state,
        selectedBuyNowProduct: payload,
        // products: {},
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
      console.log('[...state.products]====>>>', productData);
      return {
        ...state,
        products: productData,

      }
    }
    case "SELECTED_PRODUCT": {
      return {
        ...state,
        selectedProduct: payload,
        productLoading: false,
      }
    }

    case "ADD_TO_CART": {
      const { cartsItem } = state.carts;
      const isItemExist = cartsItem.find((i) => i.id === payload.id);
      // let cartTotalPrice = 0;
      if (!isItemExist) {
        cartsItem.push(payload);
      }
      cartsItem.forEach((i) => {
        if (!i['quantity']) {
          i["quantity"] = 1;
        } else {
          if (i.id === payload.id) {
            i.quantity += 1;
          }
        }
        // cartTotalPrice += i.price * i.quantity;
      });
      const cartTotalPrice = cartsItem.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      return {
        ...state,
        carts: {
          cartsItem: cartsItem,
          cartsDetail: {
            totalPrice: Number(cartTotalPrice),
            totalCartItem: cartsItem.length,
          },
        },
      }
    }

    case "DELETE_TO_CART": {
      const proState = [...state.carts.cartsItem];
      const remainProducts = proState.filter((item) => item.id !== payload)
      const remainTotalPrice = remainProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

      return {
        ...state,
        carts: {
          ...state.carts,
          cartsItem: remainProducts,
          cartsDetail: {
            ...state.carts.cartsDetail,
            totalPrice: Number(remainTotalPrice),
          }
        }
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
    case "DELETE_PRODUCT": {

      const proState = [...state.products];

      const deleteId = proState.filter((item) => item.id !== payload)
      return {
        ...state,
        products: deleteId
      }
    }

    default:
      return state;
  }
};

export default productReducer;
