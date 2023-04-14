import React from 'react';
import s from './../Dialogs.module.css'


export type MessagesType = {
    id: string
    text: string
}


export const Messages = (props: MessagesType) => {
    return (
        <div className={s.messages}>
            {props.text}
        </div>
    )
}

