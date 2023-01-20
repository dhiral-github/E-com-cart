import React from "react"
import { useSelector } from "react-redux"
import CardItemComponent from "./CardItemComponent";
import './wishlistItem.css';
const WishListItem = () => {

  const { wishListItem } = useSelector((state) => state.allproducts.wishList);
  return (
    <div className="container wish-flex wish-list-container">
      {
        wishListItem.length === 0 ?
          (
            <div className='wishListItem-empty'>Wish list is empty</div>
          )
          :
          wishListItem.map((product, index) => {
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