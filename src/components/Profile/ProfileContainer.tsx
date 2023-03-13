import React from 'react';
import {AppStateType, UserProfileType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {getProfileTC} from "../../redux/profile-reducer";


export type UsersProfilePropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    profile: UserProfileType | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getProfile: (userId: string) => void
}
type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & UsersProfilePropsType


class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        this.props.getProfile(userId)
    }

    render() {
        const {
            profile,
            isAuth,
            getProfile,
        } = this.props
        if(!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile profile={profile} getProfile={getProfile}
                     isAuth={isAuth}
            />
        )
    };
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth//redirect
    }
}
const mapDispatchToProps: MapDispatchPropsType = {
    getProfile: getProfileTC,
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer)