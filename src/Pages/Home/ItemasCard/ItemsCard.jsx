import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../../Share/MenuItem/MenuItem';
import AddCard from '../AddCard/AddCard';

const ItemsCard = () => {
  const [menu, setMenu] = useState([]); // ✅ Initialize with an empty array
  // console.log(menu);

  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItems = data.slice(0, 20);

        setMenu(popularItems);
      })
      .catch(error => console.error("Error fetching menu:", error)); // ✅ Handle errors
  }, []);
  return (
    <div>
      <div className='bg-black py-14 text-white  '>
        <h1 className='text-2xl'>Call US</h1>
        <p className='text-2xl'>01824883928</p>
      </div>
      <SectionTitle
        subHeading="Should Try"
        heading="Cheef Recommends"
      >

      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-6">
        {menu.map(item =>
          <AddCard key={item._id} item={item} />
        )}
      </div>
    </div>
  );
};

export default ItemsCard;