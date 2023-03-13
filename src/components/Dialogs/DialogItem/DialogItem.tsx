import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

 type DialogItemType = {
    id: string
    name: string
    ava: string
}

export const DialogItem = (props: DialogItemType) => {
    let path = `/dialog/${props.id}`

    return (
        <div className={s.dialogsItem}>
            <img src={props.ava} alt="ava"/>
            <NavLink to={path} className={s.text}>{props.name}</NavLink>
        </div>
    )
}



