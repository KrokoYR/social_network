import React from 'react';
import styles from './Dialogs.module.css';
import Recipient from "./recipient/Recipient";
import Messages from "./messages/Messages";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
	        <div className="recipients">
		        <Recipient name={'Harry'} id={'1'}/>
		        <Recipient name={'Geremy'} id={'2'}/>
		        <Recipient name={'Demi'} id={'3'}/>
		        <Recipient name={'Paul'} id={'4'}/>
		        <Recipient name={'Gabe'} id={'5'}/>
		        <Recipient name={'Nevill'} id={'6'}/>
	        </div>
	        <div>
		        <Messages />
	        </div>
        </div>
    )
}

export default Dialogs;