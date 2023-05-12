import React, {ChangeEvent, useRef, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import defaultAva from '../../../img/defaultAva.svg'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {UserProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {FormProfileDataType, ProfileDataForm} from "./ProfileData/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";
import {Button} from "antd";

type ProfileInfoPropsType = {
    profile: UserProfileType
    updateStatusTC: (status: string) => void
    status: string
    isOwner: boolean
    savePhotoTC: (formData: FormData) => void
    updateProfileTC: (formData: FormProfileDataType) => Promise<string>}

export const ProfileInfo = ({profile, status, updateStatusTC, isOwner, savePhotoTC, updateProfileTC}: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)

    const onSubmit =  (formData: FormProfileDataType) => {
        updateProfileTC(formData).then(() => {
            setEditMode(false)
        })
    }
    const selectImgHandler = () => inputRef && inputRef.current?.click()

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            const formData = new FormData();
            formData.append('image', file);
            savePhotoTC(formData)
        }
    }



    return (
            !profile ? <Preloader/>
            : <>
                    <div>
                        <div>
                            <div className={s.profileContainer}>
                                <img className={s.avatar}
                                     src={profile.photos.large !== null ? profile.photos.large : defaultAva}/>
                                {isOwner && <div>
                                    <button className={s.button} onClick={selectImgHandler}>change ava</button>
                                    <input
                                        style={{display: 'none'}}
                                        ref={inputRef}
                                        type="file"
                                        accept={'image/*'}
                                        onChange={ (e) => onMainPhotoSelected(e)}/></div>}
                                {/*<ProfileStatusWithHooks status={status} updateStatusTC={updateStatusTC}/>*/}
                                <ProfileStatus status={status} updateStatusTC={updateStatusTC}/>
                            </div>

                            <div className={s.name}>
                                {editMode
                                    ?  <ProfileDataForm initialValues={profile}
                                                        onSubmit={onSubmit}
                                                        contacts={profile.contacts}  />

                                    : <ProfileData profile={profile}
                                                   isOwner={isOwner}
                                                   goToEditMode={()=> setEditMode(true)}/>}

                            </div>
                        </div>
                    </div>
                </>
    );
};


/*
export const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataPropsType) => {
    return profile && <>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit data</button>
        </div>}
        <h2>{profile.fullName}</h2>
        <div><b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'not'}</div>
        <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>
        <div><b>About me: </b>{profile.aboutMe}</div>
        <div><b>My contacts: </b>
            <div className={s.contacts}>
                {(Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>)
                    .map((key, i) => <Contact key={i} title={key} value={profile.contacts[key]}/>)}</div>
        </div>
    </>
}

export const Contact = ({value, title}: ContactPropsType) => {
    return <div><b>{title}: </b>{value || 'absent'}</div>
}
type ContactPropsType = {
    title: string,
    value: string
}*/
