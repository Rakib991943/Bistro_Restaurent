import React, { useContext } from 'react';
import { Link, NavLink, redirect } from 'react-router-dom';
import { motion } from "motion/react"
import { AuthContext } from '../../Providers/AuthProviders';

import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';
const Navbar = () => {
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User is LogoUt");
      })
  }
  const links = <>
    <li className='text-2xl font-bold'><NavLink>Home</NavLink></li>

    <li className='text-2xl font-bold'><NavLink to='/menu'>Our Menu </NavLink></li>
    <li className='text-2xl font-bold'><NavLink to='/order/salad'>Order Food  </NavLink></li>
    <li className='text-2xl font-bold'><NavLink to='/contact'>Contact  </NavLink></li>
    <li className='text-2xl font-bold'><NavLink to='/dashBoard/cart'> DashBoard </NavLink></li>
    <li className='text-2xl font-bold'>
      <Link to='/dashboard/cart'><button className="btn">
        <FaShoppingCart className='mr-1'></FaShoppingCart>
        <div className="badge badge-sm badge-secondary">{cart.length}</div>
      </button></Link>
    </li>
  </>
  return (
    <section>

      <div className="navbar fixed z-10 max-w-[1217px] bg-gray-300 text-white top-0 opacity-0.3  mx-auto bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className='flex flex-col'>
            <motion.a
              animate={{ x: 30, color: ["#ff0000", "#00ff00", "#0000ff"] }}
              transition={{ duration: 3, repeat: Infinity, }}
              className="btn btn-ghost text-3xl font-bold">Bistro Boss</motion.a>
            <motion.h2
              animate={{ x: -30, color: ["#0000ff", "#00ff00", "#ff0000",] }}
              transition={{ duration: 3, repeat: Infinity, }}
              className='text-3xl font-bold'>Restaurent</motion.h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
              {/* <p className='text-xl'>{user?.displayName}</p> */}
              <button onClick={handleSignOut} className="text-2xl  font-bold btn btn-outline text-pink-600 " >Signout</button>
            </> :

              <>
                <Link className="text-2xl font-bold btn btn-outline text-pink-600 " to='/login'>Login</Link>
              </>
          }
        </div>
      </div>
    </section>
  );
};

export default Navbar;