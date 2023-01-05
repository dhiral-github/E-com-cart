import React from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const SuccessOrder = () => {
  const { cartOrderSuccess, cartsItem, cartsDetail } = useSelector((state) => state.allproducts.carts);
  const { name, address, contactNumber, pinCode, CityDistrictTown, State, landmarkOptional, alternatePhone } = cartOrderSuccess;
  console.log('getCart from add to cart==>>>', cartsItem);

  let totalQuantity = 0;
  cartsItem.forEach(item => {
    totalQuantity += item.quantity
  });

  return (
    <div className='col-md-12'>
      <span className='mb-3'><h5>🙂 Your Order has been successfully placed. Your item will be delivered within 5 to 7 working days.</h5> </span>

      {
        cartsItem.map((item, index) => {
          const { id, title, image, price, category, quantity, totalPriceItem } = item;
          return (

            <div className='mb-3 my-3 col-md-8' key={index}>
              <div style={{ display: 'flex' }}>

                <Image style={{ width: '100px' }} src={image} />

                <div style={{
                  width: '54%',
                  marginLeft: '5%',
                  boxShadow: '0 1px 1px 0 rgb(0 0 0 / 20%)'
                }}>
                  <div >
                    <span><h5>{title}</h5></span>
                  </div>
                  <div><h5> ${price}</h5>
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
        left: '66%',
        top: '113px',
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
      </div>
      <div style={{ width: '53%' }}>
        <h5>➡️ Your products will delivered on the address mentioned below.</h5>
        <hr />
        <div>
          <ul>
            <li><h6>Name: {name} </h6></li>
            <li><h6>Address: {address} </h6></li>
            <li><h6>Contact Number: {contactNumber} </h6></li>
            <li><h6>PinCode: {pinCode} </h6></li>
            <li><h6>City: {CityDistrictTown} </h6></li>
            <li><h6>State: {State} </h6></li>
            <li><h6>Landmark: {landmarkOptional} </h6></li>
            <li><h6>Alternative Phone: {alternatePhone} </h6></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default SuccessOrder;