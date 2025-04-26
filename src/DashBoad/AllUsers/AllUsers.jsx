import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useSwiper } from 'swiper/react';
import { FaRegTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../Hooks/useCart';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;

    }

  })
  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Admin Now `,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  const handleDeleteUser = (id) => {
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

        axiosSecure.delete(`/users/${id}`)
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
    <>

      <div className='flex justify-evenly '>
        <h1 className='text-2xl'>All Users </h1>
        <h2 className='text-2xl'>Total Users: {users.length} </h2>
      </div>


      <div className="overflow-x-auto">
        <table className="table mt-12">
          {/* head */}
          <thead>
            <tr>
              <th className='text-2xl font-bold'></th>
              <th className='text-2xl font-bold'>Name</th>
              <th className='text-2xl font-bold'>Job</th>
              <th className='text-2xl font-bold'>Role</th>
              <th className='text-2xl font-bold'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, idx) => <tr key={user._id}>
                <th className='text-xl'>{idx + 1}</th>
                <td className='text-xl'>{user.name}</td>
                <td className='text-xl'>{user.email}</td>
                <td>
                  {user.role == 'admin' ? <p className='text-2xl'>Admin</p> : <button
                    onClick={() => handleMakeAdmin(user)}
                    className='text-xl'><FaUser className='text-2xl'></FaUser></button>}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                  ><FaRegTrashAlt className='text-3xl ml-10 text-red-600' /></button>
                </td>
              </tr>)
            }


          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;