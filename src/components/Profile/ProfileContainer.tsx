import React, {ComponentType} from 'react';
import {AppStateType} from '../../redux/store';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {getStatusTC, getUserTC, savePhotoTC, updateProfileTC, updateStatusTC, UserProfileType
} from "../../redux/profile-reducer";
import {FormProfileDataType} from "./ProfileInfo/ProfileData/ProfileDataForm";
type PathParamsType = {
    userId: string
}
type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
    refreshProfile() {
        let userId = +this.props.match.params.userId || this.props.meId
        if (userId) {
            this.props.getUserTC(userId)
            this.props.getStatusTC(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
    }

    render() {
        return <>
            <Profile
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatusTC={this.props.updateStatusTC}
                isAuth={this.props.isAuth}
                savePhotoTC={this.props.savePhotoTC}
                updateProfileTC={this.props.updateProfileTC}
            />
        </>
    }
}

//type
type mapStateToPropsType = {
    profile: UserProfileType
    meId: number | null
    status: string
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getUserTC: (userId: number) => void
    getStatusTC: (userId: number) => void
    updateStatusTC: (newStatus: string) => void
    savePhotoTC: (formData: FormData) => void
    updateProfileTC: (formData: FormProfileDataType) => Promise<string>
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    meId: state.auth.id,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
})


export default compose<ComponentType>(
    connect(mapStateToProps, {getUserTC, getStatusTC, updateStatusTC, savePhotoTC, updateProfileTC }),
     withRouter,
    //  withAuthRedirect
)(ProfileContainer)




