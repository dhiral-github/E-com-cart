import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCartItem } from '../../redux/actionCreators/productActions'
import DismissibleToasts from './DismissibleToasts';
const AddToCart = () => {
  const dispatch = useDispatch();
  let totalQuantity = 0;
  const deleteCartItem = (id) => {
    dispatch(removeCartItem(id))
  }

  const { toastDetails } = useSelector((state) => state.allproducts);
  const { cartsItem, cartsDetail } = useSelector((state) => state.allproducts.carts);
  console.log('getCart from add to cart==>>>', cartsItem);

  cartsItem.forEach(item => {
    totalQuantity += item.quantity
  });

  return (
    <div className='container'>
      {
        toastDetails.showToast &&
        <DismissibleToasts />
      }

      {
        cartsItem.map((item, index) => {
          const { id, title, image, price, category, quantity, totalPriceItem } = item;
          return (

            <div className='mb-3' key={index}>
              <div style={{ display: 'flex' }}>

                <Image style={{ width: '100px' }} src={image} />

                <div style={{ width: '54%', marginLeft: '5%', boxShadow: '0 1px 1px 0 rgb(0 0 0 / 20%)' }}>
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
                  <div className='my-2'>Item: {quantity}</div>
                </div>
              </div>
            </div>
          )
        })
      }
      <div style={{
        verticalalign: 'top',
        width: '20%',
        marginLeft: 'auto',
        position: 'absolute',
        left: '64%',
        top: '87px',
      }}>
        <div style={{ boxShadow: '0 1px 1px 0 rgb(0 0 0 / 20%)' }}>
          <div>
            <span style={{
              boxShadow: '0 1px 1px 0 rgb(0 0 0 / 20%)',
              display: 'block',
              textTransform: 'uppercase',
              padding: '13px 24px',
              color: '#878787',
              minHeight: '47px',
              borderRadius: ' 2px 2px 0 0',
              backgroundColor: '#f5f5f5',
              textAlign: 'center'
            }}>
              Price details
            </span>
            <div>
              <span>Total item: ({totalQuantity})</span>
            </div>
            <div>
              <span style={{
                fontWeight: '500',
                fontSize: '18px'
              }}
              >Total amount: ({cartsDetail.totalPrice})
              </span>
            </div>
          </div>
        </div>
        <Link to={`/cart/placeOrder`}>
          <Button className='my-2' style={{ backgroundColor: '#fb641b', border: 'none' }} >Place Order</Button>
        </Link>
      </div>
    </div>


  )
}

export default AddToCart;