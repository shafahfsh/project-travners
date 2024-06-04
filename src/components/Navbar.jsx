import React, { useState } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState("Home")

  return (
    <div className='navbar'>
        <img src='/images/img-logo.png' className="logo" />
        <ul className="navbar-menu">
            <Link onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#' onClick={()=>setMenu("About")} className={menu==="About"?"active":""}>About Us</a>
            <a href='#' onClick={()=>setMenu("paket-travel")} className={menu==="paket-travel"?"active":""}>Paket Travel</a>
            <a href='#' onClick={()=>setMenu("artikel")} className={menu==="artikel"?"active":""}>Artikel</a>
        </ul>
        <div className="navbar-right">
            <h2>Hi, Nicho</h2>
            <div className="navbar-profile-icon"></div>
        </div>
      
    </div>
  )
}

export default Navbar
