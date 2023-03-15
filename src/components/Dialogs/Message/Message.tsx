import React from 'react';
import s from './../Dialogs.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const Message = () => {
    return (
        <div className={s.messages}>
            <DialogReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const DialogsForm = (props: InjectedFormProps) => {
    const { handleSubmit } = props
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Enter your message'}
                          // onChange={onMessageChange}
                           //value={newMessageText}
                           name={'dialog'}
                           component={'input'}
                        />
                </div>
                <div>
                    {/*<button onClick={onClickSendMessage}>send message</button>*/}
                    <button >send message</button>
                </div>
            </form>
        </>
    )
}
const DialogReduxForm = reduxForm({
    form: 'dialog'//=no form iz store, a unique for the form
})(DialogsForm)

const onSubmit = (formData: any) => {
    console.log(formData)
}
