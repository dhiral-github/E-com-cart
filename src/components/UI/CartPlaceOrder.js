import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { suucessOrderData } from '../../redux/actionCreators/productActions';
import './cartPlaceOrder.css'

const CartPlaceOrder = () => {
  const [cartOrder, setcartOrder] = useState({})
  const dispatch = useDispatch();
  let totalQuantity = 0;
  const { cartsItem, cartsDetail } = useSelector((state) => state.allproducts.carts);

  cartsItem.forEach(item => {
    totalQuantity += item.quantity
  });

  const handleChangeOrder = (e) => {
    setcartOrder({
      ...cartOrder,
      [e.target.name]: e.target.value
    })

  }
  const deliverProduct = (cartOrderDetail) => {
    dispatch(suucessOrderData({
      ...cartOrderDetail,
    }))
    setcartOrder({});
  }

  return (
    <div className='col-lg-8 cartPlace-container' >
      <div className="col-lg-6">
        <div className='delivery-add mt-2 mb-2'>Delivery Address</div>
        <Form style={{ border: '1px solid aliceblue' }}>
          <Form.Group className="mb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name='name' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" name='address' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Contact number</Form.Label>
            <Form.Control type="number" placeholder="Enter Number" name='contactNumber' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Pin code</Form.Label>
            <Form.Control type="number" placeholder="Enter Pin code number" name='pinCode' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>City/District/Town</Form.Label>
            <Form.Control type="text" placeholder="Enter City/District/Town" name='CityDistrictTown' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" name='State' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Landmark(Optional)</Form.Label>
            <Form.Control type="text" placeholder="Enter Landmark(Optional)" name='landmarkOptional' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Alternate Phone(Optional)</Form.Label>
            <Form.Control type="text" placeholder="Enter Alternate Phone(Optional)" name='alternatePhone' onChange={handleChangeOrder} />
          </Form.Group>

          <div style={{ display: 'flex' }}>
            <Link to={`/successOrder`}>
              <Button className='save-deliver-button' onClick={() => deliverProduct(cartOrder)}>SAVE AND DELIVER HERE</Button>
            </Link>

            <Button className='cart-cancel mx-3'>CANCEL</Button>
          </div>
        </Form>
      </div>
      <div className='box-detail'>
        <div className='box-shadow'>
          <div>
            <span className='price-detail'>Price details</span>
            <div>
              <span>Total item: ({totalQuantity})</span>
            </div>
            <div className='total-amount'>Total amount: ${cartsDetail.totalPrice}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CartPlaceOrder;