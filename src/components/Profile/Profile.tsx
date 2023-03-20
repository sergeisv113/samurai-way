import React, {ReactNode} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UserProfileType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type PropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
    children?: ReactNode
    isAuth: boolean
}
export const Profile = (props: PropsType) => {
   // debugger
    const {profile, updateStatus, status, isAuth} = props

    return (
           !isAuth
               ? <Redirect to={"/login"}/>
               :
                <div>
                    <ProfileInfo  profile={profile} updateStatus={updateStatus} status={status}
                    />
                   <MyPostsContainer/>
                </div>
    );
};

