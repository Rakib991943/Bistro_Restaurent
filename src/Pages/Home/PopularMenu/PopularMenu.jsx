import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../../Share/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]); // ✅ Initialize with an empty array
  // console.log(menu);
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');

  return (
    <section>
      <SectionTitle subHeading=" Popular Items" heading="From Our Menu" />


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-6">
        {popular.map(item =>
          <MenuItem key={item._id} item={item} />
        )}
      </div>
      <button className='block mx-auto btn  text-xl mb-5 btn-warning'>View All Menu </button>
    </section>
  );
};

export default PopularMenu;
