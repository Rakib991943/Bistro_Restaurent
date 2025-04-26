import React, { useContext, useState } from 'react';
import './Register.css'
import loginimg from '../../assets/others/authentication1.png'
import { data, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../../Share/SocialLogin';
const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const url = form.url.value;
    const axiosPublic = useAxiosPublic();
    createUser(email, password)
      .then(res => {
        updateUserProfile(name, url)
          .then(() => {
            const userInfo = {
              name: name,
              email: email
            }
            // console.log("User Profile Update");
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {

                }
              })
          })
        Swal.fire({
          title: "User Create SuccessFull",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        navigate('/')
      })

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!regex.test(password)) {
      setError("Password must be exactly 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.");
    }
    else {
      setError("")
    }


  }

  return (

    <section>

      <Helmet>
        <title>
          Bistro || login
        </title>
      </Helmet>

      <div className="hero bg-base-200 min-h-screen login register  ">

        <div className="hero-content md:flex flex-row-reverse ">
          <div className="text-center  lg:text-left flex-1">
            <img className='w-full ' src={loginimg} alt="" />
          </div>


          <div className="card bg-base-100  flex-1 h-[600px]  shadow-2xl">
            <h2 className='text-3xl font-bold text-center'>Register Now!</h2>
            <form onSubmit={handlesubmit} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input type="name" name='name' className="input" placeholder="Name" />

                <label className="fieldset-label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="fieldset-label">URL</label>
                <input type="text" name='url' className="input" placeholder="Photo Url" />

                <label className="fieldset-label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                {error && <p className='text-red-500 text-center mb-4 mt-3'>{error}</p>}
                <input className='btn btn-primary mt-3' type="submit" value='Register' />
              </fieldset>
              <p>If you have an Acount ? <Link className='text-blue-500' to='/login'>Login</Link></p>
              <SocialLogin></SocialLogin>
            </form>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Register;