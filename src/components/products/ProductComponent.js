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
  // <Grid container spacing={4} py={3}>
  //     {items?.map((item) => (
  //       <Grid item xs={12} sm={6} lg={3} key={item.id}>
  //         <Item {...item} />
  //       </Grid>
  //     ))}
  //   </Grid>
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    console.log('console of ProductComponent==>>>');
    // return (
    //   <Grid
    //     container
    //     spacing={4}
    //     py={3}
    //     key={product.id}
    //     style={{ display: "flex" }}
    //   >
    //     <Card className="animate__animated animate__fadeIn" raised>
    //       <CardActionArea>
    //         <Link href={`/product/${id}`}>
    //           <CardMedia
    //             component="img"
    //             height="260"
    //             image={image}
    //             alt={id}
    //           // onClick={handleNavigation}
    //           />
    //           <CardContent>
    //             <Typography variant="body2" color="text.secondary" noWrap>
    //               {title}
    //             </Typography>
    //           </CardContent>
    //         </Link>
    //       </CardActionArea>
    //       <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
    //         <Button
    //           size="small"
    //           color="error"
    //         //  onClick={handleNavigation}
    //         >
    //           {/* <Link href={`/product/${id}`}> */}
    //           View more
    //           {/* </Link> */}
    //         </Button>
    //         <Typography
    //           variant="subtitle2"
    //           color="text.secondary"
    //           align="right"
    //         >
    //           {`$${price}`}
    //         </Typography>
    //       </CardActions>
    //     </Card>
    //   </Grid>
    // );
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
