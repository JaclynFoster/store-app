import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { FaUserEdit } from 'react-icons/fa'
import newLogo from '../../images/newLogo.png'
import CartBadge from './CartBadge'
import './NavBar.css'
import AuthContext from '../../context/userContext'

const NavBar = () => {
  const props = useContext(AuthContext)
  console.log('Nav Bar Props:', props)
  const navigate = useNavigate()
  const logout = () => {
    navigate('/', {replace: true})
    props.setUserObject({})
    alert("You are now logged out.")

  }
  const showProfile = () => {
    if (props.userObject.id) {
      return (
        <Link className="link" to="/profile">
          <FaUserEdit className="edit-icon" />Edit Profile
        </Link>
      )
    }
  }
  const hideLogin = () => {
    console.log('userObject:', props.userObject)
    if (!props.userObject.id) {
      return (
        <Link className="link login " to="/login">
          <UserOutlined className="icon" />Login
        </Link>
      )
    } else {
      return (
        <button
        className="logout-link"
          onClick={() => logout()}
        >
          Logout
        </button>
      )
    }
  }
  // const { pathname } = useLocation()
  // console.log(pathname)
  // useEffect(
  //   () => {
  //     if (!props.userObject.id && pathname === '/cart') {
  //       alert("Please Login to Continue")
  //       navigate('/', { replace: true })
  //     }
  //   },
  //   [props.userObject.id]
  // )

  return (
    <div className="nav-container">
      <img src={newLogo} className="logo" alt="Website Logo" />
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
      <nav className="cart-nav-container">
        <div className="cart-nav">
          {hideLogin()}
          <Link className="link cart-link " to="/cart">
            Cart <ShoppingCartOutlined className="icon" />
          </Link>
          <CartBadge />
        </div>

        <div className="profile-link">{showProfile()}</div>
      </nav>
    </div>
  )
}

export default NavBar



