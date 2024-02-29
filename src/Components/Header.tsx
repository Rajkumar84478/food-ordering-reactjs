// import React from 'react'
import { useState } from 'react';
import logo from '/Users/rajkumar.chauhan/Vscode/Practice/practive/reactPractice/app/src/images/logo.png'

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
          <li>Home</li>
          <li>About Us</li>
          <li>Constact Us</li>
          <li>Cart</li>
          <button onClick={()=>{
            setBtnName(btnName==='Login'?'Logout':'Login');
          }} className='login'>{btnName}</button>
        </ul>

        </div>
        
    </div>
  )
}
