import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { wishListPRoducts } from "../../redux/actionCreators/productActions";

const CardItemComponent = (props) => {
  const dispatch = useDispatch();
  const { wishListItem } = useSelector((state) => state.allproducts.wishList);
  const { product, handleEdit, handleDelete } = props;
  const { id, title, image, price } = product;

  const changeColor = (wishList) => {
    dispatch(wishListPRoducts(wishList))
  }
  return (
    <div className="card h-100 text-center p-4" >
      <img src={image} className={`card-img-top ${window.location.pathname === '/wishList' ? '' : 'cardImage'}`} alt="" height='250px' />
      <div className="card-body">
        <h5 className="card-title mb-0">{title?.substring(0, 12)}...</h5>
        <p className="card-text lead fw-bold">${price}</p>
        <Link to={`/product/${id}`}>
          <Button variant="outline-dark" >
            Buy now
          </Button>
        </Link>

        {
          window.location.pathname === '/wishList' ?
            <Button variant="outline-dark" className="mx-1" onClick={() => changeColor(product)} > Remove wish list </Button>
            :
            <>
              <Button variant="outline-dark" className="mx-1" onClick={() => handleEdit(id)} > Edit </Button>
              <Button variant="outline-dark" className="mx-1" onClick={() => handleDelete(id)} > Delete </Button>
              <span>
                <i
                  style={{
                    color: 'red',
                    fontSize: '28px',
                    position: 'absolute'
                  }}
                  className={
                    wishListItem.find((i) => i.id === id) ?
                      'bi bi-suit-heart-fill' :
                      'bi bi-suit-heart'
                  }
                  onClick={
                    () => changeColor(product)}>
                </i>
              </span>
            </>
        }
      </div>
    </div>
  )
}
export default CardItemComponent