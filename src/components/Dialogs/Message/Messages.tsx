import React from 'react';
import s from './../Dialogs.module.css'


export type MessagesType = {
    id: string
    message: string
}


export const Messages = (props: MessagesType) => {
    return (
        <div className={s.messages}>
            {props.message}
        </div>
    )
}

