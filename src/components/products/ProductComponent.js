import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showproductModal, deleteProduct, selectedProduct } from '../../redux/actionCreators/productActions';
import NoDataAvailable from "../UI/NoDataAvailable";
import SpinnerLoading from "../UI/SpinnerLoading";

const ProductComponent = () => {
  const dispatch = useDispatch();
  const { products, productLoading, searchText } = useSelector((state) => state.allproducts);
  // const [filterData, setFilterData] = useState(products);

  const handleEdit = (id) => {
    const selectedObj = products.find((prodObj) => (prodObj.id === id));
    dispatch(showproductModal(true))
    dispatch(selectedProduct(selectedObj))
  }
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }
  // useEffect(() => {
  //   if (searchText.length > 0) {
  //     // debugger
  //     setFilterData(filterdaty);
  //   } else {
  //     // debugger
  //     setFilterData(products);
  //   }
  // }, [searchText, products, filterData])

  return (
    <>
      {
        productLoading ?
          (
            <div>
              <SpinnerLoading text='Loading products...' />
            </div>
          ) :
          products?.filter(item => Math.trunc(item.price) === Number(searchText) ||
            item.title.toLowerCase().match(searchText.toLowerCase()) ||
            item.description.toLowerCase().match(searchText.toLowerCase()) ||
            item.id === Number(searchText) ||
            item.category.toLowerCase().match(searchText.toLowerCase()))?.map((product, index) => {
              const { id, title, image, price } = product;
              console.log("filterData  product==>>", product)
              return (
                <div className="col-md-3 mb-4" key={index}>
                  <div className="card h-100 text-center p-4" >
                    <img src={image} className="card-img-top" alt="" height='250px' />
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
    </>
  );
};

export default ProductComponent;
