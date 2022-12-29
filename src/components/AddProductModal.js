import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { showproductModal, addnewProduct, selectedProduct, updateProduct } from '../redux/actionCreators/productActions';
import { useDispatch } from 'react-redux';

const AddProductModal = () => {
  const [formData, setformData] = useState({
  });
  const [toast, setToast] = useState(true);
  const dispatch = useDispatch();
  const showProductModal = useSelector((state) => state.allproducts.showProductModal);
  const product = useSelector((state) => state.allproducts.selectedProduct);

  const handleClose = () => {
    dispatch(showproductModal(false))
    dispatch(selectedProduct({}))
  }

  const handleChange = (e) => {
    // debugger
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
  };

   const handleSave = (productUpdate) => {
    if (Object.keys(product).length > 0) {
   
      dispatch(updateProduct(productUpdate));
      handleClose();
      setToast(!toast)
    } else {
      dispatch(addnewProduct({
        id: new Date().getTime().toString(),
        ...productUpdate,
      }));
      setformData({});
      handleClose();
      dispatch(selectedProduct({}));
      setToast(!toast)
    }
  }
  useEffect(() => {
    if (product) {
      setformData(product);
    }
  }, [product])

  const pageTitle = product.id ? 'Edit Product ' : 'Add Product';
  const buttonTitle = product.id ? 'Update' : 'Submit';
  return (
    <>
      <Modal
        show={showProductModal}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pageTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" name='title' value={formData.title} onChange={handleChange} />

            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicTitle">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter Category" name='category' value={formData.category} onChange={handleChange} />

            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicTitle">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Description" name='descrption' value={formData.description} onChange={handleChange} />

            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicTitle">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter Price" name='price' value={formData.price} onChange={handleChange} />

            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(formData)}>
            {buttonTitle}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProductModal;