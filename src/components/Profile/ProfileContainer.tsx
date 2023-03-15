import React from 'react';
import {AppStateType, UserProfileType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {getProfileTC, getStatusTC, updateStatusTC} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hok/withAuthRedirect";


export type UsersProfilePropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    profile: UserProfileType | null
    status: string
}
/*type MapStateRedirectPropsType = {
    isAuth: boolean
}*/
type MapDispatchPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
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
        this.props.getStatus(userId)
    }

    render() {
        const {
            profile,
            updateStatus,
            status,
            getProfile,
            getStatus
        } = this.props

        return (
            <Profile   profile={profile}
                       status={status} updateStatus={updateStatus}
                       getProfile={getProfile} getStatus={getStatus}
            />
        )
    };
};


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
/*const mapStateToPropsRedirect = (state: AppStateType): MapStateRedirectPropsType => {
    return {
        isAuth: state.auth.isAuth//redirect
    }
}*/
const mapDispatchToProps: MapDispatchPropsType = {
    getProfile: getProfileTC,
    getStatus: getStatusTC,
    updateStatus: updateStatusTC
}
/*let AuthRedirectComponent = (props: PropsType) => {
    if(!props.isAuth) return <Redirect to={'/login'}/>
    return <ProfileContainer {...props}/>
}   ||    */
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)//hok
// AuthRedirectComponent = connect(mapStateToPropsRedirect)(AuthRedirectComponent)

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
     withRouter,
     withAuthRedirect
)(ProfileContainer)