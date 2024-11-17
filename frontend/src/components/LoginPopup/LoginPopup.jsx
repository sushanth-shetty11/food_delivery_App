import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({setLogin}) => {
    const[currState,setCurrState]=useState("Sign-up");
  return (
    <div className='login-popup'>
    <form className="login-popup-container">
      <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick ={()=>setLogin(false)} src={assets.cross_icon} alt="" />
      </div>
      <div className="login-popup-inputs">
        {currState==="Login"?<></>:  <input type='text' placeholder='Your Name' required/>}
      
        <input type='email' placeholder='Enter Your Email ' required/>
        <input type='password' placeholder='Enter Your Password' required/>
      </div>
      <button>{currState==="Sign-up"?"Create Account":"Login"}</button>
      <div className="login-popup-condition">
        <input type='checkbox' required></input>
        <p>By continuing i agree to The privacy policy have given </p>
      </div>
      {currState==="Login"
      ? <p>Create a New Account?<span onClick={ ()=>setCurrState("Sign-up")}>Click Here</span></p>:
      <p>Already Have An acoount ? <span onClick={()=>setCurrState("Login")}>Login Here</span></p> }
     
    
    </form>
    </div>
  )
}

export default LoginPopup
