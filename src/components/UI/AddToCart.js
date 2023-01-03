import { padding } from '@mui/system';
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

  const { toastDetails } = useSelector((state) => state.allproducts);
  const {  cartsItem ,cartsDetail} = useSelector((state) => state.allproducts.carts);
  console.log('getCart from add to cart==>>>', cartsItem);

  return (
    <div className='container'>
      {
        toastDetails.showToast &&
        <DismissibleToasts />
      }
      
        {
          cartsItem.map((item, index) => {
            const { id, title, image, price, category, quantity } = item;
            return (

              <div style={{ display: 'flex' }} key={index}>
                <div>
                  <Image style={{ width: '100px' }} src={image} />
                  <div className='my-2'>Qty: {quantity}</div>
                </div>
                <div style={{ width: '55%', marginLeft: '5%' }}>
                  <div >
                    <span >
                      {title}
                    </span>
                  </div>
                  <div>
                    ${price}
                  </div>
                  <div>
                    <span>
                      {category}
                    </span>
                  </div>
                  <div>
                    <Link style={{ textDecoration: 'none', color: 'rgb(199 38 38' }} onClick={() => deleteCartItem(id)} >REMOVE</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
        <div style={{
          // position: 'relative',
          // display: 'inline-block',
          verticalalign: 'top',
          width: '25%'
        }}>
          <div style={{ boxShadow: '0 1px 1px 0 rgb(0 0 0 / 20%)' }}>
            <div>
              <span style={{ boxShadow: '0 1px 1px 0 rgb(0 0 0 / 20%)',display:'block',textTransform:'uppercase', padding:'13px 24px',color:'#878787',minHeight: '47px',    borderRadius:' 2px 2px 0 0' }}>
                Price details
              </span>
              <div>
                <div>Total amount: ({cartsDetail.totalPrice})</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    

  )
}

export default AddToCart;