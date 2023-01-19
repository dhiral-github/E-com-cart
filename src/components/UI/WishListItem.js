import React from "react"
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux"
import CardItemComponent from "./CardItemComponent";
// import './wishlistItem.css';
const WishListItem = () => {

  const { wishListItem } = useSelector((state) => state.allproducts.wishList);
  return (
    <div className="container" style={{ display: 'flex', flexFlow: 'wrap' }}>
      {
        wishListItem.map((product, index) => {
          // const { title, image, price, category, quantity } = i;
          return (
            <div className="col-md-3 mb-4" key={index}>
              <CardItemComponent product={product} />
            </div>
          )
        })
      }
    </div>
  )
}

export default WishListItem