import React, { useContext, useEffect, useRef, useState } from 'react';
import './Login.css'
import loginimg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, Navigate, replace, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { section } from 'motion/react-client';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../Share/SocialLogin';
const Login = () => {
  const navigate = useNavigate();
  const [disabled, setDisable] = useState(true);
  const capchaRef = useRef();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, [])
  const { signInUser } = useContext(AuthContext);

  const handlesubmit = (e) => {

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then(res => {

        navigate(from, { replace: true })
      })
  }
  const handleValidateCaptcha = (e) => {
    const value = capchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisable(false)
    }
    else {
      setDisable(true)
    }
  }
  return (
    <section>
      <Helmet>
        <title>
          Bistro || login
        </title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen login ">

        <div className="hero-content md:flex ">
          <div className="text-center lg:text-left flex-1">
            <img src={loginimg} alt="" />
          </div>


          <div className="card bg-base-100  flex-1  shadow-2xl">
            <h2 className='text-3xl font-bold text-center'>Login Now !</h2>
            <form onSubmit={handlesubmit} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <div className='text-left'><a className="link link-hover">Forgot password?</a></div>
                {/* Captcha  */}
                <label className="fieldset-label">

                  <LoadCanvasTemplate />
                </label>
                <input type="text" name='capcha' ref={capchaRef} className="input" placeholder="Type the Capcha text above " />
                <button className='btn btn-outline btn-xs mt-4' onClick={handleValidateCaptcha}>Validate</button>

                <input className='btn btn-primary' disabled={disabled} type="submit" value='login' />
              </fieldset>
            </form>
            <p>If you have no Acount ? <Link className='text-blue-500' to='/register'>Register</Link></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;