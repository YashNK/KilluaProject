import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className='container-div'>
        {/* <img src={login} className='background-wallpaper' alt='Background' /> */}
        <div className='login-left'>
          <div>
          <h1 className='left-head'>Welcome</h1>
          <p className='left-para'></p>
          </div>
          <div>
            <button className='l-contact'>Contact Us</button>
            <button className='l-about'>About Us</button>
          </div>
        </div>
        <div className="in">
          <div className='form'>
            <h1 className='login-header'>LOGIN</h1>
            <form className='form1'>
              <label className='lablecss'>Email:</label>
              <input className='inputcss'/>
              <label className='lablecss'>Password:</label>
              <input className='inputcss' type='password' />
              <button type='submit' onClick={()=>navigate('/live')} className='loginbtn'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
