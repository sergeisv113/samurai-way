import {ProfilePageType, UserProfileType} from './redux-store';
import {v1} from 'uuid';
import {Dispatch} from 'react';
import {userAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
    posts: [
        {id: v1(), message: 'Hi, it\'s  my first post', counterLike: '12'},
        {id: v1(), message: 'Hola, howe are you?', counterLike: '24'},
        {id: v1(), message: 'Yo!', counterLike: '11'},
        {id: v1(), message: 'GG', counterLike: '1'},
    ],
    newPostText: '',
    profile: null,
}
export const profileReducer = (state: ProfilePageType = initialState, action: UniversalTypeForProfileActions) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: v1(),
                message: state.newPostText,
                counterLike: '0'
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT : {
            return {...state, newPostText: action.newText}
        }

        case SET_USER_PROFILE:{
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state
    }
}

export type UniversalTypeForProfileActions =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof getUserProfileAC>

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const getUserProfileAC = (profile: UserProfileType) =>({type: SET_USER_PROFILE, profile} as const)

export const getProfileTC = (userId: string) => {
    return (dispatch: Dispatch<UniversalTypeForProfileActions>) => {
        userAPI.getProfile(userId)
            .then(response => dispatch(getUserProfileAC(response.data))
            )
    }
}