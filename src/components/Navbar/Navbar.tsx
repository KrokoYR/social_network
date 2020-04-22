import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__wrapper}>
         <li>
            <NavLink className={styles.navbar__link} activeClassName={styles.active} to="/profile">Profile</NavLink>
         </li>
         <li>
            <NavLink className={styles.navbar__link} activeClassName={styles.active} to="/dialogs">Messages</NavLink>
         </li>
         <li>
            <NavLink className={styles.navbar__link} activeClassName={styles.active} to="/news">News</NavLink>
         </li>
         <li>
            <NavLink className={styles.navbar__link} activeClassName={styles.active} to="/music">Music</NavLink>
         </li>
         <li>
            <NavLink className={styles.navbar__link} activeClassName={styles.active} to="/settings">Setting</NavLink>
         </li>
      </ul>
    </nav>
  )}

export default Navbar;