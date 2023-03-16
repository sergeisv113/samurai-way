import React from 'react';
import {AppStateType, ProfilePageType, RootActionsType} from '../../../redux/redux-store';
import {addPostAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType


type MapStateToPropsType = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    // updateNewPostText: (text: string) => void
}

// ---------------------------------------------------------------------------------------

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch<RootActionsType>): MapDispatchToPropsType => {

    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
       /* updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }*/
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)