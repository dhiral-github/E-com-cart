import React from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCartItem } from '../../redux/actionCreators/productActions'
import DismissibleToasts from './DismissibleToasts';
const AddToCart = () => {
  const dispatch = useDispatch();

  const deleteCartItem = (id) => {
    console.log('Remove item from add to cart==>>>', id);
    dispatch(removeCartItem(id))
  }

  const { carts, toastDetails } = useSelector((state) => state.allproducts);
  console.log('getCart from add to cart==>>>', carts);

  return (
    <div className='container'>
      {
        toastDetails.showToast &&
        <DismissibleToasts />
      }
      <table className='table'>
        <tbody>
          {
            carts.map((item, index) => {
              const { id, title, image, price, category, quantity } = item;
              return (
                <div style={{ display: 'flex' }} key={index}>
                  <div>
                    <Image style={{ width: '100px' }} src={image} />
                    <h3>{quantity}</h3>
                  </div>
                  <div style={{ width: '55%' }}>
                    <h4>
                      {title}
                    </h4>
                    <h4>
                      ${price}
                    </h4>
                    <h4>
                      {category}
                    </h4>
                    <div>
                      <Link style={{ textDecoration: 'none', color: 'rgb(199 38 38' }} onClick={() => deleteCartItem(id)} >REMOVE</Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </tbody>
      </table>
    </div>

  )
}

export default AddToCart;