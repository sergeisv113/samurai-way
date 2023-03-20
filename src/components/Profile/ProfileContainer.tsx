import React from 'react';
import {AppStateType, UserProfileType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {getProfileTC, getStatusTC, updateStatusTC} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hok/withAuthRedirect";


export type UsersProfilePropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    profile: UserProfileType
    status: string
    meId: number | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type PathParamType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamType> & UsersProfilePropsType


class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId || this.props.meId || 26360
            this.props.getProfile(userId)
            this.props.getStatus(userId)
    }

    render() {
        const {
            profile,
            updateStatus,
            status,
            isAuth
        } = this.props

        return (
            <Profile   profile={profile}
                       status={status} updateStatus={updateStatus}
                       isAuth={isAuth}
            />
        )
    };
};


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        meId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps: MapDispatchPropsType = {
    getProfile: getProfileTC,
    getStatus: getStatusTC,
    updateStatus: updateStatusTC
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
     withRouter,
    //  withAuthRedirect
)(ProfileContainer)