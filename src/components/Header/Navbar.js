import React from 'react';
import { FaAngleDown, FaUserCircle } from 'react-icons/fa';
import logo from '../../image/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar container">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a className='text-tuteSecondary'>My Assignment</a></li>
            <li><a className='text-tuteSecondary'>Chat with Mentor</a></li>
            <li tabIndex={0}>
              <a className='text-tutePrimary'>
                <FaUserCircle />
                ProfileName
                <FaAngleDown />
              </a>
              <ul className="p-2 bg-base-100">
                <li><a >Profile</a></li>
                <li><a>Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;