import React, {FC} from 'react';
// @ts-ignore
import styles from './Recipient.module.css';
import {NavLink} from "react-router-dom";

type RecipientProps = {
    name: string,
    id: string
}

const Recipient: FC<RecipientProps> = ({name, id}) => {
    const recLink = '/dialogs/' + id;
    
    return (
        <div className={styles.recipient}>
            <NavLink to={recLink}>{name}</NavLink>
        </div>
    )
}

export default Recipient;