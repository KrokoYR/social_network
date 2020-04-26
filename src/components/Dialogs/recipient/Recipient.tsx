import React, {FC} from 'react';
import styles from './Recipient.module.css';
import {NavLink} from "react-router-dom";
import {RECIPIENT_OBJ} from "../../../store/Reducers/Dialogs/Recipient/types";

const Recipient: FC<RECIPIENT_OBJ> = ({id,name}) => {
    const recLink = '/dialogs/' + id;
    
    return (
        <div className={styles.recipient}>
            <NavLink to={recLink}>{name}</NavLink>
        </div>
    )
}

export default Recipient;