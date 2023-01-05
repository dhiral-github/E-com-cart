import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedproduct, addToCart } from "../../redux/actionCreators/productActions";
import DismissibleToasts from "../UI/DismissibleToasts";
import NoDataAvailable from "../UI/NoDataAvailable";
import SpinnerLoading from "../UI/SpinnerLoading";

const ProductDetail = () => {

  const dispatch = useDispatch();
  const { productId } = useParams();
  const { selectedBuyNowProduct, productLoading, toastDetails } = useSelector((state) => state.allproducts);
  const { title, image, price, category, description } = selectedBuyNowProduct;

  const addToCartItem = (products) => {
    dispatch(addToCart(products))
  }

  useEffect(() => {
    dispatch(selectedproduct(productId));
  }, [dispatch, productId])

  return (
    <div className="ui grid container">
      {
        toastDetails.showToast &&
        <DismissibleToasts />
      }
      {
        productLoading ? (
          <div>
            <SpinnerLoading text='Loading products...' />
          </div>
        ) : (

          Object.keys(selectedBuyNowProduct).length === 0 && !productLoading ?
            <NoDataAvailable text='Something went wrong...' /> :
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Image className="ui fluid image" style={{ width: '260px' }} src={image} />
              </div>
              <div style={{ width: '65%' }}>
                <h1>{title}</h1>
                <h2>
                  <href className="ui teal tag label">${price}</href>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <Button variant="success" onClick={() => addToCartItem(selectedBuyNowProduct)} >Add to Cart</Button>
                </div>
              </div>
            </div>
        )
      }

    </div>
  );
};

export default ProductDetail;