import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showproductModal, deleteProduct, selectedProduct, setFilterProducts, categoryFilterProducts, setMinPrice, setMaxPrice, ratingStarProducts } from '../../redux/actionCreators/productActions';
import FilterProductsComponent from "../UI/FilterProductsComponent";
import NoDataAvailable from "../UI/NoDataAvailable";
import SpinnerLoading from "../UI/SpinnerLoading";

const ProductComponent = () => {
  const dispatch = useDispatch();
  const { products, productLoading, searchText } = useSelector((state) => state.allproducts);
  const { rangePrice, categoryFilter, ratingStar } = useSelector((state) => state.allproducts.filterData);
  const [filterProductData, setFilterData] = useState(products);
  console.log('filterData===>>>>', filterProductData);

  const handleEdit = (id) => {
    const selectedObj = products.find((prodObj) => (prodObj.id === id));
    dispatch(showproductModal(true))
    dispatch(selectedProduct(selectedObj))
  }
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }
  const handleCategory = (categoryName) => {
    dispatch(categoryFilterProducts(categoryName))
  }
  const handelRange = (e) => {
    dispatch(setFilterProducts(e.target.value))
  }
  const handleMinPrice = (e) => {
    dispatch(setMinPrice(e.target.value))
  }
  const handleMaxPrice = (e) => {
    dispatch(setMaxPrice(e.target.value))
  }
  const handleRatingStar = (e) => {
    if (e.target.checked) {
      dispatch(ratingStarProducts(e.target.value))
    }
  }

  const searchProducts = products.filter(item =>
    (Math.trunc(item.price) === Number(searchText) ||
      item.title.toLowerCase().match(searchText.toLowerCase()) ||
      item.description.toLowerCase().match(searchText.toLowerCase()) ||
      item.id === Number(searchText) ||
      item.category.toLowerCase().match(searchText.toLowerCase()))
    && (item.price >= rangePrice[0] && item.price <= rangePrice[1])
    && (categoryFilter ? item.category === categoryFilter : true)
    && (item.rating.rate >= ratingStar)
  )
  console.log('categoryFilter==>>>', searchProducts);

  useEffect(() => {
    setFilterData(searchProducts);
  }, [products, searchText, rangePrice, categoryFilter])

  return (
    <>
      <div className="asd mx-3" style={{ flex: '0 0 280px', flexFlow: 'row', maxWidth: '280px', padding: '0px 10px 0px 0px' }}>
        {
          <div>
            <FilterProductsComponent
              onChangeRange={handelRange}
              onhandleCheck={handleCategory}
              minChange={handleMinPrice}
              maxChange={handleMaxPrice}
              onRatingStar={handleRatingStar}
            />
          </div>
        }
      </div>
      <div className="abcd" style={{

        display: 'flex',
        flexWrap: 'wrap'
      }}>

        {
          productLoading ?
            (
              <div>
                <SpinnerLoading text='Loading products...' />
              </div>
            ) :

            filterProductData?.map((product, index) => {
              const { id, title, image, price } = product;
              return (
                <div className="col-md-3 mb-4" key={index}>
                  <div className="card h-100 text-center p-4" >
                    <img src={image} className="card-img-top" style={{ padding: '15px 39px 18px 53px' }} alt="" height='250px' />
                    <div className="card-body">
                      <h5 className="card-title mb-0">{title?.substring(0, 12)}...</h5>
                      <p className="card-text lead fw-bold">${price}</p>
                      <Link to={`/product/${id}`}>
                        <Button variant="outline-dark" >
                          Buy now
                        </Button>
                      </Link>
                      <Button variant="outline-dark" className="mx-1" onClick={() => handleEdit(id)} > Edit </Button>
                      <Button variant="outline-dark" className="mx-1" onClick={() => handleDelete(id)} > Delete </Button>
                    </div>
                  </div>
                </div>
              )
            })
        }
        {
          products.length === 0 && !productLoading && <NoDataAvailable text='Something went wrong...' />
        }
      </div>
    </>
  );
};

export default ProductComponent;
