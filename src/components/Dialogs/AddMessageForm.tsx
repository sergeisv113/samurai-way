import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React, {FormEvent} from "react";
import {FormControl} from "components/common";
import s from '../Profile/ProfileInfo/ProfileInfo.module.css'

export type AddMessageFormPropsType = {
  newMessageText: string
}
export const AddMessageForm = reduxForm<AddMessageFormPropsType>({form: 'dialogAddMessageForm'})
(({reset, handleSubmit}: InjectedFormProps<AddMessageFormPropsType>) => {
  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    reset()
    // @ts-ignore
    handleSubmit()
  }

  return <form onSubmit={submitHandler}>
    <div>
      <Field style={{width: '300px', height: '100px'}} component={FormControl} name={"newMessageText"}
             placeholder={"Enter your message"}
             typeofform={"textarea"}/>
    </div>
    <div>
      <button className={s.button}>Send</button>
    </div>
  </form>
})