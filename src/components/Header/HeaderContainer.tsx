import React from 'react';
import {AppStateType} from '../../redux/store';
import {Header} from './Header';
import {connect} from 'react-redux';
import { logoutTC} from "../../redux/auth-reducer";

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    id: number | null
    login: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {

    logout: () => void
}

// Server Call -------------------
class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        return <Header {...this.props}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps: MapDispatchPropsType = {
    logout: logoutTC
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

