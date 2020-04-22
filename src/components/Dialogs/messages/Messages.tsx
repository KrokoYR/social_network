import React from 'react';
// @ts-ignore
import styles from './Messages.module.css';

const Messages = () => {
    return (
        <div className={styles.messages}>
	        <p>Hello</p>
	        <p>I'm fine</p>
	        <p>What about you?</p>
	        <p>I'm good too!</p>
        </div>
    )
}

export default Messages;