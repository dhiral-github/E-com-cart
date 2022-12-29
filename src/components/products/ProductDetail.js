import React, { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedproduct } from "../../redux/actionCreators/productActions";
import SpinnerLoading from "../UI/SpinnerLoading";

const ProductDetail = () => {

  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.allproducts.products);
  const {title, image, price, category, description } = product;

  useEffect(() => {
    dispatch(selectedproduct(productId));
  }, [productId,dispatch])

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>
          <SpinnerLoading text='Loading products...' />
        </div>
      ) : (
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

              <Button variant="success" className="mx-1" >Add to Cart</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;