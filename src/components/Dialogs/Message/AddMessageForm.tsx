import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validator";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type newMessageTextPropsType = {
    newMessageText: string
}

let minLength2 = minLengthCreator(2)
let  maxLength100 = maxLengthCreator(100)


export const AddMessageForm = reduxForm<newMessageTextPropsType>({
    form: 'dialogAddMessageForm'
})((props: InjectedFormProps<newMessageTextPropsType>) => {

const { handleSubmit } = props
return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'}
                       name={'newMessageText'}
                       component={Textarea}
                       validate={[required, minLength2, maxLength100]}
                       typeofform={"textarea"}/>
            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    </>
   )
 }
)