import React from 'react';
import Breadcum from '../Breadcum/Breadcum';
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

    </div>
  );
};

export default Home;