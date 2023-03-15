import React from 'react';
import {Field, reduxForm,  InjectedFormProps} from "redux-form";


const LoginForm = (props: InjectedFormProps) => {
    const { handleSubmit } = props

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Login'}
                           name={'login'}
                           component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'}
                           name={'password'}
                           component={'input'}/>
                </div>
                <div>
                    <Field component={'input'}
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
const onSubmit = (formData: any) => {
console.log(formData)
}

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

