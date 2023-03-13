import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import {Header} from './Header';
import {connect} from 'react-redux';
import {getAuthUserDataTC} from "../../redux/auth-reducer";

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching?: boolean
}
type MapDispatchPropsType = {
    authMe: () => void
}

// Server Call -------------------
class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        const {
            login,
            isAuth,
            authMe,
            email,
            userId,
        } = this.props
        return <Header authMe={authMe}
                       login={login}
                       isAuth={isAuth}
                       email={email}
                       userId={userId}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps: MapDispatchPropsType = {
    authMe: getAuthUserDataTC,
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

