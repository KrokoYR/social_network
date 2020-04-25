import React, {FC} from 'react';
import styles from './Recipient.module.css';
import {NavLink} from "react-router-dom";

export interface RECIPIENT_OBJ {
    id: string,
    name: string
}

const Recipient: FC<RECIPIENT_OBJ> = ({id,name}) => {
    const recLink = '/dialogs/' + id;
    
    return (
        <div className={styles.recipient}>
            <NavLink to={recLink}>{name}</NavLink>
        </div>
    )
}

export default Recipient;