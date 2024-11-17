import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Placeorder from './pages/Placeorder/Placeorder';
import Home from './pages/Home/Home';
import Cart from'./pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
const App = () => {
  const[showLogin,setLogin]=useState(false)
  
  return (
    <>
    {showLogin?<LoginPopup setLogin={setLogin} ></LoginPopup>:<></>}
     <div className='app'>
      <Navbar setLogin={setLogin}/>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>} />
      </Routes>
      <Footer/>
    </div> </>
   
  );
}

export default App;

