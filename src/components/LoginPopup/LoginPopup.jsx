import React, {useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets';
const LoginPopup = ({setsoLogin}) => {
    const [currentState, setCurrentState] = useState("login");
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={() =>setsoLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState === "login" ? <></> : <input type="text" placeholder='Your Name' required />}
                
                <input type="email" placeholder='Your EmailID' required />
                <input type="password" placeholder='Enter Password' required />
            </div>
            <button>{currentState === "signup" ? "Create Account" : "LogIn to Account"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing I Agree all the terms and condition</p>
            </div>
            {currentState === "login" ? <p>Create a New Account? <span onClick={() => setCurrentState("signup")}>Click Here</span></p> : <p>Already have an account? <span onClick={() => setCurrentState("login")}>Login Here</span></p>}
            
            
        </form>
    </div>
  )
}

export default LoginPopup