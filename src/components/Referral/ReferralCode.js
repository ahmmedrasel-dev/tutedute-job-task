import React from 'react';
import './referral.css'
const ReferralCode = () => {
  return (
    <div className='m-8'>
      <h3 className='font-semibold	text-2xl text-tutePrimary'>Your Referral Code </h3>
      <div className='rounded bg-gradient-to-r mt-[20px] p-[2px] from-[#800080] to-[#FF864C]'>
        <div className='bg-white rounded p-[15px]'>
          <p className='font-medium text-xl text-tutePrimary tracking-code text-center'>EDCH54</p>
        </div>
      </div>
    </div>
  );
};

export default ReferralCode;