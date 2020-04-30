import React from 'react';
import styles from './ProfileLink.module.css'
import {NavLink} from "react-router-dom";


const ProfileLink = () => {
	return (
		<div className={styles.link}>
			<div className={styles.profile__link}>
				<NavLink activeClassName={styles.active} to="/profile">
					<div><img className={styles.profile__avatar} src="https://i.kym-cdn.com/entries/icons/facebook/000/019/237/5366p_0c_2b.jpg"/></div>
					<div className={styles.profile__name}>Lopson Balzhinimaev</div>
					<div><span className={styles.profile__city}>Saint-Petersburg, Russia</span></div>
				</NavLink>
			</div>
			
			<ul className={styles.profile__navbar}>
				<li>
					<NavLink className={styles.profile__navbar__link} to={''}>
						<div>634</div>
						<div className={styles.profile__navbar__span}>Friends</div>
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.profile__navbar__link} to={''}>
						<div>25</div>
						<div className={styles.profile__navbar__span}>Posts</div>
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.profile__navbar__link} to={''}>
						<div>12</div>
						<div className={styles.profile__navbar__span}>Groups</div>
					</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default ProfileLink;
