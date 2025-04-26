import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import BistroBoss from './Bistro-Boss/BistroBoss';
import PopularMenu from './PopularMenu/PopularMenu';
import ItemsCard from './ItemasCard/ItemsCard';
import Feature from './Feature/Feature';
import Testimonial from './Testimonials/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home </title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <ItemsCard></ItemsCard>
      <Feature></Feature>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;