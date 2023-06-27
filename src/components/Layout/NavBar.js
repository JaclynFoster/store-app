import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import logo from '../../images/logo.png'

const NavBar = () => {

  return (
    <div className="nav-container">
      <img src={logo} className="logo" alt="Website Logo" />
      <nav className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link " to="/animals">
          Animals
        </Link>
        <Link className="link " to="/contact">
          Contact
        </Link>
      </nav>
      <nav className="cart-nav">
        <Link className="link login " to="/login">
          <UserOutlined className="icon" />Login
        </Link>
      
        <Link className="link cart-link " to="/cart">
      
          Cart <ShoppingCartOutlined className="icon" />
        </Link>
      
        <span className="number bump">5</span>
      </nav>
    </div>
  )
}

export default NavBar

