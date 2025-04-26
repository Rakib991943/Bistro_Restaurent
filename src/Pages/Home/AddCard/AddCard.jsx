import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

import useCart from '../../../Hooks/useCart';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AddCard = ({ item }) => {
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const { price, name, recipe, image, _id } = item;
  const { user } = useAuth();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          // console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} is added !`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        })
    } else {
      Swal.fire({
        title: "You Are not Logged In?",
        text: "Please Login add to the Cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }
  }
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl text-left">{name}</h2>
        <p className='text-left '>{recipe}</p>
        <p className='text-pink-400 text-left text-2xl'>Price : ${price}</p>
        <div className="rating mt-4 mb-4">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" aria-label="1 star" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" aria-label="2 star" defaultChecked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" aria-label="4 star" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" aria-label="5 star" />
        </div>
        <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn btn-warning  text-xl  block mr-40 mt-3 mb-3 ">Add Card</button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;