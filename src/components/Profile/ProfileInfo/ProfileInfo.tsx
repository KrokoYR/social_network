import React from 'react';
// @ts-ignore
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={styles.profile__info}>
	        <div>
		        <img src="https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&h=750" alt="" />
	        </div>
	        <div>ava + description</div>
        </div>
    )
}

export default ProfileInfo;