import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{ background: 'tomato' }}>Home</NavLink></li>  {/* Use NavLink to replace a tag, so it won't reload after clicking. */}
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

// NavLink attribute : activeClassName="activedNow"

export default Header;