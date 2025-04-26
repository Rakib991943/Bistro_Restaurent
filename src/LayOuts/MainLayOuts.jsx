import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Share/Navbar/Navbar';
import Footer from '../Share/Footer/Footer';

const MainLayOuts = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

  return (
    <div>
      {
        noHeaderFooter || <Navbar></Navbar>
      }
      <div className='h-full'>
        <Outlet></Outlet>
      </div>
      {
        noHeaderFooter || <Footer></Footer>
      }
    </div>
  );
};

export default MainLayOuts;