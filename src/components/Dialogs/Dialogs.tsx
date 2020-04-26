import React, {FC} from 'react';
import styles from './Dialogs.module.css';
import Recipient from "./recipient/Recipient";
import Message from "./message/Message";
import { MESSAGES_OBJ } from "../../store/Reducers/Dialogs/Message/types";
import { RECIPIENT_OBJ } from '../../store/Reducers/Dialogs/Recipient/types';

interface DialogsProps {
	recipientData: RECIPIENT_OBJ[],
	messagesData: MESSAGES_OBJ[]
}

const Dialogs: FC<DialogsProps> = ({recipientData,messagesData}) => {
	
	let dialogsRecipients = recipientData
		.map(recipient => <Recipient id={recipient.id} name={recipient.name}/>)
	
	let dialogsMessages = messagesData
		.map(message => <Message
			recipient_id={message.recipient_id}
			text={message.text}
			timestamp={message.timestamp}
			send_by_me={false}/>);
	
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