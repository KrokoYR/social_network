import React from 'react'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={`${styles.header__player} ${styles.player}`}>
				<button>
					<span className={'fa fa-step-backward'}/>
				</button>
				<button>
					<span className={'fa fa-play'}/>
				</button>
				<button>
					<span className={'fa fa-step-forward'}/>
				</button>
				<div className={styles.player__info}>
					<p className={styles.player__song_name}>Selena Gomez - Boyfriend</p>
					<span className={styles.player__timer}>0:21</span>
					<progress className={styles.player__song_progress} value={23} max={100}/>
				</div>
			</div>
			<div className={styles.header__menu}>
				<button className={styles.header__notification}>
					<span className={'fa fa-bell'}/>
				</button>
				<NavLink className={styles.header__link} to={'/Settings'}>
					<span className={'fa fa-cog'}/>
				</NavLink>
				<NavLink className={styles.header__link} to={'/Logout'}>
					<span className={'fa fa-sign-out'}/>
				</NavLink>
			</div>
		</header>
	)
}

export default Header;