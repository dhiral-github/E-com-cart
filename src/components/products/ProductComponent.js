import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showproductModal, selectedProduct } from '../../redux/actionCreators/productActions';

const ProductComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allproducts.products);
  console.log('ProductComponent useSelector==>>>>', products)

  const handleClick = (id) => {
    const selectedObj = products.find((prodObj) => (prodObj.id === id));
    console.log('products===>>>>>', selectedObj);
    dispatch(showproductModal(true))
    dispatch(selectedProduct(selectedObj))
  }
  const renderList = products.map((product, index) => {
    const { id, title, image, price } = product;

    return (
      <>
        <div className="col-md-3 mb-4" key={index}>
          <div className="card h-100 text-center p-4" >
            <img src={image} className="card-img-top" alt="" height='250px' />
            <div className="card-body">
              <h5 className="card-title mb-0">{title?.substring(0, 12)}...</h5>
              <p className="card-text lead fw-bold">${price}</p>
              <Button variant="outline-dark" href={`/product/${id}`}> Buy now</Button>
              <Button variant="outline-dark" className="mx-1" onClick={() => handleClick(id)} > Edit
              </Button>
            </div>
          </div>
        </div>
      </>
    )
  });
  return (
    <>
      {renderList}
    </>
  );
};

export default ProductComponent;
