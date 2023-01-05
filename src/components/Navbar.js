import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AddProductModal from "./AddProductModal";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from 'react-redux';
import { showproductModal } from '../redux/actionCreators/productActions';

export default function Navbar(props) {
  const dispatch = useDispatch();
  let location = useLocation();

  const { totalCartItem } = useSelector((state) => state.allproducts.carts.cartsDetail)

  useEffect(() => {
    return () => {
    };
  }, [location])

  const handleClick = () => {
    dispatch(showproductModal(true),
    )
  }
  const handleCarts = () => {
  }

  const listItemArray = [
    {
      label: "Home",
      path: "home",
      className: "nav-link",
      // onClick: handleCarts,
    },
    {
      label: "Add product",
      onClick: handleClick,
      className: "nav-link"
    },
    {
      label: `Cart (${totalCartItem})`,
      // onClick: handleCarts,
      path: 'carts',
      className: "nav-link"
    },

  ];
  return (
    <nav
      className={`navbar navbar-expand-lg navbar  bg-light`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          {props.title}
        </Link>

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
                handleClick={lItem?.onClick}
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