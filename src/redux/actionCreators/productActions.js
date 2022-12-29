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
    console.log('catch setproducts Action======>>>>>>');
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
    if (newsSource) {
      dispatch({
        type: "SELECTED_PRODUCTS",
        payload: newsSource.data,
      });
    }
  } catch (err) {
    // dispatch({
    //   type: NEWS_SOURCE_ERROR,
    // }); 
    console.log("err", err);
  }
};

export const showproductModal = (openModal) => (dispatch) => {
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

          dispatch(toastProduct({
            showToast: true,
            type: 'success',
            message: 'Product added successfully',
          }))
        }
      })
      .catch((err) => {
        dispatch(toastProduct({
          showToast: true,
          type: 'danger',
          message: 'Unable to add product',
        }))
      })
  } catch (err) {
    console.log('err==>', err)
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
  
  const { id } = product
  try {
    await axios.put(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {

      if (response.status === 200) {
        dispatch({
          type: "UPDATE_PRODUCT",
          payload: product
        });
        dispatch(toastProduct({
          showToast: true,
          type: 'success',
          message: 'Product updated successfully',
        }))
      }
    })
    .catch((err) => {
      dispatch(toastProduct({
        showToast: true,
        type: 'danger',
        message: 'Unable to update product',
      }))
    })
  } catch (err) {
    // dispatch({
    //   type: NEWS_SOURCE_ERROR,
    // }); 
    console.log("err", err);
  }
}
export const toastProduct = (toastProDetail) => (dispatch) => {
  dispatch({
    type: "TOAST_PRODUCT_MESSAGE",
    payload: toastProDetail
  })
} 
export const deleteProduct = (productId) => async(dispatch) => {

  console.log("deleteProduct id ==>>>>>>>>>..........", productId);
  try {
    await axios.delete(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {

      if (response.status === 200) {
        dispatch({
          type: "DELETE_PRODUCT",
          payload: productId
        });
        dispatch(toastProduct({
          showToast: true,
          type: 'success',
          message: 'Product deleted successfully',
        }))
      }
    })
    .catch((err) => {
      dispatch(toastProduct({
        showToast: true,
        type: 'danger',
        message: 'Unable to delete product',
      }))
    })
  } catch (err) {
    // dispatch({
    //   type: NEWS_SOURCE_ERROR,
    // }); 
    console.log("err", err);
  }
}