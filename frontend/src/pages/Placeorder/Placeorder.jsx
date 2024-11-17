import React, { useContext } from 'react'
import "./Placorder.css"
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {
 const{getTotalCartamount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='FirstName' />
          <input type="text" placeholder='LastName' />
        </div>
        <input type="email"  placeholder='email'/>
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='ZipCode' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
        </div> 
        <div className="place-order-right">
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
          <button >PROCEED TO PAYMENT</button>
        </div>

        </div>

    </form>
  )
}

export default Placeorder
