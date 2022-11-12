import React from 'react';

const SingleWork = ({ img, title, desc }) => {
  return (
    <div className='flex items-center'>
      <div className='bg-slate-100 p-6 rounded-full'>
        <img src={img} className="" alt="" />
      </div>
      <div className='pl-4'>
        <h3 className='font-medium text-base text-[#000]'>{title}</h3>
        <p className='text-[#4D4D4D] text-base font-normal'>{desc}</p>
      </div>
    </div>
  );
};

export default SingleWork;