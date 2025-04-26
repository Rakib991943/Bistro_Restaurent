import React from 'react';
import useCart from '../../Hooks/useCart';
import SectionTitle from '../../Components/SectionTitle';
import { CiTrash } from 'react-icons/ci';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, refetch] = useCart();
  const axisSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axisSecure.delete(`/carts/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }
  return (
    <div>
      <SectionTitle
        subHeading="My Cart"
        heading="Wanna Add More "
      ></SectionTitle>
      <div className='flex justify-between mt-16'>
        <h2 className='text-4xl'>Total Order : {cart.length}</h2>
        <h2 className='text-4xl'>Total Price : $<span className='text-pink-400'>{totalPrice}</span></h2>
        {
          cart.length ? <Link to='/dashboard/payment'  > <button className='btn btn-warning'>Pay</button> </Link>
            :
            <Link   > <button disabled className='btn btn-warning'>Pay</button> </Link>

        }
      </div>

      <div className="overflow-x-auto">
        <table className="table mt-6">
          {/* head */}
          <thead>
            <tr>
              <th className='text-3xl font-bold'>
                No :
              </th>
              <th className='text-3xl font-bold'>Item Image</th>
              <th className='text-3xl font-bold'>Item Name </th>
              <th className='text-3xl font-bold'>Price</th>
              <th className='text-3xl font-bold'>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              cart.map((item, idx) => <tr className='mb-5' key={item._id}>

                <th className='text-2xl'>
                  {idx + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>

                  </div>
                </td>
                <td>

                  <span className="badge badge-ghost badge-sm text-2xl">{item.name}</span>
                </td>
                <td className='text-pink-400 text-xl'>${item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item._id)} className=" "><CiTrash className='text-2xl text-red-600'></CiTrash></button>
                </th>
              </tr>
              )
            }




          </tbody>


        </table>
      </div>

    </div>
  );
};

export default Cart;