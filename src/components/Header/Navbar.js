import React from 'react';
import { FaAngleDown, FaUserCircle } from 'react-icons/fa';
import logo from '../../image/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar lg:container lg:mx-auto">
        <img src={logo} alt="" />
        <div className="navbar-end">

        </div>

        <div className="navbar-end mt-5 hidden lg:block lg:mt-0">
          <div className="navbar-center lg:flex">
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

        <div className="navbar-end lg:hidden mt-5 lg:mt-0">
          <div className="navbar-center lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li tabIndex={0}>
                <a className='text-tutePrimary'>
                  <FaUserCircle />
                  ProfileName
                  <FaAngleDown />
                </a>
                <ul className="p-2 bg-base-100">
                  <li><a >Profile</a></li>
                  <li><a className='text-tuteSecondary'>My Assignment</a></li>
                  <li><a className='text-tuteSecondary'>Chat with Mentor</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;