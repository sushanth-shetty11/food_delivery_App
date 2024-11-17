import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
             <img src={assets.logo}></img>
             {/* <p>Footer displaying the context of the above React components</p> */}
             <div className="footer-social-icons">
                <img src={assets.facebook_icon}></img>
                <img src={assets.twitter_icon}></img>
                <img src={assets.linkedin_icon}></img>
             </div>
            </div>
            <div className="footer-content-center">
              <h2>Company </h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
                 <h2>Get In Touch</h2>
                 <ul>
                    <li>9380457627</li>
                    <li>Delivoofficial@gmail.com</li>
                 </ul>
            </div>
        </div>
      <hr></hr>
      <p className="footer-copyright">
        Copyright @2024
      </p>
    </div>
  )
}   

export default Footer
