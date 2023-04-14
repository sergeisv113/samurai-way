import React, {ReactNode} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {Redirect} from "react-router-dom";
import {UserProfileType} from "../../redux/profile-reducer";
import {Separator} from "../common/Separator/Separator";
import {FormProfileDataType} from "./ProfileInfo/ProfileData/ProfileDataForm";

type PropsType = {
    profile: UserProfileType
    status: string
    updateStatusTC: (status: string) => void
    children?: ReactNode
    isAuth: boolean
    isOwner: boolean
    savePhotoTC: (formData: FormData) => void
    updateProfileTC: (formData: FormProfileDataType) => Promise<string>
}
export const Profile = ({profile, status, updateStatusTC, isAuth, isOwner, savePhotoTC, updateProfileTC}: PropsType) => {

    return (
           !isAuth
               ? <Redirect to={"/login"}/>
               : <>
                   <Separator title={'Profile'}/>
                   <div>
                       <ProfileInfo  profile={profile}
                                     updateStatusTC={updateStatusTC}
                                     status={status}
                                     isOwner={isOwner}
                                     savePhotoTC={savePhotoTC}
                                     updateProfileTC={updateProfileTC}
                       />
                       {isOwner && <MyPostsContainer/>}
                   </div>
               </>
    );
};

