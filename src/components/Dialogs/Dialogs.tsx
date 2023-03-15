import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from "react-router-dom";
import {Messages} from "./Message/Messages";


export const Dialogs = (props: DialogsPropsType) => {

    const state = props.messagesPage

    const dialogsElements = state.dialogs.map((e) => {
        return (
            <DialogItem key={e.id} ava={e.ava} id={e.id} name={e.name}/>
        )
    })

    const messageElements = state.messages.map((e) => {
        return (
            <Messages key={e.id} id={e.id} message={e.message}/>
        )
    })


    // if(!props.isAuth) return <Redirect to={'/login'}/>

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

                    <Message />
            </div>
        </div>
    );
};


