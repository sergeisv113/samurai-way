import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validator";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React, {FormEvent} from "react";
import {FormControl} from "../../common/FormsControls/FormControl";

export type newMessageTextPropsType = {
    newMessageText: string
}

let minLength2 = minLengthCreator(2)
let  maxLength100 = maxLengthCreator(100)


export const AddMessageForm = reduxForm<newMessageTextPropsType>({
    form: 'dialogAddMessageForm'
})(({reset, handleSubmit}: InjectedFormProps<newMessageTextPropsType>) => {
        const submitHandler = (e:FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            reset()
            // @ts-ignore
            handleSubmit()
        }


return (
    <>
        <form onSubmit={submitHandler}>
            <div>
                <Field placeholder={'Enter your message'}
                       name={'newMessageText'}
                       component={FormControl}
                       validate={[required, minLength2, maxLength100]}
                       typeofform={"textarea"}/>
            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    </>
   )
 })