import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setproducts } from "../../redux/actionCreators/productActions";
import DismissibleToasts from "../UI/DismissibleToasts";

const ProductListing = () => {
  const showToastMessage = useSelector((state) => state.allproducts.toastDetails);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setproducts());
  }, [dispatch]);
  
  return (
    <>      
        {
          showToastMessage.showToast &&
          <DismissibleToasts  />
        }     
        <ProductComponent />
    </>
  )
};

export default ProductListing;
