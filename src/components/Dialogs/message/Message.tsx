import React, {FC} from 'react';
import styles from './Message.module.css';
import {MESSAGE_TYPE} from "../../../store/Reducers/Dialogs/types";


interface MessageProps {
	message: MESSAGE_TYPE,
	deleteMessage: (timestamp:number) => void
}

const Message: FC<MessageProps> = ({message, deleteMessage}) => {
	const handleDeleteMessage = () => {
		debugger
		deleteMessage(message.timestamp);
	}
	
    return (
        <div className={styles.messages}>
	        <p className={+message.user_id % 2 === 0 ? styles.sentByME : styles.sentByOther}>{ message.text }</p>
	        <span>{message.timestamp}</span>
	        <button onClick={handleDeleteMessage}>Delete message</button>
        </div>
    )
}

export default Message;