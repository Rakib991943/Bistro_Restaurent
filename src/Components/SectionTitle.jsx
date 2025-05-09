import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className='md:w-4/12 mx-auto  text-center mt-8 mb-8'>
      <p className='text-yellow-500 my-3'>---{subHeading}---</p>
      <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>
    </div>
  );
};

export default SectionTitle;