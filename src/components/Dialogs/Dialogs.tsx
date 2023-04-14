import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPropsType} from './DialogsContainer';
import {Messages} from "./Message/Messages";
import {AddMessageForm} from "./Message/AddMessageForm";
import {Separator} from "../common";
import {AddMessageFormPropsType} from "./AddMessageForm";


export const Dialogs = ({dialogsPage, sendMessage, name}: DialogsPropsType) => {

    let dialogsElements =  dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id}/>)

    let messagesElements = dialogsPage.messages
        .map(message => <Messages text={message.text} id={message.id} key={message.id}/>)

    const addNewMessage = (values: AddMessageFormPropsType) => {
        sendMessage(values.newMessageText, name)
    }
    return <div className={s.dialogContainer}>
        <Separator title={'Messages'}/>
        <div className={s.dialogBlock}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
        <div className={s.addMessage}>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    </div>
}

