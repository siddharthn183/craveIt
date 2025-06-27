import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis officiis quos nulla delectus officia ex, similique doloremque praesentium dolore fuga distinctio ullam voluptates eos voluptatibus, perferendis eveniet adipisci repellat facilis.</p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            
            <div className="footer-content-center">
                <h2>COmpany</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 1122334455</li>
                    <li>+91 9988776655</li>
                </ul>
            </div>
        </div>
        <hr />
    <p className='footer-copyright'>Copyright 2024 @ CraveIt.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer