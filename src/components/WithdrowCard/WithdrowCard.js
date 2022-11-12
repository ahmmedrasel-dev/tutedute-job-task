import React from 'react';
import './withdrowCard.css'

const WithdrowCard = () => {
  return (
    <div className='withdrowCard mt-10'>
      <div className='flex justify-between'>
        <div>
          <p className='title'>Referral Earning</p>
          <h3 className='amount'>₹ 2,500</h3>
        </div>

        <div>
          <p className='title'>Total Referrals</p>
          <h3 className='amount'>7</h3>
        </div>

        <div>
          <p className='title'>Wallet Balance</p>
          <h3 className='amount'>₹ 500</h3>
        </div>
      </div>

      <button className='bg-tutePrimary m-auto px-4 py-2 text-white text-base font-medium	 rounded-full mt-8 block'>Withdraw Balance</button>
    </div>
  );
};

export default WithdrowCard;