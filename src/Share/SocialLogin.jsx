import React from 'react';
import useAuth from '../Hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleLogin()
      .then(res => {
        const userInfo = {
          name: res.user?.email,
          email: res.user?.name,
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            navigate('/')
          })
      })
  }
  return (
    <div>
      <div className="divider">OR</div>
      <button onClick={handleGoogle} className="btn">
        < FcGoogle className='text-2xl' />
        Sign In With Google
      </button>
    </div>
  );
};

export default SocialLogin;