import React from 'react';
import {NavLink, Router} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
        <div class="nav-wrapper">
          <a href="#" className="brand-logo center">Logo</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="SignIn">SignIn</a></li>
          <li><a href="/Signup">Signup</a></li>
          <li><a href="/About">About</a></li>
          </ul>
        </div>
      </nav>
      
    )
}

export default Navbar