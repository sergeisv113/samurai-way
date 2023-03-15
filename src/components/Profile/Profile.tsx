import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UsersProfilePropsType} from './ProfileContainer';


export const Profile = (props: UsersProfilePropsType) => {
    const {profile, updateStatus, status, getProfile, getStatus} = props

    return (
        <div>
            <ProfileInfo  profile={profile} updateStatus={updateStatus} status={status}  getProfile={getProfile} getStatus={getStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

