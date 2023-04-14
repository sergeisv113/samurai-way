import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "utils/validators/validator";
import s from '../Profile/ProfileInfo/ProfileInfo.module.css'
import {FormControl} from "../common/FormsControls/FormControl";

export type formRegDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}
type PropsType = {
    captchaUrl: string | null
}
const maxLength30 = maxLengthCreator(30)
export const LoginForm = reduxForm<formRegDataType, PropsType>({
    form: 'login'
})(({handleSubmit, error, captchaUrl}: PropsType & InjectedFormProps<formRegDataType, PropsType>) => {
        return <div>
            <form onSubmit={handleSubmit}>
                <div><Field style={{width: '300px', marginBottom: '16px'}} typeofform={"input"} placeholder={"email"}
                            name={"email"}
                            component={FormControl}
                            validate={[required, maxLength30]}/></div>
                <div><Field style={{width: '300px', marginBottom: '16px'}} typeofform={"input"} type={"password"}
                            placeholder={"password"}
                            name={"password"}
                            component={FormControl} validate={[required, maxLength30]}/></div>
                <div style={{display: 'flex', marginBottom: '16px'}}><Field typeofform={"input"} type={"checkbox"}
                                                                            name={"rememberMe"}
                                                                            component={FormControl}/>remember me
                </div>
                {error && <div>error</div>}
                {captchaUrl && <><img src={captchaUrl} alt="captcha"/>
                    <div><Field style={{width: '300px', marginBottom: '16px'}} typeofform={"input"}
                                placeholder={"symbols from image"} name={"captcha"} component={FormControl}
                                validate={[required]}/></div>
                </>}
                <div>
                    <button className={s.button}>Login</button>
                </div>
            </form>
        </div>
    }
)