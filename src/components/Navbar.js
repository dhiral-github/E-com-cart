import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ListItem from "./ListItem";

export default function Navbar(props) {
  let location = useLocation();

  useEffect(() => {
    return () => {
      console.log('location==>', location.pathname);
    };
  }, [location])

  const listItemArray = [
    {
      label: "Home",
      path: "/",
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
              />
            
            ))}
          </ul>
          <div>
            <div
              className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired
// }

// Navbar.defaultProps = {
//   title: 'set title here',
//   aboutText: 'About'
// };
