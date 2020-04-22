import React from 'react'
import style from './Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={style.Navbar}>
      <ul>
         <li>
            <a href="#">Profile</a>
         </li>
         <li>
            <a href="#">Messages</a>
         </li>
         <li>
            <a href="#">News</a>
         </li>
         <li>
            <a href="#">Music</a>
         </li>
         <li>
            <a href="#">Setting</a>
         </li>
      </ul>
    </nav>
  )}

export default Navbar;