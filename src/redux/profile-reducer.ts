import {ActionsType, AppThunkType} from "./store";
import {Dispatch} from "redux";
import {v1} from "uuid";
import {stopSubmit} from "redux-form";
import {findContactsInError} from "../utils/findContactsInError";
import {FormProfileDataType} from "../components/Profile";
import {profileAPI} from "../api/profile-api";

const initialState: profilePageType = {
    posts: [],
    profile: null,
    status: ""
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsType): profilePageType => {
    switch (action.type) {
        case "profile/ADD-POST":
            return {
                ...state, posts: [{
                    id: v1(), date: new Date().toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    }), message: action.newPost, likeCount: 0
                }, ...state.posts]
            }
        case 'profile/DELETE-POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        case "profile/SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "profile/SET-USER-STATUS":
            return {...state, status: action.status}
        case "profile/SAVE-PHOTO-SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state
    }
}

// actions

export const addPostAC = (newPost: string) => ({type: 'profile/ADD-POST', newPost} as const)
export const deletePostAC = (id: string) => ({type: 'profile/DELETE-POST', id} as const)
export const setUserProfileAC = (profile: UserProfileType) => ({type: 'profile/SET-USER-PROFILE', profile} as const)
export const setUserStatusAC = (status: string) => ({type: 'profile/SET-USER-STATUS', status} as const)
export const savePhotoSuccessAC = (photos: PhotosType) => ({type: 'profile/SAVE-PHOTO-SUCCESS', photos} as const)

// thunks
export const getUserTC = (userId: number): AppThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(data))
}
export const getStatusTC = (userId: number): AppThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(data))
}
export const updateStatusTC = (newStatus: string): AppThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(newStatus)
    if (data.resultCode === 0)
        dispatch(setUserStatusAC(newStatus))
}

export const savePhotoTC = (file: File): AppThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) dispatch(savePhotoSuccessAC(data.data.photos))
}

export const updateProfileTC = (formData: FormProfileDataType): AppThunkType => async (dispatch, getState) => {
    const data = await profileAPI.updateProfile(formData)
    if (data.resultCode === 0) await dispatch(getUserTC(getState().auth.id || 26360))
    else {
        const field = findContactsInError(data.messages[0]) === 'mainlink' ? 'mainLink' : findContactsInError(data.messages[0]) as string
        dispatch(stopSubmit('profileDataForm', {'contacts': {[field]: data.messages[0]}}))
        return Promise.reject()
    }
}
// types
export type profilePageType = {
    posts: Array<PostsType>
    profile: UserProfileType
    status: string
}

export type PostsType = {
    id: string, date: string, message: string, likeCount: number
}

export type UserProfileType = null | {
    aboutMe?: any;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription?: any;
    fullName: string;
    userId: number;
    photos: PhotosType;
}
export type ContactsType = {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
}

export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}
