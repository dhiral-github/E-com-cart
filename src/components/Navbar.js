import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AddProductModal from "./AddProductModal";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, showproductModal } from '../redux/actionCreators/productActions';
import AddToCart from "./UI/AddToCart";

export default function Navbar(props) {
  const dispatch = useDispatch();
  let location = useLocation();

  const cartNumer = useSelector((state) => state.allproducts.numberCart)
  console.log('handleCartss==>>>', cartNumer);
  useEffect(() => {
    return () => {
    };
  }, [location])

  const handleClick = () => {
    dispatch(showproductModal(true),
    )
  }
  const handleCarts = () => {

    console.log('handleCarts==>>>');
    // dispatch(addToCart())

  }

  const listItemArray = [
    {
      label: "Home",
      path: "/",
      className: "nav-link"
    },
    {
      label: "Add product",
      onClick: handleClick,
      className: "nav-link"
    },
    {
      label: `Cart (${cartNumer})`,
      onClick: handleCarts,
      path: 'carts',
      className: "nav-link"
    },

  ];
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {listItemArray.map((lItem) => (
              <ListItem
                key={`${lItem.label}-list-item`}
                label={lItem.label}
                path={lItem.path}
                location={location.pathname}
                linkStyle={{ backgroundColor: 'white' }}
                className={lItem.className}
                handleClick={lItem.onClick}
                style={lItem.style}
              />

            ))}
            <AddProductModal />

          </ul>
        </div>
      </div>
    </nav>
  );
}