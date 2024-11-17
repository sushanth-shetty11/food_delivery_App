import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, addTocart, removeFromCart, getTotalCartamount} = useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr></hr>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className=" cross">x</p>
                </div>
                <hr></hr>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details"></div>
            <p>subtotal</p>
            <p>${getTotalCartamount()}</p>
            <hr></hr>
            <div className="cart-total-details"></div>
            <p>Delivery Fees</p>
            <p>${getTotalCartamount()===0?0:2}</p>
            <hr></hr>
            <div className="cart-total-details"></div>
            <b>total</b>
            <br></br>
            <b>${getTotalCartamount()===0?0:getTotalCartamount()+2}</b>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECK OUT</button>
        </div>
          <div className="cart-promocode">
            <p>Enter the Promo code "if Available"</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="PromoCode"></input>
              <button>Submit</button>
            </div>
            </div>           
      </div>
    </div>
  );
};

export default Cart;
