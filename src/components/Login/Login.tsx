import React from 'react';
import {Field, reduxForm,  InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validator";

let minLength2 = minLengthCreator(2)
let  maxLength10 = maxLengthCreator(10)

const LoginForm = (props: InjectedFormProps) => {
    const { handleSubmit } = props

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Login'}
                           validate={[required, minLength2, maxLength10]}
                           name={'login'}
                           component={Input}/>
                </div>
                <div>
                    <Field placeholder={'Password'}
                           validate={[required,minLength2,maxLength10 ]}
                           name={'password'}
                           component={Input}/>
                </div>
                <div>
                    <Field component={Input}
                           validate={[required]}
                           name={'rememberMe'}
                           type={'checkbox'} /> remember me
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    );
};
export const LoginReduxForm = reduxForm({
    form: 'login'//=no form iz store, a unique for the form
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

