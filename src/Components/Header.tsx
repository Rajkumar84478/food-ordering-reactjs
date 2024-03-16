
import { useState } from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
export default function Header() {
  
  const [btnName,setBtnName]=useState("Login");

  return (
    <div className='header'>
        <div className="logo-container">
            <img src={logo}
              className='logo'
              alt="logo"
            />
        </div>
        <div className="nav-items">
        <ul>
          <li> <Link to="/" > Home</Link> </li>
          <li><Link to='/about'>About Us</Link></li>
          <li> <Link to='/contact'> Contact Us</Link></li>
          <li>Cart</li>
          <button onClick={()=>{
            setBtnName(btnName==='Login'?'Logout':'Login');
          }} className='login'>{btnName}</button>
        </ul>

        </div>
        
    </div>
  )
}
