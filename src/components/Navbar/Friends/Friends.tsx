import React from 'react';
// @ts-ignore
import styles from './Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friends = () => {
	return (
		<div className={styles.friends}>
			<h3>Friends</h3>
			<NavLink to={''}>
				<img src="https://p16.muscdn.com/img/musically-maliva-obj/1631900280864773~c5_720x720.jpeg" alt=""/>
			</NavLink>
			<NavLink to={''}>
				<img src="https://p16.muscdn.com/img/musically-maliva-obj/1631900280864773~c5_720x720.jpeg" alt=""/>
			</NavLink>
			<NavLink to={''}>
				<img src="https://p16.muscdn.com/img/musically-maliva-obj/1631900280864773~c5_720x720.jpeg" alt=""/>
			</NavLink>
		</div>
	)
}

export default Friends;