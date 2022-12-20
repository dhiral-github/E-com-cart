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