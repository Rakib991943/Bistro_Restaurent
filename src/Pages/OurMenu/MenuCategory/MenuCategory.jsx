import React from 'react';
import MenuItem from '../../../Share/MenuItem/MenuItem';
import Cover from '../../../Share/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, Coverimg }) => {
  return (
    <div className='pt-8'>
      {title && <Cover title={title} img={Coverimg}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6 mt-16 ">
        {items.map(item =>
          <MenuItem key={item._id} item={item} />
        )}
      </div>

      <Link to={`/order/${title}`}>
        <button className='btn btn-outline mt-5 border-0 border-b-4 block text-left'>Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;