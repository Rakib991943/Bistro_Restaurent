import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOuts from '../LayOuts/MainLayOuts';
import Home from '../Pages/Home/Home';
import OurMenu from '../Pages/OurMenu/OurMenu';
import Order from '../Pages/Order/Order/Order';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import DashBoard from '../DashBoad/DashBoard';
import Cart from '../DashBoad/Cart/Cart';
import AllUsers from '../DashBoad/AllUsers/AllUsers';
import AddItem from '../DashBoad/AddItem/AddItem';
import Payment from '../DashBoad/Payment/Payment';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOuts></MainLayOuts>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <OurMenu></OurMenu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      // Admin 
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addItems',
        element: <AddItem></AddItem>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      }
    ]
  }
])



