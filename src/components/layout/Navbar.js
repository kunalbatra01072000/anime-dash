import React, { Fragment } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar bg-primary '>
        <img src={logo} alt='' className='img logo ' />
        <ul>
          <li>
            <Link to='/'>
              <i className='fas fa-home fa-lg'></i>
            </Link>
          </li>
          <li>
            <Link to='/search'>
              <i className='fas fa-search fa-lg'></i>
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
