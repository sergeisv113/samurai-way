import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPropsType} from './DialogsContainer';

import {Messages} from "./Message/Messages";
import {Field, InjectedFormProps, reduxForm} from "redux-form";



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
                 </div>
            <div>
                <AddMessageFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = (props: InjectedFormProps) => {
    const { handleSubmit } = props

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Enter your message'}
                           name={'newMessageText'}
                           component={'textarea'}/>
                </div>
                <div>
                    <button>send message</button>
                </div>
            </form>
        </>
    )
}
const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'//=no form iz store, a unique for the form
})(AddMessageForm)

