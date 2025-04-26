import React from 'react';

const MenuItem = ({ item }) => {
  const { price, name, recipe, image } = item;
  // console.log(item);
  return (
    <div className='flex space-x-5'>
      <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[100px] ' src={image} alt="" />
      <div className='text-left'>
        <p className='uppercase'>{name}-------</p>
        <h3>{recipe}</h3>
      </div>
      <p className='text-pink-400'>${price}</p>
    </div>
  );
};

export default MenuItem;