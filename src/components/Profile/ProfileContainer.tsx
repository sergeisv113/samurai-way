import React from 'react';
import {AppStateType, UserProfileType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {getProfileTC} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hok/withAuthRedirect";


export type UsersProfilePropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    profile: UserProfileType | null
}
/*type MapStateRedirectPropsType = {
    isAuth: boolean
}*/
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
            getProfile,
        } = this.props

        return (
            <Profile profile={profile} getProfile={getProfile}
            />
        )
    };
};


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}
/*const mapStateToPropsRedirect = (state: AppStateType): MapStateRedirectPropsType => {
    return {
        isAuth: state.auth.isAuth//redirect
    }
}*/
const mapDispatchToProps: MapDispatchPropsType = {
    getProfile: getProfileTC,
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
     withAuthRedirect
)(ProfileContainer)