import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
const FoodItem = ({id,name,price,description,image}) => {

  const{cartItems, addTocart, removeFromCart}=useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={image}></img>
            {
              !cartItems[id]
              ? <img className='add' onClick={()=>addTocart(id)} src={assets.add_icon_white}></img>:
              <div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}></img>
                <p>{cartItems[id]}</p>
                <img   onClick={()=>addTocart(id)} src={assets.add_icon_green}></img>
              </div>
            }
        </div>
      <div className="food-item-info">
        <div className='food-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts}></img>
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>

      </div>
    </div>
  )
}

export default FoodItem
