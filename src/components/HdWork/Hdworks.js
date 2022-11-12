import React from 'react';
import SingleWork from './SingleWork';
import friends from '../../image/friends.png'
import tag from '../../image/tag.png'
import money from '../../image/money.png'
import percent from '../../image/percent.png'
import wallet from '../../image/wallet.png'

const Hdworks = () => {
  return (
    <div className='col-span-4'>
      <h2 className='font-semibold text-2xl	text-tutePrimary'>How does it work ?</h2>

      <div className='grid grid-cols-2 gap-8 mt-6'>
        <SingleWork img={friends} title={'Invite your Friends'} desc={'Share the link tutedude.com with your friends'}></SingleWork>
        <SingleWork img={tag} title={'Friend purchases any course'} desc={'Using your REFERRAL CODE in the payments page'}></SingleWork>

        <SingleWork img={money} title={'Friend purchases any course'} desc={'Using your REFERRAL CODE in the payments page'}></SingleWork>

        <SingleWork img={percent} title={'Friend purchases any course'} desc={'Using your REFERRAL CODE in the payments page'}></SingleWork>

        <SingleWork img={wallet} title={'Friend purchases any course'} desc={'Using your REFERRAL CODE in the payments page'}></SingleWork>

      </div>


    </div>
  );
};

export default Hdworks;