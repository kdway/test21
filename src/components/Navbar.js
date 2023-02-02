import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
   
    <nav>
    <div class="nav-wrapper bg-info">
      <a href="/" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/Blogs">Blogs</a></li>
       
      </ul>
    </div>
  </nav>
  )
}

export default Navbar