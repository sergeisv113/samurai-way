import React, {ReactNode} from 'react';
import {AppStateType, UserProfileType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {getAuthUserDataTC, logoutTC} from "../../redux/auth-reducer";
import {Ava} from "./Ava";

export type AvaPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    authMe: () => void
}

// Server Call -------------------
class AvaContainer extends React.Component<AvaPropsType> {
    componentDidMount() {
        this.props.authMe()
    }
    render() {
        return <Ava {...this.props}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps: MapDispatchPropsType = {
   authMe: getAuthUserDataTC,
}
export default connect(mapStateToProps, mapDispatchToProps)(AvaContainer)

