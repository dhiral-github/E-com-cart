import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setproducts } from "../../redux/actionCreators/productActions";
import SpinnerLoading from "../UI/SpinnerLoading";

const ProductListing = () => {
  const { products } = useSelector((state) => state.allproducts);
  console.log("products useSelector==>>", products);
  const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  //   dispatch(setproducts(response.data));
  // };
  useEffect(() => {
    dispatch(setproducts());
    // return () => {
    //   // fetchProducts();
    // };
  }, [dispatch]);
  console.log("productssssssss==>>", products);
  return (
    <>
      {
      // Object.keys(products)?.length === 0 ? (
      //   <div>
      //     <SpinnerLoading text='Loading products...' />
      //   </div>
      // ) : (
        <ProductComponent />
      // )
      }
    </>
  )
};

export default ProductListing;
