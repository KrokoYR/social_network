import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from "./Friends/Friends";
import ProfileLink from "./ProfileLink/ProfileLink";


const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ProfileLink></ProfileLink>
			<ul className={styles.navbar__wrapper}>
				<li>
					<NavLink className={styles.navbar__link} activeClassName={styles.active} to="/news">
						<span className={'fa fa-newspaper-o'}/>News
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.navbar__link} activeClassName={styles.active} to="/dialogs">
						<span className={'fa fa-comments'}/>Messenger
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.navbar__link} activeClassName={styles.active} to="/music">
						<span className={'fa fa-music'}/>Music
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.navbar__link} activeClassName={styles.active} to="/settings">
						<span className={'fa fa-video-camera'}/>Setting
					</NavLink>
				</li>
			</ul>
			
		</nav>
	)
}

export default Navbar;