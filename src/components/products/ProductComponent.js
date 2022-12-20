import { Avatar, Card, IconButton, Link } from "@material-ui/core";
import {
  Button,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  Typography,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useSelector } from "react-redux";
import { ExpandMore } from "@material-ui/icons";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  console.log('ProductComponent useSelector==>>>>', products)
  
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <>
        <div className="col-md-3 mb-4">
          <div className="card h-100 text-center p-4" >
            <img src={image} className="card-img-top" alt="" height='250px' />
            <div className="card-body">
              <h5 className="card-title mb-0">{title.substring(0,12)}...</h5>
              <p className="card-text lead fw-bold">${price}</p>
              {/* <a href={`/product/${id}`} className="btn btn-outline-dark"> Buy now</a> */}
              <a href={`/product/${id}`} className="btn btn-outline-dark"> Buy now</a>
              
            </div>
          </div>
        </div>
      </>
    )
  });
  return <> {renderList}</>;
};

export default ProductComponent;
