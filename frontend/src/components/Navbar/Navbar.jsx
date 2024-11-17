import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from "../../assets/assets";
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setLogin}) => {
    const[menu,setMenu]=useState("menu");
    let ChangeSet=(event)=>{
       console.log(event.target.value);
    }
    const{ getTotalCartamount}=useContext(StoreContext)
  return (
    <div className='navbar'>
   <Link  to='/'> <img src={assets.logo} alt='' className='logo'></img></Link> 
     <ul className='navbar-menu'>
     <Link to='/' onClick={() => { setMenu("home"); console.log("Menu state:", menu); }} className={menu === "home" ? "active" : ""}>Home</Link>

        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#appdownload' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""} >mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact-us</a>
     </ul>
     <div className="navbar-right">
     <img src={assets.search_icon}></img>
     <div className="navbar-search-icon">
      <Link to='/cart'><img src={assets.basket_icon}></img></Link>
    
     <div className={getTotalCartamount===0?"":"dot"}>
        
     </div>
    
     
     </div>
     <button onClick={()=>setLogin(true)}>Signup</button>
     </div>
    </div>
  )
}

export default Navbar
