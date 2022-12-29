import React, { useEffect } from 'react';
import { Col, Row, Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toastProduct } from "../../redux/actionCreators/productActions"
const DismissibleToasts = () => {
  const dispatch = useDispatch();

  const showToastMessage = useSelector((state) => state.allproducts.toastDetails);

  useEffect(() => {
    if (showToastMessage.showToast) {
      setTimeout(() => {
        dispatch(toastProduct({
          showToast: false,
          type: '',
          message: '',
        }))
      }, 3000);
    }
  }, [dispatch, showToastMessage])
  return (
    <Row
      style={{ position: 'fixed', right: 0, top: '90px', zIndex: 999, color: 'white' }}
    >
      <Col >
        <Toast show={showToastMessage.showToast} bg={showToastMessage.type}>

          <Toast.Body>{showToastMessage.message}</Toast.Body>
        </Toast>
      </Col>

    </Row>
  );
}

export default DismissibleToasts;