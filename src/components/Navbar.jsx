import React, { useState } from 'react'
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState("Home")

  return (
    <nav className="navbar">
      <img src='/images/img-logo.png' className="logo" />
      <ul className="navbar-menu">
      <li>
          <NavLink to="/home" activeClassName="active-link" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link" className="nav-link">
            About
          </NavLink>
        </li>
          <li>
            <NavLink to="/travel" activeClassName="active-link" className="nav-link">
            Paket Travel
            </NavLink>
          </li>
          <li>
            <NavLink to="/article" activeClassName="active-link" className="nav-link">
            Artikel
            </NavLink>
          </li>
        </ul>

      <div className="navbar-right">
            <h2>Hi, Nicho</h2>
            <div className="navbar-profile-icon"></div>
        </div>
  </nav>
  )
}

export default Navbar
