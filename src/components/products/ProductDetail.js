import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Card, IconButton, Link } from "@material-ui/core";
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { selectedproduct } from "../../redux/actionCreators/productActions";
import SpinnerLoading from "../UI/SpinnerLoading";

const ProductDetail = () => {

  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.allproducts.products);
  const { id, title, image, price, category, description } = product;
  console.log('product of useselector ===>>>', product);

  useEffect(() => {
    console.log('ts on did mount------', productId);
    dispatch(selectedproduct(productId));
  }, [])

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>
          <SpinnerLoading text='Loading products...' />
        </div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
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
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;