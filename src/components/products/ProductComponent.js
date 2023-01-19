import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showproductModal, deleteProduct, selectedProduct, setFilterProducts, categoryFilterProducts, setMinPrice, setMaxPrice, ratingStarProducts, wishListPRoducts } from '../../redux/actionCreators/productActions';
import CardItemComponent from "../UI/CardItemComponent";
import FilterProductsComponent from "../UI/FilterProductsComponent";
import NoDataAvailable from "../UI/NoDataAvailable";
import SpinnerLoading from "../UI/SpinnerLoading";
import './productComponent.css'

const ProductComponent = () => {
  const dispatch = useDispatch();
  const { products, productLoading, searchText } = useSelector((state) => state.allproducts);
  const { rangePrice, categoryFilter, ratingStar } = useSelector((state) => state.allproducts.filterData);
  const { wishListItem } = useSelector((state) => state.allproducts.wishList);
  const [filterProductData, setFilterData] = useState(products);

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
      dispatch(ratingStarProducts(e.target.value));
    } else {
      dispatch(ratingStarProducts(""))
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
    && (ratingStar ? item.rating.rate >= ratingStar : true)
  )
  console.log('filterProducts==>>>', searchProducts);

  useEffect(() => {
    setFilterData(searchProducts);
  }, [products, searchText, rangePrice, categoryFilter, ratingStar])

  return (
    <>
      <div className="filterHome mx-3">
        {
          <div>
            <FilterProductsComponent
              onChangeRange={handelRange}
              onhandleCheck={handleCategory}
              minChange={handleMinPrice}
              maxChange={handleMaxPrice}
              onRatingStar={handleRatingStar}
              filterProductsLength={searchProducts.length}
            />
          </div>
        }
      </div>
      <div className="productHome">
        {
          productLoading ?
            (
              <div style={{ marginLeft: '660px' }}>
                <SpinnerLoading text='Loading products...' />
              </div>
            ) :

            filterProductData?.map((product, index) => {
              // const { id, title, image, price } = product;
              return (
                <div className="col-md-3 mb-4" key={index}>
                  {/* <div className="card h-100 text-center p-4" >
                    <img src={image} className="card-img-top cardImage" alt="" height='250px' />
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
                      <span>
                        <i style={{ color: 'red', fontSize: '28px', position: 'absolute' }} className={
                          wishListItem.find((i)=> i.id === id) ? 'bi bi-suit-heart-fill' : 'bi bi-suit-heart'
                        } onClick={() => changeColor(product)}></i>
                      </span>
                    </div>
                    </div> */}
                  <CardItemComponent product={product} handleEdit={handleEdit} handleDelete={handleDelete} />
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