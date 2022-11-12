import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import './braeadcum.css'

const Breadcum = () => {
  return (
    <div>
      <ul className='flex lg:items-center items-center'>
        <li>UI/UX</li>
        <FaAngleRight />
        <li>Refer & Earn</li>
      </ul>
    </div>
  );
};

export default Breadcum;