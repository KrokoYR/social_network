import React, {FC} from 'react';
import styles from './Dialogs.module.css';
import Recipient, {RECIPIENT_OBJ} from "./recipient/Recipient";
import Message from "./message/Message";
import {MESSAGES_OBJ} from "../../redux/Reducers/Dialogs/Message/types";


interface DialogsProps {
	recipientData: RECIPIENT_OBJ[],
	messagesData: MESSAGES_OBJ[]
}

const Dialogs: FC<DialogsProps> = ({recipientData,messagesData}) => {
	
	let dialogsRecipients = recipientData
		.map(recipient => <Recipient id={recipient.id} name={recipient.name}/>)
	
	let dialogsMessages = messagesData
		.map(message => <Message user_id={message.user_id} text={message.text} timestamp={message.timestamp}/>);
	
	let newMessageInput = React.createRef<HTMLTextAreaElement>()
	let addMessage = () => {
		let newMessage = newMessageInput.current?.value
		if (newMessage) {
			alert(newMessage)
		}
	}
	
    return (
        <div className={styles.dialogs}>
	        <div className="recipients">
		        {dialogsRecipients}
	        </div>
	        <div>
		        {dialogsMessages}
		        <div>
			        <textarea ref={newMessageInput}></textarea>
			        <button onClick={addMessage}>Send</button>
		        </div>
	        </div>
        </div>
    )
}

export default Dialogs;