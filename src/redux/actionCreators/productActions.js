import axios from "axios";
export const setproductLoading = () => {
  return {
    type: "SET_PRODUCT_LOADING",
  };
};

export const setproducts = () => async (dispatch) => {
  dispatch(setproductLoading());
  try {
    const newsSource = await axios.get(`https://fakestoreapi.com/products`);
    if (newsSource) {
      dispatch({
        type: "SET_PRODUCTS",
        payload: newsSource.data,
      });
      console.log('setproducts Action======>>>>>>', newsSource.data);
    }
  } catch (err) {
    // dispatch({
    //   type: NEWS_SOURCE_ERROR,
    // });
    console.log("err", err);
  }
};

export const selectedproduct = (id) => async (dispatch) => {
  dispatch(setproductLoading());
  try {
    const newsSource = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log('new source record:--------', newsSource)
    if (newsSource) {
      dispatch({
        type: "SELECTED_PRODUCTS",
        payload: newsSource.data,
      });
      console.log('selectedproduct Action======>>>>>>', newsSource.data);
    }
  } catch (err) {
    // dispatch({
    //   type: NEWS_SOURCE_ERROR,
    // }); 
    console.log("err", err);
  }
};

export const showproductModal = (openModal) => (dispatch) => {
  console.log('console showproductModal Action======>>>>>>', openModal);
  dispatch({
    type: "SHOW_PRODUCT_MODAL",
    payload: openModal,
  })
};

export const addnewProduct = (pData) => (dispatch) => {
  try {
    axios.post('https://fakestoreapi.com/products', pData)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: "ADD_NEW_PRODUCT",
            payload: { ...response.data, ...pData },
          });
          console.log('success ADD_NEW_PRODUCT action');

        }
      })
    console.log('console addnewProduct Action======>>>>>>');
  } catch (err) {
    console.error(err)
  }
};

export const selectedProduct = (selectedproduct) => (dispatch) => {
  console.log('console selectedProduct Action======>>>>>>', selectedproduct);
  dispatch({
    type: "SELECTED_PRODUCT",
    payload: selectedproduct,
  })
};

export const updateProduct = (product) => async (dispatch) => {
  console.log('updateproduct===>> Action====>>>>', product.id);
  const { id } = product
  try {
    const updateProductDetail = await axios.put(`https://fakestoreapi.com/products/${id}`);
    console.log('new source record:--------', updateProductDetail.data)

    if (updateProductDetail) {
      dispatch({
        type: "UPDATE_PRODUCT",
        payload: product
      });
      console.log('UPDATE_PRODUCT Action======>>>>>>', updateProductDetail);
    }
  } catch (err) {
    // dispatch({
    //   type: NEWS_SOURCE_ERROR,
    // }); 
    console.log("err", err);
  }
}
