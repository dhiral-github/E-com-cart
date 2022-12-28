import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AddProductModal from "./AddProductModal";
import ListItem from "./ListItem";
import { useDispatch } from 'react-redux';
import { showproductModal } from '../redux/actionCreators/productActions';
export default function Navbar(props) {
  const dispatch = useDispatch();
  let location = useLocation();
  
  useEffect(() => {
    return () => {
      console.log('location==>', location.pathname);
    };
  }, [location])

  const handleClick = () => {
    console.log('console handleClick==>>');
    dispatch(showproductModal(true),
    )
  }
 
  const listItemArray = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Add product",
      onClick: handleClick
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
                linkStyle={{ backgroundColor: '#F0FFF0' }}
                className="nav-link"
                handleClick={lItem.onClick}
              />

            ))}

            <AddProductModal />
            {/* <AddProductModal isShow={modalUse} onClose={onClose}/> */}

          </ul>
        </div>
      </div>
    </nav>
  );
}