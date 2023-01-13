import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { suucessOrderData } from '../../redux/actionCreators/productActions';

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
    <div className='col-lg-12' >
      <div className="col-lg-6">
        <h4>Delivery Address</h4>
        <Form style={{ border: '1px solid aliceblue' }}>
          <Form.Group className="mb-4" controlId="formBasicTitle">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name='name' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicTitle">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" name='address' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicTitle">
            <Form.Label>Contact number</Form.Label>
            <Form.Control type="number" placeholder="Enter Number" name='contactNumber' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicTitle">
            <Form.Label>Pin code</Form.Label>
            <Form.Control type="number" placeholder="Enter Pin code number" name='pinCode' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicTitle">
            <Form.Label>City/District/Town</Form.Label>
            <Form.Control type="text" placeholder="Enter City/District/Town" name='CityDistrictTown' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicTitle">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" name='State' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicTitle">
            <Form.Label>Landmark(Optional)</Form.Label>
            <Form.Control type="text" placeholder="Enter Landmark(Optional)" name='landmarkOptional' onChange={handleChangeOrder} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicTitle">
            <Form.Label>Alternate Phone(Optional)</Form.Label>
            <Form.Control type="text" placeholder="Enter Alternate Phone(Optional)" name='alternatePhone' onChange={handleChangeOrder} />
          </Form.Group>

          <div style={{ display: 'flex' }}>
            <Link to={`/successOrder`}>
              <Button 
              style={{
                background: '#fb641b',
                boxShadow: '0 1px 2px 0 rgb(0 0 0 / 20%)',
                border: 'none',
                color: '#fff',
                padding: '6px',
              }} type="submit" onClick={() => deliverProduct(cartOrder)}>
                SAVE AND DELIVER HERE
              </Button>
            </Link>

            <Button style={{
              fontWeight: '500',
              color: '#2874f0',
              backgroundColor: 'transparent',
              border: 'none',
              marginLeft: '20px',
              paddingRight: 0,
            }}>CANCEL
            </Button>

          </div>
        </Form>
      </div>
      <div className='' 
      style={{
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

      </div>
    </div>
  );
}

export default CartPlaceOrder;