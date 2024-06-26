import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const loc = useLocation();
  useEffect(()=>{
    console.log(loc.pathname)
  },[loc]);
  const handleClick=()=>{
    document.getElementById('items').classList.toggle('active');
  }
  return (
    <div style={{boxShadow: "1px 1px 3px black", backgroundColor: "white", zIndex: "10"}} className="nav container-fluid d-flex justify-content-between align-items-center p-3 position-sticky top-0">
      <div style={{width: "22%", fontSize: "2.5rem", background: "linear-gradient(to top, #ff002d, yellow, blue)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" , zIndex:"100"}} className="logo">Ecart.</div>
      <div className="items">
        <ul style={{listStyleType: "none", marginTop: "16px"}} id='items' className='d-flex justify-content-between items'>
          <li><Link style={{textDecoration: "none", padding: "15px", fontSize: "1.2em"}} className={`text-${(loc.pathname === '/shopping-website/' || loc.pathname === '/shopping-website') ? "danger" : "black"}`} to="">Home</Link></li>
          <li><Link style={{textDecoration: "none", padding: "15px", fontSize: "1.2em"}} className={`text-${loc.pathname === '/shopping-website/about/' ? "danger" : "black"}`} to="about/">About</Link></li>
          <li><Link style={{textDecoration: "none", padding: "15px", fontSize: "1.2em"}} className={`text-${loc.pathname === '/shopping-website/categories/' ? "danger" : "black"}`} to="categories/">Categories</Link></li>
          <li><Link style={{textDecoration: "none", padding: "15px", fontSize: "1.2em"}} className={`text-${loc.pathname === '/shopping-website/contact/' ? "danger" : "black"}`} to="contact/">Contact Us</Link></li>
        </ul>
      </div>
      <div className="end d-flex justify-content-around align-items-center" style={{width: "32%"}}>
        <div className="search d-flex justify-content-around align-items-center p-2" style={{borderRadius: "20px", boxShadow: "1px 1px 3px black", width: "45%"}}>
          <p style={{display: "inline-block", margin: "2px"}}>Search for Products</p><i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <i style={{borderRadius: "50%", boxShadow: "1px 1px 3px black", padding: "10px", fontSize: "1.4em"}} className="fa-solid fa-heart"></i>
        <i style={{borderRadius: "50%", boxShadow: "1px 1px 3px black", padding: "10px", fontSize: "1.4em"}} className="fa-solid fa-bag-shopping"></i>
        <button style={{borderRadius: "30px"}} className='btn btn-primary p-3'>Sign In</button>
      </div>
      <div className="nav-toggle" onClick={handleClick} id='nav-toggle'><i className="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Navbar
