import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

 type DialogItemType = {
    name: string
}

export const DialogItem = ({name}: DialogItemType) => {

    return <div className={s.dialogItems}>
        <NavLink to={"/dialogs/" + name}>{name}</NavLink>
    </div>
}



