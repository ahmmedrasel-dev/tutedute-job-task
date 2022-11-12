import React from 'react';
import Breadcum from '../Breadcum/Breadcum';
import Hdworks from '../HdWork/Hdworks';
import ReferralCode from '../Referral/ReferralCode';
import WithdrowCard from '../WithdrowCard/WithdrowCard';

const Home = () => {
  return (
    <div className='mx-52'>
      <Breadcum></Breadcum>
      <div className='grid grid-cols-2 gap-4'>
        <WithdrowCard></WithdrowCard>
        <ReferralCode></ReferralCode>
      </div>
      <div className='grid grid-cols-5 gap-4 my-10'>
        <Hdworks></Hdworks>
      </div>

      <div className='my-10'>
        <h3 className='font-semibold text-tutePrimary mb-5'>Friends Who Enrolled</h3>
        <h3 className='font-semibold text-tutePrimary'>Terms & Conditions</h3>
      </div>
    </div>
  );
};

export default Home;