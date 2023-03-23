import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validator";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {FormsControls} from "../common/FormsControls/FormsControls";
import s from '../common/FormsControls/FormsControls.module.css'

let minLength2 = minLengthCreator(2)
let  maxLength30 = maxLengthCreator(30)

export type formRegDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export const LoginForm =  reduxForm<formRegDataType>({
    form: 'login'//=no form iz store, a unique for the form
})((props: InjectedFormProps<formRegDataType>) => {


    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'email'}
                           validate={[required, minLength2, maxLength30]}
                           typeofform={"input"}
                           name={'email'}
                           component={FormsControls}/>
                </div>
                <div>
                    <Field placeholder={'password'}
                           validate={[required, minLength2, maxLength30]}
                           typeofform={"input"}
                           name={'password'}
                           type={'password'}
                           component={FormsControls}/>
                </div>
                <div>
                    <Field component={FormsControls}
                           validate={[required]}
                           typeofform={"input"}
                           name={'rememberMe'}
                           type={'checkbox'}/> remember me
                </div>
                {props.error && <div className={s.formSummaryError}>{props.error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    );
   }
)