import React, {FC} from 'react';
import styles from './Message.module.css';
import { MESSAGES_OBJ } from '../../../store/Reducers/Dialogs/Message/types';

const Message: FC<MESSAGES_OBJ> = ({text,recipient_id}) => {
    return (
        <div className={styles.messages}>
	        <p className={+recipient_id % 2 === 0 ? styles.sentByME : styles.sentByOther}>{text}</p>
        </div>
    )
}

export default Message;