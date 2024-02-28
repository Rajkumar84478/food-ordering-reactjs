// import React from 'react'
import logo from '/Users/rajkumar.chauhan/Vscode/Practice/practive/reactPractice/app/src/images/logo.png'

export default function Header() {
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
        </ul>

        </div>
        
    </div>
  )
}
