import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  const { className, style, linkStyle, children, label, path, location } = props
  console.log('className==>>', linkStyle);
  return (
    <li className={`${className}`} style={style}>
      {children ?
        children
        :
        <Link className={`${className} ${location === path ? 'active' : ''}`} style={linkStyle} aria-current="page" to={path} > {label} </Link>
      }
    </li>
  )
}

export default ListItem;
