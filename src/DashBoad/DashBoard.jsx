import React from 'react';
import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { FaHelmetUn, FaShop } from 'react-icons/fa6';
import { LuMenu } from 'react-icons/lu';
import { MdContactMail } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
  const isAdmin = false;
  return (
    <div className='flex'>
      <div className="div-w-64 min-h-screen bg-orange-400">
        <ul className="menu p-5 ">
          {
            isAdmin ? <>
              <li><NavLink to='/'><FaHome className='text-2xl'></FaHome> My Home</NavLink></li>
              <li><NavLink to='/dashboard/addItems'><FaUtensils className='text-2xl'></FaUtensils> Add Items </NavLink></li>
              <li><NavLink to='/dashboard/manageItems'><FaList className='text-2xl'></FaList> Manage Items</NavLink></li>
              <li><NavLink to='/dashboard/bookings'><FaBook className='text-2xl'></FaBook>Manage Bookings</NavLink></li>
              <li><NavLink to='/dashboard/users'><FaUsers className='text-2xl'></FaUsers> All Users </NavLink></li>
            </> :


              <>
                <li><NavLink to='/dashboard/userHome'><FaHome className='text-2xl'></FaHome> My Home</NavLink></li>
                <li><NavLink to='/dashboard/reservation'><FaCalendar className='text-2xl'></FaCalendar> Reservation </NavLink></li>
                <li><NavLink to='/dashboard/cart'><FaShoppingCart className='text-2xl'></FaShoppingCart> My Cart</NavLink></li>
                <li><NavLink to='/dashboard/review'><FaAd className='text-2xl'></FaAd> Review</NavLink></li>
                <li><NavLink to='/dashboard/bookings'><FaList className='text-2xl'></FaList> My Bookings </NavLink></li>
              </>
          }

          {/* Shere nav Links */}
          <div className="divider">OR</div>

          <li><NavLink to='/'><FaHome className='text-2xl'></FaHome> My Home</NavLink></li>
          <li><NavLink to='/menu'><LuMenu className='text-2xl'></LuMenu> Menu</NavLink></li>
          <li><NavLink to='/order/:category'><FaShop className='text-2xl'></FaShop> Shop</NavLink></li>
          <li><NavLink to='/order'><MdContactMail className='text-2xl'></MdContactMail> Shop</NavLink></li>

        </ul>


      </div>
      <div className='flex-1 p-8'>
        <Outlet>

        </Outlet>
      </div>
    </div >
  );
};

export default DashBoard;