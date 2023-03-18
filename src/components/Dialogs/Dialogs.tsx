import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPropsType} from './DialogsContainer';

import {Messages} from "./Message/Messages";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validator";
import {AddMessageForm} from "./Message/AddMessageForm";



export const Dialogs = (props: DialogsPropsType) => {

    const state = props.messagesPage

    let dialogsElements = state.dialogs.map((e) => {
        return (
            <DialogItem key={e.id} ava={e.ava} id={e.id} name={e.name}/>
        )
    })

    let messageElements = state.messages.map((e) => {
        return (
            <Messages key={e.id} id={e.id} message={e.message}/>
        )
    })

    let addMessage = (values: any) => {
        props.sendMessage( values.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messageElements}</div>
                    {/*<div>
                        <textarea placeholder={'Enter your message'}
                                  onChange={onMessageChange}
                                  value={state.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onClickSendMessage}>send message</button>
                    </div>
                </div>*/}
                 </div>
            <div>
                <AddMessageForm onSubmit={addMessage}/>
            </div>
        </div>
    );
};


