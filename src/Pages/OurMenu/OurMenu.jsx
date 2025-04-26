import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Share/Cover/Cover';
import menu1 from '../../assets/menu/banner3.jpg'
import dessert1 from '../../assets/menu/dessert-bg.jpeg'
import salad1 from '../../assets/menu/salad-bg.jpg'
import pizz1 from '../../assets/menu/pizza-bg.jpg'
import soup1 from '../../assets/menu/soup-bg.jpg'

import PopularMenu from '../Home/PopularMenu/PopularMenu';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const OurMenu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        img={menu1} title="OUR MENU "
      >

      </Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Todays OFFER"
      >

      </SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert}
        title="dessert"
        Coverimg={dessert1}
      ></MenuCategory>
      <MenuCategory items={pizza}
        title="pizza"
        Coverimg={pizz1}
      ></MenuCategory>
      <MenuCategory items={salad}
        title="salad"
        Coverimg={salad1}
      ></MenuCategory>
      <MenuCategory items={soup}
        title="soup"
        Coverimg={soup1}
      ></MenuCategory>

    </div>
  );
};

export default OurMenu;