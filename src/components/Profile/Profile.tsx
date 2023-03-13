import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UsersProfilePropsType} from './ProfileContainer';


export const Profile = (props: UsersProfilePropsType) => {
    const {profile, getProfile, isAuth} = props

    return (
        <div>
            <ProfileInfo  profile={profile} getProfile={getProfile} isAuth={isAuth}/>
            <MyPostsContainer/>
        </div>
    );
};

