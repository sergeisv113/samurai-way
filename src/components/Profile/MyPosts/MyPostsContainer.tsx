import React from 'react';
import {AppStateType, PostsProps, ProfilePageType, RootActionsType} from '../../../redux/redux-store';
import {addPostAC, deletePostAC,} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType


type MapStateToPropsType = {
    // profilePage: ProfilePageType
    posts: PostsProps[]
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    deletePost: (id:string) => void
    // updateNewPostText: (text: string) => void
 }

// ---------------------------------------------------------------------------------------

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch<RootActionsType>): MapDispatchToPropsType => {

    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        deletePost: (id) => dispatch(deletePostAC(id))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)