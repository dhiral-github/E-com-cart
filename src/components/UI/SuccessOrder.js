import React from 'react';
import { useSelector } from 'react-redux';

const SuccessOrder = () => {
  const { cartOrderSuccess, cartsItem, cartsDetail } = useSelector((state) => state.allproducts.carts);
  const { name, address, contactNumber, pinCode, CityDistrictTown, State, landmarkOptional, alternatePhone } = cartOrderSuccess;

  let totalQuantity = 0;
  cartsItem.forEach(item => {
    totalQuantity += item.quantity
  });

  return (
    <div className='col-md-12'>
      <div style={{ width: '53%' }}>
        <h5>Your products will delivered on the address mentioned below.</h5>
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
        <hr />
        <span>Your Order has been successfully placed.Your item will be delivered within 5 to 7 working days. </span>
      </div>

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
              >Total amount: ({cartsDetail.totalCartItem})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessOrder;