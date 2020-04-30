import React, {FC} from 'react';

import styles from './Dialogs.module.css';
import Recipient from "./recipient/Recipient";

import {UpdateNewMessage} from './Dialogs-container';
import MessageContainer from "./message/Message-container";
import {MESSAGE_TYPE} from "../../store/Reducers/Dialogs/types";

export interface DialogsProps {
	newMessage: string;
	messages: Array<MESSAGE_TYPE>;
	sendMessage: (user_id: string) => void;
	updateNewMessageText: (text: string) => void
}

const Dialogs: FC<DialogsProps> = ({
	                                   newMessage,
	                                   messages,
	                                   sendMessage,
	                                   updateNewMessageText
                                   }) => {
	debugger
	let dialogsRecipients = messages
		.map(recipient => <Recipient id={recipient.user_id} name={recipient.text}/>)
	
	let dialogsMessages = messages
		.map(message => <MessageContainer message={message}/>);
	
	const addMessage = () => {
		sendMessage('1');
	}
	
	const keyPress = (e: React.KeyboardEvent<any>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			addMessage();
		}
	}
	
	const updateMessage = (event: UpdateNewMessage) => {
		updateNewMessageText(event.currentTarget.value);
	}
	
	return (
		<div className={styles.dialogs}>
			<div className="recipients">
				{dialogsRecipients}
			</div>
			<div>
				{dialogsMessages}
				<div>
		        <textarea
			        value={newMessage}
			        onKeyPress={keyPress}
			        onChange={updateMessage}
			        placeholder={'Type message...'}
		        />
					<button onClick={addMessage}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;