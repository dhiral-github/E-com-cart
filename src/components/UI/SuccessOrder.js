import React from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DismissibleToasts from './DismissibleToasts';
import './successOrder.css';
const SuccessOrder = () => {
  const { cartOrderSuccess, cartsItem, cartsDetail } = useSelector((state) => state.allproducts.carts);
  const { toastDetails } = useSelector((state) => state.allproducts);
  const { name, address, contactNumber, pinCode, CityDistrictTown, State, landmarkOptional, alternatePhone } = cartOrderSuccess;

  let totalQuantity = 0;
  cartsItem.forEach(item => {
    totalQuantity += item.quantity
  });

  return (
    <div className='col-md-12'>
      {
        toastDetails.showToast &&
        <DismissibleToasts />
      }
      <span className='mb-3'><h5>🙂 Your Order has been successfully placed. Your item will be delivered within 5 to 7 working days.</h5> </span>

      {
        cartsItem.map((item, index) => {
          const { title, image, price, quantity } = item;
          return (

            <div className='mb-3 my-3 col-md-8' key={index}>
              <div className='successOrder-contain'>
                <div className='order-body'>
                </div>
                <Image className='order-image' src={image} />
                <div className='order-card'>
                  <div >
                    <span className='order-listItem-font'>{title}</span>
                  </div>
                  <span className='order-listItem-font'> ${price}</span>
                  <div className='my-2'>Item: {quantity}</div>
                </div>
              </div>
            </div>
          )
        })
      }
      <div className='order-itemDetail'>
        <div className='order-priceDetail'>
          <div>
            <span className='success-boxTitle'>
              Price details
            </span>
            <div>
              <span>Total item: ({totalQuantity})</span>
            </div>
            <div>
              <span className='order-listItem-font'>Total amount: ({cartsDetail.totalPrice})
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