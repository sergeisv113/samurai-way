import React, {ComponentType} from 'react';
import {formRegDataType, LoginForm} from "./LoginForm";
import {AppStateType} from "../../redux/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


 const Login = ({loginTC, isAuth, captchaUrl}: LoginPropsType) => {
        const onSubmit = (formData: formRegDataType) => {
          //  debugger
            loginTC(formData)
        }

        return  isAuth
            ? <Redirect to={"/profile"} />
            : <>
                <h1>Login</h1>
                <LoginForm onSubmit={onSubmit}
                           captchaUrl={captchaUrl}/>
             </>
};

type mapStateToPropsType = {
     userId: number | null
    isAuth: boolean
    captchaUrl: string | null
}
type mapDispatchToPropsType = {
    loginTC: (formData: formRegDataType) => void

}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        userId: state.auth.id,
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {loginTC}),
    // withAuthRedirect
)(Login)