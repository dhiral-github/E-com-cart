import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  const { style, linkStyle, label, path, location, handleClick } = props

  return (
    <li className='nav-link' style={style}>
      {
        <Link
          className={
            `nav-link ${location === path ? 'active' : ''}`
          }
          style={linkStyle}
          aria-current="page"
          to={path}
          onClick={handleClick} > {label}
        </Link>
      }
    </li>
  )
}

export default ListItem;
