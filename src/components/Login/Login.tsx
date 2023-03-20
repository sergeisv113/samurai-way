import React, {ComponentType} from 'react';
import {formRegDataType, LoginForm} from "./LoginForm";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


 const Login = (props: LoginPropsType) => {
        const onSubmit = (formData: formRegDataType) => {
         //   debugger
            props.login(formData)
        }


        if (props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return <div>
                <h1>Login</h1>
                {props.userId && <div>Hello, {props.userId}!!</div>}
                <LoginForm onSubmit={onSubmit}/>
             </div>
};


type mapStateToPropsType = {
    userId: number | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    login: (formData: formRegDataType) => void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        userId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps: mapDispatchToPropsType = {
    login: loginTC
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Login)