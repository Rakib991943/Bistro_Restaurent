import React from 'react';
import AddCard from '../Pages/Home/AddCard/AddCard';

const OrderTabs = ({ items }) => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {
          items.map(item => <AddCard key={item._id} item={item}></AddCard>)
        }
      </div>
    </div>
  );
};

export default OrderTabs;